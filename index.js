let expenses = []
let totalAmount = 0;
const categorySelect = document.getElementById("category");
const amountInput = document.getElementById("amount");
const dateInput = document.getElementById("date");
const add =document.getElementById("add-btn");
const tableBody = document.getElementById("table-body");
const totalAmountCell = document.getElementById("total");
add.addEventListener("click", function(){
    const category = categorySelect.value;
    const amount = Number(amountInput.value);
    const date = dateInput.value;
    if (category === ""){
        alert("please select a category");
        return;
    }if (isNaN(amount) || amount <=0){
        alert("please enter a valid amount");
        return;
    }if (date ===""){
        alert("please select a date");
        return;
    }
expenses.push({category,amount,date});
totalAmount += amount;
totalAmountCell.textContent = totalAmount;

const newRow = tableBody.insertRow();
const categoryCell = newRow.insertCell();
const amountCell = newRow.insertCell();
const dateCell = newRow.insertCell();
const deleteCell = newRow.insertCell();
const deletebtn = document.createElement("button");
deletebtn.textContent = "Delete";
deletebtn.classList.add("delete-btn");
deletebtn.addEventListener("click",function(){
    expenses.splice(expenses.indexOf(expense),1)
    totalAmount -= expense.amount;
    totalAmountCell.textContent=totalAmount;
    tableBody.removeChild(newRow);
});
const expense = expenses[expenses.length - 1];
categoryCell.textContent = expenses.category;
amountCell.textContent = expenses.amount;
dateCell.textContent = expenses.date;

deleteCell.appendChild(deletebtn);
})
for(const expense of expenses){
    totalAmount += expense.amount;
    totalAmountCell.textContent = totalAmount;

const newRow = tableBody.insrtRow();
const categoryCell = newRow.insertCell();
const amountCell = newRow.insertCell();
const dateCell = newRow.insertCell();
const deleteCell = newRow.insertCell();
const deletebtn = document.createElement("button");
deletebtn.textContent = "Delete";
deletebtn.classList.add("delete-btn")
deletebtn.addEventListener("click",function(){
    expenses.splice(expenses.indexOf(expense),1)
    totalAmount -= expense.amount;
    totalAmountCell.textContent=totalAmount;
    tableBody.removeChild(newRow);
});
categoryCell.textContent = expense.category;
amountCell.textContent = expense.amount;
dateCell.textContent = expense.date;

deleteCell.appendChild(deletebtn);

}