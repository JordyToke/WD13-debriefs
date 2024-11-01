// Write your code below
let bobsFollowers = ['Mary', 'Ted', 'Phil', 'Grunk'];
let tinasFollowers = ['Sara', 'Grunk', 'Ted'];
let mutualFollowers = [];
 
for (let i = 0; i < bobsFollowers.length; i++) {
  for (let j = 0; j < tinasFollowers.length; j++) {
    if (bobsFollowers[i] === tinasFollowers[j]) {
      mutualFollowers.push(tinasFollowers[j]);
      console.log('both followers have ' + mutualFollowers[j]);
    }
  }
};