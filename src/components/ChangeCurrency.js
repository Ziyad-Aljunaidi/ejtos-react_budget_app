import React, { useContext, useState} from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () =>{
    const {currency, dispatch } = useContext(AppContext);
    const  [newCurrency, setNewCurrency ] = useState(currency);
    const handleCurrencyChange = (event)=>{
        setNewCurrency(event.target.value);
        dispatch({
            type: 'CHG_CURRENCY',
            payload: event.target.value
        })
    }

    return(
        <div className='alert alert-secondary'>
            {/* currency: {currency}
            <input type='number' step={10} value={newBudget} onChange={handleBudgetChange}></input> */}
            
            
            <label className="" htmlFor="inputGroupSelect03">Currency</label>
        
            <select className='custom-select' style={{backgroundColor:"#93E499", border:'none', borderRadius:'5px', padding:'5px'}} id='inputGroupSelect03' onChange={(event) => handleCurrencyChange(event)}>
                <option defaultValue>Choose Currency</option>
                <option value="$" name="Dollar">$ Dollar</option>
                <option value="£" name="Pound">£ Pound</option>
                <option value="€" name="Euro">€ Euro</option>
                <option value="₹" name="Euppee">₹ Ruppee</option>
            </select>
        </div>
    );
};

export default Currency;