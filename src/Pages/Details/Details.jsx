import React, { useEffect, useState } from 'react';

import Card from './Card/card';
import { useLoaderData, useParams } from 'react-router-dom';



const Details = () => {
    const [donor, setDonor] = useState({})
    const {id} = useParams()
    const apiData = useLoaderData()

    useEffect(()=>{
        
        const isExist = apiData.find(data=> data.id == id)
        
        setDonor(isExist)
    },[apiData, id])


    return (
        <div>
            <Card donor={donor}></Card>
        </div>
    );
};

export default Details;
