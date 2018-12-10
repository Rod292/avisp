<?php
header('Content-Type: text/html; charset=utf-8');

  mysql_connect('127.0.0.1:8080', 'root','root')or die();	//Conecta com o MySQL
  mysql_select_db('seguranca');						//Seleciona banco de dados
  
  $login=$_POST['login'];	//Pegando dados passados por AJAX
  $senha=$_POST['senha'];
  
  //Consulta no banco de dados
  $sql="select * from usuario where login='".$login."' and senha='".$senha."'"; 
  $resultados = mysql_query($sql)or die (mysql_error());
  $res=mysql_fetch_array($resultados); //
	if (@mysql_num_rows($resultados) == 0){
		echo 0;	//Se a consulta não retornar nada é porque as credenciais estão erradas
	}
	
	else{
		echo 1;	//Responde sucesso
		if(!isset($_SESSION)) 	//verifica se há sessão aberta
		session_start();		//Inicia seção
		//Abrindo seções
		$_SESSION['usuarioID']=$res['id']; 		
		$_SESSION['userLogin']=$res['login'];
		exit;	
	}
?>