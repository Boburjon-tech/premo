
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

function MainLayout() {

  return (
    <div className='flex flex-col'>
      <Header />

      <main className="">
        <Outlet />
      </main>

    </div>
  );
}

export default MainLayout;