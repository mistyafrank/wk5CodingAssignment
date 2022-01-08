/* This code creates a menu app that allows the user to create an animal based on the animal's type.
Each animal created can then be viewed or deleted using their index number.
The different types of animals the user creates are added to an array.
The array of all animals created can be viewed by selecting the corresponding 
*/
class Pet {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  describe() {
    return `${this.name} and is ${this.age}.`;
  }
}

class Animal {
  constructor(type) {
    this.type = type;
    this.pets = [];
  }

  createPet(pet) {
    if (pet instanceof Pet) {
      this.pets.push(pet);
    } else {
      throw new Error(
        "You can only add an instance of pet. Argument is not a type of pet"
      );
    }
  }

  describe() {
    return `${this.type} has ${this.pets.length} pets.`;
  }
}
class Menu {
  constructor() {
    this.animals = [];
    this.selectedAnimal = null;
  }

  start() {
    let selection = this.showMainMenuOptions();
    while (selection != 0) {
      switch (selection) {
        case "1":
          this.createAnimal();
          break;
        case "2":
          this.viewAnimal();
          break;
        case "3":
          this.deleteAnimal();
          break;
        case "4":
          this.displayAnimals();
          break;
        default:
          selection = 0;
      }
      selection = this.showMainMenuOptions();
    }
    alert("Goodbye!");
  }

  showMainMenuOptions() {
    return prompt(`
          0) exit
          1) create new animal
          2) view animal
          3) delete animal
          4) display all animals
        `);
  }

  showAnimalMenuOptions(animalInfo) {
    return prompt(`
          0) back
          1) add pet
          2) view pet
          3) delete pet
          -----------------------
          ${animalInfo}
        `);
  }

  displayAnimals() {
    let animalString = "";
    for (let i = 0; i < this.animals.length; i++) {
      animalString += i + ") " + this.animals[i].type + "\n";
    }
    alert(animalString);
  }

  createAnimal() {
    let type = prompt("Enter type of new animal: (example: cat, dog, etc.) ");
    this.animals.push(new Animal(type));
  }

  viewAnimal() {
    let index = prompt("Enter the index of the animal you wish to view:");
    if (index > -1 && index < this.animals.length) {
      this.selectedAnimal = this.animals[index];
      let description = "Animal type: " + this.selectedAnimal.type + "\n";

      for (let i = 0; i < this.selectedAnimal.pets.length; i++) {
        description +=
          i +
          ") " +
          this.selectedAnimal.pets[i].name +
          "-" +
          this.selectedAnimal.pets[i].age +
          "\n";
      }

      let selection = this.showAnimalMenuOptions(description);
      switch (selection) {
        case "1":
          this.addPet();
          break;
        case "2":
          this.viewPet();
          break;
        case "3":
          this.deletePet();
          break;
        default:
          selection = 0;
      }
    }
  }

  deleteAnimal() {
    let index = prompt("Enter the index for the animal type you wish to delete:");
    if (index > -1 && index < this.animals.length) {
      this.animals.splice(index, 1);
    }
  }

  addPet() {
    let name = prompt("Enter the name of your pet:");
    let age = prompt("Enter the age of your pet:");
    this.selectedAnimal.pets.push(new Pet(name, age));
  }

  viewPet() {
    let index = prompt("Enter the index of the pet you would like to view:");
    if (index > -1 && index < this.animals.length) {
      this.animals.push(index, 1);
    }
    this.selectedAnimal.pets.push(new Pet(name, age));
  }

  deletePet() {
    let index = prompt("Enter the index of the pet you wish to delete:");
    if (index > -1 && index < this.selectedAnimal.pets.length) {
      this.selectedAnimal.pets.splice(index, 1);
    }
  }
}

let menu = new Menu();
menu.start();
