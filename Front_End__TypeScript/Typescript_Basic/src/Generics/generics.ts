/**
 * Generic Type (Kiểu dữ liệu chung): cho phép bạn tạo các loại dữ liệu hoặc hàm có thể làm việc với nhiều 
   kiểu dữ liệu khác nhau mà không cần phải viết lại mã.
 *  Generic Type
 1. Built-in generic type (dữ liệu generic được tích hợp sẵn)
 2. Generic function: làm việc với nhiều kiểu dữ liệu khác nhau mà không cần viết lại mã 
   => tái sử dụng mã và tạo các hàm linh hoạt hơn
 3. Generic class:
 */

// 1-Built-in generic type

// Array<T>: 
// Đây là kiểu dữ liệu mảng generic, cho phép bạn chỉ định kiểu dữ liệu của các phần tử trong mảng.
const numbers: Array<number> = [1, 2, 3, 4, 5];
const words: Array<string> = ["hello", "world"];

// Promise<T>: 
// Kiểu dữ liệu Promise generic, được sử dụng để đại diện cho một giá trị có thể hoặc không thể sẵn sàng ở tương lai.
// const fetchData: Promise<string> = fetch("https://api.example.com/data");

// ReadonlyArray<T>: Tương tự như Array<T>, nhưng chỉ cho phép đọc và không thay đổi mảng sau khi khởi tạo.
const readOnlyNumbers: ReadonlyArray<number> = [1, 2, 3, 4, 5];

// Partial<T>: 
// Giúp tạo ra một bản sao của một đối tượng, nhưng tất cả các thuộc tính của đối tượng là tùy chọn (không bắt buộc).
interface Person {
     name: string;
     age: number;
 }
const partialPerson: Partial<Person> = { name: "Alice" };

//  Record<K, T>:
//  Tạo một đối tượng với các cặp khóa- giá trị kiểu K và T.
const record: Record<string, number> = { "one": 1, "two": 2, "three": 3 };

// Pick<T, K>: 
// Chọn một tập hợp con của các thuộc tính từ một kiểu dữ liệu.
interface Car {
     brand: string;
     model: string;
     year: number;
 }
 const carBrandModel: Pick<Car, "brand" | "model"> = { brand: "Toyota", model: "Camry" };

// EX
interface IStudent {
  id: string | number;
  name: string;
  className: string;
  age: number;
}
// cach thong thuong
const ListStudent: IStudent[] = [
  {
    id: 1,
    name: "Tan Dang",
    className: "A",
    age: 30,
  },
  {
    id: 2,
    name: "Hoang",
    className: "A",
    age: 29,
  },
];

//cach generics
const ListStudent2: Array<IStudent> = [
  {
    id: 1,
    name: "Tan Dang",
    className: "A",
    age: 30,
  },
  {
    id: 2,
    name: "Hoang",
    className: "A",
    age: 29,
  },
];
// Built-in generic type
const numberList: Array<number | string> = [1, 2, 3, 4, 5, "a", "b", "c"];
const stringList: Array<string> = ["A", "B", "C", "D"];
const configList: Array<"abc" | "def"> = ["abc", "def"];

// Generic function.
function ListStudent3<T, K>(val1: T, val2: K) {
  console.log(val1, val2);
  console.log(typeof val1, typeof val2);
}

ListStudent3<string, number>("tan", 30);
ListStudent3("tan", 30); // khuyến cáo không nên dùng
