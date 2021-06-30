class Kokina {
  constructor(options) 
  {
    this.status = options.status
    this.name = options.name
    this.surname = options.surname
    this.age = options.age
    this.adress = 'smt Slobozhanske, str. Teplichna, 32'
  }
  voice() {
    console.log(`I am ${this.status}`)
  }
}

const mother = new Kokina({
  status: 'mother',
  name: 'Elena',
  surname: 'Kokina',
  age: 38
})



class Polina extends Kokina {
  constructor(options) {
    super(options)
    this.tel = options.tel
  }    
    voice() {
    console.log(`I am ${this.name} `)
  } 
  }


const daughterBig = new Polina({
  status: 'daughter',
  name: 'Polina',
  surname: 'Kokina',
  age: 13,
  tel: '0504202888'
})



class Olesya extends Polina {
  constructor(options) {
    super(options)
    this.height = options.height
    delete this.tel;
  }    
    voice() {
    console.log(`I am ${this.name} `)
  } 
  behavior() {
    console.log('I like to indugle')
  }
  }


const daughterSmall = new Olesya({
  status: 'daughter',
  name: 'Olesya',
  surname: 'Kokina',
  age: 3,
  height: 110
})



// const women = {
//   name: 'name',
//   surname: 'surname'
// }

// Object.defineProperty(women, 'Fullname',{

//   get (){
//     return `${this.name} ${this.surname}`
//   },
//   set (value) {
//     [this.name, this.surname] = value.split(' ');

//   }
// }
// )

// women.Fullname = 'Elena Kokina';
// women.Fullname = 'Polina Kokina';

// alert(women.name);
// alert(women.surname);


// const man = {
// get name () {
//   return this._name
// },
// set name(value) {
//   if (value.lenght < 4) {
//     alert('имя слишком короткое, должно быть не меньше 4 символов');
//     return;
//   }
//    this._name = value;
// }
// };

// man.name = 'ant';
// alert(man.name)

 
