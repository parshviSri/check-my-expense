import Chart from '../Chart/Chart';

const ExpenseChart=(props)=>{
    const barValue=[
        {"month":'Jan', value:0},
        {"month":'Feb', value:0},
        {"month":'Mar', value:0},
        {"month":'Apr', value:0},
        {"month":'May', value:0},
        {"month":'Jun', value:0},
        {"month":'Jul', value:0},
        {"month":'Aug', value:0},
        {"month":'Sept', value:0},
        {"month":'Oct', value:0},
        {"month":'Nov', value:0},
        {"month":'Dec', value:0},

    ]
    for(const expense of props.filteredExpense){
        const expenseMonth = expense.date.getMonth();
        barValue[expenseMonth].value+=expense.amount;
    }
    return(<Chart dataExpense={barValue}></Chart>)
}

export default ExpenseChart