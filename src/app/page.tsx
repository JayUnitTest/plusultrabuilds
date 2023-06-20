import DescriptionMap from '@/components/DescriptionMap'
import Link from 'next/link'
import Image from 'next/image'

function SectionHeaderText(props) {
  const {children} = props 
  return (
    <h4 className='pb-5 text-xl font-semibold'>{children}</h4>
  )
}

export default function Home() {

  const links = [
    {name: 'Email', link: 'https://www.gmail.com', content: 'jaysingh4078@gmail.com'},
    {name: 'Github', link: 'https://github.com/JayUnitTest', content: 'JayUnitTest'},
    {name: 'LinkedIn', link: 'https://www.linkedin.com/in/jay-singh-51ba87142/', content: 'JaySingh'},
  ]

  const skills = [
    {name: 'Java', content: ['OOP', 'Data-Structures & Algorithms', 'SOLID', 'Spring']},
    {name: 'Javascript', content: ['React']},
    {name: 'Web', content: ['HTML', 'CSS', 'TailwindCSS' , 'SQL', 'GIT' , 'MongoDB']},
  ]

  const hobbies = [
    {name: 'Gym', content: 'I love to go to the gym! I primarily train in powerlifting however as of recently i have started different types of training'},
    {name: 'Travel', content:'Traveling is a must! What better way to widen your mindset and experience something new?'},
    {name: 'Music', content: 'I play the guitar! Music is a great outlet in all sorts of ways and can push the mind creatively in ways other hobbies may not'},
  ]
  return (
  <main className='flex flex-col gap-5 p-4 mx-auto max-w-[900px] w-full'>
    <h2 className='font-bold text-4xl sm:py-4 md:py-8 sm:text-5xl md:text-6xl'>Jay Singh</h2>
    <div className='mb-4'>
    <img
  src="/itsme.jpeg"
  className="rounded-full h-auto max-w-lg mx-auto shadow-none transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-black/30"
  alt="Avatar" />
      </div>
      <section className="mb-5">
    <div
      className="fade show items-center justify-between rounded-lg bg-slate-500 py-2 px-4 text-center text-white md:flex md:text-left">
      <div className="mb-2 h-auto max-w-lg mx-auto items-center justify-center md:mb-0 px- md:justify-start">
        <strong className="mr-1">Hi!</strong> I am a graduate Developer from the UK
      </div>
    </div>
    <DescriptionMap list={links} type={"links"} />
  </section>
    <section>
      <SectionHeaderText>About me</SectionHeaderText>
      <p>I am a computer Science graduate based in the UK looking to take my first steps in the industry.
        I love to create and i especially love to think beyond the box... (add more)
      </p>
    </section>
    <section>
    <SectionHeaderText>Skills</SectionHeaderText>
    <DescriptionMap list={skills} type={"skills"} />
    </section>
    <section>
    <SectionHeaderText>Projects</SectionHeaderText>
      <p className='text-sx sm:text-sm'>Have a look at my <Link href={'/projects'}className='text-sky-400'>projects</Link></p>
    </section>
    <section>
    <SectionHeaderText>I ♥ </SectionHeaderText>
      <DescriptionMap list={hobbies} type={"hobbies"} />
    </section>
  </main>
  )
}
