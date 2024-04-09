import { Outlet } from 'react-router-dom'
import Nav from '../components/header/Nav';
import Footer from '../components/footer/Footer'

const Root = () => {
    return (
        <div>
            <header className='container mx-auto px-4'>
                <Nav />
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