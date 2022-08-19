
import './App.css';
import TotalExpenseIncome from './Components/TotalExpenseIncome';
import BodyComponent from './Components/BodyComponent';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className='px-24 relative'>
      
      <TotalExpenseIncome/>
      <BodyComponent/>
      <Toaster />
    </div>
  );
}

export default App;
