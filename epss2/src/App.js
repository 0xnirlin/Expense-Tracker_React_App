import logo from './logo.svg';
import './App.css';
import { Header } from './Header';
import { Total_Balance } from './Total_Balance';
import { RemSpent } from './Rem-spent';
import { Transactionlist } from './Transactionlist';
import { ExpenseProvider } from './Context';
import { BalanceProvider } from './BalanceContext';

function App() {


  
  return (
    <ExpenseProvider>
      <BalanceProvider>
        <div className="Wrapper">
          <div className="center">
            {/* Will align all the components here */}
            <Header />
            <Total_Balance />
            <RemSpent />
            <Transactionlist />


          </div>
        </div>
      </BalanceProvider>
    </ExpenseProvider>

  );
}


export default App;
