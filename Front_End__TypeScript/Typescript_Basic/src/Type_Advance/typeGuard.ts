import { type } from "os";

export const learnTypeAdvance = () => {
  interface IHome {
    name: string;
    address: string;
    price: number;
  }

  const vinHome: IHome = {
    name: "vinhome",
    address: "Da Nang",
    price: 10,
  };

  const age: number = 18;
  console.log("home", typeof vinHome);
  console.log("age", typeof age);

  class Home implements IHome {
    name: string;
    address: string;
    price: number;

    constructor(name: string, addrees: string, price: number) {
      this.name = name;
      this.address = addrees;
      this.price = price;
    }
  }
  class Hotel implements IHome {
    name: string;
    address: string;
    price: number;
    constructor(name: string, addrees: string, price: number) {
      this.name = name;
      this.address = addrees;
      this.price = price;
    }
  }

  const vinCity = new Home("vinCity", "Da Nang", 300000);
  const hotel = new Hotel("BM hotel", "Ha Noi", 500);

  type House = Home | Hotel;
  const house1: House = vinCity;
  const house2: House = hotel;

  function isChecked(instan: House) {
    if (instan instanceof Hotel) {
      return console.log("check", true);
    }
    console.log("check", false);
  }

  isChecked(house2);
  console.log(
    "vinCity co duoc khoi tao tu class Home ?: ",
    vinCity instanceof Home
  );

  // In

  interface ITodo {
    id: number;
    name: string;
    complete: boolean;
  }
  const todo: ITodo = {
    id: 1,
    name: "Tan Dang",
    complete: true,
  };
  console.log("huy" in todo ? "in todo >> true" : "in todo >> false");
  console.log("checked", todo.hasOwnProperty("id"));

  // Ep kieu type casting
  // generics
  // as
  for (let key in todo)
  {
     type T =  keyof ITodo;
/**
 * tao 1 type chua toan bo cac thuoc tinhs cua mot object
 * type = id | name | completed
 */
     console.log(">",todo[key as T]);
  }

// ? add ??


interface IMacbook
{
  name: string;
  price: number | null;
  os: string;
  color?: string; // Có thể có hoặc không (optional chaining) 
}

let priceLaptop: number | null | undefined = null;
const macBookAri:IMacbook ={
  name: "MacBookAri2017",
  price: priceLaptop ?? 200000, //( nullish coalescing) => chỉ đúng khi value là null hoặc underfined
  os: "MacOS",
}
 console.log(macBookAri);
};
