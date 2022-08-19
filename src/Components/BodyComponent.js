import React, { useState } from 'react';
import '../Styles/BodyComponents.css'
import Filters from './Filters';
import SearchAddExpense from './SearchAddExpense';
import SummaryCard from './SummaryCard';


const BodyComponent = ({refreshUl,setRefreshUl}) => {
    const [searchedText,setSeatchText]=useState('');
    const [sortItem,setSortItem]=useState(false);
    const [filterByType,setFilterByType]=useState('');
    console.log(filterByType);


    return (
        <div className='body-container gap-5 mt-5'>
            {/* filter components */}
            <Filters setFilterByType={setFilterByType}/>

            <div>
                {/* display all the summary components */}
                <SearchAddExpense sortItem={sortItem} setSortItem={setSortItem} setSeatchText={setSeatchText} refreshUl={refreshUl} setRefreshUl={setRefreshUl}/>

                {/* summary card  */}
                <SummaryCard filterByType={filterByType} sortItem={sortItem} searchedText={searchedText} refreshUl={refreshUl} setRefreshUl={setRefreshUl}/>
            </div>

        </div>

    );
};

export default BodyComponent;