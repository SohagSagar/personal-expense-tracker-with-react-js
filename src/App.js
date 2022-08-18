import logo from './logo.svg';
import './App.css';
import TotalExpenseIncome from './Components/TotalExpenseIncome';
import BodyComponent from './Components/BodyComponent';

function App() {
  return (
    <div className='px-24 relative'>
      
      <TotalExpenseIncome/>
      <BodyComponent/>
      
    </div>
  );
}

export default App;
