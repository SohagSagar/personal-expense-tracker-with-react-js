import React from 'react';
import { TbCurrencyTaka } from 'react-icons/tb';
import { MdDriveFileRenameOutline } from 'react-icons/md';
import { RiDeleteBin6Line } from 'react-icons/ri';

const SummaryCardList = ({item,refreshUl,setRefreshUl}) => {
    const {id,type,amount,category,description}= item;
    return (
        <div class="card w-full bg-base-100 border pt-2">
            <div class="card-body p-5">

                <div className='flex justify-between items-center'>

                    {/* card info */}
                    <div className='w-10/12'>
                        <h2 class="font-semibold">Descriptions: <span className='font-normal'>{description}</span></h2>

                        <h2 class="font-semibold mt-2">Category: <span className='font-normal'>{category} |</span> <span className={`badge badge-md border-none text-white ${type==='Expense' && 'bg-red-600' } bg-green-600`}>{type==='Expense' ? '-' : '+'}<TbCurrencyTaka className='inline-block mb-1' />{amount}</span></h2>


                    </div>

                    {/* card actions */}
                    <div >
                        <div class="btn-group ">
                            <button class="btn  btn-sm bg-green-600  border-none text-white"><MdDriveFileRenameOutline /></button>
                            <button class="btn  btn-sm bg-red-600  border-none text-white"><RiDeleteBin6Line /></button>
                        </div>
                    </div>
                    
                </div>


            </div>
        </div>
    );
};

export default SummaryCardList;