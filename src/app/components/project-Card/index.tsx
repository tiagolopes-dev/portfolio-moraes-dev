import { div } from "motion/react-client"
import { IoIosArrowForward } from "react-icons/io"

const ProjectCard = ( ) => {

  const projectCards = 
    {
      name: "Cine Explores Moraes",
      description: "Este projeto web consome a API do TMDB para listar filmes populares e permitir buscas, responsivo e possui modo escuro para uma melhor experiência do usuário.",
      url: "https://cine-explores-moraes.vercel.app/",
      image: "https://cine-explores-moraes.vercel.app/static/media/cine-explores-moraes.e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855.png",
      tags: ["React", "NextJs", "TypeScript", "TailwindCss"],
    }
  

  const OpenWindow = (url: string) => {
    window.open (url, '_blank') 
  }

  return(
    <div className="flex flex-col p-3 bg-black-300 rounded-lg">
      <div>Image</div>
      <div className="text-white-400 text-base mt-4">Cine Explores Moraes</div>
      <div className="text-white-50 text-sm mt-3">Este projeto web consome a API do TMDB para listar filmes populares e permitir buscas, responsivo e possui modo escuro para uma melhor experiência do usuário.</div>
      <div className="flex gap-1 mt-3">
      {projectCards.tags.map ((tag, index) =>
        <div key={index} className="rounded-full bg-primary text-white text-xs py-1 px-2">{tag}</div>  
      )}
      </div>
      
      <div className="flex items-center justify-end text-white-200 text-sm mt-7 cursor-pointer">
        Ver <IoIosArrowForward className=""/>
      </div>
    </div>

  )
}
export default ProjectCard