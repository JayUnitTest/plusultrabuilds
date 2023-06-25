import Image from 'next/image'
import ProjectCard from '@/components/ProjectCard'

export default function ProjectsPage() {

  const projects = [
    {name: 'PlusUltraStrength', link: 'https://github.com/JayUnitTest/php-laravel-ecommerce', 
    description: 'This was a project to experiment with the Laravel framework to garner an understanding of it. The aim was to create an e-commerce application. This is a site focussed on selling gym equipment. The video shows a demonstration of the application functionalities. Check out the repo for more! ', 
    video: 'EcommAPPDemo.mp4'},
    {name: 'OTB-Notary', link: 'https://github.com/JayUnitTest/OTBNotary', description: 'Final year project at University. The aim of the project was to dip my toes in the waters of blockchain technology. This project aimed to create a notarisation app in which a user could notarise their document using the blockchain. The user would upload a file and will recieve a checksum correlating their file with a block on the blockchain. Check out the repo!', video: 'OTBNOTARYDEMO.mp4'},
    {name: 'Film-Fiends', link: 'https://github.com/JayUnitTest/MovieAPISpring', description: 'This project experiment with a full-stack application using Java Spring-Boot, MongoDB as the database and a front-end with react. The site is a movie review site in which users can submit a review on a movie. The review is then saved to a database. Check out the repo!', video: 'FilmFiendsDemo.mp4'},
  ]

  return (
  <main className='flex flex-col flex-1 mx-auto max-w-[900px] w-full bg-amber-200'>
    {projects.map((project, projectIndex) => {
      return (
        <ProjectCard key={projectIndex} project={project} index={projectIndex}/>
      )
    })}
  </main>
  )
}
