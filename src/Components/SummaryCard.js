import React, { useEffect, useState } from 'react';
import { TbCurrencyTaka } from 'react-icons/tb';
import { MdDriveFileRenameOutline } from 'react-icons/md';
import { RiDeleteBin6Line } from 'react-icons/ri';
import SummaryCardList from './SummaryCardList';



const SummaryCard = ({refreshUl,setRefreshUl,searchedText,sortItem}) => {
    const [items,setItems]=useState([])
    useEffect(()=>{
        const stroageItems = JSON.parse(localStorage.getItem('items'))
        sortItem ? setItems([...stroageItems].reverse()) : setItems(stroageItems)
        
    },[refreshUl,sortItem])
    
    return (

        <div className='grid grid-cols-1 gap-3'>
            {
                items?.length<1 ? <p className='text-center text-lg font-semibold mt-3'>No item found</p> :
                
                    [...items]?.filter((val) => {
                        if (!searchedText) {
                            return val;
                        } else if (
                            val.description.toLowerCase().includes(searchedText.toLowerCase()) 
                        ) {
                            return val;
                        }
                    })?.reverse().map(item=><SummaryCardList
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