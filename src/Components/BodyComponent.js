import React from 'react';
import '../Styles/BodyComponents.css'
import Filters from './Filters';
import TotalExpenseIncome from './TotalExpenseIncome';

const BodyComponent = () => {


    return (
        <div className='body-container'>

            <Filters/>

            <TotalExpenseIncome />

        </div>

    );
};

export default BodyComponent;