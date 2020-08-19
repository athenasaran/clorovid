import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Sobre from "./components/Sobre";
import Prevencao from "./components/Prevencao";
import Diagnostico from "./components/Diagnostico";
import Duvidas from "./components/Duvidas";

const Pagina404 = () => <div>Página 404</div>;

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Sobre} exact />
      <Route path="/sobre" component={Sobre} exact />
      <Route path="/prevencao" component={Prevencao} exact />
      <Route path="/diagnostico" component={Diagnostico} exact />
      <Route path="/duvidas" component={Duvidas} exact />
      <Route component={Pagina404} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
