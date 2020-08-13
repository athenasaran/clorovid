import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import washhand from "../../assets/img/washhand.jpg";
import mascara from "../../assets/img/mascara.jpg";
import gel from "../../assets/img/gel.jpg";
import toque from "../../assets/img/toque.png";
import objetos from "../../assets/img/objetos.jpg";
import aglomeracao from "../../assets/img/aglomeracao.jpg";
function Prevencao() {
  return (
    <div style={{ paddingTop: "50px" }}>
      <Header />
      <h4> Sempre:</h4>
      <br></br>
      <div>
        <div className="card-deck">
          <div className="card">
            <img
              className="washand"
              src={washhand}
              alt="prevencao lavar mao"
              class="d-block w-100"
            />
            <div className="card-body">
              <h5 className="card-title">Lave as mãos</h5>
              <p className="card-text">
                Esfregue bem a palma das mãos; capriche na limpeza do espaço
                entre os dedos e também do dorso e do punho. Depois, seque com
                toalha descartável (em ambientes coletivos). Se a torneira não
                for automática, use a tolha de papel para fechá-la, ou lave a
                torneira antes de ensaboar as mãos.
              </p>
            </div>
          </div>
          <div className="card">
            <img
              className="mascara"
              src={mascara}
              alt="prevencao mascara"
              class="d-block w-100"
            />
            <div className="card-body">
              <h5 className="card-title">Use máscara</h5>
              <p className="card-text">
                Ao usar a máscara, além de se proteger contra o vírus que pode
                estar circulando à sua volta, a pessoa impede a transmissão da
                Covid-19 aos demais, caso esteja com a doença e ainda não saiba.
              </p>
            </div>
          </div>
          <div className="card">
            <img
              className="gel"
              src={gel}
              alt="prevencao alcool"
              class="d-block w-100"
            />
            <div className="card-body">
              <h5 className="card-title">Use álcool em gel</h5>
              <p className="card-text">
                Utilizar antisséptico de mãos à base de álcool 70% para
                higienização na ausência de sabão propicia a desnaturação de
                proteínas e de estruturas lipídicas da membrana celular, e a
                consequente destruição do microrganismo.
              </p>
            </div>
          </div>
        </div>
        <br></br>
        <h4> Nunca:</h4>
        <br></br>
        <div className="card-deck">
          <div className="card">
            <img
              className="toque"
              src={toque}
              alt="prevencao toque"
              class="d-block w-100"
            />
            <div className="card-body">
              <h5 className="card-title">Toque nariz, boca e olhos</h5>
              <p className="card-text">
                Evite tocar nos olhos, nariz e boca porque, se você pegar o
                vírus, poderá se infectar permitindo que ele entre no seu
                corpo.Então em caso de tosse ou espirro, cubra o rosto com um
                lenço de papel descartável e jogue-o no lixo, ou tussa ou
                espirre colocando o braço e antebraço sobre o nariz e a boca
                para evitar que as gotículas se espalhem pelo ar.
              </p>
            </div>
          </div>
          <div className="card">
            <img
              className="objetos"
              src={objetos}
              alt="prevencao objetos"
              class="d-block w-100"
            />
            <div className="card-body">
              <h5 className="card-title">Divida objetos pessoais</h5>
              <p className="card-text">
                O coronavírus sobrevive tanto no ar como em superfícies por
                isso,deve se evitar dividir objetos pessoais.Além destes
                precisarem ser limpos corretamente como celulares, computadores,
                fones de ouvido, games e relógios inteligentes.
              </p>
            </div>
          </div>
          <div className="card">
            <img
              className="aglomeracao"
              src={aglomeracao}
              alt="aglomeracao"
              class="d-block w-100"
            />
            <div className="card-body">
              <h5 className="card-title">Fique em aglomerações</h5>
              <p className="card-text">
                Para reduzir as chances de transmissão pelo contato com
                secreções, a orientação é não permanecer perto de um grande
                número de pessoas. A medida vale para cidadãos de qualquer faixa
                etária – assim, neste momento, também representa uma decisão
                importante evitar locais como clubes, piscinas, praias, bares e
                casas noturnas.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default Prevencao;
