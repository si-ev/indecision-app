const add = (a, b) => {
     //console.log(arguments);
     return a + b;
};

console.log(add(55,1));

const user = {
     name: 'Andrew',
     cities: ['Philadelphia', 'New York', 'Dublin'],
     printPlacesLived(){
          return this.cities.map((city) => this.name + ' has lived in '  + city);
     }
};

user.printPlacesLived();


const multiplier ={
     numbers: [],
     multiplyBy: 0,
     multiply(numbers, multiplyBy){
          this.numbers = numbers;
          this.multiplyBy = multiplyBy;
          return this.numbers.map((num) => num*this.multiplyBy);
     }
};

console.log(multiplier.multiply([1,2,3], 27));
