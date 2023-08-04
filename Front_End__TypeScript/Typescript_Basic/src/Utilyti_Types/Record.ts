//Record<key,Type>
//Công dụng:  biên tập hợp các key truyền vào làm key của mọt object mới
//Key : tập hợp các kiểu chuõi nào đsó được viêtx theo union type
//Type:hiểu interface => value của object
export const leanrRecords = ()=> {



interface ICar {
  model: string;
  color: string;
  price: number;
}

type Supplier = "Audi" | "Mec" | "BMW";
// demo class

class Car implements ICar {
  model: string;
  color: string;
  price: number;
  constructor(model: string, color: string, price: number) {
    this.model = model;
    this.color = color;
    this.price = price;
  }
  prinInfo(obj: Record<Supplier, ICar>) {

    console.log(obj);
    
  }
}
const Car1 = new Car("BMW", "red", 200);
// const Car2 = new Car("Audi", "green", 200);

Car1.prinInfo({
     BMW:{model:"BMW",color:"red",price:200},
     Audi:{model:"Audi",color:"red",price:200},
     Mec:{model:"Mec",color:"red",price:200},
})

}