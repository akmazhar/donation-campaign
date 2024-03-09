import { useEffect, useState } from "react";

import DonationItem from "./DonationItem/DonationItem";
import { getData } from "../../localStorage/localStorage";
import { useLoaderData } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Donation = () => {
    const [storageData , setStorageData] = useState([])
    const [show, setShow] = useState(false) 

   const donationData = useLoaderData()
  
    useEffect(()=>{
        const localId = getData();
        console.log(localId);
        if(donationData.length > 0) {
            const filterData = donationData.filter(oneData=> localId.includes(oneData.id))
            setStorageData(filterData)
        } 
    },[donationData])
    
  
    
    return (
        <div className="max-w-screen-xl mx-auto my-32 "> 
            <div className="grid md:grid-cols-2 gap-4">
                {
                    show ? storageData.map(data=><DonationItem key={data.id} data={data}></DonationItem>)
                    :
                    storageData.slice(0, 4).map(data=><DonationItem key={data.id} data={data}></DonationItem>)
                }
            </div>


            <div className={`flex justify-center mt-12 py-1 ${show ? 'hidden' : '' }`
            }>
            
            {
              storageData.length > 4 && <button onClick={()=> setShow(!show)} className="bg-green-500 hover:bg-green-700 px-6 py-3 text-white rounded-md">
              {
                show ? '' : 'See All'
              }
              </button>
            }
            </div>
            <div>
        <Helmet>
          <title>Donation Campaign | Donation</title>
        </Helmet>
      </div>
        </div>
    );
};

export default Donation;