import React, { useState,useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import CartItem from './CartItem';
import { useSelector } from 'react-redux';


const Cart = () => {
    const {cart}=useSelector((state)=>state);
    const [totalamount,setTotalAmount]=useState(0);

    console.log('Printing Total Cart',cart.length);

    useEffect(()=>{
        setTotalAmount(cart.reduce((acc,cur)=>acc+cur.price,0)); 
    },[cart])
    return (

        <div className='w-11/12 max-w-[1100px] mx-auto mt-8 flex flex-wrap justify-center items-center gap-5 select-none'>
            
            {
                cart.length > 0 ? 
                (
                <div className='flex'>

                    
                
                        <div>
                            {
                                cart.map((item,index)=>{
                                    return <CartItem key={item.id} item={item} index={index}></CartItem>
                                })
                            }
                        
                        </div>

                        {/* CART ITEMS  */}
                        <div className='flex flex-col gap-10 p-2'>

                            <div className="flex flex-col">
                                <div className="text-green-800 font-bold">YOUR CART</div>
                                <div className="uppercase font-semibold text-3xl text-green-600">Summary</div>
                                <p  className='font-semibold'><span>Total Items:{cart.length}</span></p>
                            </div>
                            
                            <div>
                                <p className='font-semibold'>Total Amount: <span className="text-green-500 font-semibold">${totalamount}</span></p>
                                <button className='text-white bg-green-600 px-5 py-2 rounded-md'>Check OUt</button>
                            </div>

                        </div>
                </div>

                ):(
                <div className='flex flex-col text-center gap-3'>
                    <h1 className='font-bold uppercase'>Cart IS Empty</h1>
                    <NavLink to='/'><button className='bg-green-500 px-6 py-2 rounded-md font-semibold'>Shop Now</button></NavLink>
                </div>)
            }

        </div>
    );
}

export default Cart;
