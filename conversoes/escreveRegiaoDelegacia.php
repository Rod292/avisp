<?php
header('Content-Type: text/html; charset=utf-8');

include_once("conexao.php");

$sqlentrezgene = "select d.iddelegacia as del, d.idrisp as risp,  
d.local as local, d.idaisp as aisp, a.idaisp as aisp2, a.bpm as militar,
d.idrisp as risp, r.regiao as reg
from delegacias as d
join risp as r
On r.idrisp=d.idrisp
join aisp as a
On d.idaisp=a.idaisp
group by militar";
$sqlNovo = "select regiao, codreg from risp";

$resultentrezgene = mysqli_query($connection, $sqlentrezgene) or die("Error ao selecionar " . mysqli_error($connection));
$resultentrezgene2 = mysqli_query($connection, $sqlNovo) or die("Error ao selecionar " . mysqli_error($connection));

$nodes= array();
while($row = mysqli_fetch_array ($resultentrezgene2))   
{
    $entrezgene2 = array('data' => array(
        'nome' => $row['regiao'],
        'id' => $row['codreg'],
    ));
    array_push($nodes, $entrezgene2);
}
while($row = mysqli_fetch_array ($resultentrezgene))     
{
    //create each entry in the array exactly as cytoscape expects it, ie with the data property
    $entrezgene = array('data' => array(
        'id' => $row['del'],
        'nome' => $row['militar']
    ));
    array_push($nodes, $entrezgene);
}


$sqlentrezinter = "select d.iddelegacia as del,  d.local as local, 
d.idaisp as isp, a.idaisp as isp2, a.bpm as militar,
d.idrisp as risp, r.regiao as reg, r.idrisp as risp2, r.codreg as cod
from delegacias as d
join risp as r
On r.idrisp=d.idrisp
join aisp as a
On d.idaisp=a.idaisp";
$resultentrezinter = mysqli_query($connection, $sqlentrezinter) or die("Error in Selecting " . mysqli_error($connection));

$edges= array();
while($row = mysqli_fetch_array ($resultentrezinter))
{
    $entrezinter = array('data' => array(
        'source' => $row['del'],
        'target' => $row['cod'],
    ));
    array_push($edges, $entrezinter);
}

$json = array(
   'nodes' => $nodes,
   'edges' => $edges,
);

//$jsonstring = json_encode($json);
$jsonstring = json_encode($json, JSON_PRETTY_PRINT);

echo "document.addEventListener('DOMContentLoaded', function() {

    var cy = window.cy = cytoscape({
        container: document.getElementById('cy'),

        layout: {
            name: 'cose',
        },

        style: [{
                selector: 'node',
                css: {
                    'content': 'data(nome)',
                    'text-valign': 'center',
                    'color': 'yellow',
                    'text-outline-width': 2,
                    'text-outline-color': '#000'
                }
            },

            {
                selector: 'edge',
                css: {
                    'target-arrow-shape': 'triangle'
                }
            }
        ],

        elements: ";

//echo "<pre>" . $jsonstring . "</pre>";
echo $jsonstring;

echo "
    });

    cy.panzoom({

    });

    var api = cy.viewUtilities({
        neighbor: function(node) {
            return node.closedNeighborhood();
        },
        neighborSelectTime: 1000
    });

    var layout = cy.layout({
        name: 'concentric',
        randomize: false,
        fit: false
    });

    function thickenBorder(eles) {
        eles.forEach(function(ele) {
            var defaultBorderWidth = Number(ele.css('border-width').substring(0, ele.css('border-width').length - 2));
            ele.css('border-width', defaultBorderWidth + 2);
        });
        return eles;
    }
   
    function thinBorder(eles) {
        eles.forEach(function(ele) {
            var defaultBorderWidth = Number(ele.css('border-width').substring(0, ele.css('border-width').length - 2));
            ele.css('border-width', defaultBorderWidth - 2);
        });
        return eles;
    }

    $('#hide').click(function() {
        var nodesWithHiddenNeighbor = cy.edges(':hidden').connectedNodes(':visible');
        thinBorder(nodesWithHiddenNeighbor);
        api.hide(cy.$(':selected'));
        nodesWithHiddenNeighbor = cy.edges(':hidden').connectedNodes(':visible');
        thickenBorder(nodesWithHiddenNeighbor);
        if (document.getElementById('layout').checked) {
            layout.run();
        }
    });

    $('#showAll').click(function() {
        var nodesWithHiddenNeighbor = cy.edges(':hidden').connectedNodes(':visible');
        thinBorder(nodesWithHiddenNeighbor);
        api.show(cy.elements());
        if (document.getElementById('layout').checked) {
            layout.run();
        }
    });

    var tappedBefore;

    cy.on('tap', 'node', function(event) {
        var node = this;

        var tappedNow = node;
        setTimeout(function() {
            tappedBefore = null;
        }, 300);
        if (tappedBefore && tappedBefore.id() === tappedNow.id()) {
            tappedNow.trigger('doubleTap');
            tappedBefore = null;
        } else {
            tappedBefore = tappedNow;
        }
    });

    cy.on('doubleTap', 'node', function(event) {
        var nodesWithHiddenNeighbor = cy.edges(':hidden').connectedNodes(':visible');
        thinBorder(nodesWithHiddenNeighbor);
        api.show(cy.nodes(':selected').neighborhood().union(cy.nodes(':selected').neighborhood().parent()));
        nodesWithHiddenNeighbor = cy.edges(':hidden').connectedNodes(':visible');
        thickenBorder(nodesWithHiddenNeighbor);
        if (document.getElementById('layout').checked) {
            layout.run();
        }
    });

    $('#highlightNeighbors').click(function() {
        if (cy.$(':selected').length > 0)
            api.highlightNeighbors(cy.$(':selected'));
    });

    $('#removeHighlights').click(function() {
        api.removeHighlights();
    });

});";
//echo $jsonstring;
?>