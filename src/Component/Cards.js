import React from 'react';
import Card from './card';
import Spinner from './Spinner'
import { Api_URL } from "./BaseUrl";
import { useState, useEffect } from 'react';


const Cards = () => {

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);




  async function fetchData() {
    setLoading(true);
    try {
      const response = await fetch(Api_URL);
      const output = await response.json();
      setData(output);
    } catch (error) {
      console.error(error, "Something went wrong");
      // Handle the error state if needed

    }
    setLoading(false);
  }

  useEffect(()=>{
    fetchData();
  },[])


  return (
    <div className='w-11/12 max-w-[1100px] mx-auto mt-8 flex flex-wrap justify-center items-center gap-5 '>

      {
        loading ? <Spinner/> :
          (data.length > 0 ? (
            data.map((data) => {
              return <Card data={data} key={data.id}></Card>
            })
          ) : (<div>Data NOt Found</div>))
      }




    </div>
  );
}

export default Cards;
