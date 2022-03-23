import './ExpenseList.css';
import ExpenseItems from "../ExpenseItem";


const ExpenseList = props =>{
    const filteredContent=<h2 className="expenses-list__fallback">Found No Content !!</h2>
    if(props.filteredExpense.length==0){
        return filteredContent
    }
    return (
        <ul className="expense-list">
            {
                props.filteredExpense.map((expense)=>{
                    return (<ExpenseItems key={expense.id} title={expense.title} amount={expense.amount} date={expense.date}></ExpenseItems>)}
        
          )
            }
        </ul>
    )
}

export default ExpenseList