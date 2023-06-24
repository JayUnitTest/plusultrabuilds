import DescriptionMap from '@/components/DescriptionMap'
import Link from 'next/link'
import Image from 'next/image'
import { ThemeProvider } from 'next-themes'

function SectionHeaderText(props) {
  const {children} = props 
  return (
    <h4 className='pb-3 text-xl font-semibold'>{children}</h4>
  )
}

export default function Home() {

  const links = [
    {name: 'Email:', link: 'https://www.gmail.com', content: 'jaysingh4078@gmail.com'},
    {name: 'Github:', link: 'https://github.com/JayUnitTest', content: 'JayUnitTest'},
    {name: 'LinkedIn:', link: 'https://www.linkedin.com/in/jay-singh-51ba87142/', content: 'JaySingh'},
  ]

  const skills = [
    {name: 'Java:', content: ['OOP', 'Data-Structures & Algorithms', 'SOLID principle', 'Kotlin', 'and ready to learn more!']},
    {name: 'Javascript:', content: ['Vanilla', 'React', 'NextJs, and always willing to learn more']},
    {name: 'PHP:', content: ['Laravel']},
    {name: 'Web:', content: ['HTML', 'CSS', 'TailwindCSS' , 'SQL', 'GIT' , 'MongoDB']},
  ]

  const hobbies = [
    {name: 'Gym:', content: 'I love to go to the gym! I primarily train in powerlifting however as of recently i have started different types of training'},
    {name: 'Travel:', content:'Traveling is a must! What better way to widen your mindset and experience something new?'},
    {name: 'Music:', content: 'I play the guitar! Music is a great outlet in all sorts of ways and can push the mind creatively in ways other hobbies may not'},
  ]
  return (
  <main className='flex flex-col justify-center items-center p-10 py-10'>
    <h1 className='font-bold text-4xl sm:py-4 md:py-8 sm:text-5xl md:text-6xl py-4 text-gray-700 '>
            Hi, I&#39;m <span className='text-[#388B83]'> Jay</span>
          </h1>
          <h1 className='py-2 text-gray-700'>Junior Software Developer</h1>
    <div className='mb-6'>
    <img
  src="/itsme.jpeg"
  className="mx-auto object-cover w-56 h-56 sm:w-96 sm:h-96 border-4 border-[#388B83] rounded-full custom-position"
  alt="Avatar" />
      </div>
      <section className="mb-5">
    <div
      className="fade show items-center justify-between rounded-lg bg-amber-200 py-2 px-4 text-center md:flex md:text-left mb-5 ">
      <div className="mb-2 h-auto max-w-lg mx-auto items-center justify-center md:mb-0 px- md:justify-start">
        <strong className="mr-1">Scroll on through!</strong> Learn a bit about <span className='text-[#388B83]'>who</span> I am and <span className='text-[#388B83]'>what</span> I can do
      </div>
    </div>
    <section className='flex flex-col justify-center items-center mb-8'>
    <DescriptionMap list={links} type={"links"} />
    </section>
  </section>
    <section className='text-center mb-8'>
      <SectionHeaderText>About me</SectionHeaderText>
      <div className='mx-auto max-w-lg'>I am a computer Science graduate based in the UK looking to take my first steps in the industry.
        I love to create and i especially love to think beyond the box. Throughout my academic years i covered a range of 
        technologies and found love for each one of them and thus found a drive to want to constantly develop my skills to reach newer 
        levels
      </div>
    </section>
    <section className='flex flex-col justify-center items-center mb-8'>
    <SectionHeaderText>Skills</SectionHeaderText>
    <DescriptionMap list={skills} type={"skills"} />
    </section>
    <section className='flex flex-col justify-center items-center mb-8'>
    <SectionHeaderText>Projects</SectionHeaderText>
      <div className='text-sx sm:text-sm'>Have a look at my <button className=" md:animate-bounce transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-[#2B6975] duration-300 ...">
      <Link href={'/projects'}className='text-[#388B83]'>projects</Link>
</button></div>
    </section>
    <section className='text-center mb-8'>
  <SectionHeaderText>I ♥</SectionHeaderText>
  <div className='mx-auto max-w-lg'>
    <DescriptionMap list={hobbies} type={"hobbies"} />
  </div>
</section>
  </main>
  )
}
