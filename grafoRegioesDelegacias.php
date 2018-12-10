<?php require('headerCyto.php'); ?>

<?php require('navbar.php'); ?>

<!--<script src="cytoscape/script.js"></script>-->

<script>
    <?php require('conversoes/escreveRegiaoDelegacia.php'); ?>
</script>

<div class="white container">
    <div class="container">
        <center>
            <h2>Interligações Regiões e Delegacias</h2>
        </center>
        <hr class="estilo1">
        
        <b id="hide" style="cursor: pointer; color: darksalmon">Esconder seleção</b> / <b id="showAll" style="cursor: pointer; color: darkmagenta">Mostrar Tudo</b> <br/>
        <b id="highlightNeighbors" style="cursor: pointer; color: darksalmon">Destacar vizinhos</b> / <b id="removeHighlights" style="cursor: pointer; color: darkmagenta">Remover destaque</b> <br/>
        <b>Segure SHIFT + Cursor </b> para selecionar vizinhos<br/>

        <div id="cy"></div>                                                                              
    </div>
</div>

<?php require('footer.php'); ?>