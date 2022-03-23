import React, {useState} from 'react';
import NewExpense from "../NewExpense/NewExpense";
import Card from '../UI/Card/card';
import './Expenses.css';
import ExpensesFilter from '../ExpenseFilter/ExpensesFilter';
import ExpenseList from './ExpenseList/ExpenseList';
import ExpenseDate from './ExpenseDate';
import ExpenseChart from './ExpenseChart';

function Expenses(props){
  const[selectedYear, setSelectedYear]= useState('');
  const [newExpense,setNewExpense] = useState(props.expenses);

    const updateYear =(year)=>{
      console.log(newExpense);
      setSelectedYear(year);
     
      
    }
    const updateExpense= (expense)=>{
      console.log(expense);
      setNewExpense((prevState)=>{
        return[...prevState,expense]
      })

    }
    const filteredExpense=newExpense.filter((expense)=>{return expense.date.getFullYear()==selectedYear})

    return(
      <li>
    <Card className="expenses">
        <NewExpense onUpdateExpense={updateExpense}/>
        <ExpensesFilter onUpdateYear = {updateYear}/>
        <ExpenseChart filteredExpense={filteredExpense}/>
        <ExpenseList filteredExpense={filteredExpense}></ExpenseList>
        
      </Card>
      </li>
      )
}

export default Expenses