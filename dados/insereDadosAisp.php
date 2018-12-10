<?php

    include('conexao.php');
    
    $ano = !empty($_GET['ano'])?intval($_GET['ano']):0;
    $mes = !empty($_GET['mes'])?intval($_GET['mes']):0;
    $crime = !empty($_GET['crime'])?intval($_GET['crime']):0;

    //fetch table rows from mysql db
    if($ano==0 || $mes==0 || $crime==0){
        $sql = "SELECT * FROM aisp";
    } else{
        $sql = "SELECT delegacias.iddelegacia, delegacias.local, aisp.idaisp, ocorrencias.mes, delegacias.idaisp as aisp,
        aisp.bpm, SUM(ocorrencias.qtd) as total, ocorrencias.ano, delegacias.local, crime.nome
        FROM ocorrencias
        JOIN delegacias
        ON ocorrencias.iddelegacia=delegacias.iddelegacia
        JOIN crime
        ON ocorrencias.idcrime=crime.idcrime
        JOIN aisp
        ON delegacias.idaisp=aisp.idaisp
        WHERE ano='".$ano."' and mes='".$mes."' and crime.idcrime='".$crime."'
        GROUP BY aisp.idaisp";
    }

    

    //$sql = "select * from delegacias";
            
    $result = mysqli_query($connection, $sql) or die("Error ao selecionar " . mysqli_error($connection));

//create an array
    $emparray = array();
    while($row =mysqli_fetch_assoc($result))
    {

        $emparray[] = $row;

    }

    //$json_string = json_encode($emparray, JSON_PRETTY_PRINT);

    mysqli_close($connection);
    print $data = json_encode($emparray); 
    // converter em JSON formatar e imprimir
    //$response = isset($_GET['callback'])?$_GET['callback']."(".$data.")":$data; 
    //echo($response); 

    //print '<pre>' . $json_string . '</pre>';

    //print utf8_encode($json_string);

    /*$fp = fopen('geojson.json', 'w');
    fwrite($fp, json_encode($emparray));
    fclose($fp);*/

