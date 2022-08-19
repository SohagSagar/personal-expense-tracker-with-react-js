import React from 'react';
import { MdError } from 'react-icons/md';
import { useForm } from 'react-hook-form';

const UpdateModal = ({targetedUpdateItem}) => {
    
    const { register, reset, handleSubmit, formState: { errors } } = useForm();
    const requiredMessage = 'field is required';
    if(targetedUpdateItem<1){
        return;
    }
    const {id,type,category,description,amount}=targetedUpdateItem;
    console.log('object',amount);

    const resetForm = ()=>{
        reset();
    }

    const onSubmit = data => {




    }
    return (
        <div>
            {/* <!-- Put this part before </body> tag-- > */}
            <input type="checkbox" id="updateModal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <h3 class="font-bold text-lg">Update Income/Expense!</h3><hr />

                    <form onSubmit={handleSubmit(onSubmit)} >

                        {/* Type */}
                        <label className="label  pb-1">
                            <span className="label-text font-semibold">Type</span>
                        </label>

                        <label class="label justify-start cursor-pointer">
                            <input class="radio" type="radio" {...register('type')} value="Income" checked />
                            <span class="label-text ml-2">Income</span>
                        </label>
                        <label class="label justify-start cursor-pointer">
                            <input class="radio" type="radio" {...register('type')} value="Expense" />
                            <span class="label-text ml-2">Expense</span>
                        </label>



                        {/* amount */}
                        <label className="label  pb-1">
                            <span className="label-text">Amount(BDT)</span>
                        </label>
                        <input value={amount} {...register('amount', {
                            required: {
                                value: true,
                                message: requiredMessage
                            },
                            pattern: {
                                value: /^[1-9]\d*$/g,
                                message: 'Only positive integer is allowed'
                            }
                        })} type="text" placeholder="Type here" className="input input-bordered input-sm w-full max-w-xs" />
                        <label className="label py-1">
                            {
                                errors?.amount && <span className="label-text-alt text-rose-500"><MdError className='inline mb-1' />{errors.amount.message}</span>
                            }
                        </label>






                        {/* Category  */}
                        <label className="label  pb-1">
                            <span className="label-text font-semibold">Category</span>
                        </label>
                        <select defaultValue={category} {...register('category', {
                            required: {
                                value: true,
                                message: 'No category is selected'
                            }
                        })} className="select select-bordered select-sm w-full max-w-xs ">
                            <option hidden></option>
                            <option value={'food'}>Food</option>
                            <option value={'travel'}>Travel </option>
                            <option value={'salary'}>Salary</option>
                            <option value={'utilities'}>Utilities</option>
                            <option value={'personal'}>Personal</option>
                            <option value={'medical'}>Medical</option>

                        </select>
                        <label className="label pt-1">
                            {
                                errors.category && <span className="label-text-alt text-rose-500"><MdError className='inline mb-1' />{errors.category.message}</span>
                            }

                        </label>


                        {/* description */}
                        <div className="form-control">
                            <label className="label pb-1">
                                <span className="label-text font-semibold">Description</span>
                            </label>
                            <textarea defaultValue={description} {...register('description', {
                                required: {
                                    value: true,
                                    message: requiredMessage
                                }
                            })} className="textarea textarea-bordered h-24 w-full max-w-xs" placeholder="Write Your Description..."></textarea>
                        </div>

                        <label className="label pt-1">
                            {
                                errors?.description && <span className="label-text-alt text-rose-500"><MdError className='inline mb-1' />{errors.description.message}</span>
                            }
                        </label>

                        {/* submit btn  */}

                        <div className="card-actions justify-start  mt-5">
                            <button type='submit' class="btn btn-sm">Submit</button>
                            <label onClick={()=>resetForm()} for="updateModal" class="btn btn-sm btn-error">Close</label>
                        </div>

                    </form>


                    <div class="modal-action">

                    </div>
                </div>
            </div>
        </div >
    );
};

export default UpdateModal;