import Image from "next/image";
import Link from "next/link";

import { motion } from "framer-motion";

function Project({ image, title, year, id }) {
  return (
    <Link href={`/projects/${id}`} passHref>
      <motion.div
        className="w-full bg-white rounded-lg p-4 shadow-md hover:shadow-lg bg-opacity-60 cursor-pointer"
        whileHover={{ y: -4 }}
      >
        <Image
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
        />
        <p className="font-bold">{title}</p>
        <p>{year}</p>
      </motion.div>
    </Link>
  );
}

export default Project;
