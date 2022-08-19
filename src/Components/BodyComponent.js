import React, { useState } from 'react';
import '../Styles/BodyComponents.css'
import Filters from './Filters';
import SearchAddExpense from './SearchAddExpense';
import SummaryCard from './SummaryCard';


const BodyComponent = ({refreshUl,setRefreshUl}) => {
    const [searchedText,setSeatchText]=useState('');
    const [sortItem,setSortItem]=useState(false);
    const [filterByType,setFilterByType]=useState('');
    const [filterByCategory,setfilterByCategory]=useState('');
    console.log(filterByCategory);



    return (
        <div className='body-container gap-5 mt-5 relative'>
            {/* filter components */}
            <Filters setFilterByType={setFilterByType} setfilterByCategory={setfilterByCategory}/>

            <div>
                {/* display all the summary components */}
                <SearchAddExpense sortItem={sortItem} setSortItem={setSortItem} setSeatchText={setSeatchText} refreshUl={refreshUl} setRefreshUl={setRefreshUl}/>

                {/* summary card  */}
                <SummaryCard filterByCategory={filterByCategory} filterByType={filterByType} sortItem={sortItem} searchedText={searchedText} refreshUl={refreshUl} setRefreshUl={setRefreshUl}/>
            </div>

        </div>

    );
};

export default BodyComponent;