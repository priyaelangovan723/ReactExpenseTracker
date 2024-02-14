import React  from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

function ExpenseItem(props){
    const {id,title,amount, deleteExpense} = props
    const handleDelete = () => {
        deleteExpense(id)
    }
    return(
        <>
        <div className="expense-item-container">
        <div className= {`expense-item ${amount > 0 ? 'positive': 'negative'}`}>
            <div className="expense-title">{title}</div>
            <div className="expense-amount">{amount}</div>
        </div>
            <div ><button className="del-btn" onClick={handleDelete}><FontAwesomeIcon icon={faTrash} /></button></div>
            
        
        </div>
        
        </>
    )
}

export default ExpenseItem