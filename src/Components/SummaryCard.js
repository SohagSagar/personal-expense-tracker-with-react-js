import React from 'react';
import { TbCurrencyTaka } from 'react-icons/tb';
import { MdDriveFileRenameOutline } from 'react-icons/md';
import { RiDeleteBin6Line } from 'react-icons/ri';



const SummaryCard = () => {
    return (

        <div class="card w-full bg-base-100 border ">
            <div class="card-body p-5">

                <div className='flex justify-between items-center'>

                    {/* card info */}
                    <div className='w-10/12'>
                        <h2 class="font-semibold">Descriptions: <span className='font-normal'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla accusamus explicabo est maxime nihil dolore temporibus voluptate nesciunt? Autem, suscipit!</span></h2>

                        <h2 class="font-semibold mt-2">Category: <span className='font-normal'>Income |</span> <span className='badge badge-md bg-green-600 border-none text-white'>+<TbCurrencyTaka className='inline-block mb-1'/>5000</span></h2>
                        

                    </div>

                    {/* card actions */}
                    <div >
                        <div class="btn-group ">
                            <button class="btn  btn-sm bg-green-600  border-none text-white"><MdDriveFileRenameOutline/></button>
                            <button class="btn  btn-sm bg-red-600  border-none text-white"><RiDeleteBin6Line/></button>
                        </div>
                    </div>
                </div>


            </div>
        </div>

    );
};

export default SummaryCard;