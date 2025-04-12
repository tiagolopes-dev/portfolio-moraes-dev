import { FaReact, FaInstagram } from 'react-icons/fa'
import { RiTailwindCssFill } from 'react-icons/ri'
import { BiLogoTypescript } from 'react-icons/bi'
import { FiGithub } from 'react-icons/fi'
import { PiGitlabLogoSimple } from 'react-icons/pi'
import { CiLinkedin } from 'react-icons/ci'
import { socialNetworks } from '@/lib/content'

export const AboutMe = () => {
  return (
    <div className='my-30 flex flex-col-reverse md:flex-row md:justify-center gap-6'>
      <div className='relative'>
        <img
          src='/moraes-dev-rounded.png'
          alt='Foto de perfil do Moraes Dev'
          className='size-full md:size-[26rem] object-cover'
        />
        <div className='bg-primary animate-shake-wave absolute top-14 right-2 flex size-16 items-center justify-center rounded-full text-white'>
          <RiTailwindCssFill className='text-4xl' />
        </div>
        <div className='bg-primary animate-shake-wave absolute top-40 -left-7 flex size-16 items-center justify-center rounded-full text-white'>
          <BiLogoTypescript className='text-4xl' />
        </div>
        <div className='bg-primary animate-shake-wave absolute right-7 bottom-12 flex size-16 items-center justify-center rounded-full text-white'>
          <FaReact className='text-4xl' />
        </div>
      </div>

      <div className='text-white-300 max-w-[650px]'>
        <p className='mb-4'>
          Olá, meu nome é Gabriel Moraes! Sou um desenvolvedor <span>Front-End</span>, com quase 3
          anos de experiência no desenvolvimento de{' '}
          <span className='font-bold'>aplicações web e soluções digitais eficientes</span>. Tenho
          uma forte capacidade de projetar, desenvolver e testar interfaces de usuário, além de
          implementar funcionalidades robustas, sempre buscando entregar valor ao usuário final.
        </p>

        <p className='mb-4'>
          Comecei na tecnologia aos <span className='font-bold'>16 anos</span>, movido pela
          curiosidade de criar soluções digitais. Em 2021, entrei na Escola Técnica Rezende Rammel,
          onde cursei ensino médio técnico em informática por três anos. Durante esse período, me
          aprofundei em <span className='font-bold'>JavaScript e TypeScript</span>, além de explorar
          linguagens como C, Delphi e frameworks como React e Angular.
        </p>

        <p className='mb-4'>
          Desenvolvo sistemas responsivos e de alta performance utilizando{' '}
          <span className='font-bold'>React e TypeScript</span>, com foco em{' '}
          <span className='font-bold'>usabilidade e eficiência</span>. No Back-end, tenho
          experiência em Node.js, trabalhando com frameworks como Express, Fastify e NestJS para
          criar APIs escaláveis e seguras.
        </p>

        <div className='flex gap-1'>
          {socialNetworks.map((socialNetwork) => (
            <a href={socialNetwork.link} target='_blank' rel='noreferrer' key={socialNetwork.name}>
              <div className='hover:bg-primary-dark p-2'>
                <socialNetwork.icon className='text-3xl' />
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
