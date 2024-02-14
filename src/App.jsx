import ExpenseItem from "./components/Expenseitem"
import { useState,useEffect } from "react"
import ExpenseForm  from "./components/ExpenseForm"
import axios from "axios"
const App = () => {
  let value
  let entries1
  let expensev=0
  let incomev=0
  const [entries,setEntries] = useState([{
    "id":1,
    "title":"movie",
    "amount":80
  },
{
  "id":2,
  "title":"tour",
  "amount": 5000
},
{
  "id":3,
  "title":"clothes",
  "amount" : 10000
},
{
  "id":4,
  "title":"Food",
  "amount":-10
}])


useEffect(()=>{
  axios.get('https://expensetrackerapplicationapi.onrender.com/get-entries')
  .then(res => console.log(res.data))
  .catch(err=>console.log(err))
},[])


const addExpenses = (title,amount) => {
  const nextid = entries[entries.length -1].id+1
  setEntries([...entries , {id:nextid,title : title , amount:amount}])
}
//Increment income and expense
entries.forEach((ele)=>{
  if(ele.amount > 0){
    incomev += ele.amount
  }
  else{
    expensev -= ele.amount
  }
})
const deleteExpense = (id) => {
  setEntries(entries.filter((exp) => exp.id != id))
}

  
  return(
   
    <div>App
      
      
      <ExpenseForm addExpenses= {addExpenses} />
      <span id="Error">Error:</span>
      <div className="balance"><h1>Balance</h1>{incomev-expensev}</div>
      <div className="income1">
            <div className="income">
                <span className="title">Income</span>
                <span>{incomev}</span>
            </div>
            <div className="block"></div>
            <div className="expense">
            <span className="title">Expense</span>
                <span>{expensev}</span>
            </div>
            
        </div>

       {
        entries1 = entries.map((item) => item.amount)
       }
       
       
        
        
        
        
        {entries.map((item) =>{
          return (
            <ExpenseItem key = {item.id} {...item} deleteExpense = {deleteExpense}/>
          )
        })}
        
          

        
       
    </div>
  )
}
export default App