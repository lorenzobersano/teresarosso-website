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
    <div className="bg-gradient-to-tl from-amber-50 to-amber-200 min-h-screen py-24">
      <Head>
        <title>Teresa Rosso</title>
      </Head>
      <Container>
        <H1>Teresa Rosso</H1>
        <H2>Ingegnere Edile</H2>
        <header className="my-24 text-lg">
          <P>
            A est rerum aspernatur exercitationem ut qui. Asperiores consectetur
            iusto possimus sint sequi magni nemo. Impedit sequi maxime optio
            delectus placeat. Eius omnis cupiditate error porro corrupti veniam
            maiores. Et officia dolores nemo placeat voluptatem tempora.
          </P>
          <P>
            Error quisquam dolores nulla in dolores nisi debitis sint. Cum quae
            enim eum ipsum officia voluptatem. Labore est quia consequatur
            nostrum.
          </P>
        </header>
        <main className="mt-12 space-y-4">
          <H3>Progetti</H3>
          <div className="grid grid-cols-3 gap-8">
            <Project
              image={{
                src: "https://via.placeholder.com/150",
                width: 150,
                height: 150,
                alt: "Placeholder image",
              }}
              title="Condominio Gioberti 45"
              id={"cond-gioberti-45"}
              year={2022}
            />
            <Project
              image={{
                src: "https://via.placeholder.com/150",
                width: 150,
                height: 150,
                alt: "Placeholder image",
              }}
              title="Robson Square Accessibilty case study"
              id={"robson-square"}
              year={2022}
            />
            <Project
              image={{
                src: "https://via.placeholder.com/150",
                width: 150,
                height: 150,
                alt: "Placeholder image",
              }}
              title="Robson Square Accessibilty case study"
              id={"robson-square"}
              year={2022}
            />
          </div>
        </main>
      </Container>
    </div>
  );
}
