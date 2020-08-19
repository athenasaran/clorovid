import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import "./sobre.css";
import sobreInformativo from "../../assets/img/sobreInformativo.jpg";

function Sobre() {
  return (
    <>
      <Header />
        <h1> Sobre a doença</h1>
       
          <div id={"o-que-e-covid"}>
          <hr />
            <h2>O que é COVID-19</h2>

            <div class = "column">
              <p>
                Os coronavírus são uma grande família de vírus comuns em muitas espécies diferentes de animais, 
                incluindo camelos, gado, gatos e morcegos. Raramente, os coronavírus que infectam animais podem 
                infectar pessoas, como exemplo do MERS-CoV e SARS-CoV. Recentemente, em dezembro de 2019, houve 
                a transmissão de um novo coronavírus (SARS-CoV-2), o qual foi identificado em Wuhan na China 
                e causou a COVID-19, sendo em seguida disseminada e transmitida pessoa a pessoa.
              </p>
            </div>

            <div class = "column">
              <p>
                A COVID-19 é uma  doença causada pelo coronavírus, denominado SARS-CoV-2, que apresenta um  
                espectro clínico variando de infecções assintomáticas a quadros graves. De  acordo com a 
                Organização Mundial de Saúde, a maioria (cerca de 80%) dos  pacientes com COVID-19 podem ser 
                assintomáticos ou oligossintomáticos (poucos  sintomas), e aproximadamente 20% dos casos 
                detectados requer atendimento  hospitalar por apresentarem dificuldade respiratória, dos quais 
                aproximadamente  5% podem necessitar de suporte ventilatório.
              </p>
            </div>
          </div>

          <div id={"quantidade-paises-com-covid"}>
          <hr />
            <h2>Quantidade de países com histórico de contaminção</h2>
            <div class = "column">
              <p>
                Desde que foi identificada em dezembro de 2019 na China, a Covid-19 já infectou mais de 16,5 milhões 
                de pessoas em 188 países. Ao menos onze nações, contudo, passaram pela pandemia imunes 
                até o momento e não registraram casos de <a href="https://coronavirus.saude.gov.br/sobre-a-doenca">coronavírus</a> em seu território.
              </p>
            </div>
            <div class = "column">
              <p>
                A maior parte dos países que não foram atingidos pela doença está localiza no Oceano Pacífico, no entorno da Oceania. 
                Entre eles estão Ilhas Marshall, Ilhas Salomão, Quiribati, Nauru, Micronésia, Palau, Samoa, Tonga, Tuvalu e Vanuatu. 
                Há ainda o Turquemenistão, na Ásia Central.
              </p> 
            </div>
          
          </div>
          <div id={"sites-interesse"}>
            <hr />
            <h2>Sites de interesse</h2>
            <div class = "column">
              <a href={"https://coronavirus.saude.gov.br/sobre-a-doenca"} target={"blank"}>
                  Ministério da Saúde - Sobre a COVID-19
              </a>
            </div>
            <div class = "column">
              <a href={"https://veja.abril.com.br/mundo/onze-paises-passam-ilesos-pela-pandemia-de-covid-19-entenda-como/"} target={"blank"}>
                Onze países passam ilesos pela pandemia de Covid-19; entenda como - Página reportagem Veja
              </a>
            </div>
          </div>
      <Footer />
    </>
  );
}
export default Sobre;
