<?php

    // Connect Database
    include('../conexao.php');
    
    // Execute Query na ordem certa  
    //(value,text)
    $query = "SELECT DISTINCT ano FROM ocorrencias";

    $result = mysqli_query($connection, $query) or die("Error ao selecionar " . mysqli_error($connection));
    
    $items = array();
    if($result && 
       mysqli_num_rows($result)>0) {
        while($row = mysqli_fetch_array($result)) {
            $option = array("id" => $row[0], "value" => htmlentities($row[0]));
            $items[] = $option; 
        }        
    }
    mysqli_close($connection);
    $data = json_encode($items); 
    // converter em JSON formatar e imprimir
    $response = isset($_GET['callback'])?$_GET['callback']."(".$data.")":$data; 
    echo($response);   
?>