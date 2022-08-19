import React, { useEffect, useState } from 'react';
import { TbCurrencyTaka } from 'react-icons/tb';
import { getStoredCart } from './LocalStroage';

const TotalExpenseIncome = ({refreshUl}) => {
    const [storedItems,setStoredItems]=useState([])
    console.log('storedData',storedItems);

    useEffect(()=>{
        setStoredItems(getStoredCart());
    },[refreshUl]);

    let totalIncome=0;
    totalIncome=storedItems.filter(storedItem=>storedItem.type==='Income').reduce((pre,curr)=>(pre+parseInt( curr.amount)),0)

    let totalExpense=0;
    totalExpense=storedItems.filter(storedItem=>storedItem.type==='Expense').reduce((pre,curr)=>(pre+parseInt( curr.amount)),0)

    console.log(totalExpense);
    // console.log(storedItems.filter(storedItem=>storedItem.type==='Income'));   
    return (
        <div class="card w-full bg-base-100 border sticky top-1 z-10">
            <header className='text-2xl font-bold text-center pt-5'>Personal Expense Tracker</header>
            <div class="card-body p-5 text-2xl font-semibold flex justify-center items-center flex-row gap-10">
                <h2 className=' text-green-600'>Income: <TbCurrencyTaka className='inline-block'/>{totalIncome}</h2>
                <h2 className=' text-red-600'>Expense: <TbCurrencyTaka className='inline-block'/>{totalExpense}</h2>
            </div>
        </div>
    );
};

export default TotalExpenseIncome;