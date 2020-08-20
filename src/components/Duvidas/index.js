import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import styled from "styled-components";

import "./duvidas.css";

const Link = styled.a`
  color: #01b552;
`;

function Duvidas() {
  return (
    <>
      <Header />
      {/*<div style={{ paddingTop: "15px", padding: "12px" }}>*/}
      <h1 style={{ margin: "15px" }}>Dúvidas Frequentes</h1>
      <div
        className="card tp-on-this-page mb-3 tp-on-this-page-large d-none d-lg-block"
        style={{ width: "90%", alignSelf: "center" }}
      >
        <div className="card-header">
          <strong>Nessa Página</strong>
        </div>
        <div className="row no-gutters">
          <ul className="col-md-6 float-left list-group list-group-flush">
            <li className="list-group-item">
              <a href="#fundamentos">Fundamentos</a>
            </li>
            <li className="list-group-item">
              <a href="#propagacao">Propagação</a>
            </li>
            <li className="list-group-item">
              <a href="#prevencao">Prevenção</a>
            </li>
            <li className="list-group-item">
              <a href="#covid19">
                Se você ou alguém que você conhece está doente ou teve contato
                com alguém que tem COVID-19
              </a>
            </li>
            <li className="list-group-item">
              <a href="#criancas">Crianças</a>
            </li>
            <li className="list-group-item">
              <a href="#surto">Preparando-se para um surto</a>
            </li>
            <li className="list-group-item">
              <a href="#emergencia">
                Sintomas e sinais de alerta de emergência
              </a>
            </li>
            <li className="list-group-item">
              <a href="#testando">Testando</a>
            </li>{" "}
          </ul>
          <ul className="col-md-6 float-left list-group list-group-flush">
            <li className="list-group-item">
              <a href="#doenca">Pessoas com alto risco de doença grave</a>
            </li>
            <li className="list-group-item">
              <a href="#contato">Rastreamento de contato</a>
            </li>
            <li className="list-group-item">
              <a href="#funerais">Funerais</a>
            </li>
            <li className="list-group-item" style={{ marginBottom: "23px" }}>
              <a href="#limpeza">Limpeza e desinfecção</a>
            </li>
            <li className="list-group-item">
              <a href="#pets">Animais de estimação e animais</a>
            </li>
            <li className="list-group-item">
              <a href="#comunidade">Mitigação Comunitária</a>
            </li>
            <li className="list-group-item">
              <a href="#agua">Água</a>
            </li>
          </ul>
        </div>
      </div>
      <div>
        {/* eslint-disable-next-line*/}
        <a
          id="fundamentos"
          name="fundamentos"
          title="fundamentos"
          class="onThisPageAnchor"
        ></a>
        <h3>Fundamentos</h3>
        <div
          id="accordion-1"
          class="accordion indicator-plus accordion-white mb-3"
          role="tablist"
        >
          <div class="card bar">
            <div class="card card-accordion ">
              <div
                class="card-header collapsed"
                id="accordion-1-card-0"
                data-target="#accordion-1-collapse-0"
                data-toggle="collapse"
                role="tab"
                aria-expanded="false"
              >
                <button
                  class="card-title btn btn-link"
                  data-controls="accordion-1-collapse-0"
                >
                  <a
                    href="/#"
                    role="heading"
                    aria-level="0"
                    style={{ color: "#01b552" }}
                  >
                    O que é o novo coronavirus?
                  </a>
                </button>
              </div>
              <div
                aria-labelledby="accordion-1-card-0"
                class="collapse d-print-block "
                collapsed
                id="accordion-1-collapse-0"
                role="tabpanel"
              >
                <div class="card-body">
                  <p>
                    Um novo coronavírus é um novo coronavírus que não foi
                    identificado anteriormente. O vírus que causa a doença
                    coronavírus 2019 (COVID-19), não é o mesmo que os &nbsp;
                    <Link
                      href="https://www.cdc.gov/coronavirus/types.html"
                      target="_blank"
                    >
                      coronavírus que comumente circulam entre humanos
                    </Link>
                    &nbsp; e causam doenças leves, como o resfriado comum.
                  </p>
                </div>
              </div>{" "}
            </div>
          </div>
          <div class="card bar">
            <div class="card card-accordion ">
              <div
                class="card-header collapsed"
                id="accordion-1-card-1"
                data-target="#accordion-1-collapse-1"
                data-toggle="collapse"
                role="tab"
                aria-expanded="false"
              >
                <button
                  class="card-title btn btn-link"
                  data-controls="accordion-1-collapse-1"
                >
                  <span role="heading" aria-level="1">
                    Por que a doença está sendo chamada de doença coronavírus
                    2019, COVID-19?
                  </span>
                </button>
              </div>
              <div
                aria-labelledby="accordion-1-card-1"
                class="collapse d-print-block "
                collapsed
                id="accordion-1-collapse-1"
                role="tabpanel"
              >
                <div class="card-body">
                  <p>
                    Em 11 de fevereiro de 2020, a Organização Mundial da Saúde
                    &nbsp;
                    <Link href="https://twitter.com/DrTedros/status/1227297754499764230">
                      anunciou
                    </Link>
                    &nbsp;um nome oficial para a doença que está causando o novo
                    surto de coronavírus em 2019, identificado pela primeira vez
                    em Wuhan, China. O novo nome dessa doença é doença
                    coronavírus 2019, abreviado como COVID-19. Em COVID-19, 'CO'
                    significa 'corona', 'VI' significa 'vírus' e 'D' significa
                    doença. Anteriormente, esta doença era conhecida como “novo
                    coronavírus de 2019” ou “2019-nCoV”.
                  </p>
                  <p>
                    Existem muitos tipos de coronavírus humanos, incluindo
                    alguns que comumente causam doenças leves do trato
                    respiratório superior. COVID-19 é uma nova doença, causada
                    por um novo (ou novo) coronavírus que não foi observado em
                    humanos.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* eslint-disable-next-line*/}
          <a
            id="propagacao"
            name="propagacao"
            title="propagacao"
            class="onThisPageAnchor"
          ></a>
          <h3>Propagação</h3>
          <div
            id="accordion-2"
            class="accordion indicator-plus accordion-white mb-3"
            role="tablist"
          >
            <div class="card bar">
              <div class="card card-accordion ">
                <div
                  class="card-header collapsed"
                  id="accordion-2-card-1"
                  data-target="#accordion-2-collapse-1"
                  data-toggle="collapse"
                  role="tab"
                  aria-expanded="false"
                >
                  <button
                    class="card-title btn btn-link"
                    data-controls="accordion-2-collapse-1"
                  >
                    <span role="heading" aria-level="0">
                      Como o vírus se espalha?
                    </span>
                  </button>
                </div>
                <div
                  aria-labelledby="accordion-2-card-1"
                  class="collapse d-print-block "
                  collapsed
                  id="accordion-2-collapse-1"
                  role="tabpanel"
                >
                  <div class="card-body">
                    <p>
                      Acredita-se que o vírus que causa o COVID-19 se espalhe
                      principalmente de pessoa para pessoa, principalmente por
                      meio de gotículas respiratórias produzidas quando uma
                      pessoa infectada tosse, espirra ou fala. Essas gotículas
                      podem cair na boca ou no nariz de pessoas que estejam
                      próximas ou possivelmente ser inaladas para os pulmões. A
                      propagação é mais provável quando as pessoas estão em
                      contato próximo umas com as outras (cerca de 6 pés).
                      COVID-19 parece estar se espalhando facilmente e de forma
                      sustentável na comunidade (“disseminação pela comunidade”)
                      em &nbsp;
                      <Link
                        href="https://www.cdc.gov/coronavirus/2019-ncov/prevent-getting-sick/how-covid-spreads.html"
                        target="_blank"
                      >
                        muitas áreas geográficas afetadas
                      </Link>
                      &nbsp;. A propagação pela comunidade significa que as
                      pessoas foram infectadas com o vírus em uma área,
                      incluindo algumas que não têm certeza de como ou onde
                      foram infectadas.
                    </p>
                  </div>
                </div>{" "}
              </div>
            </div>
            <div class="card bar">
              <div class="card card-accordion ">
                <div
                  class="card-header collapsed"
                  id="accordion-2-card-1"
                  data-target="#accordion-2-collapse-2"
                  data-toggle="collapse"
                  role="tab"
                  aria-expanded="false"
                >
                  <button
                    class="card-title btn btn-link"
                    data-controls="accordion-2-collapse-2"
                  >
                    <span role="heading" aria-level="0">
                      O vírus que causa o COVID-19 pode ser transmitido por meio
                      de alimentos, incluindo comida para levar em restaurantes,
                      refrigerados ou congelados embalados?
                    </span>
                  </button>
                </div>
                <div
                  aria-labelledby="accordion-2-card-2"
                  class="collapse d-print-block "
                  collapsed
                  id="accordion-2-collapse-2"
                  role="tabpanel"
                >
                  <div class="card-body">
                    <p>
                      Geralmente, acredita-se que os coronavírus sejam
                      transmitidos de pessoa para pessoa por meio de gotículas
                      respiratórias. Atualmente, não há evidências que apoiem a
                      transmissão de COVID-19 associada a alimentos. Antes de
                      preparar ou comer alimentos, é importante sempre lavar as
                      mãos com água e sabão por pelo menos 20 segundos para
                      segurança alimentar geral. Ao longo do dia, use um lenço
                      de papel para cobrir a tosse ou espirro e lave as mãos
                      depois de assoar o nariz, tossir ou espirrar ou de ir ao
                      banheiro.
                    </p>
                  </div>
                </div>{" "}
              </div>
            </div>
            <div class="card bar">
              <div class="card card-accordion ">
                <div
                  class="card-header collapsed"
                  id="accordion-2-card-3"
                  data-target="#accordion-2-collapse-3"
                  data-toggle="collapse"
                  role="tab"
                  aria-expanded="false"
                >
                  <button
                    class="card-title btn btn-link"
                    data-controls="accordion-2-collapse-3"
                  >
                    <span role="heading" aria-level="0">
                      O clima quente impedirá o surto de COVID-19?
                    </span>
                  </button>
                </div>
                <div
                  aria-labelledby="accordion-2-card-3"
                  class="collapse d-print-block "
                  collapsed
                  id="accordion-2-collapse-3"
                  role="tabpanel"
                >
                  <div class="card-body">
                    <p>
                      Ainda não se sabe se o clima e a temperatura afetam a
                      disseminação do COVID-19. Alguns outros vírus, como os que
                      causam o resfriado comum e a gripe, se espalham mais
                      durante os meses de clima frio, mas isso não significa que
                      seja impossível ficar doente com esses vírus durante os
                      outros meses. Há muito mais informações sobre a
                      transmissibilidade, gravidade e outras características
                      associadas ao COVID-19, e as investigações estão em
                      andamento.
                    </p>
                  </div>
                </div>{" "}
              </div>
            </div>
            <div class="card bar">
              <div class="card card-accordion ">
                <div
                  class="card-header collapsed"
                  id="accordion-2-card-4"
                  data-target="#accordion-2-collapse-4"
                  data-toggle="collapse"
                  role="tab"
                  aria-expanded="false"
                >
                  <button
                    class="card-title btn btn-link"
                    data-controls="accordion-2-collapse-4"
                  >
                    <span role="heading" aria-level="0">
                      O que é propagação da comunidade?
                    </span>
                  </button>
                </div>
                <div
                  aria-labelledby="accordion-2-card-4"
                  class="collapse d-print-block "
                  collapsed
                  id="accordion-2-collapse-4"
                  role="tabpanel"
                >
                  <div class="card-body">
                    <p>
                      A propagação pela comunidade significa que as pessoas
                      foram infectadas com o vírus em uma área, incluindo
                      algumas que não têm certeza de como ou onde foram
                      infectadas. Cada departamento de saúde determina a
                      distribuição da comunidade de maneira diferente com base
                      nas condições locais. Para obter informações sobre a
                      difusão da comunidade em sua área, visite o site do seu
                      departamento de saúde.
                    </p>
                  </div>
                </div>{" "}
              </div>
            </div>
            <div class="card bar">
              <div class="card card-accordion ">
                <div
                  class="card-header collapsed"
                  id="accordion-2-card-5"
                  data-target="#accordion-2-collapse-5"
                  data-toggle="collapse"
                  role="tab"
                  aria-expanded="false"
                >
                  <button
                    class="card-title btn btn-link"
                    data-controls="accordion-2-collapse-5"
                  >
                    <span role="heading" aria-level="1">
                      Os mosquitos ou carrapatos podem transmitir o vírus que
                      causa o COVID-19?
                    </span>
                  </button>
                </div>
                <div
                  aria-labelledby="accordion-2-card-5"
                  class="collapse d-print-block "
                  collapsed
                  id="accordion-2-collapse-5"
                  role="tabpanel"
                >
                  <div class="card-body">
                    <p>
                      No momento, o CDC não tem dados que sugiram que este novo
                      coronavírus ou outros coronavírus semelhantes sejam
                      disseminados por mosquitos ou carrapatos. A principal
                      forma de transmissão do COVID-19 é de pessoa para pessoa.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* eslint-disable-next-line*/}
          <a
            id="prevencao"
            name="prevencao"
            title="prevencao"
            class="onThisPageAnchor"
          ></a>
          <h3>Prevenção</h3>
          <div
            id="accordion-3"
            class="accordion indicator-plus accordion-white mb-3"
            role="tablist"
          >
            <div class="card bar">
              <div class="card card-accordion ">
                <div
                  class="card-header collapsed"
                  id="accordion-3-card-0"
                  data-target="#accordion-3-collapse-0"
                  data-toggle="collapse"
                  role="tab"
                  aria-expanded="false"
                >
                  <button
                    class="card-title btn btn-link"
                    data-controls="accordion-3-collapse-0"
                  >
                    <span role="heading" aria-level="0">
                      Como posso me proteger?
                    </span>
                  </button>
                </div>
                <div
                  aria-labelledby="accordion-3-card-0"
                  class="collapse d-print-block "
                  collapsed
                  id="accordion-3-collapse-0"
                  role="tabpanel"
                >
                  <div class="card-body">
                    <p>
                      Visita a página &nbsp;
                      <Link
                        href="https://www.cdc.gov/coronavirus/2019-ncov/faq.html#Pets-and-Animals"
                        target="_blank"
                      >
                        Como se proteger e aos outros
                      </Link>
                      &nbsp;para saber como se proteger de doenças
                      respiratórias, como o COVID-19.
                    </p>
                  </div>
                </div>{" "}
              </div>
            </div>
            <div class="card bar">
              <div class="card card-accordion ">
                <div
                  class="card-header collapsed"
                  id="accordion-3-card-1"
                  data-target="#accordion-3-collapse-1"
                  data-toggle="collapse"
                  role="tab"
                  aria-expanded="false"
                >
                  <button
                    class="card-title btn btn-link"
                    data-controls="accordion-3-collapse-1"
                  >
                    <span role="heading" aria-level="0">
                      O CDC recomenda o uso de máscaras para prevenir COVID-19?
                    </span>
                  </button>
                </div>
                <div
                  aria-labelledby="accordion-3-card-1"
                  class="collapse d-print-block "
                  collapsed
                  id="accordion-3-collapse-1"
                  role="tabpanel"
                >
                  <div class="card-body">
                    <p>
                      Use máscaras em locais públicos quando estiver perto de
                      pessoas que não morem em sua casa e, principalmente, onde
                      outras medidas de distanciamento social sejam difíceis de
                      manter, como supermercados, farmácias e postos de
                      gasolina. As máscaras podem retardar a propagação do vírus
                      e ajudar as pessoas que podem ter o vírus e não sabem
                      transmiti-lo para outras pessoas.
                    </p>
                    <p>
                      COVID-19 pode ser transmitido por pessoas que não
                      apresentam sintomas e não sabem que estão infectadas. É
                      por isso que é importante que todos pratiquem &nbsp;
                      <Link
                        href="https://www.cdc.gov/coronavirus/2019-ncov/prevent-getting-sick/social-distancing.html"
                        target="_blank"
                      >
                        o distanciamento social
                      </Link>
                      &nbsp; (ficar a pelo menos 2 metros de distância das
                      outras pessoas) e usar máscaras em ambientes públicos. As
                      máscaras fornecem uma camada extra para ajudar a evitar
                      que as gotículas respiratórias se propaguem no ar e
                      atinjam outras pessoas.
                    </p>
                  </div>
                </div>{" "}
              </div>
            </div>
            <div class="card bar">
              <div class="card card-accordion ">
                <div
                  class="card-header collapsed"
                  id="accordion-3-card-2"
                  data-target="#accordion-3-collapse-2"
                  data-toggle="collapse"
                  role="tab"
                  aria-expanded="false"
                >
                  <button
                    class="card-title btn btn-link"
                    data-controls="accordion-3-collapse-2"
                  >
                    <span role="heading" aria-level="0">
                      É seguro obter atendimento para minhas outras condições
                      médicas durante esse período?
                    </span>
                  </button>
                </div>
                <div
                  aria-labelledby="accordion-3-card-2"
                  class="collapse d-print-block "
                  collapsed
                  id="accordion-3-collapse-2"
                  role="tabpanel"
                >
                  <div class="card-body">
                    <ul>
                      <li>
                        É importante continuar a cuidar da sua saúde e bem-estar
                        .
                      </li>
                      <li>
                        Continue seus medicamentos e não altere seu plano de
                        tratamento sem falar com seu médico.
                      </li>
                      <li>
                        Continue a controlar sua doença da maneira que seu
                        médico lhe disse.
                      </li>
                      <li>
                        Tenha pelo menos um suprimento para 2 semanas de todos
                        os medicamentos prescritos e não prescritos.
                      </li>
                      <li>
                        Converse com seu médico sobre se suas vacinas estão em
                        dia.
                      </li>
                      <li>
                        Ligue para seu provedor de saúde
                        <ul>
                          <li>
                            se você tiver alguma dúvida sobre suas condições
                            médicas ou se ficar doente.
                          </li>
                          <li>
                            para descobrir as diferentes maneiras de entrar em
                            contato com seu provedor de serviços de saúde para o
                            gerenciamento de doenças crônicas ou outras
                            condições.
                          </li>
                        </ul>
                      </li>
                      <li>
                        Não demore o atendimento de emergência para seus
                        problemas de saúde ou qualquer condição de saúde que
                        requeira atenção imediata.
                        <ul>
                          <li>
                            Se você precisar de ajuda de emergência, ligue para
                            911.
                          </li>
                          <li>
                            Os departamentos de emergência têm planos de
                            prevenção de infecções para protegê-lo de receber
                            COVID-19 se precisar de cuidados para sua condição
                            médica.
                          </li>
                        </ul>
                      </li>
                      <li>
                        Continue a praticar a prevenção diária . Lave as mãos
                        com frequência, evite contato próximo, use máscara,
                        cubra tosses e espirros e limpe e desinfete superfícies
                        tocadas com frequência.
                      </li>
                    </ul>
                  </div>
                </div>{" "}
              </div>
            </div>
            <div class="card bar">
              <div class="card card-accordion ">
                <div
                  class="card-header collapsed"
                  id="accordion-3-card-3"
                  data-target="#accordion-3-collapse-3"
                  data-toggle="collapse"
                  role="tab"
                  aria-expanded="false"
                >
                  <button
                    class="card-title btn btn-link"
                    data-controls="accordion-3-collapse-3"
                  >
                    <span role="heading" aria-level="0">
                      Corro o risco de receber COVID-19 pelo correio, pacotes ou
                      produtos?
                    </span>
                  </button>
                </div>
                <div
                  aria-labelledby="accordion-3-card-3"
                  class="collapse d-print-block "
                  collapsed
                  id="accordion-3-collapse-3"
                  role="tabpanel"
                >
                  <div class="card-body">
                    <p>
                      Ainda há muito que se desconhece sobre o COVID-19 e como
                      ele se espalha. Acredita-se que os coronavírus sejam
                      disseminados mais freqüentemente por gotículas
                      respiratórias. Embora o vírus possa sobreviver por um
                      curto período em algumas superfícies, é improvável que se
                      espalhe pelo correio, produtos ou embalagens nacionais ou
                      internacionais. No entanto, pode ser possível que as
                      pessoas possam obter COVID-19 tocando uma superfície ou
                      objeto que contenha o vírus e, em seguida, tocando sua
                      própria boca, nariz ou possivelmente seus olhos, mas esta
                      não é considerada a principal forma de vírus propaga-se.
                    </p>
                  </div>
                </div>{" "}
              </div>
            </div>
            <div class="card bar">
              <div class="card card-accordion ">
                <div
                  class="card-header collapsed"
                  id="accordion-3-card-4"
                  data-target="#accordion-3-collapse-4"
                  data-toggle="collapse"
                  role="tab"
                  aria-expanded="false"
                >
                  <button
                    class="card-title btn btn-link"
                    data-controls="accordion-3-collapse-4"
                  >
                    <span role="heading" aria-level="1">
                      Posso doar sangue?
                    </span>
                  </button>
                </div>
                <div
                  aria-labelledby="accordion-3-card-4"
                  class="collapse d-print-block "
                  collapsed
                  id="accordion-3-collapse-4"
                  role="tabpanel"
                >
                  <div class="card-body">
                    <p>
                      Em ambientes de saúde nos Estados Unidos, o sangue doado é
                      uma parte essencial e vital do cuidado dos pacientes. A
                      necessidade de doar sangue é constante e os hemocentros
                      estão abertos e precisam urgentemente de doações. O CDC
                      incentiva as pessoas que estão bem a continuar a doar
                      sangue se puderem, mesmo que pratiquem o distanciamento
                      social por causa do COVID-19. O CDC está apoiando os
                      centros de sangue fornecendo recomendações que manterão os
                      doadores e a equipe segura. Os exemplos dessas
                      recomendações incluem o espaçamento das cadeiras dos
                      doadores em 2 metros de distância, aderência total às
                      práticas de limpeza ambiental e incentivo aos doadores a
                      marcarem horários para doações com antecedência.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="card bar">
              <div class="card card-accordion ">
                <div
                  class="card-header collapsed"
                  id="accordion-3-card-5"
                  data-target="#accordion-3-collapse-5"
                  data-toggle="collapse"
                  role="tab"
                  aria-expanded="false"
                >
                  <button
                    class="card-title btn btn-link"
                    data-controls="accordion-3-collapse-5"
                  >
                    <span role="heading" aria-level="1">
                      Os usuários de lentes de contato devem tomar precauções
                      especiais para prevenir COVID-19?
                    </span>
                  </button>
                </div>
                <div
                  aria-labelledby="accordion-3-card-5"
                  class="collapse d-print-block "
                  collapsed
                  id="accordion-3-collapse-5"
                  role="tabpanel"
                >
                  <div class="card-body">
                    <ul>
                      <li>
                        Atualmente não há evidências que sugiram que os usuários
                        de lentes de contato correm mais risco de adquirir
                        COVID-19 do que os usuários de óculos.
                      </li>
                      <li>
                        Os usuários de lentes de contato devem continuar a
                        praticar o uso seguro das lentes de contato e hábitos de
                        higiene de cuidado para ajudar a prevenir a transmissão
                        de quaisquer infecções relacionadas às lentes de
                        contato, como sempre lavar as mãos com água e sabão
                        antes de manusear as lentes.
                      </li>
                      <li>
                        Pessoas saudáveis ​​podem continuar a usar e cuidar de
                        suas lentes de contato conforme prescrito por seu
                        oftalmologista.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="card bar">
              <div class="card card-accordion ">
                <div
                  class="card-header collapsed"
                  id="accordion-3-card-6"
                  data-target="#accordion-3-collapse-6"
                  data-toggle="collapse"
                  role="tab"
                  aria-expanded="false"
                >
                  <button
                    class="card-title btn btn-link"
                    data-controls="accordion-3-collapse-6"
                  >
                    <span role="heading" aria-level="1">
                      A solução desinfetante de lentes de contato é eficaz
                      contra COVID-19?
                    </span>
                  </button>
                </div>
                <div
                  aria-labelledby="accordion-3-card-6"
                  class="collapse d-print-block "
                  collapsed
                  id="accordion-3-collapse-6"
                  role="tabpanel"
                >
                  <div class="card-body">
                    <ul>
                      <li>
                        Os sistemas à base de peróxido de hidrogênio para
                        limpeza, desinfecção e armazenamento de lentes de
                        contato devem ser eficazes contra o vírus que causa
                        COVID-19.
                        <ul>
                          <li>
                            Para outros métodos de desinfecção, como solução
                            multiuso e limpadores ultrassônicos, atualmente não
                            há evidências científicas suficientes para
                            determinar a eficácia contra o vírus.
                          </li>
                        </ul>
                      </li>
                      <li>
                        Sempre use solução para desinfetar suas lentes de
                        contato e estojo para matar germes que possam estar
                        presentes.
                      </li>
                      <li>
                        Manuseie suas lentes sobre uma superfície que foi limpa
                        e desinfetada.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="card bar">
              <div class="card card-accordion ">
                <div
                  class="card-header collapsed"
                  id="accordion-3-card-7"
                  data-target="#accordion-3-collapse-7"
                  data-toggle="collapse"
                  role="tab"
                  aria-expanded="false"
                >
                  <button
                    class="card-title btn btn-link"
                    data-controls="accordion-3-collapse-7"
                  >
                    <span role="heading" aria-level="1">
                      Devo usar água e sabão ou desinfetante para as mãos para
                      me proteger contra COVID-19?
                    </span>
                  </button>
                </div>
                <div
                  aria-labelledby="accordion-3-card-7"
                  class="collapse d-print-block "
                  collapsed
                  id="accordion-3-collapse-7"
                  role="tabpanel"
                >
                  <div class="card-body">
                    <p>
                      Lavar as mãos é uma das melhores maneiras de proteger você
                      e sua família contra doenças. Lave as mãos frequentemente
                      com água e sabão por pelo menos 20 segundos, especialmente
                      depois de assoar o nariz, tossir ou espirrar; ir ao
                      banheiro; e antes de comer ou preparar alimentos. Se não
                      houver água e sabão disponíveis, use um desinfetante para
                      as mãos à base de álcool com pelo menos 60% de álcool.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="card bar">
              <div class="card card-accordion ">
                <div
                  class="card-header collapsed"
                  id="accordion-3-card-8"
                  data-target="#accordion-3-collapse-8"
                  data-toggle="collapse"
                  role="tab"
                  aria-expanded="false"
                >
                  <button
                    class="card-title btn btn-link"
                    data-controls="accordion-3-collapse-8"
                  >
                    <span role="heading" aria-level="1">
                      Quais produtos de limpeza devo usar para me proteger
                      contra COVID-19?
                    </span>
                  </button>
                </div>
                <div
                  aria-labelledby="accordion-3-card-8"
                  class="collapse d-print-block "
                  collapsed
                  id="accordion-3-collapse-8"
                  role="tabpanel"
                >
                  <div class="card-body">
                    <p>
                      Limpe e desinfete as superfícies tocadas com frequência,
                      como mesas, maçanetas, interruptores de luz, bancadas,
                      puxadores, mesas, telefones, teclados, banheiros,
                      torneiras e pias. Se as superfícies estiverem sujas,
                      limpe-as com detergente ou sabão e água antes da
                      desinfecção. Para desinfetar, a maioria dos desinfetantes
                      domésticos registrados pela EPA funcionam. Consulte as
                      recomendações do CDC para limpeza e desinfecção doméstica
                      .
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* eslint-disable-next-line*/}
          <a
            id="covid19"
            name="covid19"
            title="covid19"
            class="onThisPageAnchor"
          ></a>
          <h3>
            Se você ou alguém que você conhece está doente ou teve contato com
            alguém que tem COVID-19
          </h3>
          <div
            id="accordion-4"
            class="accordion indicator-plus accordion-white mb-3"
            role="tablist"
          >
            <div class="card bar">
              <div class="card card-accordion ">
                <div
                  class="card-header collapsed"
                  id="accordion-4-card-0"
                  data-target="#accordion-4-collapse-0"
                  data-toggle="collapse"
                  role="tab"
                  aria-expanded="false"
                >
                  <button
                    class="card-title btn btn-link"
                    data-controls="accordion-4-collapse-0"
                  >
                    <span role="heading" aria-level="0">
                      O que devo fazer se ficar doente ou se alguém em minha
                      casa ficar doente?
                    </span>
                  </button>
                </div>
                <div
                  aria-labelledby="accordion-4-card-0"
                  class="collapse d-print-block "
                  collapsed
                  id="accordion-4-collapse-0"
                  role="tabpanel"
                >
                  <div class="card-body">
                    <p>
                      A maioria das pessoas que recebe COVID-19 poderá se
                      recuperar em casa. O CDC oferece instruções para pessoas
                      que estão se recuperando em casa e seus cuidadores,
                      incluindo:
                      <ul>
                        <li>
                          Fique em casa quando estiver doente, exceto para obter
                          cuidados médicos.
                        </li>
                        <li>
                          Use um quarto e banheiro separados para os membros da
                          família doentes (se possível).
                        </li>
                        <li>
                          Lave as mãos frequentemente com água e sabão por pelo
                          menos 20 segundos, especialmente depois de assoar o
                          nariz, tossir ou espirrar; ir ao banheiro; e antes de
                          comer ou preparar alimentos.
                        </li>
                        <li>
                          Se não houver água e sabão disponíveis, use um
                          desinfetante para as mãos à base de álcool com pelo
                          menos 60% de álcool. Sempre lave as mãos com água e
                          sabão se as mãos estiverem visivelmente sujas.
                        </li>
                        <li>
                          Forneça ao seu familiar doente máscaras faciais
                          descartáveis ​​limpas para usar em casa, se
                          disponíveis, para ajudar a prevenir a disseminação de
                          COVID-19 para outras pessoas.
                        </li>
                        <li>
                          Limpe o quarto do doente e o banheiro , conforme
                          necessário, para evitar contato desnecessário com o
                          doente.
                        </li>
                      </ul>
                    </p>
                    <p>
                      No entanto, algumas pessoas podem precisar de atenção
                      médica de emergência. Fique atento aos sintomas e saiba
                      quando procurar atendimento médico de emergência .
                    </p>
                    <p>Quando procurar atendimento médico de emergência</p>
                    <p>
                      Procure os sinais de alerta de emergência * para COVID-19.
                      Se alguém estiver apresentando algum desses sinais,
                      procure atendimento médico de emergência imediatamente
                    </p>
                    <ul>
                      <li>Problemas respiratórios</li>
                      <li>Dor persistente ou pressão no peito</li>
                      <li>Nova confusão</li>
                      <li>Incapacidade de acordar ou ficar acordado</li>
                      <li>Lábios ou rosto azulados</li>
                    </ul>
                    <i>
                      * Esta lista não contém todos os sintomas possíveis. Ligue
                      para o seu médico para quaisquer outros sintomas graves ou
                      preocupantes.
                    </i>
                    <p>
                      Ligue para o 911 ou ligue com antecedência para o serviço
                      de emergência local: Notifique a operadora de que você
                      está procurando atendimento para alguém que tem ou pode
                      ter COVID-19.
                    </p>
                  </div>
                </div>{" "}
              </div>
            </div>
            <div class="card bar">
              <div class="card card-accordion ">
                <div
                  class="card-header collapsed"
                  id="accordion-4-card-1"
                  data-target="#accordion-4-collapse-1"
                  data-toggle="collapse"
                  role="tab"
                  aria-expanded="false"
                >
                  <button
                    class="card-title btn btn-link"
                    data-controls="accordion-4-collapse-1"
                  >
                    <span role="heading" aria-level="1">
                      O que devo fazer se tiver tido contato próximo com alguém
                      que tem COVID-19?
                    </span>
                  </button>
                </div>
                <div
                  aria-labelledby="accordion-4-card-1"
                  class="collapse d-print-block "
                  collapsed
                  id="accordion-4-collapse-1"
                  role="tabpanel"
                >
                  <div class="card-body">
                    <ul>
                      <li>
                        Meça sua temperatura e siga as orientações do CDC se
                        tiver sintomas.
                      </li>
                      <li>
                        Esteja alerta para os sintomas. Fique atento para febre,
                        tosse, falta de ar ou outros sintomas de COVID-19.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* eslint-disable-next-line*/}
          <a
            id="criancas"
            name="criancas"
            title="criancas"
            class="onThisPageAnchor"
          ></a>
          <h3>Crianças</h3>
          <div
            id="accordion-5"
            class="accordion indicator-plus accordion-white mb-3"
            role="tablist"
          >
            <div class="card bar">
              <div class="card card-accordion ">
                <div
                  class="card-header collapsed"
                  id="accordion-5-card-0"
                  data-target="#accordion-5-collapse-0"
                  data-toggle="collapse"
                  role="tab"
                  aria-expanded="false"
                >
                  <button
                    class="card-title btn btn-link"
                    data-controls="accordion-5-collapse-0"
                  >
                    <span role="heading" aria-level="0">
                      Qual é o risco de meu filho ficar doente com COVID-19?
                    </span>
                  </button>
                </div>
                <div
                  aria-labelledby="accordion-5-card-0"
                  class="collapse d-print-block "
                  collapsed
                  id="accordion-5-collapse-0"
                  role="tabpanel"
                >
                  <div class="card-body">
                    <p>
                      Com base nas evidências disponíveis, as crianças não
                      parecem correr maior risco de contrair COVID-19 do que os
                      adultos. Embora algumas crianças e bebês tenham adoecido
                      com COVID-19, os adultos constituem a maioria dos casos
                      conhecidos até o momento. No entanto, algumas crianças
                      desenvolveram a síndrome inflamatória multissistêmica
                      (MIS-C) . Atualmente, as informações sobre essa síndrome
                      são limitadas. O CDC está trabalhando com departamentos de
                      saúde estaduais e locais para aprender mais sobre o MIS-C.
                    </p>
                  </div>
                </div>{" "}
              </div>
            </div>
            <div class="card bar">
              <div class="card card-accordion ">
                <div
                  class="card-header collapsed"
                  id="accordion-5-card-1"
                  data-target="#accordion-5-collapse-1"
                  data-toggle="collapse"
                  role="tab"
                  aria-expanded="false"
                >
                  <button
                    class="card-title btn btn-link"
                    data-controls="accordion-5-collapse-1"
                  >
                    <span role="heading" aria-level="1">
                      Como posso proteger meu filho da infecção por COVID-19?
                    </span>
                  </button>
                </div>
                <div
                  aria-labelledby="accordion-5-card-1"
                  class="collapse d-print-block "
                  collapsed
                  id="accordion-5-collapse-1"
                  role="tabpanel"
                >
                  <div class="card-body">
                    <p>
                      Você pode encorajar seu filho a ajudar a impedir a
                      disseminação de COVID-19, ensinando-o a fazer as mesmas
                      coisas que todos deveriam fazer para se manterem
                      saudáveis.
                    </p>
                    <ul>
                      <li>Evite contato próximo com pessoas doentes.</li>
                      <li>
                        Fique em casa quando estiver doente, exceto para obter
                        cuidados médicos.
                      </li>
                      <li>
                        Cubra a tosse e os espirros com um lenço de papel e
                        jogue-o no lixo.
                      </li>
                      <li>
                        Lave as mãos frequentemente com água e sabão por pelo
                        menos 20 segundos.
                      </li>
                      <li>
                        Se não houver água e sabão disponíveis, use um
                        desinfetante para as mãos à base de álcool com pelo
                        menos 60% de álcool.
                      </li>
                      <li>
                        Limpe e desinfete superfícies e objetos tocados com
                        frequência, como mesas, balcões, interruptores de luz,
                        maçanetas e puxadores de gabinete.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="card bar">
              <div class="card card-accordion ">
                <div
                  class="card-header collapsed"
                  id="accordion-5-card-2"
                  data-target="#accordion-5-collapse-2"
                  data-toggle="collapse"
                  role="tab"
                  aria-expanded="false"
                >
                  <button
                    class="card-title btn btn-link"
                    data-controls="accordion-5-collapse-2"
                  >
                    <span role="heading" aria-level="1">
                      As crianças devem usar máscaras?
                    </span>
                  </button>
                </div>
                <div
                  aria-labelledby="accordion-5-card-2"
                  class="collapse d-print-block "
                  collapsed
                  id="accordion-5-collapse-2"
                  role="tabpanel"
                >
                  <div class="card-body">
                    <p>
                      O CDC recomenda que todas as pessoas com 2 anos ou mais
                      usem uma máscara que cubra o nariz e a boca em locais
                      públicos, quando estiver perto de pessoas que não moram em
                      sua casa, particularmente onde outras medidas de
                      distanciamento social são difíceis de manter. As máscaras
                      NÃO devem ser colocadas em bebês ou crianças menores de 2
                      anos devido ao perigo de asfixia. Crianças com menos de 2
                      anos de idade são listadas como uma exceção, bem como
                      qualquer pessoa que tenha dificuldade para respirar ou
                      esteja inconsciente, incapacitada ou incapaz de remover a
                      máscara sem ajuda.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="card bar">
              <div class="card card-accordion ">
                <div
                  class="card-header collapsed"
                  id="accordion-5-card-3"
                  data-target="#accordion-5-collapse-3"
                  data-toggle="collapse"
                  role="tab"
                  aria-expanded="false"
                >
                  <button
                    class="card-title btn btn-link"
                    data-controls="accordion-5-collapse-3"
                  >
                    <span role="heading" aria-level="1">
                      O que é a síndrome inflamatória multissistêmica em
                      crianças (MIS-C) e quem está em risco?{" "}
                    </span>
                  </button>
                </div>
                <div
                  aria-labelledby="accordion-5-card-3"
                  class="collapse d-print-block "
                  collapsed
                  id="accordion-5-collapse-3"
                  role="tabpanel"
                >
                  <div class="card-body">
                    <p>
                      A síndrome inflamatória multissistêmica em crianças
                      (MIS-C) é uma condição em que diferentes partes do corpo
                      podem ficar inflamadas, incluindo coração, pulmões, rins,
                      cérebro, pele, olhos ou órgãos gastrointestinais. Ainda
                      não sabemos o que causa o MIS-C. No entanto, sabemos que
                      muitas crianças com MIS-C tinham o vírus que causa
                      COVID-19 ou já conviveram com alguém com COVID-19. A MIS-C
                      pode ser séria, até mortal, mas a maioria das crianças
                      diagnosticadas com essa condição melhorou com cuidados
                      médicos.
                    </p>
                    <p>
                      Entre em contato com o médico, enfermeira ou clínica de
                      seu filho imediatamente se ele apresentar sintomas de
                      MIS-C . Procure atendimento de emergência imediatamente se
                      seu filho apresentar algum desses sinais de alerta de
                      emergência do MIS-C ou outros sinais preocupantes.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="card bar">
              <div class="card card-accordion ">
                <div
                  class="card-header collapsed"
                  id="accordion-5-card-4"
                  data-target="#accordion-5-collapse-4"
                  data-toggle="collapse"
                  role="tab"
                  aria-expanded="false"
                >
                  <button
                    class="card-title btn btn-link"
                    data-controls="accordion-5-collapse-4"
                  >
                    <span role="heading" aria-level="1">
                      Como posso manter meus filhos saudáveis?
                    </span>
                  </button>
                </div>
                <div
                  aria-labelledby="accordion-5-card-4"
                  class="collapse d-print-block "
                  collapsed
                  id="accordion-5-collapse-4"
                  role="tabpanel"
                >
                  <div class="card-body">
                    <ul>
                      <li>
                        Observe o seu filho para detectar quaisquer sinais de
                        doença.{" "}
                      </li>
                      <li>Fique atento a sinais de estresse em seu filho. </li>
                      <li>
                        Ensine e reforce as ações preventivas do dia a dia .
                      </li>
                      <li>Ajude seu filho a se manter ativo.</li>
                      <li>
                        {" "}
                        Ajude seu filho a se manter conectado socialmente.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* eslint-disable-next-line*/}
          <a id="surto" name="surto" title="surto" class="onThisPageAnchor"></a>
          <h3>Preparando-se para um surto</h3>
          <div
            id="accordion-6"
            class="accordion indicator-plus accordion-white mb-3"
            role="tablist"
          >
            <div class="card bar">
              <div class="card card-accordion ">
                <div
                  class="card-header collapsed"
                  id="accordion-6-card-0"
                  data-target="#accordion-6-collapse-0"
                  data-toggle="collapse"
                  role="tab"
                  aria-expanded="false"
                >
                  <button
                    class="card-title btn btn-link"
                    data-controls="accordion-6-collapse-0"
                  >
                    <span role="heading" aria-level="0">
                      Como posso me preparar para um surto na minha área?{" "}
                    </span>
                  </button>
                </div>
                <div
                  aria-labelledby="accordion-6-card-0"
                  class="collapse d-print-block "
                  collapsed
                  id="accordion-6-collapse-0"
                  role="tabpanel"
                >
                  <div class="card-body">
                    <p>
                      Crie um plano de ação doméstico para ajudar a proteger sua
                      saúde e a saúde de seus entes queridos em caso de surto de
                      COVID-19 em sua comunidade:{" "}
                    </p>
                    <ul>
                      <li>
                        Converse com as pessoas que precisam ser incluídas em
                        seu plano e discuta o que fazer se ocorrer um surto de
                        COVID-19 em sua comunidade.
                      </li>
                      <li>
                        Planeje maneiras de cuidar daqueles que podem estar em
                        maior risco de complicações graves .
                        <ul>
                          <li>
                            Certifique-se de que eles tenham acesso a 2 semanas
                            de medicamentos e suprimentos, caso você precise
                            ficar em casa por períodos prolongados.
                          </li>
                        </ul>
                      </li>
                      <li>
                        Conheça seus vizinhos e descubra se sua vizinhança tem
                        um site ou página de mídia social para ficar conectado.
                      </li>
                      <li>
                        Crie uma lista de organizações locais com as quais você
                        e sua família podem entrar em contato caso precisem de
                        acesso a informações, serviços de saúde, suporte e
                        recursos.
                      </li>
                      <li>
                        Crie uma lista de contatos de emergência de familiares,
                        amigos, vizinhos, motoristas de carpool, profissionais
                        de saúde, professores, empregadores, o departamento de
                        saúde pública local e outros recursos da comunidade.
                      </li>
                    </ul>
                  </div>
                </div>{" "}
              </div>
            </div>
            <div class="card bar">
              <div class="card card-accordion ">
                <div
                  class="card-header collapsed"
                  id="accordion-6-card-1"
                  data-target="#accordion-6-collapse-1"
                  data-toggle="collapse"
                  role="tab"
                  aria-expanded="false"
                >
                  <button
                    class="card-title btn btn-link"
                    data-controls="accordion-6-collapse-1"
                  >
                    <span role="heading" aria-level="1">
                      Como posso me preparar para o COVID-19 no trabalho?{" "}
                    </span>
                  </button>
                </div>
                <div
                  aria-labelledby="accordion-6-card-1"
                  class="collapse d-print-block "
                  collapsed
                  id="accordion-6-collapse-1"
                  role="tabpanel"
                >
                  <div class="card-body">
                    <p>
                      Planeje mudanças potenciais em seu local de trabalho.
                      Converse com seu empregador sobre o plano de operações de
                      emergência, incluindo políticas de licença médica e opções
                      de teletrabalho. Aprenda como as empresas e os
                      empregadores podem planejar e responder ao COVID-19.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="card bar">
              <div class="card card-accordion ">
                <div
                  class="card-header collapsed"
                  id="accordion-6-card-2"
                  data-target="#accordion-6-collapse-2"
                  data-toggle="collapse"
                  role="tab"
                  aria-expanded="false"
                >
                  <button
                    class="card-title btn btn-link"
                    data-controls="accordion-6-collapse-2"
                  >
                    <span role="heading" aria-level="1">
                      Devo fazer meu próprio desinfetante para as mãos se não
                      conseguir encontrá-lo nas lojas?{" "}
                    </span>
                  </button>
                </div>
                <div
                  aria-labelledby="accordion-6-card-2"
                  class="collapse d-print-block "
                  collapsed
                  id="accordion-6-collapse-2"
                  role="tabpanel"
                >
                  <div class="card-body">
                    <p>
                      O CDC não incentiva a produção e uso de produtos caseiros
                      desinfetantes para as mãos devido a preocupações com o uso
                      correto dos ingredientes e a necessidade de trabalhar em
                      condições estéreis para fazer o produto. As indústrias
                      locais que desejam produzir desinfetante para as mãos para
                      suprir a escassez comercial podem consultar as orientações
                      da Organização Mundial de Saúde. As organizações devem
                      voltar ao uso de produtos produzidos comercialmente e
                      aprovados pela FDA assim que esses suprimentos estiverem
                      novamente disponíveis.
                    </p>
                    <ul>
                      <li>
                        Para serem eficazes contra a morte de alguns tipos de
                        germes, os desinfetantes para as mãos precisam ter uma
                        concentração de pelo menos 60% de álcool e ser usados
                        ​​quando as mãos não estão visivelmente sujas ou
                        oleosas.
                      </li>
                      <li>
                        Não confie em receitas do tipo “faça você mesmo” ou
                        “faça você mesmo” baseadas exclusivamente em óleos
                        essenciais ou formuladas sem práticas corretas de
                        composição.
                      </li>
                      <li>
                        Não use desinfetante para as mãos para desinfetar
                        superfícies e objetos tocados com frequência. Consulte
                        as informações do CDC para limpeza e higienização de sua
                        casa .
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* eslint-disable-next-line*/}
            <a
              id="emergencia"
              name="emergencia"
              title="emergencia"
              class="onThisPageAnchor"
            ></a>
            <h3>Sintomas e sinais de alerta de emergência</h3>
            <div
              id="accordion-7"
              class="accordion indicator-plus accordion-white mb-3"
              role="tablist"
            >
              <div class="card bar">
                <div class="card card-accordion ">
                  <div
                    class="card-header collapsed"
                    id="accordion-7-card-0"
                    data-target="#accordion-7-collapse-0"
                    data-toggle="collapse"
                    role="tab"
                    aria-expanded="false"
                  >
                    <button
                      class="card-title btn btn-link"
                      data-controls="accordion-7-collapse-0"
                    >
                      <span role="heading" aria-level="0">
                        Quais são os sintomas e complicações que o COVID-19 pode
                        causar?{" "}
                      </span>
                    </button>
                  </div>
                  <div
                    aria-labelledby="accordion-7-card-0"
                    class="collapse d-print-block "
                    collapsed
                    id="accordion-7-collapse-0"
                    role="tabpanel"
                  >
                    <div class="card-body">
                      <p>
                        Pessoas com COVID-19 relataram uma ampla gama de
                        sintomas - de sintomas leves a doenças graves. Os
                        sintomas podem aparecer de 2 a 14 dias após a exposição
                        ao vírus . Se você tiver febre, tosse ou outros sintomas
                        , pode estar com COVID-19.
                      </p>
                    </div>
                  </div>{" "}
                </div>
              </div>
              <div class="card bar">
                <div class="card card-accordion ">
                  <div
                    class="card-header collapsed"
                    id="accordion-7-card-1"
                    data-target="#accordion-7-collapse-1"
                    data-toggle="collapse"
                    role="tab"
                    aria-expanded="false"
                  >
                    <button
                      class="card-title btn btn-link"
                      data-controls="accordion-7-collapse-1"
                    >
                      <span role="heading" aria-level="1">
                        Quando devo procurar atendimento de emergência se tiver
                        COVID-19?{" "}
                      </span>
                    </button>
                  </div>
                  <div
                    aria-labelledby="accordion-7-card-1"
                    class="collapse d-print-block "
                    collapsed
                    id="accordion-7-collapse-1"
                    role="tabpanel"
                  >
                    <div class="card-body">
                      <p>
                        Procure os sinais de alerta de emergência * para
                        COVID-19. Se alguém estiver apresentando algum desses
                        sinais, procure atendimento médico de emergência
                        imediatamente
                      </p>
                      <ul>
                        <li>Problemas respiratórios</li>
                        <li>Dor persistente ou pressão no peito</li>
                        <li>Nova confusão</li>
                        <li>Incapacidade de acordar ou ficar acordado</li>
                        <li>Lábios ou rosto azulados</li>
                      </ul>
                      <i>
                        * Esta lista não contém todos os sintomas possíveis.
                        Ligue para o seu médico para quaisquer outros sintomas
                        graves ou preocupantes.
                      </i>
                      <p>
                        Ligue para o 911 ou ligue com antecedência para o
                        serviço de emergência local: Notifique a operadora de
                        que você está procurando atendimento para alguém que tem
                        ou pode ter COVID-19.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card bar">
                <div class="card card-accordion ">
                  <div
                    class="card-header collapsed"
                    id="accordion-7-card-2"
                    data-target="#accordion-7-collapse-2"
                    data-toggle="collapse"
                    role="tab"
                    aria-expanded="false"
                  >
                    <button
                      class="card-title btn btn-link"
                      data-controls="accordion-7-collapse-2"
                    >
                      <span role="heading" aria-level="1">
                        É possível ter gripe e COVID-19 ao mesmo tempo?
                      </span>
                    </button>
                  </div>
                  <div
                    aria-labelledby="accordion-7-card-2"
                    class="collapse d-print-block "
                    collapsed
                    id="accordion-7-collapse-2"
                    role="tabpanel"
                  >
                    <div class="card-body">
                      <p>
                        Sim. É possível testar positivo para gripe (bem como
                        outras infecções respiratórias) e COVID-19 ao mesmo
                        tempo.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* eslint-disable-next-line*/}
            <a
              id="testando"
              name="testando"
              title="emergencia"
              class="onThisPageAnchor"
            ></a>
            <h3>Testando</h3>
            <div
              id="accordion-8"
              class="accordion indicator-plus accordion-white mb-3"
              role="tablist"
            >
              <div class="card bar">
                <div class="card card-accordion ">
                  <div
                    class="card-header collapsed"
                    id="accordion-8-card-0"
                    data-target="#accordion-8-collapse-0"
                    data-toggle="collapse"
                    role="tab"
                    aria-expanded="false"
                  >
                    <button
                      class="card-title btn btn-link"
                      data-controls="accordion-8-collapse-0"
                    >
                      <span role="heading" aria-level="0">
                        Devo ser testado para uma infecção atual?{" "}
                      </span>
                    </button>
                  </div>
                  <div
                    aria-labelledby="accordion-8-card-0"
                    class="collapse d-print-block "
                    collapsed
                    id="accordion-8-collapse-0"
                    role="tabpanel"
                  >
                    <div class="card-body">
                      <p>
                        Talvez; nem todos precisam ser testados para COVID-19.
                      </p>
                      <p>
                        Se você tiver sintomas de COVID-19 e quiser fazer o
                        teste, ligue primeiro para o seu médico. A maioria das
                        pessoas terá uma doença leve e pode se recuperar em casa
                        sem cuidados médicos e pode não precisar ser testada
                      </p>
                      <p>
                        O CDC tem orientações sobre quem deve ser testado, mas
                        as decisões sobre o teste são tomadas pelos
                        departamentos de saúde locais e estaduais e pelos
                        provedores de saúde.
                      </p>
                      <p>
                        Você também pode visitar o site do departamento de saúde
                        local ou estadual para procurar as informações locais
                        mais recentes sobre o teste.
                      </p>
                    </div>
                  </div>{" "}
                </div>
              </div>
              <div class="card bar">
                <div class="card card-accordion ">
                  <div
                    class="card-header collapsed"
                    id="accordion-8-card-1"
                    data-target="#accordion-8-collapse-1"
                    data-toggle="collapse"
                    role="tab"
                    aria-expanded="false"
                  >
                    <button
                      class="card-title btn btn-link"
                      data-controls="accordion-8-collapse-1"
                    >
                      <span role="heading" aria-level="1">
                        Como posso fazer o teste para uma infecção atual (teste
                        viral) e o que meu teste significa?
                      </span>
                    </button>
                  </div>
                  <div
                    aria-labelledby="accordion-8-card-1"
                    class="collapse d-print-block "
                    collapsed
                    id="accordion-8-collapse-1"
                    role="tabpanel"
                  >
                    <div class="card-body">
                      <p>
                        As decisões sobre o teste são feitas pelo estado e
                        localícone externodepartamentos de saúde ou provedores
                        de saúde. Se você tiver sintomas de COVID-19 e não for
                        testado, é importante ficar em casa. O que fazer se você
                        estiver doente .
                      </p>

                      <p>
                        O teste COVID-19 difere de acordo com a localização. Se
                        você tiver sintomas de COVID-19 e quiser fazer o teste,
                        ligue primeiro para o seu médico. Você também pode
                        visitar seu estado ou localsite do departamento de saúde
                        para procurar as informações locais mais recentes sobre
                        testes. A Food and Drug Administration (FDA) dos EUA
                        autorizou testes virais que permitem a coleta de um
                        cotonete nasal ou como amostra aliva em casa. No
                        entanto, você ainda precisará enviar sua amostra a um
                        laboratório para análise.
                      </p>
                      <p>
                        Se seu teste for positivo para COVID-19 , saiba quais
                        medidas de proteção devem ser tomadas se você estiver
                        doente ou cuidando de alguém .
                      </p>
                      <p>
                        Se seu teste for negativo para COVID-19 , provavelmente
                        você não estava infectado no momento da coleta da
                        amostra. No entanto, isso não significa que você não
                        ficará doente. O resultado do teste significa apenas que
                        você não tinha COVID-19 no momento do teste. Você pode
                        testar negativo se a amostra foi coletada no início de
                        sua infecção e teste positivo mais tarde durante sua
                        doença. Você também pode ser exposto ao COVID-19 após o
                        teste e, então, ser infectado. Isso significa que você
                        ainda pode espalhar o vírus. Se você desenvolver
                        sintomas posteriormente, pode ser necessário outro teste
                        para determinar se você está infectado com o vírus que
                        causa o COVID-19.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card bar">
                <div class="card card-accordion ">
                  <div
                    class="card-header collapsed"
                    id="accordion-8-card-2"
                    data-target="#accordion-8-collapse-2"
                    data-toggle="collapse"
                    role="tab"
                    aria-expanded="false"
                  >
                    <button
                      class="card-title btn btn-link"
                      data-controls="accordion-8-collapse-2"
                    >
                      <span role="heading" aria-level="1">
                        Como posso fazer o teste de uma infecção anterior (teste
                        de anticorpos) e o que meu teste significa?{" "}
                      </span>
                    </button>
                  </div>
                  <div
                    aria-labelledby="accordion-8-card-2"
                    class="collapse d-print-block "
                    collapsed
                    id="accordion-8-collapse-2"
                    role="tabpanel"
                  >
                    <div class="card-body">
                      <p>
                        Os testes de anticorpos para COVID-19 estão disponíveis
                        através de laboratórios e provedores de saúde. Verifique
                        com seu provedor de serviços de saúde se eles oferecem
                        testes de anticorpos e se você deve fazer um.
                      </p>
                      <p>
                        Um resultado de teste positivo mostra que você pode ter
                        anticorpos de uma infecção com o vírus que causa
                        COVID-19. No entanto, existe uma chance de um resultado
                        positivo significar que você possui anticorpos de uma
                        infecção com um vírus da mesma família de vírus
                        (chamados coronavírus), como o que causa o resfriado
                        comum.
                      </p>
                      <p>
                        Ter anticorpos contra o vírus que causa o COVID-19 pode
                        fornecer proteção contra a infecção pelo vírus
                        novamente. Em caso afirmativo, não sabemos quanta
                        proteção os anticorpos podem fornecer ou quanto tempo
                        essa proteção pode durar.
                      </p>
                      <p>
                        Você deve continuar a se proteger e a proteger os
                        outros, pois pode ser infectado pelo vírus novamente.
                      </p>
                      <p>
                        Se seu teste for negativo, você pode nunca ter tido
                        COVID-19. Converse com seu médico sobre o resultado do
                        seu teste e o tipo de teste que você fez para entender o
                        que significa o seu resultado.
                      </p>
                      <p>
                        Independentemente de seu teste ser positivo ou negativo,
                        os resultados não confirmam se você é ou não capaz de
                        espalhar o vírus que causa COVID-19. Até que saibamos
                        mais, continue tomando medidas para proteger a si e aos
                        outros .
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card bar">
                <div class="card card-accordion ">
                  <div
                    class="card-header collapsed"
                    id="accordion-8-card-3"
                    data-target="#accordion-8-collapse-3"
                    data-toggle="collapse"
                    role="tab"
                    aria-expanded="false"
                  >
                    <button
                      class="card-title btn btn-link"
                      data-controls="accordion-8-collapse-3"
                    >
                      <span role="heading" aria-level="1">
                        Alguém pode testar negativo e, posteriormente, positivo
                        em um teste viral para COVID-19?{" "}
                      </span>
                    </button>
                  </div>
                  <div
                    aria-labelledby="accordion-8-card-3"
                    class="collapse d-print-block "
                    collapsed
                    id="accordion-8-collapse-3"
                    role="tabpanel"
                  >
                    <div class="card-body">
                      <p>
                        Sim, é possível. Você pode testar negativo se a amostra
                        foi coletada no início de sua infecção e teste positivo
                        posteriormente durante a doença. Você também pode ser
                        exposto ao COVID-19 após o teste e, então, ser
                        infectado. Mesmo se seu teste for negativo, você ainda
                        deve tomar medidas para  se proteger e proteger os
                        outros . Consulte Teste de infecção atual para obter
                        mais informações.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* eslint-disable-next-line*/}
            <a
              id="doenca"
              name="doenca"
              title="doenca"
              class="onThisPageAnchor"
            ></a>
            <h3>Pessoas com alto risco de doença grave</h3>
            <div
              id="accordion-9"
              class="accordion indicator-plus accordion-white mb-3"
              role="tablist"
            >
              <div class="card bar">
                <div class="card card-accordion ">
                  <div
                    class="card-header collapsed"
                    id="accordion-9-card-0"
                    data-target="#accordion-9-collapse-0"
                    data-toggle="collapse"
                    role="tab"
                    aria-expanded="false"
                  >
                    <button
                      class="card-title btn btn-link"
                      data-controls="accordion-9-collapse-0"
                    >
                      <span role="heading" aria-level="0">
                        Quem corre maior risco de contrair doenças graves devido
                        ao COVID-19?{" "}
                      </span>
                    </button>
                  </div>
                  <div
                    aria-labelledby="accordion-9-card-0"
                    class="collapse d-print-block "
                    collapsed
                    id="accordion-9-collapse-0"
                    role="tabpanel"
                  >
                    <div class="card-body">
                      <p>
                        COVID-19 é uma doença nova e as informações sobre os
                        fatores de risco para doença grave são limitadas. Com
                        base nas informações atualmente disponíveis e na
                        experiência clínica, adultos mais velhos e pessoas com
                        condições médicas subjacentes estão em maior risco de
                        doença grave devido ao COVID-19.
                      </p>
                    </div>
                  </div>{" "}
                </div>
              </div>
              <div class="card bar">
                <div class="card card-accordion ">
                  <div
                    class="card-header collapsed"
                    id="accordion-9-card-1"
                    data-target="#accordion-9-collapse-1"
                    data-toggle="collapse"
                    role="tab"
                    aria-expanded="false"
                  >
                    <button
                      class="card-title btn btn-link"
                      data-controls="accordion-9-collapse-1"
                    >
                      <span role="heading" aria-level="1">
                        O que as pessoas com alto risco de doenças graves com
                        COVID-19 devem fazer?{" "}
                      </span>
                    </button>
                  </div>
                  <div
                    aria-labelledby="accordion-9-card-1"
                    class="collapse d-print-block "
                    collapsed
                    id="accordion-9-collapse-1"
                    role="tabpanel"
                  >
                    <div class="card-body">
                      <p>
                        Se você está em maior risco de doença grave devido ao
                        COVID-19, você deve:
                      </p>

                      <ul>
                        <li>
                          Limite suas interações com outras pessoas tanto quanto
                          possível.
                        </li>
                        <li>
                          Tome precauções para evitar o recebimento do COVID-19
                          ao interagir com outras pessoas.
                        </li>
                        <li>
                          Se você decidir se envolver em atividades públicas,
                          continue a se proteger praticando ações preventivas
                          diárias .
                        </li>
                        <li>
                          Mantenha esses itens à mão e use-os quando se
                          aventurar: uma máscara, lenços de papel e um
                          desinfetante para as mãos com pelo menos 60% de
                          álcool, se possível.
                        </li>
                        <li>
                          Se possível, evite outras pessoas que não estejam
                          usando máscaras ou peça às pessoas ao seu redor para
                          usarem máscaras.
                        </li>
                        <li>
                          Atrase ou cancele uma visita se você ou seus
                          visitantes tiverem sintomas de COVID-19 ou tiverem
                          sido expostos a alguém com COVID-19 nos últimos 14
                          dias.
                        </li>
                        <li>
                          Qualquer pessoa que teve contato próximo com uma
                          pessoa com COVID-19 deve ficar em casa e monitorar os
                          sintomas .
                        </li>
                        <li>
                          Continue seus medicamentos e não mude seu plano de
                          tratamento sem falar com seu médico.
                        </li>
                        <li>
                          Tenha pelo menos um suprimento de medicamentos com e
                          sem receita médica para 30 dias .
                        </li>
                        <li>
                          Não atrase o atendimento de emergência para sua
                          condição médica subjacente por causa do COVID-19. Os
                          departamentos de emergência têm planos de prevenção de
                          infecção de contingência para protegê-lo de receber
                          COVID-19 se precisar de cuidados.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card bar">
                <div class="card card-accordion ">
                  <div
                    class="card-header collapsed"
                    id="accordion-9-card-2"
                    data-target="#accordion-9-collapse-2"
                    data-toggle="collapse"
                    role="tab"
                    aria-expanded="false"
                  >
                    <button
                      class="card-title btn btn-link"
                      data-controls="accordion-9-collapse-2"
                    >
                      <span role="heading" aria-level="1">
                        As pessoas com deficiência correm maior risco?{" "}
                      </span>
                    </button>
                  </div>
                  <div
                    aria-labelledby="accordion-9-card-2"
                    class="collapse d-print-block "
                    collapsed
                    id="accordion-9-collapse-2"
                    role="tabpanel"
                  >
                    <div class="card-body">
                      <p>
                        A maioria das pessoas com deficiência não apresenta um
                        risco inerentemente maior de se infectar ou ter uma
                        doença grave de COVID-19. Algumas pessoas com limitações
                        físicas ou outras deficiências podem correr um risco
                        maior de infecção devido à sua condição médica
                        subjacente.
                      </p>
                      <ul>
                        <li>
                          Pessoas com certas deficiências podem apresentar taxas
                          mais altas de condições crônicas de saúde que as
                          colocam em maior risco de doenças graves e resultados
                          piores do COVID-19. Adultos com deficiência têm três
                          vezes mais probabilidade de ter doenças cardíacas,
                          derrame, diabetes ou câncer do que adultos sem
                          deficiência.
                        </li>
                      </ul>
                      <p>
                        Você deve conversar com seu médico se tiver alguma
                        dúvida sobre sua saúde ou como sua condição de saúde
                        está sendo tratada.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* eslint-disable-next-line*/}
          <a
            id="contato"
            name="contato"
            title="contato"
            class="onThisPageAnchor"
          ></a>
          <h3>Rastreamento de contato</h3>
          <div
            id="accordion-10"
            class="accordion indicator-plus accordion-white mb-3"
            role="tablist"
          >
            <div class="card bar">
              <div class="card card-accordion ">
                <div
                  class="card-header collapsed"
                  id="accordion-10-card-0"
                  data-target="#accordion-10-collapse-0"
                  data-toggle="collapse"
                  role="tab"
                  aria-expanded="false"
                >
                  <button
                    class="card-title btn btn-link"
                    data-controls="accordion-10-collapse-0"
                  >
                    <span role="heading" aria-level="0">
                      O que é Rastreamento de contato?
                    </span>
                  </button>
                </div>
                <div
                  aria-labelledby="accordion-10-card-0"
                  class="collapse d-print-block "
                  collapsed
                  id="accordion-10-collapse-0"
                  role="tabpanel"
                >
                  <div class="card-body">
                    <p>
                      O rastreamento de contatos tem sido usado há décadas pelos
                      departamentos de saúde estaduais e locais para desacelerar
                      ou impedir a propagação de doenças infecciosas.
                    </p>
                    <p>
                      Rastreamento de contato retarda a disseminação de COVID-19
                      em
                    </p>
                    <ul>
                      <li>
                        Informar as pessoas que podem ter sido expostas ao
                        COVID-19 e devem monitorar sua saúde quanto a sinais e
                        sintomas de COVID-19
                      </li>
                      <li>
                        Ajudar as pessoas que podem ter sido expostas ao
                        COVID-19 a fazer o teste
                      </li>
                      <li>
                        Pedir às pessoas que se isolem se tiverem COVID-19 ou
                        que se auto-quarentenem se forem um contato próximo de
                        alguém com COVID-19
                      </li>
                    </ul>
                    <p>
                      Durante o rastreamento de contato, a equipe do
                      departamento de saúde não pedirá
                    </p>
                    <ul>
                      <li>Dinheiro</li>
                      <li>Número da Segurança Social</li>
                      <li>Informações de conta bancária</li>
                      <li>Informação de salário</li>
                      <li>Números de cartão de crédito</li>
                    </ul>
                  </div>
                </div>{" "}
              </div>
            </div>
            <div class="card bar">
              <div class="card card-accordion ">
                <div
                  class="card-header collapsed"
                  id="accordion-10-card-1"
                  data-target="#accordion-10-collapse-1"
                  data-toggle="collapse"
                  role="tab"
                  aria-expanded="false"
                >
                  <button
                    class="card-title btn btn-link"
                    data-controls="accordion-10-collapse-1"
                  >
                    <span role="heading" aria-level="1">
                      Quem é considerado um contato próximo a alguém com
                      COVID-19?{" "}
                    </span>
                  </button>
                </div>
                <div
                  aria-labelledby="accordion-10-card-1"
                  class="collapse d-print-block "
                  collapsed
                  id="accordion-10-collapse-1"
                  role="tabpanel"
                >
                  <div class="card-body">
                    <p>
                      Para COVID-19, um contato próximo é qualquer pessoa que
                      esteve a menos de 2 metros de uma pessoa infectada por
                      pelo menos 15 minutos. Uma pessoa infectada pode
                      transmitir COVID-19 a partir de 48 horas (ou 2 dias) antes
                      de a pessoa apresentar qualquer sintoma ou o teste ser
                      positivo para COVID-19.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="card bar">
              <div class="card card-accordion ">
                <div
                  class="card-header collapsed"
                  id="accordion-10-card-2"
                  data-target="#accordion-10-collapse-2"
                  data-toggle="collapse"
                  role="tab"
                  aria-expanded="false"
                >
                  <button
                    class="card-title btn btn-link"
                    data-controls="accordion-10-collapse-2"
                  >
                    <span role="heading" aria-level="1">
                      Eu sou considerado um contato próximo se eu estiver usando
                      uma máscara?{" "}
                    </span>
                  </button>
                </div>
                <div
                  aria-labelledby="accordion-10-card-2"
                  class="collapse d-print-block "
                  collapsed
                  id="accordion-10-collapse-2"
                  role="tabpanel"
                >
                  <div class="card-body">
                    <p>
                      Sim, você ainda é considerado um contato próximo, mesmo
                      que usasse uma máscara enquanto estava perto de alguém com
                      COVID-19. As máscaras destinam-se a proteger outras
                      pessoas no caso de você ser infectado e não para evitar
                      que seja infectado.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="card bar">
              <div class="card card-accordion ">
                <div
                  class="card-header collapsed"
                  id="accordion-10-card-3"
                  data-target="#accordion-10-collapse-3"
                  data-toggle="collapse"
                  role="tab"
                  aria-expanded="false"
                >
                  <button
                    class="card-title btn btn-link"
                    data-controls="accordion-10-collapse-3"
                  >
                    <span role="heading" aria-level="1">
                      Se eu for um contato próximo, serei testado para COVID-19?{" "}
                    </span>
                  </button>
                </div>
                <div
                  aria-labelledby="accordion-10-card-3"
                  class="collapse d-print-block "
                  collapsed
                  id="accordion-10-collapse-3"
                  role="tabpanel"
                >
                  <div class="card-body">
                    <p>
                      Se você tem convivido com alguém que está doente com
                      COVID-19, o CDC recomenda que você faça o teste para
                      COVID-19. Faça o teste para COVID-19 assim que souber que
                      tem estado perto de uma pessoa com diagnóstico de
                      COVID-19. O departamento de saúde pode fornecer recursos
                      para testes em sua área.
                    </p>
                    <ul>
                      <li>
                        Enquanto você espera pelo resultado do seu teste
                        COVID-19, fique em casa longe de outras pessoas (
                        auto-quarentena ) e monitore sua saúde quanto a sintomas
                        de COVID-19 para proteger seus amigos, família e outras
                        pessoas de possivelmente receber COVID-19.
                      </li>
                      <li>
                        Se o seu teste for positivo , você deve continuar a
                        ficar em casa , isolar- se e monitorar sua saúde. Se
                        você tiver sintomas de COVID-19 e eles piorarem ou se
                        tornarem graves, você deve procurar atendimento médico
                        de emergência. Os sintomas graves incluem dificuldade
                        para respirar, dor persistente ou pressão no peito,
                        confusão, incapacidade de acordar ou permanecer acordado
                        ou lábios ou rosto azulados. Alguém do departamento de
                        saúde pode ligar para você para
                        <ul>
                          <li>Verifique sua saúde,</li>
                          <li>Discuta com quem você tem convivido e</li>
                          <li>
                            Pergunte onde você passou um tempo enquanto pode
                            espalhar o COVID-19 para outras pessoas.
                          </li>
                        </ul>
                      </li>
                      <li>
                        Se o seu teste for negativo e você não tiver sintomas,
                        você deve continuar em casa e ficar em quarentena longe
                        de outras pessoas por 14 dias após sua última exposição
                        ao COVID-19 e seguir todas as recomendações do
                        departamento de saúde. Isso é importante porque os
                        sintomas podem aparecer até 14 dias após a exposição e a
                        infecção. Um resultado negativo antes do final do
                        período de quarentena não exclui uma possível infecção.
                        Além disso, você não precisa repetir o teste, a menos
                        que desenvolva sintomas ou se você precisar de um teste
                        para voltar ao trabalho.
                      </li>
                      <li>
                        Se o seu teste for negativo e você tiver sintomas, você
                        deve continuar a fazer a auto-quarentena longe de outras
                        pessoas e seguir todas as recomendações do departamento
                        de saúde. Um segundo teste e uma consulta médica
                        adicional podem ser necessários se os sintomas não
                        melhorarem.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="card bar">
              <div class="card card-accordion ">
                <div
                  class="card-header collapsed"
                  id="accordion-10-card-4"
                  data-target="#accordion-10-collapse-4"
                  data-toggle="collapse"
                  role="tab"
                  aria-expanded="false"
                >
                  <button
                    class="card-title btn btn-link"
                    data-controls="accordion-10-collapse-4"
                  >
                    <span role="heading" aria-level="1">
                      Eu estava perto de alguém com COVID-19, e meu teste
                      COVID-19 deu negativo.{" "}
                    </span>
                  </button>
                </div>
                <div
                  aria-labelledby="accordion-10-card-4"
                  class="collapse d-print-block "
                  collapsed
                  id="accordion-10-collapse-4"
                  role="tabpanel"
                >
                  <div class="card-body">
                    <p>
                      Sim. Você ainda deve ficar em quarentena por 14 dias desde
                      sua última exposição. Pode levar até 14 dias após a
                      exposição ao vírus para que uma pessoa desenvolva os
                      sintomas do COVID-19. Um resultado negativo antes do final
                      do período de quarentena de 14 dias não exclui uma
                      possível infecção. Colocando em quarentena por 14 dias,
                      você diminui a chance de expor outras pessoas ao COVID-19.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* eslint-disable-next-line*/}
          <a
            id="funerais"
            name="funerais"
            title="funerais"
            class="onThisPageAnchor"
          ></a>
          <h3>Funerais</h3>
          <div
            id="accordion-11"
            class="accordion indicator-plus accordion-white mb-3"
            role="tablist"
          >
            <div class="card bar">
              <div class="card card-accordion ">
                <div
                  class="card-header collapsed"
                  id="accordion-11-card-0"
                  data-target="#accordion-11-collapse-0"
                  data-toggle="collapse"
                  role="tab"
                  aria-expanded="false"
                >
                  <button
                    class="card-title btn btn-link"
                    data-controls="accordion-11-collapse-0"
                  >
                    <span role="heading" aria-level="0">
                      Corro risco se for a um funeral ou a um serviço de
                      visitação de alguém que morreu de COVID-19?{" "}
                    </span>
                  </button>
                </div>
                <div
                  aria-labelledby="accordion-11-card-0"
                  class="collapse d-print-block "
                  collapsed
                  id="accordion-11-collapse-0"
                  role="tabpanel"
                >
                  <div class="card-body">
                    <p>
                      Atualmente, não há risco conhecido associado a estar na
                      mesma sala em um funeral ou serviço de visitação com o
                      corpo de alguém que morreu de COVID-19.
                    </p>
                    <p>
                      Consulte Como se proteger e aos outros para aprender como
                      se proteger de doenças respiratórias, como o COVID-19, se
                      você decidir ir a um funeral ou a uma visita.
                    </p>
                  </div>
                </div>{" "}
              </div>
            </div>
            <div class="card bar">
              <div class="card card-accordion ">
                <div
                  class="card-header collapsed"
                  id="accordion-11-card-1"
                  data-target="#accordion-11-collapse-1"
                  data-toggle="collapse"
                  role="tab"
                  aria-expanded="false"
                >
                  <button
                    class="card-title btn btn-link"
                    data-controls="accordion-11-collapse-1"
                  >
                    <span role="heading" aria-level="1">
                      Corro risco se tocar em alguém que morreu de COVID-19
                      depois de falecer?
                    </span>
                  </button>
                </div>
                <div
                  aria-labelledby="accordion-11-card-1"
                  class="collapse d-print-block "
                  collapsed
                  id="accordion-11-collapse-1"
                  role="tabpanel"
                >
                  <div class="card-body">
                    <p>
                      COVID-19 é uma doença nova e ainda estamos aprendendo como
                      ela se espalha. Acredita-se que o vírus que causa o
                      COVID-19 se espalhe principalmente de pessoa para pessoa
                      por meio de gotículas respiratórias produzidas quando uma
                      pessoa infectada tosse, espirra ou fala. Essas gotículas
                      podem cair na boca ou no nariz de pessoas que estão
                      próximas ou possivelmente ser inaladas para os pulmões.
                      Este tipo de disseminação não é uma preocupação após a
                      morte.
                    </p>
                    <p>
                      Pode ser possível que uma pessoa obtenha COVID-19 tocando
                      uma superfície ou objeto que contenha o vírus e, em
                      seguida, tocando sua própria boca, nariz ou possivelmente
                      seus olhos. Esta não é considerada a principal forma de
                      propagação do vírus.
                    </p>
                    <p>
                      As pessoas devem pensar em não tocar no corpo de alguém
                      que morreu de COVID-19. Idosos e pessoas de todas as
                      idades com graves condições de saúde subjacentes correm
                      maior risco de doenças graves devido ao COVID-19. Pode
                      haver menos chance de o vírus se espalhar por certos tipos
                      de toque, como segurar a mão ou abraçar depois que o corpo
                      foi preparado para visualização. Outras atividades, como
                      beijar, se lavar e se cobrir, devem ser evitadas antes,
                      durante e depois que o corpo foi preparado, se possível.
                      Se lavar o corpo ou forrar o corpo são práticas religiosas
                      ou culturais importantes, as famílias são incentivadas a
                      trabalhar com os líderes culturais e religiosos da
                      comunidade e com a equipe da agência funerária sobre como
                      reduzir sua exposição ao máximo. No mínimo, as pessoas que
                      realizam essas atividades devem usar luvas descartáveis.Se
                      respingos de fluidos forem esperados, equipamento de
                      proteção individual (EPI) adicional pode ser necessário
                      (como bata descartável, protetor facial ou óculos e
                      respirador N-95).
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="card bar">
              <div class="card card-accordion ">
                <div
                  class="card-header collapsed"
                  id="accordion-11-card-2"
                  data-target="#accordion-11-collapse-2"
                  data-toggle="collapse"
                  role="tab"
                  aria-expanded="false"
                >
                  <button
                    class="card-title btn btn-link"
                    data-controls="accordion-11-collapse-2"
                  >
                    <span role="heading" aria-level="1">
                      Como os entes queridos podem lidar com segurança com os
                      pertences de alguém que morreu de COVID-19?
                    </span>
                  </button>
                </div>
                <div
                  aria-labelledby="accordion-11-card-2"
                  class="collapse d-print-block "
                  collapsed
                  id="accordion-11-collapse-2"
                  role="tabpanel"
                >
                  <div class="card-body">
                    <p>
                      Se desejar, você pode recuperar os pertences de um ente
                      querido que morreu de COVID-19 fora de sua casa (por
                      exemplo, em um hospital). Dependendo das regras e
                      regulamentos locais, os membros da família podem retirar
                      esses pertences na casa funerária ou na unidade de saúde.
                    </p>
                    <p>
                      Você deve usar luvas e praticar uma boa higiene das mãos
                      ao manusear os pertences de seus entes queridos.
                      Dependendo do tipo de pertences, como eletrônicos, você
                      também deve seguir as diretrizes de limpeza e desinfecção
                      específicas para itens domésticos ao manusear esses itens.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="card bar">
              <div class="card card-accordion ">
                <div
                  class="card-header collapsed"
                  id="accordion-11-card-4"
                  data-target="#accordion-11-collapse-4"
                  data-toggle="collapse"
                  role="tab"
                  aria-expanded="false"
                >
                  <button
                    class="card-title btn btn-link"
                    data-controls="accordion-11-collapse-4"
                  >
                    <span role="heading" aria-level="1">
                      O que devo fazer se meu familiar faleceu de COVID-19
                      enquanto estava no exterior?{" "}
                    </span>
                  </button>
                </div>
                <div
                  aria-labelledby="accordion-11-card-4"
                  class="collapse d-print-block "
                  collapsed
                  id="accordion-11-collapse-4"
                  role="tabpanel"
                >
                  <div class="card-body">
                    <p>
                      SQuando um cidadão americano morre fora dos Estados
                      Unidos, os parentes ou representantes legais do falecido
                      devem notificar as autoridades consulares dos EUA no
                      Departamento de Estado. O pessoal consular está disponível
                      24 horas por dia, 7 dias por semana, para fornecer
                      assistência aos cidadãos dos EUA em emergências no
                      exterior. Se um membro da família, parceiro doméstico ou
                      representante legal estiver em um país diferente do
                      falecido, ele deve ligar para o Escritório de Serviços
                      para Cidadãos Estrangeiros do Departamento de Estado em
                      Washington, DC, das 8h às 17h, horário do leste,
                      segunda-feira até sexta-feira, em 888-407-4747 (ligação
                      gratuita) ou 202-501-4444. Para obter assistência de
                      emergência após o horário de trabalho ou nos fins de
                      semana e feriados, ligue para a mesa telefônica do
                      Departamento de Estado no telefone 202-647-4000 e peça
                      para falar com o oficial de serviço dos Serviços ao
                      Cidadão Internacional. Além disso, o Embaixada dos Estados
                      Unidos mais próximo ou no país onde o cidadão americano
                      morreu pode fornecer assistência.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="card bar">
              <div class="card card-accordion ">
                <div
                  class="card-header collapsed"
                  id="accordion-11-card-3"
                  data-target="#accordion-11-collapse-3"
                  data-toggle="collapse"
                  role="tab"
                  aria-expanded="false"
                >
                  <button
                    class="card-title btn btn-link"
                    data-controls="accordion-11-collapse-3"
                  >
                    <span role="heading" aria-level="1">
                      Quais são os requisitos para devolver o corpo aos Estados
                      Unidos?
                    </span>
                  </button>
                </div>
                <div
                  aria-labelledby="accordion-11-card-3"
                  class="collapse d-print-block "
                  collapsed
                  id="accordion-11-collapse-3"
                  role="tabpanel"
                >
                  <div class="card-body">
                    <p>
                      O CDC não exige uma autópsia antes que os restos mortais
                      de uma pessoa que morreu no exterior sejam devolvidos aos
                      Estados Unidos. Dependendo das circunstâncias da morte,
                      alguns países podem exigir uma autópsia. As fontes de
                      apoio à família incluem o consulado ou embaixada local, o
                      provedor de seguro de viagem, o operador turístico,
                      organizações religiosas e de ajuda humanitária e o
                      empregador do falecido. Provavelmente será necessária uma
                      identificação oficial do órgão e documentos oficiais
                      emitidos pela repartição consular.
                    </p>
                    <p>
                      Os requisitos do CDC para a importação de restos mortais
                      humanos dependem se o corpo foi embalsamado, cremado ou se
                      a pessoa morreu de uma doença transmissível em quarentena
                      .
                    </p>
                    <p>
                      No momento, COVID-19 é uma doença transmissível em
                      quarentena nos Estados Unidos e os restos mortais devem
                      atender aos padrões de importação encontrados no Código de
                      Regulamentações Federais 42, Parte 71.55 e podem ser
                      liberados, liberados e autorizados para entrada apenas nos
                      Estados Unidos sob as seguintes condições:
                    </p>
                    <ul>
                      <li>Os restos mortais são cremados; OU</li>
                      <li>
                        Os restos mortais são devidamente embalsamados e
                        colocados em um recipiente à prova de vazamentos; OU
                      </li>
                      <li>
                        Os restos mortais são acompanhados por uma licença
                        emitida pelo Diretor do CDC. A licença CDC (se
                        aplicável) deve acompanhar os restos mortais humanos em
                        todos os momentos durante o transporte.{" "}
                      </li>
                      <ul>
                        <li>
                          As autorizações para a importação de restos mortais de
                          uma pessoa conhecida ou suspeita de ter morrido de uma
                          doença transmissível em quarentena podem ser obtidas
                          através da Divisão de Migração Global e Quarentena do
                          CDC ligando para o Centro de Operações de Emergência
                          do CDC em 770-488-7100 ou enviando um e-mail para
                          dgmqpolicyoffice@cdc.gov .
                        </li>
                      </ul>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* eslint-disable-next-line*/}
            <a
              id="limpeza"
              name="limpeza"
              title="limpeza"
              class="onThisPageAnchor"
            ></a>
            <h3>Limpeza e desinfecção</h3>
            <div
              id="accordion-12"
              class="accordion indicator-plus accordion-white mb-3"
              role="tablist"
            >
              <div class="card bar">
                <div class="card card-accordion ">
                  <div
                    class="card-header collapsed"
                    id="accordion-12-card-0"
                    data-target="#accordion-12-collapse-0"
                    data-toggle="collapse"
                    role="tab"
                    aria-expanded="false"
                  >
                    <button
                      class="card-title btn btn-link"
                      data-controls="accordion-12-collapse-0"
                    >
                      <span role="heading" aria-level="0">
                        Qual é a diferença entre limpar e desinfetar?{" "}
                      </span>
                    </button>
                  </div>
                  <div
                    aria-labelledby="accordion-12-card-0"
                    class="collapse d-print-block "
                    collapsed
                    id="accordion-12-collapse-0"
                    role="tabpanel"
                  >
                    <div class="card-body">
                      <p>
                        A limpeza com água e sabão remove germes, sujeira e
                        impurezas das superfícies. Ele reduz o risco de
                        propagação de infecções. A desinfecção mata os germes
                        nas superfícies. Ao matar os germes em uma superfície
                        após a limpeza, pode diminuir ainda mais o risco de
                        propagação da infecção.
                      </p>
                    </div>
                  </div>{" "}
                </div>
              </div>
              <div class="card bar">
                <div class="card card-accordion ">
                  <div
                    class="card-header collapsed"
                    id="accordion-12-card-1"
                    data-target="#accordion-12-collapse-1"
                    data-toggle="collapse"
                    role="tab"
                    aria-expanded="false"
                  >
                    <button
                      class="card-title btn btn-link"
                      data-controls="accordion-12-collapse-1"
                    >
                      <span role="heading" aria-level="1">
                        É seguro aspirar em uma escola, empresa ou instalação
                        comunitária depois que alguém com suspeita ou
                        confirmação de COVID-19 esteve presente?
                      </span>
                    </button>
                  </div>
                  <div
                    aria-labelledby="accordion-12-card-1"
                    class="collapse d-print-block "
                    collapsed
                    id="accordion-12-collapse-1"
                    role="tabpanel"
                  >
                    <div class="card-body">
                      <p>
                        O risco de transmitir ou espalhar o SARS-CoV-2, o vírus
                        que causa o COVID-19, durante a aspiração é
                        desconhecido. Para reduzir a necessidade de limpeza,
                        desinfecção e aspiração, considere remover os tapetes da
                        área completamente, se possível. No momento, não há
                        casos relatados de COVID-19 associados à aspiração. Se a
                        aspiração for necessária ou exigida em uma escola,
                        empresa ou instalação comunitária que foi usada por uma
                        pessoa com suspeita ou confirmação de COVID-19, primeiro
                        siga as recomendações do CDC para Limpeza e Desinfecção
                        para Instalações Comunitárias que se aplicam, que
                        incluem um tempo de espera de 24 horas, ou contanto que
                        seja prático.
                      </p>
                      <p>
                        Após a limpeza e desinfecção, as seguintes recomendações
                        podem ajudar a reduzir o risco para os trabalhadores e
                        outros indivíduos ao aspirar:
                      </p>
                      <ul>
                        <li>
                          Use um aspirador equipado com um filtro de partículas
                          de ar de alta eficiência (HEPA), se disponível.
                        </li>
                        <li>
                          Não aspire uma sala ou espaço que contenha pessoas.
                          Espere até que o quarto ou espaço esteja vazio para
                          aspirar, como à noite, para espaços comuns, ou durante
                          o dia para quartos privados.
                        </li>
                        <li>
                          Use luvas descartáveis ​​para limpar e desinfetar.
                          Para superfícies macias (porosas), como carpetes ou
                          tapetes, limpe a superfície com água e sabão ou com
                          produtos de limpeza adequados para uso nessas
                          superfícies, de acordo com a etiqueta do têxtil. Após
                          a limpeza, desinfete com um desinfetante apropriado
                          registrado na EPA na Lista N: Desinfetantes para uso
                          contra SARS-CoV-2 Materiais macios e porosos, como
                          carpetes, geralmente não são tão fáceis de desinfetar
                          como superfícies duras e não porosas. A EPA listou um
                          número limitado de produtos aprovados para desinfecção
                          para uso em materiais moles e porosos na Lista N. Siga
                          as instruções de segurança do fabricante do
                          desinfetante (como usar luvas e garantir ventilação
                          adequada), nível de concentração, método de aplicação
                          e tempo de contato. Permita tempo de secagem
                          suficiente se o vácuo não se destinar a superfícies
                          molhadas.
                        </li>
                        <li>
                          Desligue temporariamente o HVAC de recirculação na
                          sala, na janela ou na parede para evitar a
                          contaminação das unidades HVAC.
                        </li>
                        <li>
                          NÃO desative os sistemas HVAC centrais. Esses sistemas
                          tendem a fornecer melhores recursos de filtragem e
                          introduzir ar externo nas áreas que servem.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card bar">
                <div class="card card-accordion ">
                  <div
                    class="card-header collapsed"
                    id="accordion-12-card-2"
                    data-target="#accordion-12-collapse-2"
                    data-toggle="collapse"
                    role="tab"
                    aria-expanded="false"
                  >
                    <button
                      class="card-title btn btn-link"
                      data-controls="accordion-12-collapse-2"
                    >
                      <span role="heading" aria-level="1">
                        Com que frequência as instalações devem ser limpas para
                        reduzir a propagação potencial de COVID-19?
                      </span>
                    </button>
                  </div>
                  <div
                    aria-labelledby="accordion-12-card-2"
                    class="collapse d-print-block "
                    collapsed
                    id="accordion-12-collapse-2"
                    role="tabpanel"
                  >
                    <div class="card-body">
                      <p>
                        A limpeza de rotina é a prática de limpeza diária que as
                        empresas e comunidades normalmente usam para manter um
                        ambiente saudável. As superfícies freqüentemente tocadas
                        por várias pessoas, como maçanetas, superfícies de
                        banheiro e corrimãos, devem ser limpas com água e sabão
                        ou outro detergente pelo menos diariamente quando as
                        instalações estiverem em uso. Limpeza e desinfecção mais
                        frequentes podem ser necessárias com base no nível de
                        uso. Por exemplo, certas superfícies e objetos em
                        espaços públicos, como carrinhos de compras e teclados
                        de pontos de venda, devem ser limpos e desinfetados
                        antes de cada uso. A limpeza remove sujeira e impurezas,
                        incluindo germes, das superfícies. A limpeza por si só
                        não mata os germes, mas reduz o número de germes em uma
                        superfície.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card bar">
                <div class="card card-accordion ">
                  <div
                    class="card-header collapsed"
                    id="accordion-12-card-3"
                    data-target="#accordion-12-collapse-3"
                    data-toggle="collapse"
                    role="tab"
                    aria-expanded="false"
                  >
                    <button
                      class="card-title btn btn-link"
                      data-controls="accordion-12-collapse-3"
                    >
                      <span role="heading" aria-level="1">
                        A limpeza por si só é eficaz contra o vírus que causa
                        COVID-19?
                      </span>
                    </button>
                  </div>
                  <div
                    aria-labelledby="accordion-12-card-3"
                    class="collapse d-print-block "
                    collapsed
                    id="accordion-12-collapse-3"
                    role="tabpanel"
                  >
                    <div class="card-body">
                      <p>
                        A limpeza não mata os germes, mas, ao removê-los,
                        diminui seu número e o risco de propagação de infecções.
                        Se uma superfície puder ter contagiado o vírus de uma
                        pessoa com COVID-19 ou suspeita de ter, a superfície
                        deve ser limpa e desinfetada. A desinfecção mata os
                        germes nas superfícies.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card bar">
                <div class="card card-accordion ">
                  <div
                    class="card-header collapsed"
                    id="accordion-12-card-4"
                    data-target="#accordion-12-collapse-4"
                    data-toggle="collapse"
                    role="tab"
                    aria-expanded="false"
                  >
                    <button
                      class="card-title btn btn-link"
                      data-controls="accordion-12-collapse-4"
                    >
                      <span role="heading" aria-level="1">
                        Quem deve limpar e desinfetar os espaços comunitários?
                      </span>
                    </button>
                  </div>
                  <div
                    aria-labelledby="accordion-12-card-4"
                    class="collapse d-print-block "
                    collapsed
                    id="accordion-12-collapse-4"
                    role="tabpanel"
                  >
                    <div class="card-body">
                      <p>
                        A limpeza não mata os germes, mas, ao removê-los,
                        diminui seu número e o risco de propagação de infecções.
                        Se uma superfície puder ter contagiado o vírus de uma
                        pessoa com COVID-19 ou suspeita de ter, a superfície
                        deve ser limpa e desinfetada. A desinfecção mata os
                        germes nas superfícies.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* eslint-disable-next-line*/}
          <a id="pets" name="pets" title="pets" class="onThisPageAnchor"></a>
          <h3>Animais de estimação e animais</h3>
          <div
            id="accordion-13"
            class="accordion indicator-plus accordion-white mb-3"
            role="tablist"
          >
            <div class="card bar">
              <div class="card card-accordion ">
                <div
                  class="card-header collapsed"
                  id="accordion-13-card-0"
                  data-target="#accordion-13-collapse-0"
                  data-toggle="collapse"
                  role="tab"
                  aria-expanded="false"
                >
                  <button
                    class="card-title btn btn-link"
                    data-controls="accordion-13-collapse-0"
                  >
                    <span role="heading" aria-level="0">
                      Posso obter o COVID-19 com meus animais de estimação ou
                      outros animais?{" "}
                    </span>
                  </button>
                </div>
                <div
                  aria-labelledby="accordion-13-card-0"
                  class="collapse d-print-block "
                  collapsed
                  id="accordion-13-collapse-0"
                  role="tabpanel"
                >
                  <div class="card-body">
                    <p>
                      No momento, não há evidências de que os animais
                      desempenhem um papel significativo na disseminação do
                      vírus que causa a COVID-19. Com base nas informações
                      limitadas disponíveis até o momento, o risco de os animais
                      espalharem COVID-19 para as pessoas é considerado baixo.
                      Foi relatado que um pequeno número de animais de estimação
                      está infectado com o vírus que causa COVID-19,
                      principalmente após o contato com pessoas com COVID-19.
                    </p>
                    <p>
                      Animais de estimação têm outros tipos de coronavírus que
                      podem deixá-los doentes, como coronavírus caninos e
                      felinos. Esses outros coronavírus não podem infectar
                      pessoas e não estão relacionados ao surto atual de
                      COVID-19.
                    </p>
                    <p>
                      No entanto, como os animais podem transmitir outras
                      doenças às pessoas, é sempre uma boa ideia ter hábitos
                      saudáveis ​​com animais de estimação e outros animais,
                      como lavar as mãos e manter uma boa higiene. Para obter
                      mais informações sobre os muitos benefícios de ter um
                      animal de estimação, bem como permanecer seguro e saudável
                      perto de animais, incluindo animais de estimação, gado e
                      animais selvagens, visite o site do CDC Animais Saudáveis,
                      Pessoas Saudáveis .
                    </p>
                  </div>
                </div>{" "}
              </div>
            </div>
            <div class="card bar">
              <div class="card card-accordion ">
                <div
                  class="card-header collapsed"
                  id="accordion-13-card-1"
                  data-target="#accordion-13-collapse-1"
                  data-toggle="collapse"
                  role="tab"
                  aria-expanded="false"
                >
                  <button
                    class="card-title btn btn-link"
                    data-controls="accordion-13-collapse-1"
                  >
                    <span role="heading" aria-level="1">
                      É Preciso testar meu animal de estimação para COVID-19?
                    </span>
                  </button>
                </div>
                <div
                  aria-labelledby="accordion-13-card-1"
                  class="collapse d-print-block "
                  collapsed
                  id="accordion-13-collapse-1"
                  role="tabpanel"
                >
                  <div class="card-body">
                    <p>
                      Não. No momento, o teste de rotina em animais para
                      COVID-19 não é recomendado..
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="card bar">
              <div class="card card-accordion ">
                <div
                  class="card-header collapsed"
                  id="accordion-13-card-2"
                  data-target="#accordion-13-collapse-2"
                  data-toggle="collapse"
                  role="tab"
                  aria-expanded="false"
                >
                  <button
                    class="card-title btn btn-link"
                    data-controls="accordion-13-collapse-2"
                  >
                    <span role="heading" aria-level="1">
                      Os animais podem carregar o vírus que causa COVID-19 em
                      sua pele ou pelo?{" "}
                    </span>
                  </button>
                </div>
                <div
                  aria-labelledby="accordion-13-card-2"
                  class="collapse d-print-block "
                  collapsed
                  id="accordion-13-collapse-2"
                  role="tabpanel"
                >
                  <div class="card-body">
                    <p>
                      Embora saibamos que certas bactérias e fungos podem ser
                      transmitidos pelo pelo e pelo cabelo, não há evidências de
                      que os vírus, incluindo o vírus que causa o COVID-19,
                      possam se espalhar para as pessoas a partir da pele, pelo
                      ou pelo de animais de estimação.
                    </p>
                    <p>
                      No entanto, como os animais às vezes podem carregar outros
                      germes que podem deixar as pessoas doentes, é sempre uma
                      boa ideia praticar hábitos saudáveis perto de animais de
                      estimação e outros animais, incluindo lavar as mãos antes
                      e depois de interagir com eles.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="card bar">
              <div class="card card-accordion ">
                <div
                  class="card-header collapsed"
                  id="accordion-13-card-4"
                  data-target="#accordion-13-collapse-4"
                  data-toggle="collapse"
                  role="tab"
                  aria-expanded="false"
                >
                  <button
                    class="card-title btn btn-link"
                    data-controls="accordion-13-collapse-4"
                  >
                    <span role="heading" aria-level="1">
                      Devo evitar o contato com animais de estimação ou outros
                      animais se estiver doente com COVID-19?
                    </span>
                  </button>
                </div>
                <div
                  aria-labelledby="accordion-13-card-4"
                  class="collapse d-print-block "
                  collapsed
                  id="accordion-13-collapse-4"
                  role="tabpanel"
                >
                  <div class="card-body">
                    <p>
                      Ainda estamos aprendendo sobre esse vírus, mas parece que
                      ele pode se espalhar de pessoas para animais em algumas
                      situações. Até que saibamos mais sobre esse novo
                      coronavírus, você deve restringir o contato com animais de
                      estimação e outros animais enquanto estiver doente com
                      COVID-19, assim como faria com as pessoas. Sempre que
                      possível, peça a outro membro da sua casa para cuidar de
                      seus animais enquanto você estiver doente. Se você estiver
                      doente com COVID-19, evite o contato com seu animal de
                      estimação, incluindo
                    </p>
                    <ul>
                      <li>Acariciando</li>
                      <li>Aconchego</li>
                      <li>Sendo beijado ou lambido</li>
                      <li>Compartilhando comida ou roupa de cama</li>
                    </ul>
                    <p>
                      Se você precisar cuidar de seu animal de estimação ou
                      ficar perto de animais enquanto estiver doente, lave as
                      mãos antes e depois de interagir com animais de estimação
                      e use uma máscara.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="card bar">
              <div class="card card-accordion ">
                <div
                  class="card-header collapsed"
                  id="accordion-13-card-3"
                  data-target="#accordion-13-collapse-3"
                  data-toggle="collapse"
                  role="tab"
                  aria-expanded="false"
                >
                  <button
                    class="card-title btn btn-link"
                    data-controls="accordion-13-collapse-3"
                  >
                    <span role="heading" aria-level="1">
                      Quais animais podem obter COVID-19?
                    </span>
                  </button>
                </div>
                <div
                  aria-labelledby="accordion-13-card-3"
                  class="collapse d-print-block "
                  collapsed
                  id="accordion-13-collapse-3"
                  role="tabpanel"
                >
                  <div class="card-body">
                    <p>
                      Não sabemos ao certo quais animais podem ser infectados
                      com o vírus que causa COVID-19. O CDC está ciente de que
                      um pequeno número de animais de estimação, incluindo cães
                      e gatos, relatou estar infectado com o vírus que causa
                      COVID-19, principalmente após contato próximo com pessoas
                      com COVID-19. Um tigre em um zoológico em Nova York também
                      testou positivo para o vírus.
                    </p>
                    <p>
                      Pesquisas recentes mostram que furões, gatos e hamsters
                      sírios dourados podem ser infectados experimentalmente com
                      o vírus e podem espalhar a infecção para outros animais da
                      mesma espécie em ambientes de laboratório. Porcos,
                      galinhas e patos não foram infectados nem espalharam a
                      infecção com base nos resultados desses estudos. Dados de
                      um estudo sugeriram que os cães não têm tanta
                      probabilidade de se infectar com o vírus quanto os gatos e
                      furões. Essas descobertas foram baseadas em um pequeno
                      número de animais e não mostram se os animais podem
                      transmitir a infecção para as pessoas.
                    </p>
                    <p>
                      No momento, não há evidências de que os animais
                      desempenhem um papel significativo na disseminação do
                      vírus que causa a COVID-19. Com base nas informações
                      limitadas disponíveis até o momento, o risco de os animais
                      espalharem COVID-19 para as pessoas é considerado baixo.
                      Mais estudos são necessários para entender se e como
                      diferentes animais podem ser afetados pelo vírus que causa
                      COVID-19 e o papel que os animais podem desempenhar na
                      disseminação de COVID-19.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* eslint-disable-next-line*/}
          <a
            id="comunidade"
            name="comunidade"
            title="comunidade"
            class="onThisPageAnchor"
          ></a>
          <h3>Mitigação Comunitária</h3>
          <div
            id="accordion-14"
            class="accordion indicator-plus accordion-white mb-3"
            role="tablist"
          >
            <div class="card bar">
              <div class="card card-accordion ">
                <div
                  class="card-header collapsed"
                  id="accordion-14-card-0"
                  data-target="#accordion-14-collapse-0"
                  data-toggle="collapse"
                  role="tab"
                  aria-expanded="false"
                >
                  <button
                    class="card-title btn btn-link"
                    data-controls="accordion-14-collapse-0"
                  >
                    <span role="heading" aria-level="0">
                      O que é mitigação da comunidade?
                    </span>
                  </button>
                </div>
                <div
                  aria-labelledby="accordion-14-card-0"
                  class="collapse d-print-block "
                  collapsed
                  id="accordion-14-collapse-0"
                  role="tabpanel"
                >
                  <div class="card-body">
                    <p>
                      s atividades de mitigação da comunidade são ações que as
                      pessoas e as comunidades podem realizar para retardar a
                      disseminação de doenças infecciosas e se preparar para
                      ela, caso ocorra, incluindo a COVID-19. A mitigação da
                      comunidade é especialmente importante antes que uma vacina
                      ou medicamento se torne amplamente disponível.
                    </p>
                  </div>
                </div>{" "}
              </div>
            </div>
            <div class="card bar">
              <div class="card card-accordion ">
                <div
                  class="card-header collapsed"
                  id="accordion-14-card-1"
                  data-target="#accordion-14-collapse-1"
                  data-toggle="collapse"
                  role="tab"
                  aria-expanded="false"
                >
                  <button
                    class="card-title btn btn-link"
                    data-controls="accordion-14-collapse-1"
                  >
                    <span role="heading" aria-level="1">
                      Quais são as ações de mitigação da comunidade para
                      COVID-19?{" "}
                    </span>
                  </button>
                </div>
                <div
                  aria-labelledby="accordion-14-card-1"
                  class="collapse d-print-block "
                  collapsed
                  id="accordion-14-collapse-1"
                  role="tabpanel"
                >
                  <div class="card-body">
                    <p>Para indivíduos</p>
                    <ul>
                      <li>Lavar as mãos com frequência</li>
                      <li>
                        Evitar contato próximo com pessoas doentes e praticar
                        distanciamento social
                      </li>
                      <li>
                        Cobrir a boca e o nariz com uma máscara quando estiver
                        perto de outras pessoas
                      </li>
                      <li>Cobrindo tosses e espirros</li>
                      <li>
                        Limpeza e desinfecção de superfícies tocadas com
                        frequência diariamente
                      </li>
                    </ul>
                    <p>Para comunidades</p>
                    <ul>
                      <li>Promover comportamentos que evitam a propagação</li>
                      <li>Manter ambientes saudáveis</li>
                      <li>Manter operações saudáveis</li>
                      <li>Preparando-se para quando alguém ficar doente</li>
                      <li>
                        Fechando empresas e escolas e limitando outros serviços
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="card bar">
              <div class="card card-accordion ">
                <div
                  class="card-header collapsed"
                  id="accordion-14-card-2"
                  data-target="#accordion-14-collapse-2"
                  data-toggle="collapse"
                  role="tab"
                  aria-expanded="false"
                >
                  <button
                    class="card-title btn btn-link"
                    data-controls="accordion-14-collapse-2"
                  >
                    <span role="heading" aria-level="1">
                      Quem está envolvido nas ações de mitigação da comunidade?
                    </span>
                  </button>
                </div>
                <div
                  aria-labelledby="accordion-14-card-2"
                  class="collapse d-print-block "
                  collapsed
                  id="accordion-14-collapse-2"
                  role="tabpanel"
                >
                  <div class="card-body">
                    <p>
                      Pessoas, comunidades, escolas, empresas e organizações de
                      saúde têm um papel a desempenhar na mitigação da
                      comunidade. Políticas *, que incluem limites para grandes
                      reuniões, restrições a negócios e fechamento de escolas,
                      são frequentemente necessárias para implementar
                      estratégias de mitigação da comunidade.
                    </p>
                    <p>
                      Cada comunidade é única. Como algumas ações podem ser
                      muito perturbadoras para a vida diária, as atividades de
                      mitigação serão diferentes dependendo de quanta doença se
                      espalhou na comunidade, de como é a população da
                      comunidade e da capacidade de realizar essas ações em
                      nível local. Para identificar as atividades apropriadas,
                      todas as partes de uma comunidade que podem ser afetadas
                      precisam ser consideradas, incluindo populações mais
                      vulneráveis ​​a doenças graves, e aqueles que podem ser
                      mais afetados social ou economicamente. Ao selecionar as
                      atividades de mitigação, os estados e as comunidades
                      precisam considerar a propagação da doença localmente, as
                      características das pessoas que vivem na comunidade (por
                      exemplo, grupos de idade, idiomas falados, estado geral de
                      saúde) e o tipo de recursos de saúde pública e cuidados de
                      saúde sistemas (como hospitais) que estão disponíveis na
                      comunidade. As autoridades estaduais e locais podem
                      precisar ajustar as atividades de mitigação da comunidade
                      e imediatamente tomar medidas para aumentá-las ou
                      diminuí-las, dependendo da mudança da situação local.
                    </p>
                    <p>Colocar a mitigação em prática é baseado em</p>
                    <ul>
                      <li>
                        Enfatizando a responsabilidade individual por tomar as
                        ações de nível pessoal recomendadas
                      </li>
                      <li>
                        Capacitar empresas, escolas e organizações comunitárias
                        a tomar as ações recomendadas, especialmente de formas
                        que protejam as pessoas com maior risco de doenças
                        graves
                      </li>
                      <li>
                        Concentrando-se em configurações que fornecem
                        infraestrutura ou serviços essenciais para indivíduos
                        com maior risco de doenças graves
                      </li>
                      <li>
                        Minimizando interrupções na vida diária na medida do
                        possível
                      </li>
                    </ul>
                    <p>
                      * O CDC não pode abordar as políticas de qualquer empresa
                      ou organização. O CDC compartilha recomendações com base
                      na melhor ciência disponível para ajudar as pessoas a
                      tomar decisões que melhorem sua saúde e segurança. Em
                      todos os casos, siga as orientações do seu médico e do
                      departamento de saúde local . As decisões locais dependem
                      das circunstâncias locais.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* eslint-disable-next-line*/}
          <a id="agua" name="agua" title="agua" class="onThisPageAnchor"></a>
          <h3>Água</h3>
          <div
            id="accordion-15"
            class="accordion indicator-plus accordion-white mb-3"
            role="tablist"
          >
            <div class="card bar">
              <div class="card card-accordion ">
                <div
                  class="card-header collapsed"
                  id="accordion-15-card-0"
                  data-target="#accordion-15-collapse-0"
                  data-toggle="collapse"
                  role="tab"
                  aria-expanded="false"
                >
                  <button
                    class="card-title btn btn-link"
                    data-controls="accordion-15-collapse-0"
                  >
                    <span role="heading" aria-level="0">
                      O vírus que causa o COVID-19 pode se espalhar por meio de
                      água potável tratada?
                    </span>
                  </button>
                </div>
                <div
                  aria-labelledby="accordion-15-card-0"
                  class="collapse d-print-block "
                  collapsed
                  id="accordion-15-collapse-0"
                  role="tabpanel"
                >
                  <div class="card-body">
                    <p>
                      O vírus que causa COVID-19 não foi detectado em água
                      potável tratada. As estações de tratamento de água usam
                      filtros e desinfetantes para remover ou matar germes, como
                      o vírus que causa o COVID-19. A Agência de Proteção
                      Ambiental regula as estações de tratamento de água para
                      garantir que a água tratada seja segura para beber.
                    </p>
                    <p>
                      Atualmente, não há evidências de que o vírus que causa
                      COVID-19 pode ser transmitido para as pessoas ao beber
                      água tratada. O COVID-19 é transmitido principalmente por
                      meio do contato próximo de pessoa a pessoa. Você pode
                      continuar a usar e beber a água da torneira normalmente.
                    </p>
                  </div>
                </div>{" "}
              </div>
            </div>
            <div class="card bar">
              <div class="card card-accordion ">
                <div
                  class="card-header collapsed"
                  id="accordion-15-card-1"
                  data-target="#accordion-15-collapse-1"
                  data-toggle="collapse"
                  role="tab"
                  aria-expanded="false"
                >
                  <button
                    class="card-title btn btn-link"
                    data-controls="accordion-15-collapse-1"
                  >
                    <span role="heading" aria-level="1">
                      O vírus que causa COVID-19 é encontrado nas fezes (fezes)?{" "}
                    </span>
                  </button>
                </div>
                <div
                  aria-labelledby="accordion-15-card-1"
                  class="collapse d-print-block "
                  collapsed
                  id="accordion-15-collapse-1"
                  role="tabpanel"
                >
                  <div class="card-body">
                    <p>
                      O vírus que causa COVID-19 foi encontrado nas fezes de
                      alguns pacientes com diagnóstico de COVID-19. No entanto,
                      não está claro se o vírus encontrado nas fezes pode ser
                      capaz de causar COVID-19. Não houve nenhum relato
                      confirmado de propagação do vírus das fezes para uma
                      pessoa. Os cientistas também não sabem quanto existe o
                      risco de o vírus se espalhar das fezes de uma pessoa
                      infectada para outra. No entanto, eles acham que esse
                      risco é baixo com base em dados de surtos anteriores de
                      doenças causadas por coronavírus relacionados, como a
                      síndrome respiratória aguda grave (SARS) e a síndrome
                      respiratória do Oriente Médio (MERS).
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="card bar">
              <div class="card card-accordion ">
                <div
                  class="card-header collapsed"
                  id="accordion-15-card-2"
                  data-target="#accordion-15-collapse-2"
                  data-toggle="collapse"
                  role="tab"
                  aria-expanded="false"
                >
                  <button
                    class="card-title btn btn-link"
                    data-controls="accordion-15-collapse-2"
                  >
                    <span role="heading" aria-level="1">
                      O vírus que causa o COVID-19 pode se espalhar por
                      piscinas, banheiras de hidromassagem, spas e parques
                      aquáticos?{" "}
                    </span>
                  </button>
                </div>
                <div
                  aria-labelledby="accordion-15-card-2"
                  class="collapse d-print-block "
                  collapsed
                  id="accordion-15-collapse-2"
                  role="tabpanel"
                >
                  <div class="card-body">
                    <p>
                      Não há evidências de que o vírus que causa o COVID-19
                      possa se espalhar para as pessoas através da água em
                      piscinas, banheiras de hidromassagem ou playgrounds
                      aquáticos. Além disso, o funcionamento adequado desses
                      locais aquáticos e a desinfecção da água (com cloro ou
                      bromo) devem inativar o vírus. No entanto, a água clorada
                      sozinha não deve ser usada como desinfetante de
                      superfície. O CDC recomenda o uso de desinfetantes
                      domésticos registrados pela EPA para desinfetar
                      superfícies. Siga as instruções no rótulo para garantir o
                      uso seguro e eficaz do produto.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
export default Duvidas;
