import React from 'react';
import logo from "../../sflix.png";
import { BsFillSunFill } from 'react-icons/bs'
import { Link } from 'react-router-dom';
import useTheme from '../../Hooks/useTheme';
const Navbar = () => {
    const {toggleTheme} =useTheme()
    return (
        <div className='bg-[#272727] shadow-sm shadow-gray-500'>
            <div className="bg-[#272424]    max-w-screen-xl mx-auto p-2">

                <div className='flex justify-between items-center'>
                    <Link to='/'>
                    <img src={logo} alt="" className='h-10' />

                  </Link>
                    <ul className='flex items-center space-x-3'>

                        <li>
                            <button
                            onClick={toggleTheme}
                                className='bg-[#302b2b] p-2 rounded'>
                                <BsFillSunFill className='text-white' size={26}></BsFillSunFill>
                            </button>
                        </li>
                        <li>
                            <input type='text' className='border-2 border-[#4e4242] p-1 rounded bg-transparent text-xl outline-none focus:border-white transition text-white'
                                placeholder='search your movie...'
                            />
                        </li>
                        <li className='text-[#dedada] font-semibold text-lg'>
                         <Link to='/signin'> Login</Link>  
                        </li>

                    </ul>
                </div>

            </div>
        </div>
    );
};

export default Navbar;