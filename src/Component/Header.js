import React from 'react';
// import logo from '../Image/ecom.png'
import { FaShoppingCart } from "react-icons/fa";
import {useSelector} from 'react-redux'
import { NavLink } from 'react-router-dom';

const Header = () => {

    const {cart}=useSelector((state)=>state);

    return (
        <div className='w-[101%] bg-emerald-950 select-none'>
            <div className="w-11/12 max-w-[1100px] flex flex-row relative mx-auto justify-between px-6">

                 <div className=''>
                 {/* <img className='w-[80px] h-[50px] rounded-full ' src={logo} alt=""></img> */}
                 <NavLink to={'/'}> <p className='text-white py-5'>Ecom_WEB</p></NavLink>
                 </div>

                 <div className='flex gap-8 items-center'>
                    <NavLink to={'/home'} className="text-white"><p>Home</p></NavLink>
                   
                   
                    <div className=' relative'>
                    <NavLink to={'/cart'}><FaShoppingCart  style={{color:'white',fontSize: '25px'}} />
                   
                    {
                        cart.length >0 &&
                       
                        <span className='text-white absolute bg-green-500  px-[6px] rounded-full top-3 left-[-5px] text-center text-sm'>{cart.length}</span>
                    }
                    </NavLink>
                    </div>
                    
                 </div>
                
            </div>  

        </div>
      
    );
}


export default Header;
