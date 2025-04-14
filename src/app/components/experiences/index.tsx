'use client'
import { HiDocumentText } from 'react-icons/hi'
import { FaCheckSquare } from 'react-icons/fa'
import { handleDownloadCv } from '@/lib/utils'

export const Experiences = () => {
  const experiences = [
    {
      title: 'Desenvolvedor Front-End',
      company: 'Starta',
      companyLogo: '/starta-logo.jpg',
      date: '03/2025 - Atual',
      tasks: [
        'Desenvolvimento de interfaces modernas e performáticas',
        'Criação de conteúdo no @moraesdev',
        'Trabalho em projetos de alta complexidade',
        'Desenvolvimento de aplicativos para a web e mobile',
        'Desenvolvimento de sites e aplicativos desktop'
      ],
      stacks: 'HTML, CSS, Tailwind, JavaScript, TypeScript, React, NextJs, Git, Github e Figma'
    },
    {
      title: 'Desenvolvedor Front-End',
      company: 'Hub Connect Eventos',
      companyLogo: '/hub-logo.png',
      date: '02/2025 - 03/2025',
      tasks: [
        'Desenvolvimento de interfaces modernas e performáticas',
        'Criação de conteúdo no @moraesdev',
        'Trabalho em projetos de alta complexidade',
        'Desenvolvimento de aplicativos para a web e mobile',
        'Desenvolvimento de sites e aplicativos desktop'
      ],
      stacks: 'HTML, CSS, Tailwind, JavaScript, TypeScript, React, NextJs, Git, Github e Figma'
    },
    {
      title: 'Desenvolvedor Front-End',
      company: 'Ent - Empresas no topo',
      companyLogo: '/ent-logo.jpg',
      date: '02/2025 - Atual',
      tasks: [
        'Desenvolvimento de interfaces modernas e performáticas',
        'Criação de conteúdo no @moraesdev',
        'Trabalho em projetos de alta complexidade',
        'Desenvolvimento de aplicativos para a web e mobile',
        'Desenvolvimento de sites e aplicativos desktop'
      ],
      stacks: 'HTML, CSS, Tailwind, JavaScript, TypeScript, React, Git, Github e Figma'
    },
    {
      title: 'Desenvolvedor Front-End',
      company: 'Wishme',
      companyLogo: '/wishme-logo.png',
      date: '10/2023 - 12/2024',
      tasks: [
        'Desenvolvimento de interfaces modernas e performáticas',
        'Criação de conteúdo no @moraesdev',
        'Trabalho em projetos de alta complexidade',
        'Desenvolvimento de aplicativos para a web e mobile',
        'Desenvolvimento de sites e aplicativos desktop'
      ],
      stacks:
        'HTML, CSS, Tailwind, JavaScript, TypeScript, React, NextJS, Styled-Components, Jest, Git, Github e Figma'
    },
    {
      title: 'Desenvolvedor Front-End',
      company: 'Karyon Consultoria em Informática',
      companyLogo: '/karyon-logo.jpg',
      date: '02/2024 - 08/2024',
      tasks: [
        'Desenvolvimento de interfaces modernas e performáticas',
        'Criação de conteúdo no @moraesdev',
        'Trabalho em projetos de alta complexidade',
        'Desenvolvimento de aplicativos para a web e mobile',
        'Desenvolvimento de sites e aplicativos desktop'
      ],
      stacks: 'HTML, CSS, JavaScript, Typescript, Angular, Delphi e SQL Server'
    },
    {
      title: 'Estagiário Desenvolvedor',
      company: 'Karyon Consultoria em Informática',
      companyLogo: '/karyon-logo.jpg',
      date: '02/2024 - Atual',
      tasks: [
        'Desenvolvimento de interfaces modernas e performáticas',
        'Criação de conteúdo no @moraesdev',
        'Trabalho em projetos de alta complexidade',
        'Desenvolvimento de aplicativos para a web e mobile',
        'Desenvolvimento de sites e aplicativos desktop'
      ],
      stacks: 'HTML, CSS, JavaScript, Typescript, Angular, Delphi e SQL Server'
    }
  ]

  return (
    <div className='flex flex-col justify-around md:flex-row'>
      <div className='relative mb-8 max-w-80 md:sticky md:top-40 md:mb-0 md:self-start'>
        <h1 className='mb-4 text-3xl font-bold text-white'>
          Minhas experiências ao longo dos anos
        </h1>
        <p className='text-white-100 mb-4 text-sm'>
          Um breve resumo das experiências que moldaram minha jornada como desenvolvedor Front-end.
        </p>

        <div
          className='text-primary flex cursor-pointer items-center gap-2'
          onClick={handleDownloadCv}
        >
          <HiDocumentText className='text-xl' />
          <span className='text-sm font-medium'>Baixar meu curriculo</span>
        </div>
      </div>

      <div className='flex max-w-full md:max-w-2/6 flex-col gap-10'>
        {experiences.map((experience, index) => {
          return (
            <div key={index}>
              <div className='mb-4 flex gap-3'>
                <img
                  src={experience.companyLogo}
                  alt='company-logo'
                  className='outline-primary/45 drop-shadow-primary/45 size-10 rounded-full outline-2 drop-shadow-xs'
                />
                <div className='w-full'>
                  <p className='text-white-400 text-lg font-semibold'>{experience.title}</p>

                  <div className='text-white-200 flex items-center justify-between text-sm'>
                    <span>{experience.company}</span>
                    <span>{experience.date}</span>
                  </div>
                </div>
              </div>

              {experience.tasks.map((task, index) => {
                return (
                  <div key={index} className='mt-2 flex items-center gap-2'>
                    <FaCheckSquare className='text-primary text-xs' />
                    <span className='text-white-100 text-sm'>{task}</span>
                  </div>
                )
              })}

              <div className='mt-4 ml-5'>
                <span className='text-white-50 text-sm'>Stacks: {experience.stacks}</span>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
