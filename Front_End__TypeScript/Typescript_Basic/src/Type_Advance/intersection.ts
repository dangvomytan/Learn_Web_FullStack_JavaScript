 interface IStudent
 {
     id: number | string;
     name: string;
     className: string;
 }

 interface ITeacher
 {
     id:number | string;
     name: string;
     age: number;
 }

 interface IBusinessman
 {
     work:string;
 }

 type Human = IStudent & ITeacher & IBusinessman;
 
 const Tan:Human =
 {
     id: 1,
     name : "Tan Dang",
     age: 30,
     className: "A",
     work:"Student",
 }