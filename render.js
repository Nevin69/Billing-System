// jshint esversion:6

let entry =  document.getElementById("entry")
let price =  document.getElementById("price")
let quantity = document.getElementById("quantity")


let submitButton = document.createElement("button")
let submitButtonContainer = document.querySelector(".submit-data")

submitButtonContainer.onclick = () => {
    window.print()
}

let tables = 0
let table = document.querySelector(".table-body")
let tableName = [];


function clickHandle(name){
    console.log(tableName[0]);
}


const createCheckbox = (checkBoxName, tableRowName) => {
    checkBoxName = document.createElement("Input")
    checkBoxName.setAttribute('type', "checkbox");
    checkBoxName.setAttribute('class', "check-box");
    checkBoxName.setAttribute('onClick', "clickHandle()")
    tableRowName.appendChild(checkBoxName)
}


const createTable = (tableRowName) => {
    tableRowName = document.createElement("tr")
    table.appendChild(tableRowName)
    insertData("chxbox", "xxx", tableRowName)
    insertData("tableData1", entry, tableRowName);
    insertData("tableData2", quantity, tableRowName);
    insertData("tableData3", price, tableRowName);
    tableName.push(tableRowName);
}






const chxboxName = "chxbox" + String(tables)
const insertData = (tableDataName, inputName, tableRow) => {
    
    tableDataName = document.createElement("td")
    if(inputName === 'xxx'){
        tableDataName.setAttribute('class', "deleteBox")
        createCheckbox(chxboxName, tableDataName)
    }else {
        tableDataName.setAttribute('class', 'custom-border')
        tableDataName.appendChild(document.createTextNode(inputName.value))
    }
    
   
    
    tableRow.appendChild(tableDataName)

    
}


entry.focus();

function addItem(){
    table.classList.remove("visibility")
    console.log(tables);
    if (tables >= 1 & tables <= 1) {
        submitButton.appendChild(document.createTextNode("Print"));
        submitButtonContainer.appendChild(submitButton)
    }
    

    if(entry.value != "" & price.value != 0 ){

        createTable("tableRow" + String(tables));
        tables += 1;
    }else{
        alert("Check input field")
    }
}



