// fill in javascript code here
document.querySelector("form").addEventListener("submit",myFunction);
 function myFunction(event){
     event.preventDefault();

     let Name=document.querySelector("#name").value;
     let empid=document.querySelector("#employeeID").value;
     let dept=document.querySelector("#department").value;
     let expe=document.querySelector("#exp").value
     let Email=document.querySelector("#email").value;
     let Mbl=document.querySelector("#mbl").value

     console.log(Name,empid,dept,expe,Email,Mbl)



let tr=document.createElement("tr");
let td1=document.createElement("td");
td1.innerText=Name
let td2=document.createElement("td");
td2.innerText=empid
let td3=document.createElement("td");
td3.innerText=dept
let td4=document.createElement("td");
td4.innerText=expe
let work=Number(expe);

let td5=document.createElement("td");
td5.innerText=Email
let td6=document.createElement("td");
td6.innerText=Mbl
td7=document.createElement("td")
if(work>5){
    td7.innerText="Senior"
}else if(work<=(2-5)){
    td7.innerText="Junior"
}else if(work<=1){
    td7.innerText="Fresher"
}
    

let td8=document.createElement("td")
td8.innerText="DELETE";

tr.append(td1,td2,td3,td4,td5,td6,td7,td8);
document.querySelector("tbody").append(tr);


}


 





