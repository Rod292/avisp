$(document).ready(function() {
    $('#formDadosCisp').submit(function() {
        //Get data to be sent to server
        var ano = "ano";
        var mes = "mes";
        var crime = "crime";
        $.ajax({
            type: 'GET',
            url: 'dados/insereDadosCisp.php',
            data: { ano: ano, mes: mes, crime: crime },
            success: function(response) {
                //Use response
                alert("Server echo: " + response);
            },
            error: function(msg) {
                alert("Error: " + msg);
            }
        });
    });
    $('#formDadosAisp').submit(function() {
        //Get data to be sent to server
        var ano = "ano";
        var mes = "mes";
        var crime = "crime";
        $.ajax({
            type: 'GET',
            url: 'dados/insereDadosAisp.php',
            data: { ano: ano, mes: mes, crime: crime },
            success: function(response) {
                //Use response
                alert("Server echo: " + response);
            },
            error: function(msg) {
                alert("Error: " + msg);
            }
        });
    });
    $('#formDadosRisp').submit(function() {
        //Get data to be sent to server
        var ano = "ano";
        var mes = "mes";
        var crime = "crime";
        $.ajax({
            type: 'GET',
            url: 'dados/insereDadosRisp.php',
            data: { ano: ano, mes: mes, crime: crime },
            success: function(response) {
                //Use response
                alert("Server echo: " + response);
            },
            error: function(msg) {
                alert("Error: " + msg);
            }
        });
    });
});


function validateForm() {
    var categoria = document.forms["formDados"]["categoria"].value;
    if (categoria == "empty") {
        alert("Selecione a Categoria");
        return false;
    }
    var crime = document.forms["formDados"]["crime"].value;
    if (crime == "empty") {
        alert("Selecione o Crime");
        return false;
    }
    var mes = document.forms["formDados"]["mes"].value;
    if (mes == "empty") {
        alert("Selecione o Mês");
        return false;
    }
    var ano = document.forms["formDados"]["ano"].value;
    if (ano == "empty") {
        alert("Selecione o Ano");
        return false;
    }
}