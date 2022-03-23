import React, {useState}from "react";
import './ExpenseForm.css';
const ExpenseForm=(props)=>{
    // const[typeTitled,setTypeTitle]=useState('');
    // const[typeAmount,setTypeAmount]=useState('')
    // const[typeDate,setTypeDate]=useState('')
    const[userInput,setUserInput]=useState({
        title:'',
        amount:'',
        date:''
    })

    const titleChange= (event)=>{
        // setTypeTitle(event.target.value);
        // console.log(event.target.value);
        // console.log(typeTitled);
        setUserInput((prevState)=>{
            return{
                ...prevState,
                title: event.target.value
            }
        })

    }
    const AmountChange= (event)=>{
        // setTypeAmount(event.target.value);
        // console.log(event.target.value);
        setUserInput((prevState)=>{
            return{
                ...prevState,
                amount: event.target.value
            }
        })

    }
    const DateChange= (event)=>{
        // setTypeDate(event.target.value);
        // console.log(event.target.value);
        setUserInput((prevState)=>{
            return{
                ...prevState,
                date: new Date(event.target.value)
            }
        })

    }
    const submitForm=(event)=>{
        event.preventDefault()
        console.log(userInput);
        props.onSaveData(userInput)
        setUserInput({
            amount:'',
            date:'',
            title:''
        })
    }
    const sendFlag=(event)=>{
        props.onCancelClick(event.target.value);

    }
    
    return(
        <div>
            <form onSubmit={submitForm}>
                <div className= "new-expense__controls">
                    <div className ="new-expense__control label"> 
                        <label className="new-expense__control label">Title</label>
                            <input type="text" className="new-expense__control input" value ={userInput.title} onChange={titleChange}/>
                    </div>
                    </div>
                    <div className ="new-expense__controls"> 
                    <div className ="new-expense__control label"> 

                    <label className="new-expense__control label">Amount</label>
                    <input type="number" className="new-expense__control input"  value = {userInput.amount}onChange={AmountChange}/>
                </div>
                </div>
                <div className="new-expense__controls">
                <div className ="new-expense__control label"> 
 
                <label className="new-expense__control label">Date</label>
               <input type='date' min='2019-01-01' max='2022-12-31' value= {userInput.date} onChange={DateChange}/>
                </div>
                </div>
                <div className="new-expense_actions">
                <button type='submit'>Add Expense</button>
                <button type="button" value={false} onClick={sendFlag}>Cancel</button>
            </div>
        </form>

        </div>

        
    )
}
export default ExpenseForm;