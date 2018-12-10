       
        <!-- Page Content -->
        <!--<div id="page-content-wrapper">-->
        <div>
            <div class="container-fluid">

                <div class="col-md-12">
                    <form name="formDados" id="formDadosAisp" onsubmit="return validateForm()">
                        <div class="col-md-12">
                            <strong>Categoria:</strong> <select name="categoria" id="categoria"></select>
                            <strong>Crime:</strong> <select name="crime" id="crime"></select>
                        </div>
                        <br/>
                        <div class="col-md-10">
                            <strong>Ano:</strong> <select name="ano" id="ano"></select>
                            <strong>Mês:</strong> <select name="mes" id="mes"></select>
                        </div>
                        <br/>
                        <div class="col-md-8">
                            <div class="col-md-4">
                                <button class="btn btn-primary pointer" type="submit">
                                    Atualizar</button>
                            </div>
                        </div>
                    </form>
                </div>
                <br/>

                    <script type="text/javascript">
                        $("#categoria").jCombo({url: "seleciona/escolhaCategoria.php" });
                        $("#crime").jCombo({
                            url: "seleciona/escolhaCrime.php", 
                            input_param: "id", 
                            parent: "#categoria",
                        });
                        $("#ano").jCombo({url: "seleciona/escolhaAno.php" });
                        $("#mes").jCombo({
                            url: "seleciona/escolhaMes.php", 
                            input_param: "id", 
                            parent: "#ano",
                        });
                    </script>

                <div id='map'><?php include('loading.php'); ?></div>                
                
                <script>

        function SetupMap(){
                var mapboxAccessToken = 'pk.eyJ1Ijoicm9kMjkyIiwiYSI6ImNqOHdlaTF6aDFtN3QzMnAwMGsyODAweTEifQ.g8GCW6p_mNdYEtozEAZMYQ';
                var map = L.map('map').setView([-22, -43.0], 8);

                var tiles = L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=' + mapboxAccessToken, {
                    maxZoom: 18,
                    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
                        '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
                        'Imagery © <a href="http://mapbox.com">Mapbox</a>',
                    id: 'mapbox.streets'
                }).addTo(map);

                var json = <?php include('dados/insereDadosAisp.php'); ?>;

                var geojsonData = <?php require_once('geojson/limite_aisp.geojson'); ?>;

                var lookup = {};
                var totalCrimes = [];
                json.forEach(function(item) {
                if(item.idaisp) {
                    lookup[item.idaisp] = item;
                    totalCrimes[item.idaisp] = Number(lookup[item.idaisp].total);  
                    }
                })
                
                //console.log("--totalCrimes--")
                //console.log(totalCrimes)

                geojsonData.features.forEach(function(aux) {
                if (lookup[aux.properties.AISP]) {
                    aux.properties = lookup[aux.properties.AISP];
                }
                })

                var totalCrimesFilter = totalCrimes.filter(function (filtrado) {
                    return filtrado != null;
                });
                //console.log(totalCrimesFilter);

                var min = Math.min.apply(null, totalCrimesFilter);
                var max = Math.max.apply(null, totalCrimesFilter);

                //console.log("--Maximo--");
                //console.log(max);
                //console.log("--Minimo--");
                //console.log(min);

               var choroplethLayer = L.choropleth(geojsonData, {
                    valueProperty: 'total', // which property in the features to use
                    scale: ['white', '#b30000'], // chroma.js scale - include as many as you like
                    steps: 600, // number of breaks or steps in range
                    mode: 'q', // q for quantile, e for equidistant, k for k-means
                    style: style
                }).addTo(map);

                

                var geoJsonLayer = new L.geoJSON(geojsonData, {
                    style: style2,
                            onEachFeature: function(feature, layer) {
                            var props = feature.properties;

                            layer.bindTooltip(
                                '<h4>Informação</h4>' +
                                '<b>Região: </b>' + props.bpm + '<br />' +
                                '<b>AISP: </b>' + props.idaisp + '<br />' +
                                '<b>Quantidade: </b>' + props.total + '<br />' +
                                '<b>Crime: </b>' + props.nome + '<br />' +
                                '<b>Mês: </b>' + getMes(props.mes) + '<br/>' +
                                '<b>Ano: </b>'  + props.ano + '<br />'
                            )

                        }
                    }).addTo(map);

                function style2(feature) {
                    return {
                        weight: 2,
                        opacity: 1,
                        color: 'transparent',
                        dashArray: '3',
                        fillOpacity: 0.7
                    };
                }

                function style(feature) {
                    return {
                        weight: 2,
                        opacity: 1,
                        color: '#003300',
                        dashArray: '3',
                        fillOpacity: 0.7
                    };
                }

                var printer = L.easyPrint({
                    tileLayer: tiles,
                    sizeModes: ['A4Landscape', 'A4Portrait'],
                    filename: 'Mapa_AISP_RJ',
                    exportOnly: true,
                    hideControlContainer: true
                }).addTo(map);

                var searchControl = new L.Control.Search({
                    layer: geoJsonLayer,
                    propertyName: 'bpm',
                    marker: false,
                    moveToLocation: function(latlng, title, map) {
                        var zoom = map.getBoundsZoom(latlng.layer.getBounds());
                        map.setView(latlng, zoom);
                    }
                });
                
                searchControl.on('search:locationfound', function(e) {
                    
                    e.layer.setStyle(
                        {
                            weight: 3,
                            opacity: 0.7,
                            fillOpacity: 0.7
                        });

                    if(e.layer._popup)
                        e.layer.openPopup();
                }).on('search', function(e) {
                    geoJsonLayer.eachLayer(function(layer) {
                        e.layer.resetStyle(layer);
                    }); 
                });
                
                map.addControl( searchControl );

                function highlightFeature(e) {
                    var layer = e.target;

                    layer.setStyle({
                        weight: 3,
                        color: '#666',
                        dashArray: '',
                        fillOpacity: 0.6
                    });

                    if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
                        layer.bringToFront();
                    }

                    info.update(layer.feature.properties);
                }

                function resetHighlight(e) {
                    geoJsonLayer.resetStyle(e.target);
                    info.update();
                }

                function onEachFeature(feature, layer) {
                    layer.on({
                        mouseover: highlightFeature,
                        mouseout: resetHighlight
                    });
                }

                function getMes(mes) {
                    return  mes == 1  ? 'Janeiro'   :
                            mes == 2  ? 'Fevereiro' :
                            mes == 3  ? 'Março'     :
                            mes == 4  ? 'Abril'     :
                            mes == 5  ? 'Maio'      :
                            mes == 6  ? 'Junho'     :
                            mes == 7  ? 'Julho'     :
                            mes == 8  ? 'Agosto'    :
                            mes == 9  ? 'Setembro'  :
                            mes == 10 ? 'Outubro'   :
                            mes == 11 ? 'Novembro'  :
                            mes == 12 ? 'Dezembro'  :
                                        'undefined' ;
                }

                 var legend = L.control({ position: 'bottomright' })
                    legend.onAdd = function (map) {
                        var div = L.DomUtil.create('div', 'info legend')
                        var limits = choroplethLayer.options.limits
                        var colors = choroplethLayer.options.colors
                        var labels = []

                        div.innerHTML = '<div class="labels"><div class="min">' + min + '</div> \
                                <div class="max">' + max + '</div></div>'

                        limits.forEach(function (limit, index) {
                        labels.push('<li style="background-color: ' + colors[index] + '"></li>')
                        })

                        div.innerHTML += '<ul>' + labels.join('') + '</ul>'
                        return div
                    }
                legend.addTo(map);
            
        }    

            window.onload= SetupMap; 
            
                </script>
                
            </div>
        </div>

        <!-- /#page-content-wrapper -->
