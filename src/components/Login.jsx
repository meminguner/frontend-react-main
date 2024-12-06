import React from "react";
import Header from "./Header";
import { Button, ButtonGroup, ButtonToolbar } from "rsuite";
//import "rsuite/dist/rsuite.min.css";
import "rsuite/Button/styles/index.css";

import { Route, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  function girisClick() {
    navigate("/login/#giris");
  }
  function kayitClick() {
    navigate("/register");
  }

  return (
    <div>
      <Header
        headerText="Mekanbul"
        motto="Civarınızdaki Mekanlarınızı Keşfedin!"
      />

      <div className="container">
        <label for="mail">
          <b>E-posta</b>
        </label>
        <input type="text" placeholder="Enter Mail" name="mail" required />

        <label for="psw">
          <b>Şifre</b>
        </label>
        <input
          type="password"
          placeholder="Enter Password"
          name="psw"
          required
        />
        <div className="rsuite-container">
          <ButtonToolbar>
            <Button
              appearance="link"
              color="red"
              type="submit"
              onClick={kayitClick}
            >
              Kayıt ol
            </Button>

            <Button
              appearance="default"
              color="red"
              type="submit"
              onClick={girisClick}
            >
              Giriş yap
            </Button>
          </ButtonToolbar>
        </div>

        {/* <ButtonToolbar>
          <Button
            appearance="link"
            color="red"
            type="submit"
            onClick={kayitClick}
          >
            Kayıt ol
          </Button>

          <Button
            appearance="default"
            color="red"
            type="submit"
            onClick={girisClick}
          >
            Giriş yap
          </Button>
        </ButtonToolbar> */}
      </div>

      <hr />
    </div>
  );
}

export default Login;
