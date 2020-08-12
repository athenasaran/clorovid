import React from "react";
import Header from "../Header";
import Footer from "../Footer";

function Diagnostico() {
  return (
    <>
      <Header />
      <div style={{ paddingTop: "15px", padding: "12px" }}>
        <div id={"diagnostico-geral"}>
          <h1>Diagnóstico</h1>

          <p>
            Os meios de diagnóstico da COVID-19 são testes feitos a partir do
            material de genético do indivíduo a ser testado. A maioria dos tipos
            de teste realizados para a detecção do vírus é rápido e se pode
            saber o resultado em alguns minutos, normalmente utilizados para
            triagem de casos suspeitos.
            <br />
            Além destes, existem testes utilizados para a confirmação de testes
            rápidos, já que possuem uma precisão maior e levam mais tempo para
            obtenção de resultado.
            <br />
            Vale ressaltar também que, devido à quantidade limitada de kit para
            testes disponíveis, uma primeira triagem é realizada com base nos
            sintomas do indivíduo.
          </p>

          <hr />
        </div>

        <div id={"diagnostico-sintomas"}>
          <h2>Sintomas</h2>

          <p>
            A COVID-19 afeta diferentes pessoas de diferentes maneiras. A
            maioria das pessoas infectadas apresenta sintomas leves a moderados
            da doença e não precisarão ser hospitalizadas.
          </p>

          <h2>Sintomas mais comuns:</h2>
          <i>(Permaneça em casa)</i>
          <ul>
            <li>febre</li>
            <li>tosse seca</li>
            <li>cansaço</li>
          </ul>

          <h2>Sintomas menos comuns:</h2>
          <i>(Procure ajuda médica)</i>
          <ul>
            <li>dores e desconfortos</li>
            <li>dor de garganta</li>
            <li>diarreia</li>
            <li>conjuntivite</li>
            <li>dor de cabeça</li>
            <li>perda de paladar ou olfato</li>
            <li>
              erupção cutânea na pele ou descoloração dos dedos das mãos ou dos
              pés
            </li>
          </ul>

          <h2>Sintomas graves:</h2>
          <i>
            (Procure ajuda médica <strong>imediatamente</strong>)
          </i>

          <ul>
            <li>dificuldade de respirar ou falta de ar</li>
            <li>dor ou pressão no peito</li>
            <li>perda de fala ou movimento</li>
          </ul>

          <hr />
        </div>

        <div id={"diagnostico-info"}>
          <h2>Informações importantes</h2>

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
        </div>

        <hr />

        <div id={"diagnostico-links"}>
          <h2>Fontes e links úteis</h2>

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
