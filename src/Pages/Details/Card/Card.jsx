import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { setData } from '../../../localStorage/localStorage';


const Card = ({donor}) => {
    const { picture, title, description, button_bg_color, price, id } = donor
    

    const clickHelp = () =>{
        setData(id)
        toast('Dear Sir, Heartily welcome for donating us, Thank You.');
    }
    return (
        <div className="max-w-screen-xl mx-auto mt-20">
        <div className="mb-14">
            <div className="relative">
                <img className="w-full md:h-[600px] h-[300px]" src={picture} alt="" />
            </div>
            <div className="absolute bg-gray-500 mix-blend-multiply px-[209px] md:px-[383px] lg:px-[640px] py-16 -mt-[128px]">
            </div>
           <button onClick={clickHelp} style={{backgroundColor: button_bg_color}} className="px-6 py-4 rounded -mt-[85px] absolute ml-10 text-white">Donate ${price}</button>
        </div>
        <ToastContainer className="mb-10 text-2xl text-pink-700"></ToastContainer>
     
        
        <div className="mb-28 mx-5 text-center md:text-left">
            <h2 className="text-4xl font-bold text-[#0B0B0B] mb-6">{title}</h2>
            <p className="text-base text-[#0B0B0BB2]">{description}</p>
        </div>
 
    </div>


    );
};

export default Card;
