import { motion } from 'framer-motion';

import { City } from '../city/city';
import { CITIES } from '../../utils/cities';

export const Cities = () => {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: 'beforeChildren',
        duration: 0.5,
      },
    },
  };

  const containerItem = {
    visible: (i) => ({
      opacity: 1,
      transition: {
        delay: i * 0.2,
      },
    }),
    hidden: { opacity: 0 },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="mb-[10px] mt-[10px] md:mt-[20px] md:flex gap-x-[10px]"
    >
      {CITIES.map((city, index) => (
        <motion.div
          key={index}
          variants={containerItem}
          custom={index}
          className="mb-[10px] md:w-2/6 last:mb-0 md:mb-0"
        >
          <City name={city} />
        </motion.div>
      ))}
    </motion.div>
  );
};
