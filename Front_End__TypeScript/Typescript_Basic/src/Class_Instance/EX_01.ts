class Student {
     private studentId:number;
     private studentName:string;
     private sex:boolean;
     private className:string;
     private age:number;
     private address:string;

     constructor(studentId:number, studentName:string,sex:boolean,className:string,age:number,address:string) 
     {
          this.studentId = studentId;
          this.studentName = studentName;
          this.sex = sex;
          this.className = className;
          this.age = age;
          this.address = address;
     }

     set setStudentId(studentId: number) 
     {
          this.studentId = studentId;
     }
     get getStudentId()
     {
          return this.studentId;
     }

     set setStudentName(studentName: string)
     {
          this.studentName = studentName;
     }
     get setStudentName()
     {
          return this.studentName;
     }

     set setSex(sex: boolean)
     {
          this.setSex = sex;
     }
     get setSex()
     {
          return this.sex;
     }

     set setClassName(className: string)
     {
          this.setClassName = className;
     }
     get getClassName()
     {
          return this.className;
     }

     set setAge(age: number)
     {
          this.age = age;
     }
     get setAge()
     {
          return this.age;
     }

     set setAddress(address: string)
     {
          this.address = address;
     }
     get setAddress()
     {
          return this.address;
     }

     inputData(studentId:number, studentName:string,sex:boolean,className:string,age:number,address:string):void
     {
          this.studentId = studentId;
          this.studentName = studentName;
          this.sex = sex;
          this.className = className;
          this.age = age;
          this.address = address;
     }
     printData():void
     {
          console.log(`Id: ${this.studentId}`);
          console.log(`name: ${this.studentName}`);
          console.log(`sex: ${this.sex}`);   
          console.log(`class name: ${this.className}`);
          console.log(`age: ${this.age}`);
     }

}