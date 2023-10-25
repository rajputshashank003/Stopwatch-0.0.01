let hour = document.querySelector(".hour");
let minute = document.querySelector(".minute");
let second = document.querySelector(".second");
let millisecond = document.querySelector(".millisecond");

let hrVal = 0;
let minVal = 0;
let secVal = 0;
let msVal = 0;
var interval;

function main() {

    function hrValChange(){
        if(hrVal == 24){
            hrVal = 0;
        } else {
            hrVal++;
        }
    };
    
    function minValChange() {
        if(minVal == 59){
            minVal = 0;
            hrValChange();
        } else if(minVal < 59){
            minVal++;
        }
    };
    
    function secValChange() {
        if(secVal < 59){
            secVal++;
        } else if(secVal == 59){
            secVal = 0;
            minValChange();
        } 
    };
    
    interval = setInterval( () => {

        if(msVal == 99){
            msVal = 0;
            secValChange();
        } else {
            msVal++
        }
        
        hour.innerText = hrVal;
        minute.innerText = minVal;
        second.innerText = secVal;
        millisecond.innerText = msVal;

    }, 10);

}

let start = document.querySelector(".restart");
let pause = document.querySelector(".pause");
let reset = document.querySelector(".reset");

let alp = false;

function rabc() {
    hrVal = 0;
    minVal = 0;
    secVal = 0;
    msVal = 0;

    hour.innerText = hrVal;
    minute.innerText = minVal;
    second.innerText = secVal;
    millisecond.innerText = msVal;

    alp = false;

    clearInterval(interval);
};

function pabc() {
    clearInterval(interval);
    alp = false;
    start.innerHTML = "RESUME";
}
start.addEventListener("click" , () => {
    if(!alp){
        alp = true;
        start.innerHTML = "PAUSE";
        main();
    } else {
        pabc();
    }
});

let lapNum = 0;

reset.addEventListener("click", () => {
    // old table deleted 
    let mEle = document.getElementById("table-1");
    mEle.remove();

    // new table created 
    
    mEle = document.createElement("table");
    mEle.id = "table-1";
    mEle.className = "table";
    // new table append in table div

    // let tableDiv = document.getElementById("tableDiv");
    // tableDiv.appendChild(mEle);
    // OR 
    document.querySelector(".tableDiv").appendChild(mEle);

    document.querySelector(".restart").innerText = "RESTART";
    lapNum = 0;
    rabc();
});

let lap = document.querySelector(".lap");

lap.addEventListener("click" , () => {
    // getting the table element
    let mEle = document.getElementById("table-1");

    // creating td element for lap and its number
    let td1 = document.createElement("td");
    td1.innerText = `Lap ${++lapNum}`;

    // creating td for time stamp
    let td2 = document.createElement("td");
    td2.innerText = `${hrVal} : ${minVal} : ${secVal} : ${msVal}`;
    
    // creating tr for new row 
    let row = document.createElement("tr");
    // append both td in row i.e. tr;
    row.appendChild(td1);
    row.appendChild(td2);
    // append row in table element
    mEle.appendChild(row);

});