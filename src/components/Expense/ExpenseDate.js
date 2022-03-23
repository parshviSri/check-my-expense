import './ExpenseDate.css';
import React,{useState} from 'react';
import Card from '../UI/Card/card';
function ExpenseDate(props){
    const month = props.date.toLocaleString('en-US', { month: 'long' });
    const year= props.date.getFullYear();
    const day= props.date.toLocaleString('en-US',{day:'2-digit'});

    return(
        <Card className='expense-date'>
            <div className='expense-date_month'>{month}</div>
            <div className='expense-date_year'>{year}</div>
            <div expense-date='expense-date_day'>{day}</div>
        </Card>
    )

}
export default ExpenseDate