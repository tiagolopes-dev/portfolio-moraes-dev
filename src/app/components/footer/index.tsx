import { socialNetworks } from '@/lib/content'

export const Footer = () => {
  return (
    <footer className='bg-black-300 py-6 flex'>
      <div className='container mx-auto'>
        <div className='border-b-black-200 flex flex-col md:flex-row justify-between border-b pb-10 mb-6'>
          <img src='/moraes-logo-name.svg' className='mb-4 md:mb-0' />
          <div className='text-white-100 text-sm'>
            <p>© Copyright Moraes Dev. Todos os direitos reservados</p>
            <p className='mt-1'>
              Desenhado e desenvolvido por <span className='text-blue-300 cursor-pointer'>Mavue Dev</span> &{' '}
              <span className='text-blue-300 cursor-pointer'>Tg Dev</span>
            </p>
          </div>
        </div>

        <div className='flex justify-center gap-2'>
          {socialNetworks.map((socialNetwork) => (
            <a href={socialNetwork.link} target='_blank' rel='noreferrer' key={socialNetwork.name}>
              <div className='hover:bg-primary-dark p-2'>
                <socialNetwork.icon className='text-2xl text-gray-400 hover:text-white-50' />
              </div>
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
