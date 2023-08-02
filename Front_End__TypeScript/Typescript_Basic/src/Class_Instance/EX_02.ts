class Car {
  private brand: string;
  price: number;
  color: string;
  category: string;

  constructor(brand: string, price: number, color: string, category: string) {
    this.brand = brand;
    this.price = price;
    this.color = color;
    this.category = category;
  }

  set setBrand(brand: string) {
    this.brand = brand;
  }
  get getBrand(): string {
    return this.brand;
  }

  set setPrice(price: number) {
    this.price = price;
  }
  get getPrice(): number {
    return this.price;
  }

  set setColor(color: string) {
    this.color = color;
  }
  get getColor(): string {
    return this.color;
  }

  set setCategory(category: string) {
    this.category = category;
  }
  get getCategory(): string {
    return this.category;
  }

  inputData(
    brand: string,
    price: number,
    color: string,
    category: string
  ): void {
    this.brand = brand;
    this.price = price;
    this.color = color;
    this.category = category;
  }

  printData(): void {
    console.log("----------------------------");
    console.log("Brand: " + this.brand);
    console.log("Price: " + this.price);
    console.log("Color: " + this.color);
    console.log("Category: " + this.category);
  }
}

class CarManager {
  private cars: Car[];

  constructor() {
    this.cars = [];
  }

  public getCarsLength(): number {
    return this.cars.length;
  }

  createCar(brand: string, price: number, color: string, category: string) {
    const car = new Car(brand, price, color, category);
    this.cars.push(car);
    console.log("Car added successfully!\n");
  }
  
  updateCar(
    id: number,
    brand: string,
    price: number,
    color: string,
    category: string
  ) {
    if (id >= 0 && id < this.cars.length) {
      this.cars[id] = new Car(brand, price, color, category);
      console.log("Car updated successfully!\n");
    } else {
      console.log("Car not found");
    }
  }
  
  deleteCar(id: number) {
    if (id >= 0 && id < this.cars.length) {
      this.cars.splice(id, 1);
      console.log("Car deleted successfully!");
    } else {
      console.log("Car not found!");
    }
  }
  
  showAllCart(): void {
    console.log("===== Car List =====");
    for (let i = 0; i < this.cars.length; i++) {
      this.cars[i].printData();
    }
  }
}

const carManager = new CarManager();
const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

function mainMenu() {
  console.log("====================================");
  console.log("Choose an option:");
  console.log("------------------------------------");
  console.log("C - Create new car");
  console.log("R - Show all cars");
  console.log("U - Update car information");
  console.log("D - Delete car");
  console.log("E - Exit");
}

export function Ex2_startProgram() {
  mainMenu();
  console.log("====================================");

  readline.question("Options: ", (option: any) => {
    switch (option.toUpperCase()) {
      case "C":
        readline.question("Enter brand: ", (brand: string) => {
          readline.question("Enter price: ", (price: number) => {
            readline.question("Enter color: ", (color: string) => {
              readline.question("Enter category: ", (category: string) => {
                carManager.createCar(brand, price, color, category);
                Ex2_startProgram();
              });
            });
          });
        });
        break;
      case "R":
        carManager.showAllCart();
        Ex2_startProgram();
        break;
      case "U":
        readline.question("Enter car ID to update: ", (id: number) => {
          const carId = id - 1;
          if (carId >= 0 && carId < carManager.getCarsLength()) {
            readline.question("Enter brand: ", (brand: string) => {
              readline.question("Enter price: ", (price: number) => {
                readline.question("Enter color: ", (color: string) => {
                  readline.question("Enter category: ", (category: string) => {
                    carManager.updateCar(carId, brand, price, color, category);
                    Ex2_startProgram();
                  });
                });
              });
            });
          } else {
            console.log("Invalid car ID!\n");
            Ex2_startProgram();
          }
        });
        break;
      case "D":
        readline.question("Enter car ID to delete: ", (id: number) => {
          const carId = id - 1;
          carManager.deleteCar(carId);
          Ex2_startProgram();
        });
        break;

      case "E":
        console.log("Exiting program.");
        readline.close();
        break;

      default:
        console.log("Invalid option!\n");
        Ex2_startProgram();
        break;
    }
  });
}
