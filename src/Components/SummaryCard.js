import React, { useEffect, useState } from 'react';
import { TbCurrencyTaka } from 'react-icons/tb';
import { MdDriveFileRenameOutline } from 'react-icons/md';
import { RiDeleteBin6Line } from 'react-icons/ri';
import SummaryCardList from './SummaryCardList';



const SummaryCard = ({refreshUl,setRefreshUl}) => {
    const [items,setItems]=useState([])
    useEffect(()=>{
        const stroageItems = JSON.parse(localStorage.getItem('items'))
        setItems(stroageItems);
    },[refreshUl])
    
    return (

        <div className='grid grid-cols-1 gap-3'>
            {
                [...items].reverse().map(item=><SummaryCardList
                key={item.id}
                item={item}
                refreshUl={refreshUl}
                setRefreshUl={setRefreshUl}
                />)
            }
            
        </div>

    );
};

export default SummaryCard;