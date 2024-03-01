function addNewWEfield() {

   let newNode = document.createElement("textarea");
      newNode.classList.add("form-control");
      newNode.classList.add("weField");
      newNode.classList.add("mt-2");
      newNode.setAttribute("rows",3);
      newNode.setAttribute('placeholder','Enter here');
  
      let weOb = document.getElementById("we");
      let weAddbuttonOb = document.getElementById("weAddButton");
  
      weOb.insertBefore(newNode, weAddbuttonOb);
   
   }
  

   function addNewAQfield() {

      let newNode = document.createElement("textarea");
      newNode.classList.add("form-control");
      newNode.classList.add("aqField");
      newNode.classList.add("mt-2");
      newNode.setAttribute("rows",3);
      newNode.setAttribute('placeholder','Enter here');
  
      let aqOb = document.getElementById("aq");
      let aqAddbuttonOb = document.getElementById("aqAddButton");
  
      aqOb.insertBefore(newNode, aqAddbuttonOb);

   }


//generating cv
function generateCV()
{
//console.log("generating CV");

let nameField=document.getElementById("nameField").value;

let nameT1=document.getElementById("nameT1");

nameT1.innerHTML = nameField;

//direct
document.getElementById("nameT2").innerHTML = nameField;

//contact

document.getElementById("ContactT").innerHTML=document.getElementById("contactField").value;

//address

document.getElementById("addressT").innerHTML=document.getElementById("adressField").value;

document.getElementById("faceT").innerHTML=document.getElementById("fbField").value;

document.getElementById("instaT").innerHTML=document.getElementById("instaField").value;

document.getElementById("lkdT").innerHTML=document.getElementById("linkedField").value;

document.getElementById("ObjectiveT").innerHTML=document.getElementById("ObjectiveField").value;

//work experience

let wes=document.getElementsByClassName("weField");

let str = "";

for (let e of wes)
{
   str = str + `<li> ${e.value} </li>`;
} 
document.getElementById("weT").innerHTML=str;

let aqs=document.getElementsByClassName("aqField");

let str1="";

for(let e of aqs)
{
   str1 += `<li> ${e.value} </li>`;
}

document.getElementById("aqT").innerHTML=str1;

document.getElementById('cv-form').style.display='none'

document.getElementById('cv-template').style.display="block";




}

function printCV() {
   window.print();
}




 






