import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import testeCOVID from "../../assets/img/testeCOVID.jpg";

function Diagnostico() {
  return (
    <>
      <Header />
        {/*<div style={{ paddingTop: "15px", padding: "12px" }}>*/}
        <div>
        {/*Introducao - Diagnostico*/}
        <div id={"diagnostico-geral"}>
          <div class="card mb-3">
            {" "}
            {/*Inicio card// md-3: tipo de card*/}
            <div class="row no-gutters">
              {" "}
              {/*Row/linha contendo o card*/}
              <div class="col-md-7">
                {" "}
                {/*Col/coluna contendo o texto e titulo do card*/}
                <div class="card-body">
                  {" "}
                  {/*Corpo do card*/}
                  <h2 class="card-title">Diagnóstico</h2>
                  <p class="card-text">
                    O diagnóstico da COVID-19 é feito a partir do material de
                    genético do indivíduo, que é testado. A maioria dos testes
                    realizados para a detecção do vírus são rápidos e a obtenção
                    do resultado leva apenas alguns minutos, sendo normalmente
                    utilizados para triagem de casos suspeitos.
                    <br />
                    Além destes, existem testes utilizados para a confirmação de
                    testes rápidos, já que possuem uma precisão maior e levam
                    mais tempo para obtenção de resultado.
                    <br />
                    Vale ressaltar também que, devido à quantidade limitada de
                    kit para testes disponíveis, uma primeira triagem é
                    realizada com base nos sintomas do indivíduo.
                    <br />
                  </p>
                </div>
              </div>
              <div class="col-md-5">
                {" "}
                {/*Col/coluna contendo a imagem do card*/}
                <img src={testeCOVID} class="card-img" alt="Teste COVID-19" />
              </div>
            </div>
          </div>
          <hr />
        </div>
        {/*Sintomas*/}
        <div id={"diagnostico-sintomas"}>
          <div id={"Intro sintomas"}>
            <h2>Sintomas</h2>

            <p>
              A COVID-19 afeta diferentes pessoas de diferentes maneiras. A
              maioria das pessoas infectadas apresenta sintomas leves a
              moderados da doença e não precisarão ser hospitalizadas.
            </p>
          </div>

          <div class="accordion" id="acordeonSintomas">
            {/*Acordeon Sintomas*/}
            <div class="card">
              {/*Card 1 do Acordeon (abaixo)*/}
              <div class="card-header" id="headingOne">
                {/*Header do card*/}
                <h2 class="mb-0">
                  {/*Botao e titulo do card*/}
                  <button
                    class="btn btn-link btn-block text-left"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseOne"
                    aria-expanded="false"
                    aria-controls="collapseOne"
                  >
                    Sintomas mais comuns
                  </button>
                </h2>
              </div>
              <div
                id="collapseOne"
                class="collapse show"
                aria-labelledby="headingOne"
                data-parent="#acordeonSintomas"
              >
                {" "}
                {/*Propriedades do card 1*/}
                <div class="card-body">
                  {" "}
                  {/*Corpo do card*/}
                  <i>(Permaneça em casa)</i>
                  <ul>
                    <li>febre</li>
                    <li>tosse seca</li>
                    <li>cansaço</li>
                  </ul>
                </div>
              </div>
            </div>
            {/*Card 2 do Acordeon (abaixo)*/}
            <div class="card">
              <div class="card-header" id="headingTwo">
                {/*Header do card*/}
                <h2 class="mb-0">
                  {/*Botao e titulo do card*/}
                  <button
                    class="btn btn-link btn-block text-left collapsed"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    {/*Propriedades do card*/}
                    Sintomas menos comuns
                  </button>
                </h2>
              </div>
              <div
                id="collapseTwo"
                class="collapse"
                aria-labelledby="headingTwo"
                data-parent="#acordeonSintomas"
              >
                <div class="card-body">
                  {/*Corpo do card*/}
                  <i>(Procure ajuda médica)</i>
                  <ul>
                    <li>dores e desconfortos</li>
                    <li>dor de garganta</li>
                    <li>diarreia</li>
                    <li>conjuntivite</li>
                    <li>dor de cabeça</li>
                    <li>perda de paladar ou olfato</li>
                    <li>
                      erupção cutânea na pele ou descoloração dos dedos das mãos
                      ou dos pés
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/*Card 3 do Acordeon (abaixo)*/}
            <div class="card">
              <div class="card-header" id="headingThree">
                {/*Header do card*/}
                <h2 class="mb-0">
                  <button
                    class="btn btn-link btn-block text-left collapsed"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    {/*Propriedades e titulo do card*/}
                    Sintomas graves
                  </button>
                </h2>
              </div>
              <div
                id="collapseThree"
                class="collapse"
                aria-labelledby="headingThree"
                data-parent="#acordeonSintomas"
              >
                {/*Corpo do card*/}
                <div class="card-body">
                  <i>
                    (Procure ajuda médica <strong>imediatamente</strong>)
                  </i>

                  <ul>
                    <li>dificuldade de respirar ou falta de ar</li>
                    <li>dor ou pressão no peito</li>
                    <li>perda de fala ou movimento</li>
                  </ul>
                </div>
              </div>
            </div>

            <hr />
          </div>
        </div>
        {/*Informacoes uteis*/}
        <div id={"diagnostico-info"}>
          <h3>Informações importantes</h3>

          <p>
            <u>
              <strong>
                Sempre ligue antes de ir ao médico ou posto de saúde, clínicas
                ou hospitais.
              </strong>
            </u>
            <br />
            Pessoas saudáveis que apresentarem os sintomas leves devem
            acompanhar seus sintomas em casa. Em média, os sintomas aparecem
            após 5 ou 6 dias depois de ser infectado com o vírus. Porém, em
            alguns casos isso pode levar até 14 dias.
          </p>

          <hr />
        </div>
        {/*Fontes e Links*/}
        <div id={"diagnostico-links"}>
          <h3>Fontes e links úteis</h3>

          <a
            href={
              "https://www.who.int/emergencies/diseases/novel-coronavirus-2019/question-and-answers-hub/q-a-detail/q-a-coronaviruses#:~:text=symptoms"
            }
            target={"blank"}
          >
            Organização Mundial da Saúde - FAQ a respeito da COVID-19
          </a>
          <br />

          <a href={"https://coronavirus.saude.gov.br/"} target={"blank"}>
            Ministério da Saúde - Página do Coronavírus
          </a>

          <br />
          <a
            href={"https://coronavirus.saude.gov.br/sobre-a-doenca"}
            target={"blank"}
          >
            Ministério da Saúde - Sobre a COVID-19
          </a>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default Diagnostico;
