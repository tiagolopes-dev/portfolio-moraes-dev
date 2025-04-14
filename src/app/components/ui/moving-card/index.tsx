'use client'

import { cn } from '@/lib/utils'
import React, { useEffect, useState } from 'react'

export const InfiniteMovingCards = ({
  items,
  direction = 'left',
  speed = 'fast',
  pauseOnHover = true,
  className
}: {
  items: {
    quote: string
    name: string
    title: string
  }[]
  direction?: 'left' | 'right'
  speed?: 'fast' | 'normal' | 'slow'
  pauseOnHover?: boolean
  className?: string
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null)
  const scrollerRef = React.useRef<HTMLUListElement>(null)
  const carouselItems = [
    '/react-icon.svg',
    '/nextjs-icon.svg',
    '/tailwind-icon.svg',
    '/typescript-icon.svg',
    '/javascript-icon.svg',
    '/html-icon.svg',
    '/css-icon.svg',
    '/tailwind-icon.svg',
    '/styledcomponents-icon.svg',
    '/shadcn-icon.svg',
    '/radix-icon.svg',
    '/node-icon.svg',
    '/express-icon.svg',
    '/fastify-icon.svg',
    '/nest-icon.svg',
    '/postgresql-icon.svg',
    '/sqlserver-icon.svg',
    '/framer-icon.svg',
  ]

  useEffect(() => {
    addAnimation()
  }, [])
  const [start, setStart] = useState(false)
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children)

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true)
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem)
        }
      })

      getDirection()
      getSpeed()
      setStart(true)
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === 'left') {
        containerRef.current.style.setProperty('--animation-direction', 'forwards')
      } else {
        containerRef.current.style.setProperty('--animation-direction', 'reverse')
      }
    }
  }
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === 'fast') {
        containerRef.current.style.setProperty('--animation-duration', '20s')
      } else if (speed === 'normal') {
        containerRef.current.style.setProperty('--animation-duration', '40s')
      } else {
        containerRef.current.style.setProperty('--animation-duration', '80s')
      }
    }
  }
  return (
    <div
      ref={containerRef}
      className={cn('scroller relative z-20 overflow-hidden', className)}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          'flex w-max min-w-full shrink-0 flex-nowrap gap-8 md:gap-20 py-4',
          start && 'animate-scroll',
          pauseOnHover && 'hover:[animation-play-state:paused]'
        )}
      >
        {carouselItems.map((item, idx) => (
          <li
            className='relative max-w-full'
            key={item}
          >
            <img src={item} alt={item} />
          </li>
        ))}
      </ul>
    </div>
  )
}
