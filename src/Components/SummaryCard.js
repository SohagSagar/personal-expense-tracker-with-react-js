import React, { useEffect, useState } from 'react';
import { TbCurrencyTaka } from 'react-icons/tb';
import { MdDriveFileRenameOutline } from 'react-icons/md';
import { RiDeleteBin6Line } from 'react-icons/ri';
import SummaryCardList from './SummaryCardList';



const SummaryCard = ({ refreshUl, setRefreshUl, searchedText, sortItem, filterByType,filterByCategory }) => {
    const [items, setItems] = useState([]);
    const [typeFilter, setTypeFilter] = useState('')
    const [categoryFilter, setCategoryFilter] = useState('')
    useEffect(() => {
        const fetchData= async () =>{
            const stroageItems = JSON.parse(localStorage.getItem('items'))
            // setStroedData(stroageItems);
           await sortItem ? setItems([...stroageItems].reverse()) : setItems(stroageItems)
        }
        fetchData();

    }, [refreshUl, sortItem,filterByType]);


    // filter by types
    useEffect(() => {
        if(filterByType===false){
            setTypeFilter(false)
        }
        
        if (filterByType) {
            const filteredItem = items.filter(item => item?.type === filterByType);
            setTypeFilter(filteredItem)
        } 
    }, [filterByType]);

    // filter by categories
    useEffect(() => {
        if(filterByCategory===false){
            setCategoryFilter(false)
        }
        
        if (filterByCategory) {
            const filteredItem = items.filter(item => item?.category === filterByCategory);
            setCategoryFilter(filteredItem)
            console.log(filteredItem);
        } 
    }, [filterByCategory]);



    // data for pagination
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(5);


    // Get current posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts =categoryFilter?.length>0 ? categoryFilter?.slice(indexOfFirstPost, indexOfLastPost) :typeFilter?.length>0 ? typeFilter?.slice(indexOfFirstPost, indexOfLastPost) 
    : items ? items?.slice(indexOfFirstPost, indexOfLastPost) : [];

    // get total page
    const totalPage = Math.ceil(items?.length / postsPerPage)




    return (

        <div className='fixed mt-[80px] ml-[350px] overflow-y-auto overflow-scroll w-3/5 h-[400px] z-0 ' >
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