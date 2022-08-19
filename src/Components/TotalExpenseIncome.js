import React, { useEffect, useState } from 'react';
import { TbCurrencyTaka } from 'react-icons/tb';
import useTotalExpenseIncome from '../Hooks/useTotalExpenseIncome';
import { getStoredCart } from './LocalStroage';

const TotalExpenseIncome = ({refreshUl}) => {

    
    
    const [totalIncome,totalExpense]=useTotalExpenseIncome(refreshUl);
  
    return (
        <div class="card w-full bg-base-100 border sticky top-1 ">
            <header className='text-2xl font-bold text-center pt-5'>Personal Expense Tracker</header>
            <div class="card-body p-5 text-2xl font-semibold flex justify-center items-center flex-row gap-10">
                <h2 className=' text-green-600'>Income: <TbCurrencyTaka className='inline-block'/>{totalIncome ? totalIncome : 0}</h2>
                <h2 className=' text-red-600'>Expense: <TbCurrencyTaka className='inline-block'/>{totalExpense ? totalExpense : 0}</h2>
            </div>
        </div>
    );
};

export default TotalExpenseIncome;