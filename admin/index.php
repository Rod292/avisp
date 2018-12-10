<?php

  include('header.php');

?>

    <div class="container">
        <div class="row espaco">
            <div class="col-sm-6 col-md-4 col-md-offset-4"></div>
            <div class="col-sm-6 col-md-4 col-md-offset-4">
                
                <div class="account-wall">
                    <h1 class="text-center">Área Administrativa</h1>
                    <br/><br/>

                    <form id="formlogin" class="form-signin">
                    <input type="text" id="login" class="form-control" placeholder="Usuario" required autofocus>
	                <input type="password" id="senha" class="form-control" placeholder="Senha" required autofocus>
                    <button class="btn btn-lg btn-primary btn-block" type="submit">
                        Entrar</button>
                    </form>
                    <h4 id="errolog">Usuário ou senha errados!</h4>
                </div>
            </div>
            <div class="col-sm-6 col-md-4 col-md-offset-4"></div>
        </div>
    </div>

<?php

  include('footer.php');

?>

