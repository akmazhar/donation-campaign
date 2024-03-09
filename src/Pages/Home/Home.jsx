import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import CategoryCard from '../Data/CategoryCard';
import { Helmet } from 'react-helmet-async';




const Home = () => {

  const [items, setItems] = useState([])
  

  const apiItem = useLoaderData()

  const handleSearch = e =>{
    e.preventDefault();
    const inputValue = e.target.text.value;
    const dataResult = apiItem.filter(data => data.category === inputValue)
    setItems(dataResult)
}

  useEffect(()=>{
    setItems(apiItem)
  },[apiItem])

  return (
    <div className='max-w-screen-2xl mx-auto'>
      <div>
        <Helmet>
          <title>Donation Campaign | Home</title>
        </Helmet>
      </div>
      <div>
      <div className="hero h-[600px] mt-5 mb-10" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.8), rgba(255,255,255,0.8)), url(https://i.ibb.co/D5DQdvr/383314042-993914288548846-1091373714914908118-n.png)", }}>
            <div className="hero-overlay bg-opacity-90 bg-white"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="text-black flex items-center justify-center">
                   <div>
                   <h1 className="flex justify-center items-center text-5xl font-bold">I Grow By Helping People In Need</h1>
                    <form onSubmit={handleSearch} className="flex justify-center items-center">
                    <input type="text" placeholder="Please search by category..." name="text" className="input input-bordered rounded-tr-none rounded-br-none md:w-[470px] p-3 mt-60 rounded-t-xl px-7 from-neutral-500" />
                        <input className="btn bg-[rgb(241,59,59)] mt-60 p-3 text-white rounded-tl-none rounded-bl-none rounded-xl px-7 font-medium" type="submit" value="Search" />
                    </form>
                   </div>
                </div>
            </div>
        </div>
      </div>
     
     <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 max-w-screen-xl mx-auto my-24'>
     {
      items?.map(item=><CategoryCard key={item.id} item={item}></CategoryCard>)
     }
     </div>
    </div>
  );
};

export default Home;
