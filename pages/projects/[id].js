import Head from "next/head";
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
      title: "The Winter Garden",
      header: (
        <>
          <a
            className="text-4xl md:text-6xl text-[#ffe7d4] font-bold cursor-pointer"
            onClick={() => setStep(0)}
          >
            The Winter Garden
          </a>
          <H3>2020</H3>
          <H2 className="text-2xl">Revit</H2>
        </>
      ),
      objectPositions: [
        "object-fill object-top",
        "object-contain",
        "object-contain object-center",
        "object-scale-down object-center",
        "object-contain object-top",
      ],
      toc: (
        <>
          <p className="mb-2 font-bold">Dettagli</p>
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
            Potens a Moncrivello (VC), progettando un giardino d’inverno.
          </P>
          <P>
            La struttura viene ampliata ed estesa ai tre livelli del complesso
            in modo da essere fruibile non solo al pian terreno. Alcuni
            particolari vincoli sono stati imposti da tenere in considerazione
            per la progettazione del “Giardino d’inverno”: tra questi vi è la
            facciata storica dell’RSA, la meridiana da non nascondere e le altre
            facciate del cortile interno che presentano edifici facenti parte
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
            scelto di utilizzare montanti e telai in alluminio di 3cm di
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
            al fine di creare pannelli di dimensioni 80x80cm. I punti di
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
            componenti, tutte di diametro 10cm. Per ogni pluviale è stata creata
            una famiglia composta dall’assemblaggio delle diverse parti
            modificate in lunghezza, orientazione e inclinazione. Dopodiché, il
            pluviale è stato caricato nel modello per verificarne la corretta
            modellazione, dato che non coincideva perfettamente si è riaperta la
            famiglia per fare le correzioni necessarie. Questo processo è stato
            ripetuto fino ad ottenere un risultato ottimale. Infine, il pluviale
            è stato fissato alla struttura tramite diverse piastre di
            ancoraggio, anch’esse scaricate da Internet. Dato il diametro sono
            stati considerati pluviali ogni 70m<sup>2</sup>, quindi, le famiglie
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
            dimensioni 40x40x40cm e modificato affinché l’ingresso e l’uscita
            combaciassero con le rispettive tubazioni. La tubatura orizzontale è
            stata creata come famiglia composta da componenti orizzontali
            collegati tra loro tramite gomiti, entrambe le parti presentano una
            pendenza del 2%, poiché per il drenaggio con un diametro di
            85-110mm, la pendenza è di 2cm al metro. L’acqua è convogliata in un
            quarto pozzetto sifonato posizionato nei pressi della porta
            d’ingesso al giardino d’inverno, da qui parte l’ultimo tratto
            indirizzato verso il recapito. Dal momento che non si conosce la
            posizione reale del recapito se ne è ipotizzata la posizione.
          </P>
        </>,
      ],
    },
    "robson-square": {
      title: "Robson Square accessibility case study",
      header: (
        <>
          <a
            className="text-4xl md:text-6xl text-[#ffe7d4] font-bold cursor-pointer"
            onClick={() => setStep(0)}
          >
            Robson Square accessibility case study
          </a>
          <H3>2022</H3>
          <H2 className="text-2xl">Archicad</H2>
        </>
      ),
      objectPositions: ["object-cover object-top", "object-cover"],
      toc: (
        <>
          <p className="mb-2 font-bold">Dettagli</p>
          <div className="flex flex-col items-start">
            <button
              className={`${step === 1 ? "text-[#ffe7d4]" : ""} underline`}
              onClick={() => setStep(1)}
            >
              Rampa accessibile
            </button>
          </div>
        </>
      ),
      steps: [
        <>
          <P>
            Robson Square venne realizzata tra il 1978 e il 1983 da Cornelia
            Hahn Oberlander e Arthur Erickson nel centro di Vancouver, in
            Canada. Questa grande opera di design è nata con l’obiettivo di
            essere inclusiva, tema caro ad Arthur Erikson, poiché il padre perse
            entrambe le gambe nella Prima Guerra Mondiale, e, seppur non lo sia
            realmente, è stata costruita prima dell’emanazione delle leggi a
            riguardo. Le criticità riscontrate nell’opera sono:
          </P>
          <ul className="list-disc list-inside text-lg py-2">
            <li>pendenza della rampa superiore all’8%</li>
            <li>pianerottoli troppo distanti tra loro</li>
            <li>
              difficoltà nel distinguere la fine dei gradini e l’inizio della
              rampa per le persone con ridotta capacità visiva
            </li>
            <li>corrimani che si interrompono bruscamente.</li>
          </ul>
          <P>
            Si è quindi scelto di modellare due rampe-scale: una con le
            dimensioni fedeli all’opera originale (sinistra) e una creata
            rispondendo alle criticità precedentemente elencate (destra).
          </P>
        </>,
        <>
          <H2>Rampa accessibile</H2>
          <div className="space-y-6 pt-4">
            <section>
              <P>
                <b className="text-xl">Pendenza della rampa superiore all’8%</b>
              </P>
              <P>
                La legge 13/89, Decreto Ministeriale 236/89 relativa alla
                realizzazione di rampe atte al superamento delle barriere
                architettoniche sancisce che la pendenza consigliata di una
                rampa varia tra il 4% e il 6%, ma non deve superare l’8%, in
                quanto difficilmente può essere superata in modo autonomo. Si è
                scelto di eliminare le due fioriere e gradinate laterali alla
                base della rampa-scala. In questo modo è stato possibile
                allungare la rampa, diminuendone di conseguenza la pendenza,
                senza andare ad intervenire sulla geometria degli edifici
                presenti.
              </P>
            </section>
            <section>
              <P>
                <b className="text-xl">Pianerottoli troppo distanti tra loro</b>
              </P>
              <P>
                Sempre secondo la legge 13/89, Decreto Ministeriale 236/89, deve
                essere presente un pianerottolo ogni 10m, ma nell’opera
                originale questi sono posti ad una distanza maggiore. Sono
                quindi stati modellati dei pianerottoli intermedi, in modo che
                percorrendo la rampa si possano fare delle soste.
              </P>
            </section>
            <section>
              <P>
                <b className="text-xl">
                  Difficoltà nel distinguere la fine dei gradini e l’inizio
                  della rampa per le persone con ridotta capacità visiva
                </b>
              </P>
              <P>
                La rampa-scala è stata realizzata in un unico materiale e dello
                stesso colore, questo è un problema per le persone cieche, o con
                ridotte capacità visive, poiché faticano a distinguere i punti
                in cui terminano i gradini e inizia la rampa, rischiando di
                inciampare e ferirsi. Sono quindi stati utilizzati tre colori
                distinti, ma che non si scostano eccessivamente dall’originale:
                uno per i gradini, uno per le rampe e uno per i pianerottoli.
              </P>
            </section>
            <section>
              <P>
                <b className="text-xl">
                  Corrimani che si interrompono bruscamente
                </b>
              </P>
              <P>
                I corrimani che si interrompono bruscamente sono stati definiti
                più pericolosi che utili. Non è stata trovata una soluzione
                architettonica a questo problema, ma si è pensato di incidere in
                braille la direzione di percorrenza e l&rsquo;inizio e la fine
                di ogni corrimano, in modo che chi lo percorre sia avvisato
                dell&rsquo;interruzione.
              </P>
              <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-4 mt-4">
                <img
                  src="/robson-square/braille-1.jpg"
                  alt="Braille su corrimano"
                />
                <img
                  src="/robson-square/braille-2.png"
                  alt="Descrizione braille su rampa"
                />
              </div>
            </section>
          </div>
        </>,
      ],
    },
    "gioberti-45": {
      title: "Condominio Gioberti 45",
      header: (
        <>
          <a
            className="text-4xl md:text-6xl text-[#ffe7d4] font-bold cursor-pointer"
            onClick={() => setStep(0)}
          >
            Condominio Gioberti 45
          </a>
          <H3>2022</H3>
          <H2 className="text-2xl">Archicad</H2>
        </>
      ),
      objectPositions: ["object-fill object-top"],
      steps: [
        <>
          <P>
            Riproduzione del condominio in cui vivo, prestando maggiore
            attenzione al mio appartamento.
          </P>
          <P>
            Questo è il primo progetto che ho realizzato utilizzando il software
            ARCHICAD. La struttura si sviluppa su cinque piani, l’appartamento
            di riferimento si trova al terzo. Come prima cosa è stata realizzata
            la componente strutturale, non conoscendo la posizione dei pilastri
            è stata ipotizzata la loro posizione, creando una maglia strutturale
            con una luce inferiore ai 5m. Dopodiché è stata modellata la parte
            architettonica.
          </P>
        </>,
      ],
    },
  };

  return (
    <>
      <Head>
        <title>{posts[id].title} | Teresa Rosso</title>
      </Head>

      <div className="grid grid-cols-1 md:grid-cols-6 bg-gray-300 min-h-screen">
        <div className="col-span-2 bg-gray-600 pt-16 text-white relative max-h-screen overflow-y-auto flex flex-col">
          <Link href="/">
            <a className="absolute top-0 py-8 hover:underline px-8">
              &#8592; Torna alla home
            </a>
          </Link>
          <div className="px-8">{posts[id].header}</div>
          <div
            id="viewer-container"
            className="col-span-4 items-start max-h-screen flex md:hidden mt-8"
          >
            <img
              src={`/${id}/${id === "gioberti-45" ? 1 : step}.png`}
              alt={step}
              className="object-cover w-full h-full object-top"
            />
          </div>
          <div className="mt-8 px-8 flex-1">{posts[id].steps[step]}</div>
          <div className="sticky bottom-0 py-4 px-8 left-0 right-0 bg-gray-500 mt-8">
            {posts[id].toc}
          </div>
        </div>
        <div
          id="viewer-container"
          className="col-span-4 items-start bg-white border-l-4 border-[#ffe7d4] max-h-screen hidden md:flex"
        >
          <img
            src={`/${id}/${id === "gioberti-45" ? 1 : step}.png`}
            alt={step}
            className={`${posts[id].objectPositions[step]} w-full h-full`}
          />
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  const { id } = context.query;

  return { props: { id } };
}

export default ProjectDetail;
