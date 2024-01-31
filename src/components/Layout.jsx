import React from 'react'

const Layout = () => {
  return (
    <div>
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