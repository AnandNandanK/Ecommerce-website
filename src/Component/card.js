import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { useSelector,useDispatch } from 'react-redux';
import {add,remove} from '../Redux/slice/Cartslice'

const Card = ({data}) => {

    const {cart}=useSelector((state)=>state);
    console.log(cart.length);
    const dispatch=useDispatch();

    const info=data.description;
    const titleData=data.title;


    const [store,setStore]=useState(false);
    const description=store?info:`${info.substring(0,30)}...`;

    const [titleStore,setTitleStore]=useState(false);
    const title=titleStore?titleData:`${titleData.substring(0,20)}...`;

    function clickHandler(){
        setStore(!store);
    }

    function titleHandler(){
        setTitleStore(!titleStore);

    }

    function addItem(){
        dispatch(add(data));
        toast.success('Item Added to Cart');
    }

    function removeFromCarrt(){
        dispatch(remove(data.id));
        toast.error("Item Removed");
    }

    return (
        <div className="flex flex-wrap shadow-xl hover:shadow-xl hover:scale-110 transition-all duration-200 ease-in p-2 rounded-md select-none ">

            <div className="flex flex-col w-[250px] justify-center items-center  gap-3 "> 
                <h2 className='font-bold text-center' onClick={titleHandler}>{title}</h2>
                <p className='text-sm text-center' onClick={clickHandler}>{description}</p>
                <img className='h-[200px]' src={data.image} alt='img'></img>


                <div className='flex gap-5 mb-2 justify-center items-center'>
                    <p className='text-green-500 font-bold felx text-center '>${`${data.price}`}</p>
                    <div className='border-2 border-y-sky-900 p-1 px-4 font-bold border-slate-800 rounded-full hover:bg-black hover:text-white transition-all duration-300'>{cart.some((p)=>p.id===data.id)?<p onClick={removeFromCarrt}>Remove Item</p>:<p onClick={addItem}>Add To Cart</p>}</div>
                    
                </div>

            </div>
        </div>
    );
}

export default Card;
