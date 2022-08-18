import React from 'react';
import { TbCurrencyTaka } from 'react-icons/tb';

const TotalExpenseIncome = () => {
    return (
        <div class="card w-full bg-base-100 border">
            <div class="card-body text-2xl font-semibold flex justify-center items-center flex-row gap-10">
                <h2 className=' text-green-600'>Income: <TbCurrencyTaka className='inline-block'/>15000</h2>
                <h2 className=' text-red-600'>Expense: <TbCurrencyTaka className='inline-block'/>5000</h2>
            </div>
        </div>
    );
};

export default TotalExpenseIncome;