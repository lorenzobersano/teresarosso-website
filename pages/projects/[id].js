import Link from "next/link";
import { useState } from "react";
import Container from "../../components/Container";
import H1 from "../../components/H1";
import H2 from "../../components/H2";
import H3 from "../../components/H3";
import P from "../../components/P";

// import { IfcViewerAPI } from "web-ifc-viewer";

function ProjectDetail({ id }) {
  const [step, setStep] = useState(0);

  // const container = document.getElementById("viewer-container");
  // const viewer = new IfcViewerAPI({ container });
  // viewer.addAxes();
  // viewer.addGrid();

  // // const input = document.getElementById("file-input");

  // // const file = changed.target.files[0];
  // const ifcURL = URL.createObjectURL("/appartamento.ifc");
  // viewer.IFC.loadIfcUrl(ifcURL);

  const posts = {
    "winter-garden": {
      header: (
        <>
          <a
            className="text-6xl text-[#ffe7d4] font-bold cursor-pointer"
            onClick={() => setStep(0)}
          >
            The Winter Garden
          </a>
          <H3>2021</H3>
          <H2 className="text-2xl">Revit</H2>
        </>
      ),
      toc: (
        <>
          <p className="mt-8 mb-2 font-bold">Dettagli</p>
          <div className="flex flex-col items-start">
            <button
              className={`${step === 1 ? "text-[#ffe7d4]" : ""} underline`}
              onClick={() => setStep(1)}
            >
              Finestre
            </button>
            <button
              className={`${step === 2 ? "text-[#ffe7d4]" : ""} underline`}
              onClick={() => setStep(2)}
            >
              Copertura
            </button>
            <button
              className={`${step === 3 ? "text-[#ffe7d4]" : ""} underline`}
              onClick={() => setStep(3)}
            >
              Pluviali
            </button>
            <button
              className={`${step === 4 ? "text-[#ffe7d4]" : ""} underline`}
              onClick={() => setStep(4)}
            >
              Scarico
            </button>
          </div>
        </>
      ),
      steps: [
        <>
          <P>
            Riqualificazione dell’esistente area relax del complesso RSA Virgo
            Potens a Moncrivello (TO), progettando un giardino d’inverno. La
            struttura viene ampliata ed estesa ai tre livelli del complesso in
            modo da essere fruibile non solo al pian terreno. Alcuni particolari
            vincoli sono stati imposti da tenere in considerazione per la
            progettazione del “Giardino d’inverno”: tra questi vi è la facciata
            storica dell’RSA, la meridiana da non nascondere e le altre facciate
            del cortile interno che presentano edifici facenti parte
            dell’interno complesso e tutte quote diverse. La necessità di
            realizzare tale struttura nasce dall’esigenza di offrire un servizio
            di assistenza ad alta qualità per i malati cronici e particolarmente
            vulnerabili attraverso il perfezionamento e la diversificazione
            sanitaria, al fine di perseguire il miglioramento della qualità
            della vita delle persone disabili e dei loro familiari. Sono state
            inoltre modellate le strutture circostanti per conferire maggiore
            contesto al progetto.
          </P>
        </>,
        <>
          <H2>Finestre</H2>
          <P>
            Le finestre sono state modellate da zero creando un nuovo file
            famiglia “Metric Curtain Wall Panel.rft.” dove è stata realizzata
            una finestra parametrica dotata di maniglia. Le dimensioni del
            pannello vetrato sono vincolate a quelle del montante, che è in
            grado di adattare in modo autonomo altezza, larghezza e apertura,
            senza dover modificare ogni volta la famiglia. La maniglia è
            rappresentata in posizione orizzontale quando la finestra è chiusa e
            in posizione verticale quando è aperta. Finita la modellazione della
            finestra la si è caricata nel modello e posizionata sostituendo i
            vari pannelli vetrati della facciata, facendo particolare attenzione
            a rispettare il rapporto aeroilluminante, che mette in relazione la
            superficie di pavimento con quella delle finestre. L’ultimo
            passaggio è consistito nell’assegnare l’apertura desiderata ad ogni
            finestra per ottenere un effetto ottico più realistico. Ad ogni
            piano sono state previste finestre ad altezze non convenzionali,
            apribili per eventi straordinari come pulizia e manutenzione. Si è
            scelto di utilizzare montanti e telai in alluminio di 3 cm di
            spessore ed un triplo vetro basso emissivo per le superfici vetrate,
            le porte e le finestre.
          </P>
        </>,
        <>
          <H2>Copertura</H2>
          <P>
            La copertura è stata realizzata modellando una massa locale creando
            una griglia di facciata continua composta da diversi punti di
            riferimento. Una volta disegnata la forma desiderata sono stati
            selezionati a uno a uno i punti e modificate le coordinate per
            conferire alla massa la forma armonica finale. Soddisfatti del
            risultato si è terminata la modifica della massa ed è stata
            posizionata su di essa la copertura vetrata con i relativi montanti
            al fine di creare pannelli di dimensioni 80x80 cm. I punti di
            estremità della copertura presentano lo stesso offset per accogliere
            più facilmente il canale di gronda.
          </P>
        </>,
        <>
          <H2>Pluviali</H2>
          <P>
            I tre pluviali che arrivano al piano terra sono stati modellati
            inclinati seguendo il profilo della facciata continua. Sono state
            scaricate da Internet le famiglie corrispondenti alle diverse
            componenti, tutte di diametro 10 cm. Per ogni pluviale è stata
            creata una famiglia composta dall’assemblaggio delle diverse parti
            modificate in lunghezza, orientazione e inclinazione. Dopodiché, il
            pluviale è stato caricato nel modello per verificarne la corretta
            modellazione, dato che non coincideva perfettamente si è riaperta la
            famiglia per fare le correzioni necessarie. Questo processo è stato
            ripetuto fino ad ottenere un risultato ottimale. Infine, il pluviale
            è stato fissato alla struttura tramite diverse piastre di
            ancoraggio, anch’esse scaricate da Internet. Dato il diametro sono
            stati considerati pluviali ogni 70 m2 , quindi, le famiglie
            realizzate in totale sono cinque.
          </P>
        </>,
        <>
          <H2>Scarico</H2>
          <P>
            I tre pluviali che scendono al piano terra sono collegati a tre
            pozzetti sifonati (uno per ciascuno), i quali sono collegati tra
            loro tramite una tubatura orizzontale interrata indirizzata verso il
            recapito del Trompone. Da Internet è stato scaricato un pozzetto di
            dimensioni 40x40x40 cm e modificato affinché l’ingresso e l’uscita
            combaciassero con le rispettive tubazioni. La tubatura orizzontale è
            stata creata come famiglia composta da componenti orizzontali
            collegati tra loro tramite gomiti, entrambe le parti presentano una
            pendenza del 2%, poiché per il drenaggio con un diametro di 85-110
            mm, la pendenza è di 2 cm al metro. L’acqua è convogliata in un
            quarto pozzetto sifonato posizionato nei pressi della porta
            d’ingesso al giardino d’inverno, da qui parte l’ultimo tratto
            indirizzato verso il recapito. Dal momento che non si conosce la
            posizione reale del recapito se ne è ipotizzata la posizione.
          </P>
        </>,
      ],
    },
  };

  return (
    <div className="grid grid-cols-6 bg-gray-300 min-h-screen">
      <div className="col-span-2 bg-gray-600 px-8 py-16 text-white relative">
        <Link href="/">
          <a className="absolute top-0 py-8 hover:underline">
            &#8592; Torna alla home
          </a>
        </Link>
        {posts[id].header}
        <div className="mt-8">{posts[id].steps[step]}</div>
        <div className="absolute bottom-0 pb-8 left-0 right-0 px-8 bg-gray-500">
          {posts[id].toc}
        </div>
      </div>
      <div
        id="viewer-container"
        className="col-span-4 items-start bg-[#ffe7d4] pl-1 flex"
      >
        <img
          src={`/${id}/${step}.png`}
          alt={step}
          className="object-cover w-full h-full object-top"
        />
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const { id } = context.query;

  return { props: { id } };
}

export default ProjectDetail;
