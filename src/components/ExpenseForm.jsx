import React, { useState } from "react";
const ExpenseForm = (props) =>{
    const {addExpenses} = props
    const [title , setTitle] = useState('')
    const [amount , setAmount] = useState(0)
    const [errors , setErrors] = useState('')
    
    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log(title,amount)
        let err={} // let err
        // if(title == '' || amount ==0){
        //    alert("Please enter valid title and amount")
        // }
        
        if(title.length <3){
            // setErrors({...errors, title: "Title should be atleast 3 characters long"})
            err.title ="Title should be 3 characters long"// err="Title should be"
        }
        
        if(!amount){
            err.amount = "Enter a valid amount"
        }

    if (Object.keys(err).length >0 ){
        setErrors({...err})
        return
    }
            addExpenses(title,parseInt(amount))
            setTitle('')
            setAmount(0)
        
        
        
    }
    const handleTitleChange = (e) => {
        console.log(e.target.value)
        setTitle(e.target.value)
        setErrors({...errors,title: ''})
    }
    const handleAmountChange = (e) => {
        console.log(e.target.value)
        setAmount(e.target.value)
        setErrors({...errors, amount: ''})
    }
    const addEntry = () =>{
        const add = props.add
        const obj = {"title": title , "amount": amount}
        console.log("Submit called"+title,amount)
        add(obj)
        
    }
    return (
        <>
        <div className="form">
            <form onSubmit={handleSubmit}>
            <div className="title-input ">
            <label for="title">Category</label>
            <input type="text" id="title" name="title" value={title} onChange={handleTitleChange}></input>
            {errors.title? <div id="Error">{errors.title}</div>:null}
            </div>
            <div className="amount-input">
            <label for="amount">Amount</label>
            <input type="number" id="amount" name="amount" value={amount} onChange={handleAmountChange}></input>
            {errors.amount? <div id="Error">{errors.amount}</div>:null}
            </div>
            <div ><button className="form-btn" id="add-entry" onClick={addEntry}>Add Entry</button></div>
            </form>
      </div>
      </>
      
    )
}

export default ExpenseForm

