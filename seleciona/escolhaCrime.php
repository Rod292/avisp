<?php

    // Connect Database 
    include('../conexao.php');
    
    // Get parâmetros partir Array
    $catid = !empty($_GET['id'])
              ?intval($_GET['id']):0;
    
    // se houver nenhuma cidade selecionados por GET, buscar todas as linhas    
    $query = "SELECT idcrime,nome FROM crime WHERE idcat = '$catid'"; 
    
    //  buscar os resultados
    $result = mysqli_query($connection, $query) or die("Error ao selecionar " . mysqli_error($connection));
    $items = array();
    if($result && mysqli_num_rows($result)>0) {
        while($row = mysqli_fetch_array($result)) {
            $option = array("id" => $row[0], "value" => htmlentities($row[1]));
            $items[] = $option; 
        }        
    } 
    //mysqli_close($connection);
    $data = json_encode($items); 
    $response = isset($_GET['callback'])?$_GET['callback']."(".$data.")":$data; 
    echo($response);  
?>