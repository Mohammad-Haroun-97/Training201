
'use strict'

let hours=['6:00 Am','7:00 Am','8:00 Am','9:00 Am','10:00 Am','11:00 Am','12:00 Pm','1:00 pm','2:00 pm','3:00 pm','4:00 pm','5:00 pm','6:00 pm','7:00 pm', ];

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }


let seattle ={
    name: 'seattle',
    max: 65,
    min: 23,
    avg: 6.3,
    randomcutomer: [],
    avgcookies: [],
    total: 0,
    

    getrandomcustomer: function(){

        for (let i = 0; i < hours.length; i++) {
           this.randomcutomer.push(random(this.min, this.max))
            
        }
    },

    getaAvgCookies: function(){

        for (let i = 0; i < hours.length; i++) {

             this.avgcookies.push(Math.ceil(this.randomcutomer[i]*this.avg));

            this.total=this.total + this.avgcookies[i];
             
            
        }
       
    },

    
    
    
}


seattle.getrandomcustomer();
seattle.getaAvgCookies();


console.log(seattle);
console.log(seattle.total);


function typeHtml(){
    let info=document.getElementById('info');

    let h2e=document.createElement('h2');
    info.appendChild(h2e);
    h2e.textContent=seattle.name

    let ul=document.createElement('ul');
        info.appendChild(ul);

    for (let i = 0; i < hours.length+1; i++) {

        let li=document.createElement('li');
        ul.appendChild(li);
        li.textContent=` ${hours[i]}  ${seattle.avgcookies[i]}   cookies `
       
        if (i== 14) {

            li.textContent=`Total ${seattle.total}`
            
        }

        
    }

    

}
typeHtml();
console.log(typeHtml);



let Tokyo ={
    name: 'Tokyo',
    max: 24,
    min: 3,
    avg: 1.2,
    randomcutomer: [],
    avgcookies: [],
    total: 0,
    

    getrandomcustomer: function(){

        for (let i = 0; i < hours.length; i++) {
           this.randomcutomer.push(random(this.min, this.max))
            
        }
    },

    getaAvgCookies: function(){

        for (let i = 0; i < hours.length; i++) {

             this.avgcookies.push(Math.ceil(this.randomcutomer[i]*this.avg));

            this.total=this.total + this.avgcookies[i];
             
            
        }
       
    },

    
    
    
}


Tokyo.getrandomcustomer();
Tokyo.getaAvgCookies();


console.log(Tokyo);
console.log(Tokyo.total);


Tokyo.typeHtml=function (params) {
    let info=document.getElementById('info');

    let h2e=document.createElement('h2');
    info.appendChild(h2e);
    h2e.textContent=this.name

    let ul=document.createElement('ul');
        info.appendChild(ul);

    for (let i = 0; i < hours.length+1; i++) {

        let li=document.createElement('li');
        ul.appendChild(li);
        li.textContent=` ${hours[i]}  ${this.avgcookies[i]}   cookies `
       
        if (i== 14) {

            li.textContent=`Total ${this.total}`
            
        }

        
    }

    

}
Tokyo.typeHtml();
console.log(typeHtml);


let Dubai={
    name: 'Dubai',
    max: 11,
    min: 38,
    avg: 3.7,
    randomcutomer: [],
    avgcookies: [],
    total: 0,
    

    getrandomcustomer: function(){

        for (let i = 0; i < hours.length; i++) {
           this.randomcutomer.push(random(this.min, this.max))
            
        }
    },

    getaAvgCookies: function(){

        for (let i = 0; i < hours.length; i++) {

             this.avgcookies.push(Math.ceil(this.randomcutomer[i]*this.avg));

            this.total=this.total + this.avgcookies[i];
             
            
        }
       
    },

    
    
    
}


Dubai.getrandomcustomer();
Dubai.getaAvgCookies();


console.log(Dubai);
console.log(Dubai.total);


Dubai.typeHtml=function () {
    let info=document.getElementById('info');

    let h2e=document.createElement('h2');
    info.appendChild(h2e);
    h2e.textContent=this.name

    let ul=document.createElement('ul');
        info.appendChild(ul);

    for (let i = 0; i < hours.length+1; i++) {

        let li=document.createElement('li');
        ul.appendChild(li);
        li.textContent=` ${hours[i]}  ${this.avgcookies[i]}   cookies `
       
        if (i== 14) {

            li.textContent=`Total ${this.total}`
            
        }

        
    }

    

}
Dubai.typeHtml();
console.log(typeHtml);


let Paris ={
    name: 'Paris',
    max: 38,
    min: 20,
    avg: 2.3,
    randomcutomer: [],
    avgcookies: [],
    total: 0,
    

    getrandomcustomer: function(){

        for (let i = 0; i < hours.length; i++) {
           this.randomcutomer.push(random(this.min, this.max))
            
        }
    },

    getaAvgCookies: function(){

        for (let i = 0; i < hours.length; i++) {

             this.avgcookies.push(Math.ceil(this.randomcutomer[i]*this.avg));

            this.total=this.total + this.avgcookies[i];
             
            
        }
       
    },

    
    
    
}


Paris.getrandomcustomer();
Paris.getaAvgCookies();


console.log(Paris);
console.log(Paris.total);


Paris.typeHtml=function() {
    
    let info=document.getElementById('info');

    let h2e=document.createElement('h2');
    info.appendChild(h2e);
    h2e.textContent=Paris.name

    let ul=document.createElement('ul');
        info.appendChild(ul);

    for (let i = 0; i < hours.length+1; i++) {

        let li=document.createElement('li');
        ul.appendChild(li);
        li.textContent=` ${hours[i]}  ${Paris.avgcookies[i]}   cookies `
       
        if (i== 14) {

            li.textContent=`Total ${Paris.total}`
            
        }

        
    }

    

}
Paris.typeHtml();
console.log(typeHtml);

let Lima ={
    name: 'Lima',
    max: 16,
    min: 2,
    avg: 4.6,
    randomcutomer: [],
    avgcookies: [],
    total: 0,
    

    getrandomcustomer: function(){

        for (let i = 0; i < hours.length; i++) {
           this.randomcutomer.push(random(this.min, this.max))
            
        }
    },

    getaAvgCookies: function(){

        for (let i = 0; i < hours.length; i++) {

             this.avgcookies.push(Math.ceil(this.randomcutomer[i]*this.avg));

            this.total=this.total + this.avgcookies[i];
             
            
        }
       
    },

    
    
    
}


Lima.getrandomcustomer();
Lima.getaAvgCookies();


console.log(Lima);
console.log(Lima.total);


Lima.typeHtml=function() {
    
    let info=document.getElementById('info');

    let h2e=document.createElement('h2');
    info.appendChild(h2e);
    h2e.textContent=Lima.name

    let ul=document.createElement('ul');
        info.appendChild(ul);

    for (let i = 0; i < hours.length+1; i++) {

        let li=document.createElement('li');
        ul.appendChild(li);
        li.textContent=` ${hours[i]}  ${Lima.avgcookies[i]}   cookies `
       
        if (i== 14) {

            li.textContent=`Total ${Lima.total}`
            
        }

        
    }

    

}
Lima.typeHtml();
console.log(typeHtml);





