import { Outlet } from 'react-router'
import { Footer } from '../../footer/index'
import { Header } from '../../header/index'

export const Layout = () => {
  return (
    <div className="flex flex-col justify-between max-w-full min-h-screen">
      <Header />
      <div className="flex justify-center items-center flex-1">
        <main>
          <Outlet />
        </main>
      </div>
      <Footer />
    </div>
  )
}
