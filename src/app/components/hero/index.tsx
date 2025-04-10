'use client'

import { handleDownloadCv } from "@/lib/utils"
import { Button } from "../ui/button"

export const Hero = () => {
  return (
    <div className='z-10 flex max-w-[750px] flex-col items-center justify-center text-center'>
      <img src='/hero-image.svg' />

      <span className='text-white-200 mt-4 mb-4 text-xl font-medium'>
        Olá, eu sou Moraes Dev ✌️
      </span>

      <h1 className='text-white-400 mb-6 text-4xl leading-12 font-bold'>
        Construo experiências digitais com foco em performance e design.
      </h1>

      <p className='text-white-100 max-w-[550px] text-sm'>
        Desenvolvedor Front-End com experiência em React e TypeScript. Trabalho criando interfaces
        modernas e performáticas e atuo como criador de conteúdo no @moraesdev.
      </p>

      <div className='mt-8 flex gap-4'>
        <Button variant='primary'>Descubra mais</Button>
        <Button variant='secondary' className='min-w-[200px]' onClick={() => handleDownloadCv()}>
          Baixar CV
        </Button>
      </div>
    </div>
  )
}
