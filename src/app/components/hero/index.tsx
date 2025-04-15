'use client'

import { handleDownloadCv } from '@/lib/utils'
import { Button } from '../ui/button'

export const Hero = () => {
  return (
    <div className='z-10 flex max-w-[750px] flex-col items-center justify-center px-3 text-center md:px-0'>
      <img src='/hero-image.svg' />

      <span className='text-white-200 mt-4 mb-4 text-base font-medium md:text-xl'>
        Olá, eu sou Moraes Dev ✌️
      </span>

      <h1 className='text-white-400 mb-6 text-2xl leading-9 font-bold md:text-4xl md:leading-12'>
        Construo experiências digitais com foco em performance e design.
      </h1>

      <p className='text-white-100 max-w-[550px] text-sm'>
        Desenvolvedor Front-End com experiência em React e TypeScript. Trabalho criando interfaces
        modernas e performáticas e atuo como criador de conteúdo no @moraesdev.
      </p>

      <div className='mt-8 flex w-full flex-col gap-4 md:w-fit md:flex-row'>
        <Button variant='primary' className='min-w-[200px]'>
          Descubra mais
        </Button>
        <Button variant='secondary' className='min-w-[200px]' onClick={() => handleDownloadCv()}>
          Baixar CV
        </Button>
      </div>
    </div>
  )
}
