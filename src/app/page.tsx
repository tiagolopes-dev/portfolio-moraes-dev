import { cn } from '@/lib/utils'
import { Button } from './components/ui/button'
import { Navbar } from './components/navbar'
import { InfiniteMovingCards } from './components/ui/moving-card'

export default function Home() {
  return (
    <>
      <Navbar />
      <div className='relative flex h-svh w-full items-center justify-center bg-white dark:bg-black'>
        <div
          className={cn(
            'absolute inset-0',
            '[background-size:20px_20px]',
            '[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]',
            'dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]'
          )}
        />
        <div className='z-10 flex max-w-[750px] flex-col items-center justify-center text-center'>
          <img src='/hero-image.svg' />

          <span className='text-white-200 mt-4 mb-4 text-xl font-medium'>
            Olá, eu sou Moraes Dev ✌️
          </span>

          <h1 className='text-white-400 mb-6 text-4xl leading-12 font-bold'>
            Construo experiências digitais com foco em performance e design.
          </h1>

          <p className='text-white-100 max-w-[550px] text-sm'>
            Desenvolvedor Front-End com experiência em React e TypeScript. Trabalho criando
            interfaces modernas e performáticas e atuo como criador de conteúdo no @moraesdev.
          </p>

          <div className='mt-8 flex gap-4'>
            <Button variant='primary'>Descubra mais mais</Button>
            <Button variant='secondary' className='min-w-[200px]'>
              Baixar CV
            </Button>
          </div>
        </div>
      </div>

      <InfiniteMovingCards
      speed='slow'
        items={[
          { name: 'teste 1', title: 'teste 1', quote: 'teste 1' },
          { name: 'teste 2', title: 'teste 2', quote: 'teste 2' },
          { name: 'teste 3', title: 'teste 3', quote: 'teste 3' },
          { name: 'teste 4', title: 'teste 4', quote: 'teste 4' },
          { name: 'teste 5', title: 'teste 5', quote: 'teste 5' },
          { name: 'teste 6', title: 'teste 6', quote: 'teste 6' },
          { name: 'teste 7', title: 'teste 7', quote: 'teste 7' },
          { name: 'teste 8', title: 'teste 8', quote: 'teste 8' },
          { name: 'teste 9', title: 'teste 9', quote: 'teste 9' },
          { name: 'teste 10', title: 'teste 10', quote: 'teste 10' }
        ]}
      />

      <div className='h-[50rem]'></div>
    </>
  )
}
