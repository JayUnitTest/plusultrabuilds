import Image from 'next/image'
import ProjectCard from '@/components/ProjectCard'

export default function ProjectsPage() {

  const projects = [
    {name: 'E-commerce App', link: '', 
    description: 'PHP Laravel projectasfasdfadfadsfsdafliadfngijdsgj sdiofj ifasdfasdfasdfasfdasdfadsfj sdfij ', 
    video: 'moviesAPIexample.mov'},
    {name: 'OTB-Notary', link: '', description: 'Final year project projectasfasdfadfadsfsdafliadfngijdsgj sdiofj ifasdfasdfasdfasfdasdfadsfj sdfij', video: 'moviesAPIexample.mov'},
    {name: 'Movies-API', link: '', description: 'Java SpringBoot MongoDB react project projectasfasdfadfadsfsdafliadfngijdsgj sdiofj ifasdfasdfasdfasfdasdfadsfj sdfij', video: 'moviesAPIexample.mov'},
  ]

  return (
  <main className='flex flex-col flex-1 mx-auto max-w-[900px] w-full bg-slate-100'>
    {projects.map((project, projectIndex) => {
      return (
        <ProjectCard key={projectIndex} project={project} index={projectIndex}/>
      )
    })}
  </main>
  )
}
