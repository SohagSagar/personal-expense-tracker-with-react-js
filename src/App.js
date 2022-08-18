import logo from './logo.svg';
import './App.css';
import TotalExpenseIncome from './Components/TotalExpenseIncome';
import BodyComponent from './Components/BodyComponent';

function App() {
  return (
    <div className='px-24'>
      <header className='text-2xl font-bold text-center py-4'>Personal Expense Tracker</header>
      <TotalExpenseIncome/>
      <BodyComponent/>
      
    </div>
  );
}

export default App;
