import { link } from "fs"
import { div } from "motion/react-client"

const Lintree = () => {

  const socialsMedia = [
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/moraes.dev/',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/moraes-dev/',
    }
  ]

  const openLink = (url: string) => {
    window.open(url, '_blank')
  }

  const projectCards = [
    {
      name: "Cine Explores Moraes",
      description: "Este projeto web consome a API do TMDB para listar filmes populares e permitir buscas, responsivo e possui modo escuro para uma melhor experiência do usuário.",
      url: "https://cine-explores-moraes.vercel.app/",
      image: "https://cine-explores-moraes.vercel.app/static/media/cine-explores-moraes.e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855.png",
      tags: ["React", "NextJs", "TypeScript", "TailwindCss"],
    }
  ]

  return(
    <div className="flex justify-center items-center flex-col h-screen w container ">
      <div className="border-4 rounded-full border-black p1">
        <div>Foto do Alva</div>  {/* width={130} height={130} */}</div>
    <div>
      <p className="text-xl text-white-500 font-semibold md:text-2xl mt-2">Gabriel Moraes</p>
      <p className="text-sm text-black md:text-base">Front End Developer</p>
      <p className="text-sm md:font-medium text-white-400 mt-6 md:text-base">
        Meus links em um lugar só! Confira abaixo
      </p>
    </div>
    
    <div className="flex flex-col gap-4 mt-4 w-full md:w-auto md:min-w-96">
    {socialsMedia.map((media, index) => (
          <div
            key={index}
            className="border-2 border-white rounded-xl p-4 flex items-center justify-center gap-3 cursor-pointer"
            onClick={() => openLink(media.url)}
          >
            <div>
              <p className="text-white text-xl md:text-2xl font-bold">{media.name}</p>
            </div>
          </div>
        ))}

    </div>
    
    </div>
  )
}