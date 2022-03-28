import Head from "next/head";
import Image from "next/image";
import Container from "../components/Container";
import H1 from "../components/H1";
import H2 from "../components/H2";
import H3 from "../components/H3";
import P from "../components/P";
import Project from "../components/Project";

export default function Home() {
  return (
    <div className="text-white bg-[#494e5f] min-h-screen py-24">
      <Head>
        <title>Teresa Rosso</title>
      </Head>
      <Container>
        <header className="flex flex-col md:flex-row gap-16 items-center">
          <Image
            alt="Foto di Teresa Rosso"
            src={"/me.jpeg"}
            width="700"
            height="700"
            className="rounded-full object-cover object-top"
          />
          <div>
            <H1>Teresa Rosso</H1>
            <H2>Dottoressa in Ingegneria Edile</H2>
            <div className="mt-8">
              <P>
                Sono una dottoressa in ingegneria edile, laureata presso il
                Politecnico di Torino, determinata e con il desiderio di
                crescere professionalmente.
              </P>
              <P>
                Partendo dall’utilizzo di AutoCAD, ho scoperto il mondo BIM
                grazie ai corsi universitari e me ne sono appassionata. Ho
                quindi iniziato il mio viaggio nella modellazione digitale
                imparando l’utilizzo di software come Revit, ReCap, Insight,
                ARCHICAD e Enscape.
              </P>
            </div>
          </div>
        </header>
        <main className="mt-24 space-y-4">
          <H3>Progetti</H3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <Project
              image={{
                width: 150,
                height: 150,
                alt: "Robson Square",
              }}
              title="Robson Square accessibility case study"
              id={"robson-square"}
              year={2022}
            />
            <Project
              image={{
                width: 150,
                height: 150,
                alt: "Condominio Gioberti 45",
              }}
              title="Condominio Gioberti 45"
              id={"gioberti-45"}
              year={2022}
            />
            <Project
              image={{
                width: 150,
                height: 150,
                alt: "Winter Garden",
              }}
              title="The Winter Garden"
              id={"winter-garden"}
              year={2021}
            />
          </div>
        </main>
      </Container>
    </div>
  );
}
