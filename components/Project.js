import Image from "next/image";
import Link from "next/link";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import H2 from "./H2";
import H3 from "./H3";

function Project({ image, title, year, id }) {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <Link href={`/projects/${id}`} passHref>
      <motion.div
        className="w-full bg-gray-500 shadow-md hover:shadow-lg bg-opacity-60 cursor-pointer relative"
        onHoverStart={() => setIsHovering(true)}
        onHoverEnd={() => setIsHovering(false)}
      >
        <img
          src={`/${id}/0.png`}
          alt={image.alt}
          width={image.width}
          height={image.height}
          className="w-full h-full object-cover"
        />
        <AnimatePresence>
          {isHovering && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className={
                "absolute bottom-0 p-4 bg-black right-0 left-0 bg-opacity-80 flex flex-col items-center justify-center top-0"
              }
            >
              <H2 className="font-bold">{title}</H2>
              <H3>{year}</H3>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </Link>
  );
}

export default Project;
