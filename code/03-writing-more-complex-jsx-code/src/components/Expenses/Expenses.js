import React, {useState} from 'react';
import './Expenses.css'
import Card from '../UI/Card'
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

function Expenses(props){
    const [filteredYear, setFilteredYear] = useState('2021');
    const saveExpensesYearHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    }
    const filteredExpenses = props.items.filter(expenses => expenses.date.getFullYear()===filteredYear)
    
    return (
        <div>
            <Card className='expenses'>
                <ExpensesFilter selected={filteredYear} onSaveExpensesYear={saveExpensesYearHandler}/>
                <ExpensesChart expenses={filteredExpenses}/>
                <ExpensesList items={filteredExpenses}/>
            </Card>
        </div>
            
    );
}

export default Expenses;