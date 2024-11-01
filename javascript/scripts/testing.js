const style = 'color:grey';

class User {
  constructor(name, age, surname) {
    this._name = name;
    this._age = age;
    this['other names'] = surname;
  }
  get name() {
    return this._name;
  }
  get age() {
    return this.age;
  }
}

const jordy = new User('Jordy', 31, 'Toke');

console.log(jordy.toString());

delete jordy['other names'];

console.log(jordy);

jordy._birthday = '04/04/1993';

for(let key in jordy) {
  console.log(key + ': ' + jordy[key]);
}

// Node.js program to demonstrate the  
// process.stdin Property  
  
process.stdin.on('readable', () => { 
  let chunk; 
  // Use a loop to make sure we read all available data. 
  while ((chunk = process.stdin.read()) !== null) {

    
    if (chunk === 'q') {
      break;
    }
    process.stdout.write(`data: ${chunk}`);
  } 
});