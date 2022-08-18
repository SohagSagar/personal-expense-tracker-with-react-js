import React from 'react';
import '../Styles/BodyComponents.css'
import Filters from './Filters';
import SearchAddExpense from './SearchAddExpense';


const BodyComponent = () => {


    return (
        <div className='body-container gap-5 mt-5'>
            {/* filter components */}
            <Filters/>

            {/* display all the summary components */}
            <SearchAddExpense />

        </div>

    );
};

export default BodyComponent;