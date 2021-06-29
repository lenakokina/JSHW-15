class Kokina {
  constructor(options) 
  {
    this.name = options.name
    this.surname = options.surname
    this.age = options.age
    this.adress = 'smt Slobozhanske, str. Teplichna, 32'
  }
  voice() {
    console.log('I am mother')
  }
}

const mother = new Kokina({
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
    console.log('I am Polina')
  } 
  }


const daughterBig = new Polina({
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
    console.log('I am Olesya')
  } 
  behavior() {
    console.log('I like to indugle')
  }
  }


const daughterSmall = new Olesya({
  name: 'Olesya',
  surname: 'Kokina',
  age: 3,
  height: 110
})


