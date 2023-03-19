import React from 'react'
import Tilt from 'react-tilt'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { services } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'
import { SectionWrapper } from '../hoc/index'


const ServiceCard = ({ index, title, icon }) => {
  return <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img src={icon} alt={title} className="w-16 h-16 object-contain" />
        <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
      </div>
    </motion.div>
  </Tilt>
}

const About = () => {
  return (
    <>
      <motion.div>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[12px] sm:text-sm md:text-base max-w-6xl leading-[24px] sm:leading-[30px] md:leading-[30px]"
      >
        As a skilled React Front End Developer with expertise in Redux, I have a strong
        track record of designing and developing well-structured UI/UX for websites and
        PWAs. With over 1 year of experience, I have developed over 10 projects in MERN
        and LAMP stacks, including dashboard apps, booking systems, and websites. I
        am proficient in frontend technologies such as HTML, CSS, and JavaScript, and I
        have a keen eye for detail. I excel in communication and collaboration, making me
        an asset to any development team. If you are seeking a talented React Front End
        Developer with experience in Redux and a passion for web development and UX
        design, I would be a valuable addition to your organization.
      </motion.p>

      <div className='mt-20 flex flex-wrap justify-center gap-10'>
        {services.map((item, i) => {
          return <ServiceCard key={`service-${i}`} index={i} {...item} />
        })}
      </div>
    </>
  )
}

export default SectionWrapper(About, "about")