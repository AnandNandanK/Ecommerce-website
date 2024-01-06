import React from 'react';
import { MdDelete } from "react-icons/md";
import { useDispatch } from 'react-redux'
import { remove } from '../Redux/slice/Cartslice';
import { useState } from 'react';


const CartItem = ({ item, itemIndex }) => {

    const dispatch = useDispatch();
    function removeFromCart() {
        dispatch(remove(item.id))
    }

    const [store,setStore]=useState(false);
    const description=store?item.description:`${item.description.substring(0,70)}...`;

    function descHandler(){
        setStore(!store);
    }

    return (
        <div className="flex p-2 rounded-md select-none border-b-4 border-black mb-8 ">
            <div className='flex w-[50vw]  gap-6 apnaMedia'>
               
                    <img className='h-[200px] object-contain content-normal' src={item.image} alt='img'></img>
                

                <div className='flex flex-col gap-6 mt-5 ml-6'> 
                    <div>
                        <h2 className='font-bold'>{item.title}</h2>
                    </div>

                    <div className='text-sm' onClick={descHandler}>
                        <h1>{description}</h1>
                    </div>

                <div className='flex justify-between px-4'>
                <div className='text-green-500 font-bold felx text-center '>
                        <p>${item.price}</p>
                    </div>



                    <div onClick={removeFromCart} className='relative'>
                    <div  className='bg-red-500 p-5 rounded-full  opacity-50'></div>

                       <div className="absolute top-3 right-3"><MdDelete  style={{color:'red'}}/></div> 

                    </div>
                   
                </div>
                   
                </div>


            </div>
        </div>
    );
}

export default CartItem;

