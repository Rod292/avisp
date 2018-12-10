<?php

include('restrito.php');

header('Content-Type: text/html; charset=utf-8');

include('header.php');
?>

<div class="account-wall container">
    <div class="container">
        <div id="page-content-wrapper">
            <div class="container-fluid">
                <div class="col-md-12">
                    <div class="row">
                        <div class="col-md-10">
                            <h1>Upload Arquivo CSV</h1>
                            <hr>
                            <h5>Adicione um arquivo com novas informações de ocorrência, no formato csv.</h5>
                            <p>
                                <strong><i><a href="template_dados_seguranca.csv">Clique aqui</a> para baixar o template do csv</i></strong>
                                </br>
                                <strong>Inserir informações no formato:</strong> mes; ano; iddelegacia; idcrime; qtd                                
                            </p>
                            <form name="import" method="POST" action="importa/importData.php" enctype="multipart/form-data">
                                <input type="file" name="file" /><br/><br/>
                                <input type="submit" name="submit" class="btn btn-primary" value="Adicionar" />
                            </form>
                        </div>
                        <div class="col-md-2">
                            <a href="logout.php" class="btn btn-danger">SAIR</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>


