export const  learnFunction =() => {

interface Person
{
     name: string;
     age: number;
     speak:() =>number;
}

const obj:Person =
{
     name: "test",
     age: 10,
     speak:() =>
     {
          console.log("aaaa");
          return 1;
     }
}

class Huy implements Person 
{
     name: string; 
     age: number;
     speak: () => number;
     constructor(name: string, age:number,callback:() => number)
     {
          this.name = name;
          this.age = age;
          this.speak = callback;
     }
}

const calcTotal = () =>{
     return 1;
}

const obj1 = new Huy("KHOA",23,calcTotal);
console.log(obj1);

type test1 = string | number;

type test2 = 
{
     name: string;
     age: number;
}
type Func =  (a:string) =>string[];

const test:Func = (str:string) =>{
     return["khoa","Vu"]
}

// Định nghĩa kiểu dữ liệu vad ràng buột thuộc tính hoặc đối tượng
}