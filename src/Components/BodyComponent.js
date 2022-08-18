import React from 'react';
import '../Styles/BodyComponents.css'
import Filters from './Filters';
import SearchAddExpense from './SearchAddExpense';
import SummaryCard from './SummaryCard';


const BodyComponent = () => {


    return (
        <div className='body-container gap-5 mt-5'>
            {/* filter components */}
            <Filters />

            <div>
                {/* display all the summary components */}
                <SearchAddExpense />

                {/* summary card  */}
                <SummaryCard />
            </div>

        </div>

    );
};

export default BodyComponent;