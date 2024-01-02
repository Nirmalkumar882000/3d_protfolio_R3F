import React from 'react'
import { motion } from 'framer-motion';



function Section(props){
  const {children}=props;
  return(
    <motion.section className='flex flex-col items-start justify-center w-screen h-screen p-8 mx-auto max-w-screen-2xl'
    initial={{
      opacity:0,
      y:50,
    }}
    whileInView={{
      opacity:1,
      y:0,
      transition: {
        duration: 1,
        delay: 0.6,
      },
    }}
    >
      {children}
    </motion.section>
  )
}



export default function Interface() {
  return (
    <div className='flex flex-col items-center w-screen'>
      <AboutSection/>
      <SkillsSection/>
      <Section>
        Projects
      </Section>
     <ContactSection/>
    </div>
  )
}


function AboutSection(){
  return(
    <Section>
      <h1 className='text-6xl font-extrabold leading-snug c'>
        Hi, I'm
        <br/>
        <span className='px-1 italic bg-white'>Nirmal Kumar</span>
      </h1>
      <motion.p className='mt-4 text-lg text-gray-600'
      initial={{
        opacity:0,
        y:25,
      }} 
      whileInView={{
        opacity:1,
        y:0,
      }}
      transition={{
        duration:1,
        delay:2
      }}
      >
        Full Stack Devloper
        <br/>
        Learn in YouTube
      </motion.p>
      <motion.button className={`bg-indigo-600 text-white py-4 px-8 rounded-lg font-bold text-lg mt-16`} 
       initial={{
        opacity:0,
        y:25,
      }} 
      whileInView={{
        opacity:1,
        y:0,
      }}
      transition={{
        duration:1,
        delay:2.5
      }}
      >
        Contact Me

      </motion.button>
      
    </Section>
  )
}

const skills=[
  {
    title:"Threejs / React Three Fiber",
    level:80,
  },
  {
    title:"React / React Native",
    level:90,
  },
  {
    title:"Node js ",
    level:60,
  },
  {
    title:"3D Modelling",
    level:50,
  }
];


const language=[
  {
    title:"English",
    level:50,
  },
  {
    title:"Tamil",
    level:"100"
  }
]



function SkillsSection(){
  return(
    <Section>
      <motion.div whileInView={"visible"}>
        <h2 className='text-5xl font-bold'>
          Skills
        </h2>
        <div className='mt-8 space-y-4'>
          {
            skills.map((skill,index)=>(
              <div className='w-64' key={index}>
                <motion.h3 className='text-xl font-bold text-gray-800'
                 initial={{
                  opacity:0,
               
                }}
                variants={{
                  visible:{
                    opacity:1,
                    transition:{
                      duration:1,
                      delay:1 + index * 0.2,
                    }
                  }
                }}
                whileInView={{
                  opacity:1,
                }}
               
                >
                  {skill.title}
                </motion.h3>
                <div className='w-full h-2 mt-2 bg-gray-200 rounded-full'>
                  <motion.div className='h-full bg-indigo-600 rounded-full'
                  style={{width:`${skill.level}%`}} 

                  initial={{
                    scaleX:0,
                    originX:0,
                  }} 
                  whileInView={{
                    scaleX:1
                  }}
                  transition={{
                    duration:1,
                    delay:1 + index * 0.2
                  }}
                  />

                </div>

              </div>
            ))}
        </div>
            {/* Language */}

            <div>
              <h2 className='mt-10 text-5xl font-bold' >Language</h2>
              <div className='mt-8 space-y-4'>
                {
                  language.map((lng,index)=>(
                    <div className='w-64' key={index}>
                    <motion.h3 className='text-xl font-bold text-gray-800'
                     initial={{
                      opacity:0,
                   
                    }}
                    variants={{
                      visible:{
                        opacity:1,
                        transition:{
                          duration:1,
                          delay:1 + index * 0.2,
                        }
                      }
                    }}
                    whileInView={{
                      opacity:1,
                    }}
                   
                    >
                      {lng.title}
                    </motion.h3>
                    <div className='w-full h-2 mt-2 bg-gray-200 rounded-full'>
                      <motion.div className='h-full bg-indigo-600 rounded-full'
                      style={{width:`${lng.level}%`}} 
    
                      initial={{
                        scaleX:0,
                        originX:0,
                      }} 
                      whileInView={{
                        scaleX:1
                      }}
                      transition={{
                        duration:1,
                        delay:1 + index * 0.2
                      }}
                      />
    
                    </div>
    
                  </div>
                  ))
                }
                
              </div>
            </div>
      </motion.div>
    </Section>
   
  )
}



function ContactSection(){
  return(
    <Section>
     <h2 className='text-5xl font-bold'>Contact Me </h2>
     <div className='p-8 mt-8 bg-white rounded-md w-96 max-x-full'>
        <form>
          <label for="name" className='block mb-1 font-medium text-gray-900'>
            Name
          </label>
          <input type='text' name='name' id='name'
          className='block w-full p-3 text-gray-900 border-0 rounded-md shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-inset focus:ring-indigo-700'/>

           <label for="email" className='block mb-1 font-medium text-gray-900'>
            Email
          </label>
          <input type='email' name='email' id='email'
          className='block w-full p-3 text-gray-900 border-0 rounded-md shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-inset focus:ring-indigo-700'/>

          {/* Message */}

          <label
            for="email"
            className="block mt-8 mb-1 font-medium text-gray-900"
          >
            Message
          </label>
          <textarea
            name="message"
            id="message"
            className="block w-full h-32 p-3 text-gray-900 border-0 rounded-md shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
          />
          
          <button className='px-8 py-4 mt-16 text-lg font-bold text-white bg-indigo-600 rounded-lg'>
            Submit
          </button>
          
        </form>
     </div>

    </Section>
  )
}