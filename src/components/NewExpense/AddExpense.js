import ExpenseForm from "./ExpenseForm";
import React, {useState} from 'react';

const AddExpense=(props)=>{
    const[clickeFlag,setClickedFlag]=useState(props.clickedFlag);
    const[cancelClickFlag,setCancelClickFlag]=useState(false)
    const saveData= (expenseData)=>{
        props.onSaveData(expenseData)

    } 
    const updateFlag=(event)=>{
        console.log(event.target.value);
        setClickedFlag(event.target.value);
        setCancelClickFlag(false)
      }
      const updateFlagonCancel=(data)=>{
          console.log(data);
          setCancelClickFlag(data)

      }
     
      if(clickeFlag && !cancelClickFlag){
        return(<ExpenseForm onSaveData={saveData} onCancelClick={updateFlagonCancel}/>) 
    }

   
    return(<button value={true} onClick={updateFlag}> Add new Expense</button>)
}
export default AddExpense