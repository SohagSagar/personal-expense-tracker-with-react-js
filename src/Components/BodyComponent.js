import React, { useState } from 'react';
import '../Styles/BodyComponents.css'
import Filters from './Filters';
import SearchAddExpense from './SearchAddExpense';
import SummaryCard from './SummaryCard';


const BodyComponent = ({refreshUl,setRefreshUl}) => {
    const [searchedText,setSeatchText]=useState('');
    const [sortItem,setSortItem]=useState(false);
    console.log(sortItem);

    return (
        <div className='body-container gap-5 mt-5'>
            {/* filter components */}
            <Filters />

            <div>
                {/* display all the summary components */}
                <SearchAddExpense sortItem={sortItem} setSortItem={setSortItem} setSeatchText={setSeatchText} refreshUl={refreshUl} setRefreshUl={setRefreshUl}/>

                {/* summary card  */}
                <SummaryCard sortItem={sortItem} searchedText={searchedText} refreshUl={refreshUl} setRefreshUl={setRefreshUl}/>
            </div>

        </div>

    );
};

export default BodyComponent;