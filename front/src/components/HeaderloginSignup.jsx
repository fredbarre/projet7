function HeaderloginSignup(){
    return (
      <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
            <a class="navbar-item" href="https://bulma.io">
                <img src="./src/assets/icon-left-fontadjusted.png" width="112" height="28"/>
            </a>

            <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false"
                data-target="navbarBasicExample">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a>
        </div>

        <div id="navbarBasicExample" class="navbar-menu">


            <div class="navbar-end">
                <div class="navbar-item">
                    <div class="buttons">
                        <a class="button is-primary">
                            <strong>Inscription</strong>
                        </a>
                        <a class="button is-light">
                            Connexion
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </nav>  
    );
}

export default HeaderloginSignup;