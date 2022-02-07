import { useState } from "react";
import Container from "../../components/Container";
import H1 from "../../components/H1";
import H2 from "../../components/H2";
import P from "../../components/P";

function ProjectDetail() {
  const [step, setStep] = useState(0);

  function renderStep() {
    let comp;

    switch (step) {
      case 0:
        comp = (
          <>
            <H1>Condominio Gioberti 45</H1>
            <H2>2022</H2>
            <div className="mt-8">
              <P>
                A est rerum aspernatur exercitationem ut qui. Asperiores
                consectetur iusto possimus sint sequi magni nemo. Impedit sequi
                maxime optio delectus placeat. Eius omnis cupiditate error porro
                corrupti veniam maiores. Et officia dolores nemo placeat
                voluptatem tempora. Error quisquam dolores nulla in dolores nisi
                debitis sint. Cum quae enim eum ipsum officia voluptatem. Labore
                est quia consequatur nostrum. Unde occaecati sunt aliquid quia
                est. Expedita illo perspiciatis ut saepe ab qui. Nihil debitis
                exercitationem voluptatum veniam vel amet rem illum. Dolores
                tempore sapiente similique debitis aperiam. Quis consequatur
                minus perspiciatis eveniet et ipsam magni. Enim tenetur nam at
                accusamus dolores. Enim et blanditiis recusandae quos. Similique
                eos aut explicabo et voluptas non. Repellat omnis magni et et.
                Ut expedita dolores ad dolores ad qui molestiae possimus. Et
                accusamus perferendis vitae fugit debitis sit id est. Reiciendis
                reprehenderit consectetur at a voluptates. Aut similique aut cum
                ut deleniti necessitatibus ad quia. Atque doloribus consequuntur
                asperiores cumque id.
              </P>
              <button
                className="underline font-bold mt-8"
                onClick={() => setStep(1)}
              >
                Dettaglio finestra
              </button>
            </div>
          </>
        );
        break;
      case 1:
        comp = (
          <>
            <H1>Dettaglio finestra</H1>
            <div className="mt-8">
              <P>
                A est rerum aspernatur exercitationem ut qui. Asperiores
                consectetur iusto possimus sint sequi magni nemo. Impedit sequi
                maxime optio delectus placeat. Eius omnis cupiditate error porro
                corrupti veniam maiores. Et officia dolores nemo placeat
                voluptatem tempora. Error quisquam dolores nulla in dolores nisi
                debitis sint. Cum quae enim eum ipsum officia voluptatem. Labore
                est quia consequatur nostrum. Unde occaecati sunt aliquid quia
                est. Expedita illo perspiciatis ut saepe ab qui. Nihil debitis
                exercitationem voluptatum veniam vel amet rem illum. Dolores
                tempore sapiente similique debitis aperiam. Quis consequatur
                minus perspiciatis eveniet et ipsam magni. Enim tenetur nam at
                accusamus dolores. Enim et blanditiis recusandae quos. Similique
                eos aut explicabo et voluptas non. Repellat omnis magni et et.
                Ut expedita dolores ad dolores ad qui molestiae possimus. Et
                accusamus perferendis vitae fugit debitis sit id est. Reiciendis
                reprehenderit consectetur at a voluptates. Aut similique aut cum
                ut deleniti necessitatibus ad quia. Atque doloribus consequuntur
                asperiores cumque id.
              </P>
              <button
                className="underline font-bold mt-8"
                onClick={() => setStep(0)}
              >
                Condominio Gioberti 45
              </button>
            </div>
          </>
        );
        break;
    }

    return comp;
  }

  return (
    <div className="grid grid-cols-6 min-h-screen">
      <div className="col-span-2 h-full bg-gradient-to-tl from-amber-50 to-amber-200 px-8 py-16">
        {renderStep()}
      </div>
      <div className="col-span-4">immaginona</div>
    </div>
  );
}

export default ProjectDetail;
