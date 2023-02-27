window.onload = function()  {
  // our variables are all strings below on index page
  let bio= "I am a graduate in BSc Statistics and Operation research ,In 2022 I have obtained Business Analysis certifcate(NQF6 ) and I am now currently a participant in Web Dev bootcamp with Mlab(Codetribe).I am a hard worker who do not shy away from challenges ,<br>eager to learn,fascinated  by anything computer, and how they work and also how they influence life as we know it.I posses programmng skills such as pyhton,c++,SQl and etc..";
  document.getElementById('BIOZ').innerHTML=bio;
  
  let adre="Address: 15_Biccard ,Polokwane,0700";
  let name="Thapelo J Makgoba";
  
  
  document.getElementById("naam").innerHTML=name;
  
  document.getElementById('Address').innerHTML=adre; 
  
// let adres="15 Biccard Street,<br> Polokwane Central, <br>Polokwane<br> 0700<br>Limpopo";
 //document.getElementById("Address in contact").innerHTML=adres;


  

//window.onload=function()===this is just for codes that needs to load before it shows
// document.body.innerHTML= new Date();//once again we used this to check if its conected to home 
console.log('Hello Console')//used for testing too
//document.write('Hello to the world')//still used for testing
var date=new Date();//let date=new Date() this is the same
//document.body.innerHTML="<h1>"  + date +"</h1>";

let huisnumber=15644;
let province="Limpopo";
//document.body.innerHTML="<b>My fake Id address  :</b>" + huisnumber + ", "+province;

  

//let total=0.00; //i ve declared a value and also declared it
//let price1,price2,price3;
//price1=26.00;
//price2=34.78;
//price3=98.00;
//total=price1+price2+price3;
//document.getElementById("total").innerHTML="Eggs: "+price1+"<br>Bread :"+price2+"<br>Milk :"+price3+"<br>Total :"+total; 

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

let Qualifies="The user Does qualifies for a free delivery.";
let notQualifies="The user does NOT qualifies for a Free delivery.";

// printing or sending out total
 //   document.getElementById("total").innerHTML="The total is :"+ total;
//if (total>120)
 //{
// if the user buys oer R120.00, then custoer qualifies  for free delivery.
    
  // document.getElementById("status").innerHTML=Qualifies;
 //}
 //else
 //{
   //document.getElementById("status").innerHTML=notQualifies;
 //}
 
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


//ARRAYs and LISTs   postion starts at [0]
///let shoppingList=["Bread "," Milk "," Sugar "," Eggs "];       //displaying an array
//let shoppingList= new Array("Bread "," Milk "," Sugar "," Eggs "); same as above

//let shoppingList=new Array({ item: "SQL" },
                           //{ item: "Python" },
 //                          { item: "CSS" },
  //                         { item: "Javascript" }, 
  //                         { item: "HTML"}      ) ;

   //let ListUL="<ol>";
 //  for(let i= 0; i < shoppingList.length; i++ )// loop 

     // {
     //  ListUL+="<li>"+ shoppingList[i].item +"</li>";
     // }   
  // / ListUL+="</ol>";
   // document.getElementById("ListsItems").innerHTML= ListUL;

 //shoppingList[4]="Coffe";    // This can be used to add or chage items to that list
 //document.getElementById("ListsItems").innerHTML=shoppingList+ " , Number of Items    : "+shoppingList.length;    // this shows entire list + length
  
 //documemt.getElementById("ListsItems").innerHTML=shoppingList[0];  note the positioning style
 ///++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
     //using tables
 
 let shoppingList=new Array({ item: "SQL" },
                           { item: "Python" },
                           { item: "CSS" },
                           { item: "Javascript" }, 
                           { item: "HTML"}      ) ;

   let ListUL="<div>";
   for(let i= 0; i < shoppingList.length; i++ )
      {
       ListUL+="<table><tr><td>"+ shoppingList[i].item +"</td> </tr> </table>";
      }   
    ListUL+="</div";//ordered lists
    document.getElementById("ListsItems").innerHTML= ListUL;
 
};   