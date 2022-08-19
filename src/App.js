
import './App.css';
import TotalExpenseIncome from './Components/TotalExpenseIncome';
import BodyComponent from './Components/BodyComponent';
import { Toaster } from 'react-hot-toast';
import { useState } from 'react';

function App() {
  const [refreshUl, setRefreshUl] = useState(true);
  console.log(refreshUl);
  return (
    <div className='px-24 relative'>
      
      <TotalExpenseIncome refreshUl={refreshUl}/>
      <BodyComponent refreshUl={refreshUl} setRefreshUl={setRefreshUl}/>
      <Toaster />
    </div>
  );
}

export default App;
