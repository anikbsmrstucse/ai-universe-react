import React, { useEffect, useState } from 'react';
import SingleCard from '../SingleCard/SingleCard';

const Card = () => {

    const [data,setData] = useState([]);
    useEffect( ()=>{
        const loadData = async() =>{
            const res = await fetch('https://openapi.programming-hero.com/api/ai/tools');
            const data = await res.json();

            setData(data.data.tools);
        }
        loadData()
    },[])
    
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-5 mt-8 h-96">
           {
            data.map((singleData => <SingleCard SingleData={singleData} key={singleData.id}></SingleCard>))
           } 
        </div>
    );
};

export default Card;