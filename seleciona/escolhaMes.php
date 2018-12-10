<?php

    // Connect Database
    include('../conexao.php');
    
    $anoid = !empty($_GET['id'])
              ?intval($_GET['id']):0;

    // Execute Query na ordem certa  
    //(value,text)
    $query = "SELECT DISTINCT mes FROM ocorrencias where ano = '$anoid'";

    $result = mysqli_query($connection, $query) or die("Error ao selecionar " . mysqli_error($connection));
    
    $items = array();
    if($result && 
       mysqli_num_rows($result)>0) {
        while($row = mysqli_fetch_array($result)) {
            $mes = $row[0];
            
            if($mes==1){
                $mes='Janeiro';
            }elseif($mes==2){
                $mes='Fevereiro';
            }elseif($mes==3){
                $mes='Março';
            }elseif($mes==4){
                $mes='Abril';
            }elseif($mes==5){
                $mes='Maio';
            }elseif($mes==6){
                $mes='Junho';
            }elseif($mes==7){
                $mes='Julho';
            }elseif($mes==8){
                $mes='Agosto';
            }elseif($mes==9){
                $mes='Setembro';
            }elseif($mes==10){
                $mes='Outubro';
            }elseif($mes==11){
                $mes='Novembro';
            }else{
                $mes='Dezembro';
            }

            $option = array("id" => $row[0], "value" => htmlentities($mes));
            $items[] = $option; 
        }        
    }
    mysqli_close($connection);
    $data = json_encode($items); 
    // converter em JSON formatar e imprimir
    $response = isset($_GET['callback'])?$_GET['callback']."(".$data.")":$data; 
    echo($response);   
?>