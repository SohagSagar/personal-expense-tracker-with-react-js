import React, { useEffect, useState } from 'react';
import { TbCurrencyTaka } from 'react-icons/tb';
import { MdDriveFileRenameOutline } from 'react-icons/md';
import { RiDeleteBin6Line } from 'react-icons/ri';
import SummaryCardList from './SummaryCardList';



const SummaryCard = ({ refreshUl, setRefreshUl, searchedText, sortItem, filterByType }) => {
    const [items, setItems] = useState([]);
    const [typeFilter, setTypeFilter] = useState('')
    useEffect(() => {
        const fetchData= async () =>{
            const stroageItems = JSON.parse(localStorage.getItem('items'))
            // setStroedData(stroageItems);
           await sortItem ? setItems([...stroageItems].reverse()) : setItems(stroageItems)
        }
        fetchData();
        

    }, [refreshUl, sortItem,filterByType]);



    useEffect(() => {
        if(filterByType===false){
            setTypeFilter(false)
        }
        
        if (filterByType) {
            const filteredItem = items.filter(item => item?.type === filterByType);
            console.log(filteredItem);
            setTypeFilter(filteredItem)
        } 
    }, [filterByType]);




    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(5);
    console.log('typeFilter',typeFilter);

    // Get current posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = typeFilter?.length>0 ? typeFilter?.slice(indexOfFirstPost, indexOfLastPost) : items ? items?.slice(indexOfFirstPost, indexOfLastPost) : [];

    // get total page
    const totalPage = Math.ceil(items?.length / postsPerPage)




    return (

        <div>
            <div className='grid grid-cols-1 gap-3'>
                {
                    items?.length < 1 ? <p className='text-center text-lg font-semibold mt-3'>No item found</p> :

                   [...currentPosts]?.filter((val) => {
                            if (!searchedText) {
                                return val;
                            } else if (
                                val.description.toLowerCase().includes(searchedText.toLowerCase())
                            ) {
                                return val;
                            }
                        })?.reverse().map(item => <SummaryCardList
                            key={item.id}
                            item={item}
                            refreshUl={refreshUl}
                            setRefreshUl={setRefreshUl}
                        />)

                }


            </div>

            {/* paginations */}

            {
                items?.length > 0 &&
                <div class=" flex  justify-center mt-4">
                    <div className='btn-group'>
                        <button onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage < 2} class="btn">«</button>
                        <button class="btn">Page {currentPage}/{totalPage}</button>
                        <button onClick={() => setCurrentPage(currentPage + 1)} disabled={currentPage === totalPage} class="btn">»</button>
                    </div>
                </div>
            }

        </div>

    );
};

export default SummaryCard;