import { cn } from '@/lib/utils'
import { Hero } from './components/hero'
import { Navbar } from './components/navbar'
import { InfiniteMovingCards } from './components/ui/moving-card'
import { Experiences } from './components/experiences'
import { AboutMe } from './components/about-me'
import { Footer } from './components/footer'

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

        <Hero />
      </div>

      <InfiniteMovingCards
        speed='normal'
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

      <div className='container mx-auto'>
        <AboutMe />
        <Experiences />
      </div>
      <Footer />
    </>
  )
}
