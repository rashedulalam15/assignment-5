import { FaBars } from 'react-icons/fa'
import Logo from '../assets/logo-text.png'
const Nav = () => {
    return (
        <nav className='sticky top-0 z-50 py-4 bg-white border-2 border-gray-100'>
        <div className='flex justify-between items-center container mx-auto px-4'>
            <button className='md:hidden'><FaBars /></button>
            <img src={Logo} alt="" />
            <ul className='hidden md:flex gap-4 text-[#475569] text-md'>
                <li><a href="">Home</a></li>
                <li><a href="">Technologies</a></li>
                <li><a href="">Projects</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Contact</a></li>
            </ul>
            <div>
                <button className='btn rounded-3xl text-[#475569]'>Sign In</button>
                <button className='btn bg-[#D91B7E] text-white rounded-full'>Sign Up</button>
            </div>
            
        </div>

        </nav>
    );
};

export default Nav;