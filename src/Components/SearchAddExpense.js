import React, { useState } from 'react';
import { BiSort } from 'react-icons/bi';
import { MdAddCircleOutline } from 'react-icons/md';
import AddExpenseModal from './AddExpenseModal';


const SearchAddExpense = ({refreshUl,setRefreshUl}) => {
    const [isModalOpen, setIsModalOpen] = useState(true);
    return (
        <div className=''>
            <div className=' flex justify-between pb-5'>
                <div className='flex gap-3'>
                    {/* search items */}
                    <div class="form-control ">
                        <div class="input-group">
                            <input type="text" placeholder="Search…" class="input input-bordered" />
                            <button class="btn btn-square">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                            </button>

                        </div>
                    </div>

                    {/* sorting items */}
                    <div className=''>
                        <button class="btn btn-active  inline-block"><BiSort className='font-bold text-xl' /></button>


                    </div>
                </div>

                {/* add expense/income btn */}
                <div>
                    <label onClick={()=>setIsModalOpen(true)} for="my-modal-6" class="btn btn-ghost"><MdAddCircleOutline className='font-bold text-3xl' /></label>
                </div>
                {/* <label for="my-modal-6"  class="btn modal-button">open modal</label> */}


            </div>
            {
                isModalOpen && <AddExpenseModal refreshUl={refreshUl} setRefreshUl={setRefreshUl} setIsModalOpen={setIsModalOpen}/>
            }
        </div>


    );
};

export default SearchAddExpense;