'use strict'

let hours = ['6 Am ', '7 Am ', '8 Am ', '9 Am ', '10 Am ', '11 Am ', '12 Am ', '1 Pm ', '2 Pm ', '3 Pm ', '4 Pm ', '5 Pm ', '6 Pm ', '7 Pm ',]

function randomCustomer(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

let allStores = [];


function Stores(name, min, max, avg) {
    this.name = name;
    this.min = min;
    this.max = max;
    this.avg = avg;
    this.randomCustomersEachHour = [];
    this.avgCookiesEachHour = [];
    allStores.push(this);
    this.total = 0;

}

Stores.prototype.getrandomCustomersEachHour = function () {
    for (let i = 0; i < hours.length; i++) {

        this.randomCustomersEachHour.push(randomCustomer(this.min, this.max))
    }


}

Stores.prototype.getavgCookiesEachHour = function () {
    for (let i = 0; i < hours.length; i++) {

        this.avgCookiesEachHour.push(Math.floor(this.randomCustomersEachHour[i] * this.avg))

        this.total += this.avgCookiesEachHour[i]
    }


}

let Seattle = new Stores('Seattle', 2, 7, 7)
let Tokyo = new Stores('Tokyo', 3, 9, 7)
let Dubai = new Stores('Dubai', 0, 8, 5)
let Paris = new Stores('Paris', 1, 4, 7)
let Lima = new Stores('Lima', 2, 4, 7)





console.log(Seattle);
console.log(Tokyo);


// Table  // Table  // Table  // Table  // Table  // Table  // Table  
let sales = document.getElementById('sales')

let table = document.createElement('table')
sales.appendChild(table)

table.setAttribute("id", "table");


let makeHeader = function () {
    let tr = document.createElement('tr')
    table.appendChild(tr)

    let th = document.createElement('th')
    tr.appendChild(th)

    th.textContent = 'Name'

    for (let i = 0; i < hours.length; i++) {
        let th = document.createElement('th')
        tr.appendChild(th)
        th.textContent = hours[i]

    }
    let Lastth = document.createElement('th')
    tr.appendChild(Lastth)
    Lastth.textContent = "Daily Total"

}


Stores.prototype.render = function () {

    let rendertr = document.createElement('tr')
    table.appendChild(rendertr)
    let firstth = document.createElement('th')
    rendertr.appendChild(firstth)
    firstth.textContent = this.name

    for (let i = 0; i < hours.length; i++) {
        let th = document.createElement('td')
        rendertr.appendChild(th)
        th.textContent = this.avgCookiesEachHour[i]

    }
    let lastth = document.createElement('th')
    rendertr.appendChild(lastth)
    lastth.textContent = this.total
}


function footer() {

    let tr = document.createElement('tr')
    table.appendChild(tr)
    let th = document.createElement('th')
    tr.appendChild(th)
    th.textContent = "Total"
    let TotalofTotals=0



    for (let i = 0; i < hours.length; i++) {



        let TotalCookiesEachHourForAllShops = 0

        for (let j = 0; j < allStores.length; j++) {

            TotalCookiesEachHourForAllShops += allStores[j].avgCookiesEachHour[i]
            TotalofTotals+=allStores[j].avgCookiesEachHour[i]
            

        }
        let footerth=document.createElement('th')
            tr.appendChild(footerth)
            footerth.textContent=TotalCookiesEachHourForAllShops

    }
let lastTh=document.createElement('th')
tr.appendChild(lastTh)
lastTh.textContent=TotalofTotals

}





console.log(table);

makeHeader();

for (let i = 0; i < allStores.length; i++) {
    allStores[i].getrandomCustomersEachHour();
    allStores[i].getavgCookiesEachHour();
    allStores[i].render();

}
footer();




// Event   // Event // Event // Event  // Event   
 
let form=document.getElementById('form')

form.addEventListener('submit', customerplace)

function deleteRow() {
    document.getElementById("table").deleteRow(-1);

}
function customerplace(event) {
    console.log(event);
    event.preventDefault();

    let name=event.target.NameField.value 
    let min=event.target.MinField.value 
    let max=event.target.MaxField.value 
    let avg=event.target.AverageField.value 

    let addedplace=new Stores(name,min,max,avg)

    deleteRow();

    addedplace.getrandomCustomersEachHour();
    addedplace.getavgCookiesEachHour();
    addedplace.render();
    footer();
  
}

// customerplace.getrandomCustomersEachHour();
// customerplace.avgCookiesEachHour();
  
 


