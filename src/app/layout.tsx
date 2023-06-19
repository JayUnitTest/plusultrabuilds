import './globals.css'
import Link from 'next/link'
import {  M_PLUS_Rounded_1c } from 'next/font/google'

const font = M_PLUS_Rounded_1c({weight: ['100', '300', '400', '500', '700', '900'],subsets: ['latin'] })

export const metadata = {
  title: 'Jay Singh Portfolio',
  description: 'Portfolio website by Jay Singh',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" 
      integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==" crossOrigin="anonymous" 
      referrerPolicy="no-referrer" />
      </head>
      <body className={'min-h-screen flex flex-col text-slate-700' + font.className}>
        <header className='flex p-4 sm:p-5 border-b'>
          <div className='flex font-medium text-xs sm:text-sm items-center max-w-[900px] mx-auto w-full'>
          <Link href={'/'} className='hidden sm:inline'>Jay Singh</Link>
          <Link href={'/'}className='sm:hidden'>JS</Link>
          </div>
        </header>
        {children}
        <footer className='flex p-4 py-16  text-xs border-t text-slate-600 sm:text-sm items-center justify-center flex-col gap-6'>
          <div className='flex items-center justify-center gap-4'>
            <a href={'/'}  target = "_blank" className='cursor-pointer hover:opacity-60 duration-200'>PDF CV</a>
            <p>|</p>
            <a href={'/'} target = "_blank"  className='cursor-pointer hover:opacity-60 duration-200'>projects</a>
            <p>|</p>
            <a href={'/'} target = "_blank"  className='cursor-pointer hover:opacity-60 duration-200'>Other</a>
            <p>|</p>
          </div>
          <div className='flex items-center justify-center gap-4'>
          <i className="fa-brands fa-github cursor-pointer hover:opacity-60 duration-200 "></i>
            <p>|</p>
            <i className="fa-brands fa-linkedin-in cursor-pointer hover:opacity-60 duration-200"></i>
            <p>|</p>
            <i className="fa-brands fa-square-github cursor-pointer hover:opacity-60 duration-200"></i>
          </div>
        </footer>
        </body>
    </html>
  )
}
