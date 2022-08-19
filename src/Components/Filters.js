import React, { useState } from 'react';

const Filters = ({setFilterByType,setfilterByCategory}) => {

    
    const handleTypeFilter = (e) =>{
        setFilterByType(e.target.value);
        setfilterByCategory(false)
    }

    const handleCategory = (e) =>{
        setfilterByCategory(e.target.value);
        setFilterByType(false)
    }
    // 
    return (
        <div style={{ "position": "fixed", "marginTop": "20px","overflow": "scroll" ,"height":"600px" }} class="card w-80 bg-base-100 border  ">
            <div class="card-body">
                <h2 class="text-start text-xl font-bold">Filter</h2><hr />

                {/* filter by range */}
                <div className='pb-12'>
                    <h4 className='text-md font-semibold pb-1'>Range</h4><hr className='pb-2' />
                    <div className='flex justify-between pb-1'>
                        <p>Min : </p>
                        <input type="text" placeholder="Type here" class="input input-bordered input-sm w-4/5 max-w-xs" />
                    </div>
                    <div className='flex justify-between '>
                        <p>Max : </p>
                        <input type="text" placeholder="Type here" class="input input-bordered input-sm w-4/5 max-w-xs" />
                    </div>
                </div>

                {/* filter by type */}
                <div className='pb-12'>
                    <h4 className='text-md font-semibold pb-1'>Type</h4><hr className='pb-2' />
                    <div className='flex justify-between items-center pb-1'>
                        <input onChange={handleTypeFilter} type="radio" name='type' value={'Income'} class="checkbox checkbox-xs mr-3" />
                        <p>Income </p>
                    </div>
                    <div className='flex justify-between items-center'>
                        <input onChange={handleTypeFilter} type="radio" name='type' value={'Expense'} class="checkbox checkbox-xs mr-3" />
                        <p>Expense </p>
                    </div>
                    <button onClick={()=>setFilterByType(false)} class="btn btn-xs rounded-full mt-2">Reset</button>

                </div>

                {/* filter by category */}
                <div className='pb-12'>
                    <h4 className='text-md font-semibold pb-1'>Category</h4><hr className='pb-2' />

                    <div className='flex justify-between items-center pb-1'>
                        <input onClick={handleCategory}  type="radio" name={'category'} value={'food'} class="checkbox checkbox-xs mr-3" />
                        <p>Food </p>
                    </div>

                    <div className='flex justify-between items-center pb-1'>
                        <input onClick={handleCategory}  type="radio" name={'category'} value={'travel'} class="checkbox checkbox-xs mr-3" />
                        <p>Travel </p>
                    </div>

                    <div className='flex justify-between items-center pb-1'>
                        <input onClick={handleCategory}  type="radio" name={'category'} value={'salary'} class="checkbox checkbox-xs mr-3" />
                        <p>Salary </p>
                    </div>

                    <div className='flex justify-between items-center pb-1'>
                        <input onClick={handleCategory}  type="radio" name={'category'} value={'utilities'} class="checkbox checkbox-xs mr-3" />
                        <p>Utilities </p>
                    </div>

                    <div className='flex justify-between items-center pb-1'>
                        <input onClick={handleCategory}  type="radio" name={'category'} value={'medical'} class="checkbox checkbox-xs mr-3" />
                        <p>Medical </p>
                    </div>

                    <div className='flex justify-between items-center pb-1'>
                        <input onClick={handleCategory} type="radio" name={'category'} value={'personal'} class="checkbox checkbox-xs mr-3" />
                        <p>Personal </p>
                    </div>

                    <button onClick={()=>setfilterByCategory(false)} class="btn btn-xs rounded-full mt-2">Reset</button>

                </div>

            </div>
        </div>
    );
};

export default Filters;