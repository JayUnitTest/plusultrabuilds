import DescriptionMap from '@/components/DescriptionMap'
import Link from 'next/link'
import Providers from './Providers'
import DarkMode from './DarkMode'

function SectionHeaderText(props: { children: any }) {
  const {children} = props 
  return (
    <h4 className='pb-3 text-xl font-semibold'>{children}</h4>
  )
}

export default function Home() {

  const links = [
    {name: 'Email:', link: 'https://www.gmail.com', content: 'jaysingh4078@gmail.com'},
    {name: 'Github:', link: 'https://github.com/JayUnitTest', content: 'JayUnitTest'},
    {name: 'LinkedIn:', link: 'https://www.linkedin.com/in/jay-singh-51ba87142/', content: 'Jay Singh'},
  ]

  const skills = [
    {name: 'Java:', content: ['OOP', 'Data-Structures & Algorithms', 'SOLID principle', 'Kotlin']},
    {name: 'Javascript:', content: ['Vanilla', 'React', 'NextJs']},
    {name: 'PHP:', content: ['Laravel']},
    {name: 'Other:', content: ['HTML', 'CSS', 'TailwindCSS' , 'SQL', 'GIT' , 'MongoDB']},
    {name: 'And I am always willing and ready to learn more!', content: ['']}
  ]

  const hobbies = [
    {name: 'Gym:', content: 'I love to go to the gym! I primarily train in powerlifting however as of recently i have started different types of training'},
    {name: 'Travel:', content:'Traveling is a must! What better way to widen your mindset and experience something new?'},
    {name: 'Music:', content: 'I play the guitar! Music is a great outlet and can push the mind creatively in ways other hobbies may not'},
  ]
  return (
  <main className=' flex flex-col justify-center items-center p-10 py-10 custom-class'>
    <Providers>
    <h1 className='font-bold text-4xl sm:py-4 md:py-8 sm:text-5xl md:text-6xl py-4 text-inherit '>
            Hi, I&#39;m <span className='text-[#388B83] dark:text-[#816797]'> Jay <span className='hand'>👋</span></span>
          </h1>
          <h1 className='py-2 text-inherit'>Junior Software Developer</h1>
    <div className='mb-6'>
    <img
  src="/itsme.jpeg"
  className="mx-auto object-cover w-56 h-56 sm:w-96 sm:h-96 border-4 border-[#388B83] dark:border-[#816797] rounded-full custom-position "
  alt="Avatar" />
      </div>
      <section className="mb-5">
    <div
      className="fade show items-center justify-between rounded-lg bg-amber-200 dark:bg-[#323236] py-2 px-4 text-center md:flex md:text-left mb-5 ">
      <div className="mb-2 h-auto max-w-lg mx-auto items-center justify-center md:mb-0 px- md:justify-start">
        <strong className="mr-1">Scroll on through!</strong> Learn a bit about <span className='text-[#388B83] dark:text-[#816797]'>who</span> I am and <span className='text-[#388B83] dark:text-[#816797]'>what</span> I can do
      </div>
    </div>
    <section className='flex flex-col justify-center items-center mb-8'>
    <DescriptionMap list={links} type={"links"} />
    </section>
  </section>
    <section className='text-center mb-8'>
      <SectionHeaderText>About me</SectionHeaderText>
      <div className='mx-auto max-w-lg tracking-tight'>
        <p>
I am a computer science graduate based in the UK, eagerly taking my first steps into the industry. I have a passion for creating and thinking outside the box. During my academic years, 
I explored various technologies and developed a deep appreciation for each of them. This fueled my drive to continually improve my skills and reach new levels of expertise.
        </p>
      </div>
    </section>
    <section className='text-center mx-auto mb-2 h-auto max-w-lg items-center justify-center md:mb-0 px- md:justify-start tracking-wider'>
    <SectionHeaderText>Skills</SectionHeaderText>
    <DescriptionMap list={skills} type={"skills"} />
    </section>
    <section className='flex flex-col justify-center items-center mt-8 mb-8'>
    <SectionHeaderText>Projects</SectionHeaderText>
      <div className='text-sx sm:text-sm'>Have a look at my <button className=" md:animate-bounce transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-[#2B6975] duration-300 ...">
      <Link href={'/projects'}className='text-[#388B83] dark:text-[#816797]'>projects</Link>
</button></div>
    </section>
    <section className='text-center mb-2 h-auto max-w-lg mx-auto items-center justify-center md:mb-0 px- md:justify-start'>
  <SectionHeaderText>I ♥</SectionHeaderText>
  <div className='mx-auto max-w-lg '>
    <DescriptionMap list={hobbies} type={"hobbies"} />
  </div>
</section>
</Providers>
  </main>
  )
}
