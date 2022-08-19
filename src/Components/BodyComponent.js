import React from 'react';
import '../Styles/BodyComponents.css'
import Filters from './Filters';
import SearchAddExpense from './SearchAddExpense';
import SummaryCard from './SummaryCard';


const BodyComponent = ({refreshUl,setRefreshUl}) => {


    return (
        <div className='body-container gap-5 mt-5'>
            {/* filter components */}
            <Filters />

            <div>
                {/* display all the summary components */}
                <SearchAddExpense  refreshUl={refreshUl} setRefreshUl={setRefreshUl}/>

                {/* summary card  */}
                <SummaryCard refreshUl={refreshUl} setRefreshUl={setRefreshUl}/>
            </div>

        </div>

    );
};

export default BodyComponent;