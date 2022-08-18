import React from 'react';
import '../Styles/BodyComponents.css'
import Filters from './Filters';
import TotalExpenseIncome from './TotalExpenseIncome';

const BodyComponent = () => {


    return (
        <div className='body-container gap-5 mt-5'>
            {/* filter components */}
            <Filters/>

            {/* display components */}
            <TotalExpenseIncome />

        </div>

    );
};

export default BodyComponent;