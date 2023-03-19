import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import { motion } from 'framer-motion'
import 'react-vertical-timeline-component/style.min.css'
import { styles } from '../styles'
import { experiences } from '../constants/index'
import { SectionWrapper } from '../hoc/index'
import { textVariant } from '../utils/motion'


const ExperienceCard = (expr) => {
  // console.log(expr)
  const { exp } = expr
  return <VerticalTimelineElement
    contentStyle={{ background: "#1d1836", color: "#fff" }}
    contentArrowStyle={{ borderRight: "7px solid #232631" }}
    date={exp.date}
    iconStyle={{ background: exp.iconBg }}
    icon={<div className='flex justify-center items-center w-full h-full'>
      <img src={exp.icon} alt={exp.title} className="w-[60%] h-[60%] object-contain rounded-full" />
    </div>}
  >
    <div>
      <h3 className='text-white text-[24px] font-bold'>{exp.title}</h3>
      <p className='text-secondary text-[16px] font-semibold m-0'>{exp.company_name}</p>
    </div>

    <ul className='mt-5 list-disc ml-5 space-y-2'>
      {
        exp.points.map((pt, i) => (
          <li
            key={`experience-point-${i}`}
            className="text-white-100 text-[14px] pl-1 tracking-wider"
          >{pt}</li>
        ))
      }
    </ul>
  </VerticalTimelineElement>
}

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What I have done so far</p>
        <h2 className={styles.sectionHeadText}>Work Experience.</h2>
      </motion.div>

      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {
            experiences.map((exp, i) => (
              <ExperienceCard key={i} exp={exp} />
            ))
          }
        </VerticalTimeline>
      </div>
    </>
  )
}

export default SectionWrapper(Experience, "work")