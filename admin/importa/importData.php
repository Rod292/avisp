<?php
include_once("../../conexao.php");

if (isset($_POST["submit"])) 
{
      $filename=$_FILES["file"]["tmp_name"];

$csv_mimetypes = array(
    'text/csv',
    'text/plain',
    'application/csv',
    'text/comma-separated-values',
    'application/excel',
    'application/vnd.ms-excel'
);
if(in_array($_FILES['file']['type'], $csv_mimetypes)) {

    if ($_FILES["file"]["size"] > 1) 
    {
        $file = fopen($filename, "r");
        while (($getData = fgetcsv($file, 10000, ";")) !== false) 
        {
            if($getData[0] > 0 && $getData[0] <=12){
                if(($getData[0] && $getData[1]  && $getData[2] && $getData[3] && $getData[4]) != null){
                    $sql = "INSERT into ocorrencias (mes, ano, iddelegacia, idcrime, qtd) 
                values ('".$getData[0]."','".$getData[1]."','".$getData[2]."','".$getData[3]."','".$getData[4]."')";
                $result = mysqli_query($connection, $sql);
                }                
            }            
        }

            if (!isset($result)) 
            {
                echo "<script type=\"text/javascript\">
							alert(\"Erro! Verifique as informações e tente novamente!\");
							window.location = \"../pagina.php\"
						  </script>";
            } else {
                  echo "<script type=\"text/javascript\">
						alert(\"Adicionado com Sucesso!\");
						window.location = \"../pagina.php\"
					</script>";
            }
        
        fclose($file);
    }
} else {
    echo "<script type=\"text/javascript\">
						alert(\"Formato inválido\");
						window.location = \"../pagina.php\"
					</script>";
}
}
