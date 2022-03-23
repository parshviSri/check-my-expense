import React from "react";
import './NewExpense.css';
import AddExpense from './AddExpense';
const NewExpense=(props)=>{
    const saveData= (expenseData)=>{
        const newexpenseData={
            ...expenseData,
            id: Math.random().toString()
        }
        props.onUpdateExpense(newexpenseData)

    } 
    
    const clickFlag= false;
    return(
        <div className="new-expense">
            <AddExpense clickedFlag={clickFlag} onSaveData={saveData}/>            
        </div>
    )
}
export default NewExpense;