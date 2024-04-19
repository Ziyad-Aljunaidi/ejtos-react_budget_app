import React, { useContext, useState} from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () =>{
    const { budget,expenses,currency, dispatch } = useContext(AppContext);
    const  [newBudget, setNewBudget ] = useState(budget);
    const totalExpenses = expenses.reduce((total, item) =>{
        return ( total += item.cost);
    }, 0);

    const handleBudgetChange = (event)=>{
        if( event.target.value > 20000){
            alert("The value cannot exceed £20000 of funds");
            setNewBudget("");
            return;
        }else if(event.target.value < totalExpenses){
            alert("You cannot reduce the budget value lower than the spending");
            setNewBudget(budget);
            event.target.value = budget;
            return;
        }
        setNewBudget(event.target.value);
        dispatch({
            type: 'SET_BUDGET',
            payload: event.target.value
        });
    };

    return(
        <div className='alert alert-secondary'>
            Budget: {currency}
            <input type='number' step={10} value={newBudget} onChange={handleBudgetChange}></input>
        </div>
    );
};

export default Budget;