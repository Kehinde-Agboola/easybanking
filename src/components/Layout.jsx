import React from 'react'
import { Footer, Navbar, Outlet } from '.'

const Layout = () => {
  return (
    <div className='h-full w-screen'>
         <header>
            <Navbar />
        </header>

        <mian>
            <Outlet />
        </mian>

        <footer>
            <Footer />
        </footer>
    </div>
  )
}

export default Layout