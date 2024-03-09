import { useEffect, useState } from "react";


import PieChartStyle from "./PieChart";
import { useLoaderData } from "react-router-dom";
import { getData } from "../../localStorage/localStorage";
import { Helmet } from "react-helmet-async";


const Statistics = () => {
    const [donation,setDonation] = useState(0)
    const [totalDonation,setTotalDonation] = useState(0)
    const loadDaonation = useLoaderData();

    useEffect(()=>{
        const getDaontionId = getData();
        setDonation(getDaontionId.length);
        const toTallDonation = loadDaonation.length - getDaontionId.length;
        setTotalDonation(toTallDonation)
    },[loadDaonation])

   

    return (

        
        <div className=" max-w-screen-xl mx-auto gap-4 px-6 py-2">
        
        <div>
        <Helmet>
          <title>Donation Campaign | Statistics</title>
        </Helmet>
      
        <PieChartStyle donation={donation} totalDonation={totalDonation}></PieChartStyle>
        </div>
        </div>
    );

};


export default Statistics;