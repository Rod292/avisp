<?php
$servername = "localhost:8080";
$username = "root";
$password = "root";
$db_name = "seguranca";

// Cria Conexao
$connection = mysqli_connect($servername, $username, $password, $db_name) or die("Falha ao conectar " . mysqli_error($connection));

// Confirma Conexao
if (!$connection) {
    die("Falha ao Conectar: " . mysqli_connect_error());
}

//mysqli_close();
?>
