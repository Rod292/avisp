<?php
header('Content-Type: text/html; charset=utf-8');

include_once("conexao.php");

$sqlentrezgene = "select bpm, dp
from aisp";
$sqlajuda = "select bairro.nome as nome, aisp.idaisp as aisp, bairro.idbairro as id
from delegacias
join bairro
on bairro.iddelegacia = delegacias.iddelegacia
join aisp
on aisp.idaisp = delegacias.idaisp";

$resultentrezgene = mysqli_query($connection, $sqlentrezgene) or die("Error ao selecionar " . mysqli_error($connection));
$resultentrezgene2 = mysqli_query($connection, $sqlajuda) or die("Error ao selecionar " . mysqli_error($connection));

$nodes= array();
while($row = mysqli_fetch_array ($resultentrezgene))     
{
    $entrezgene = array('data' => array(
        'id' => $row['dp'],
        'nome' => $row['bpm']
    ));
    array_push($nodes, $entrezgene);
}
while($row = mysqli_fetch_array ($resultentrezgene2))   
{
    $entrezgene2 = array('data' => array(
        'id' => $row['id'],
        'nome' => $row['nome'],
    ));
    array_push($nodes, $entrezgene2);
}

$sqlentrezinter = "select distinct aisp.idaisp as aisp, bairro.idbairro as id, 
aisp.bpm as bpm, aisp.dp as cod
from delegacias
join bairro
on bairro.iddelegacia = delegacias.iddelegacia
join aisp
on aisp.idaisp = delegacias.idaisp";
$resultentrezinter = mysqli_query($connection, $sqlentrezinter) or die("Error in Selecting " . mysqli_error($connection));

$edges= array();
while($row = mysqli_fetch_array ($resultentrezinter))
{
    $entrezinter = array('data' => array(
        'source' => $row['id'],
        'target' => $row['cod']
    ));
    array_push($edges, $entrezinter);
}

$json = array(
   'nodes' => $nodes,
   'edges' => $edges,
);

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

        elements:";

//echo "<pre>" . $jsonstring . "</pre>";
echo $jsonstring;

echo "});

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

?>