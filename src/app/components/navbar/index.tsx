import { Button } from "../ui/button";

export function Navbar() {
  return (
    <div className='bg-black-400 fixed top-10 z-20 flex w-full items-center justify-between rounded-full border border-[#ffffff14] pl-6 pr-3 py-3 md:left-2/4 md:max-w-[800px] md:-translate-x-2/4'> 
      <img src='/moraes-logo.svg' alt='Moraes Logo' />

      <div className="flex items-center gap-4">
        <a href='#' className='text-white-200 hover:text-white-200/85'>
          Home
        </a>
        <a href='#' className='text-white-200 hover:text-white-200/85'>
          Sobre mim
        </a>
        <a href='#' className='text-white-200 hover:text-white-200/85'>
          Experiências
        </a>
        <a href='#' className='text-white-200 hover:text-white-200/85'>
          Projetos
        </a>
        <Button rounded className="ml-2">Contate-me</Button>
      </div>
    </div>
  )
}
