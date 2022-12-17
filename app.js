// var student= {
//     name: 'Zunair',     //key : //value
//     id:222    

// }
// student.subject='english';
// student.name='XYZ';
// delete student.name
// console.log(student)

var student1={
    name:'Huzaifa',
    FatherName: 'Azmatullah',
    RollNo:1 ,
    class: 'BSCS 4A',
    age: 20
}
var student2={
    name:'Huzaifa',
    FathrName: 'xyz',
    RollNo:2 ,
    class: 'BSCS 4A',
    age: 20
}
var student3={
    name:'Huzaifa',
    FatherName: 'xyz',
    RollNo:3 ,
    class: 'BSCS 4A',
    age: 20
}
var student4={
    name:'Huzaifa',
    FatherName: 'xyz',
    RollNo:4 ,
    class: 'BSCS 4A',
    age: 20
}
var student5={
    name:'Huzaifa',
    FatherName: 'xyz',
    RollNo:5 ,
    class: 'BSCS 4A',
    age: 20
}
var student6={
    name:'Huzaifa',
    FatherName: 'xyz',
    RollNo:6 ,
    class: 'BSCS 4A',
    age: 20
}
var student7={
    name:'Huzaifa',
    FatherName: 'xyz',
    RollNo:7 ,
    class: 'BSCS 4A',
    age: 20
}
var student8={
    name:'Huzaifa',
    FatherName: 'xyz',
    RollNo:8 ,
    class: 'BSCS 4A',
    age: 20
}
var student9={
    name:'Huzaifa',
    FatherName: 'xyz',
    RollNo:9,
    class: 'BSCS 4A',
    age: 20
}
var student10={
    name:'Huzaifa',
    FatherName: 'xyz',
    RollNo:10 ,
    class: 'BSCS 4A',
    age: 20
}





// console.log(arr);

// for (var index = 0; index < arr.length; index++) {
// console.log(arr[index]);
    
    
// }
function std(newroll) {
var flag=false;
var arr=[student1,student2,student3,student4,student5,student6,student7,student8,student9,student10];
var newroll=document.getElementById("text1").value;
var ans=document.getElementById("ans1");
    for (var index = 0; index < arr.length; index++) {
        if(newroll==arr[index].RollNo){
        //    console.log(arr[index])
           ans.innerHTML ="Name : "+arr[i].name+"<br>"+"Roll No : "+arr[i].RollNo+"<br>"+"CNic : "+arr[i].class+"<br>"+"Age : "+arr[i].age +"<br>"+"FatherName : "+arr[i].FatherName;
             flag==true;
        }
       }
       if (flag==false){
         alert("not found");
       }
      
       
}



// var a={
//     id: 1,
//     name: 'abc',
//     hobbies:["cricket","football","Reading"],
//     address:{
//         street: "ABC",
//         City: "KARACHI",
//         Country: "PK"
//     },
//     calculateAge: function(){
//         var dob=new Date();
//         var std= new Date("01-01-1999");
//         var diff=dob.getTime()-std.getTime();
//         return diff/(1000*60*60*24*365);
//     },
// };
// console.log(a.calculateAge());







// question
//  Array
// correct answer