let menu ={
    _courses: {
      appetizers: [],
      mains: [],
      desserts: [],
      get _appetizers(){
          return this.appetizers;
      },
      set _appetizers(appetizerValue){
        this.appetizers = appetizerValue;
      },

      get _mains(){
          return this.mains;
      },
      set _mains(mainsValue){
        this.mains = mainsValue;
      },

      get _desserts(){
          return this.desserts;
      },
     set _desserts(dessertsValue){
         this.desserts = dessertsValue;
     }
    },

    get courses(){
      return {
          appetizers: this._courses._appetizers,
          mains: this._courses._mains,
          desserts: this._courses._desserts
      };
    },
  
    //adding dishes to the courses
    addDishToCourse(courseName, dishName, dishPrice){
      const dish = {
        name: dishName,
        price: dishPrice
      };
        
        if (courseName === 'appetizers'){
          return this._courses.appetizers.push(dish);
        }
        else  if (courseName === 'mains'){
          return this._courses.mains.push(dish);
        }    
        else if (courseName === 'desserts'){
          return this._courses.desserts.push(dish);
        }       
        
    },

    //method to select random dishes
    getRandomDishFromCourse(courseName){
      const dishes = courseName;
      const randomIndex = Math.floor(Math.random() * dishes.length);
      return dishes[randomIndex];
    },
  
    //Generating random meals 
    generateRandomMeal(){
      const appetizer = this.getRandomDishFromCourse(this.courses.appetizers);
      const main = this.getRandomDishFromCourse(this.courses.mains);
      const dessert = this.getRandomDishFromCourse(this.courses.desserts);
      const totalPrice = appetizer.price + main.price + dessert.price;
      return `Your appetizer is ${appetizer.name}. \nMain meal is ${main.name}. \nDessert is ${dessert.name}.\nTotal cost is GHS${totalPrice}.`;
    }
    };
  
    //Adding dishes to mains array
    menu.addDishToCourse('mains','Banku with Okro stew', 30);
    menu.addDishToCourse('mains','Fufu with goat light soap', 60);
    menu.addDishToCourse('mains','Fried rice with chicken', 30);

    //adding dishes to appetizers array
    menu.addDishToCourse('appetizers', 'Orange juice', 8);
    menu.addDishToCourse('appetizers', 'Watermelon juice', 10);
    menu.addDishToCourse('appetizers', 'Apple juice', 10);

    //adding desserts to desserts array
    menu.addDishToCourse('desserts', 'Yoghurt', 10);
    menu.addDishToCourse('desserts', 'Vanilla Ice cream', 15);
    menu.addDishToCourse('desserts', 'Chocolate Ice cream', 12);

   //generating and displaying your meal 
  let meal = menu.generateRandomMeal();
  console.log(meal);
  