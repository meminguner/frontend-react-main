import React from "react";
import Header from "./Header";
import { Button, ButtonGroup, ButtonToolbar } from "rsuite";
//import "rsuite/dist/rsuite.min.css";
import "rsuite/Button/styles/index.css";

import { Route, useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  function girisClick() {
    navigate("/login");
  }
  function kayitClick() {
    navigate("/register/#kayit");
  }
  return (
    <div>
      <Header
        headerText="Mekanbul"
        motto="Civarınızdaki Mekanlarınızı Keşfedin!"
      />

      <div class="container">
        <label for="adSoyad">
          <b>Ad Soyad:</b>
        </label>
        <input type="text" placeholder="Enter Name" name="adSoyad" required />

        <label for="mail">
          <b>E-Posta:</b>
        </label>
        <input type="text" placeholder="Enter Mail" name="mail" required />

        <label for="psw">
          <b>Şifre:</b>
        </label>
        <input
          type="password"
          placeholder="Enter Password"
          name="psw"
          required
        />
        <div class="rsuite-container">
          <ButtonToolbar>
            <Button
              appearance="link"
              color="red"
              type="submit"
              onClick={girisClick}
            >
              Giriş yap
            </Button>

            <Button
              appearance="default"
              color="red"
              type="submit"
              onClick={kayitClick}
            >
              Kayıt ol
            </Button>
          </ButtonToolbar>
        </div>
      </div>

      <hr />
    </div>
  );
}

export default Register;
