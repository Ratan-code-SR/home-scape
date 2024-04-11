import { Outlet } from 'react-router-dom'
import Nav from '../components/header/Nav';
import Footer from '../components/footer/Footer'

const Root = () => {
    return (

        <div >
            <header  className='container mx-auto px-4 '>
              <div className='bg-gradient-to-r from-green-400 to-green-200-500 border-b-2 border-b-[#ffce28]'>
              <Nav />
              </div>
            </header>
            <main className='container mx-auto px-4'>
                <Outlet />
            </main>
            <footer className='container mx-auto px-4'>
                <Footer />
            </footer>
        </div>
    );
};

export default Root;