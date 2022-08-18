import logo from './logo.svg';
import './App.css';
import TotalExpenseIncome from './Components/TotalExpenseIncome';

function App() {
  return (
    <div className='px-24'>
      <header className='text-2xl font-bold text-center py-4'>Personal Expense Tracker</header>
      <TotalExpenseIncome/>
      
    </div>
  );
}

export default App;
