'use strict';

const comboCreator = (amount) => { 

  let combinations = new Set();
  let stackOne = [];
  let stackTwo = [];
  let braceL = '{';
  let braceR = '}';


  for(let i = 0; i < amount; i++){
    stackOne.push(braceL.split(''));
    stackTwo.push(braceR.split(' '));

    console.log(stackOne);
    console.log(stackTwo);
    
  }
  let initialPattern = stackOne.map((ele) => ele.join('')).join('');
  let patternTertiary = stackTwo.map((ele) => ele).join('');
  console.log(patternTertiary);
  

  combinations.add(initialPattern + patternTertiary);
  return combinations;
};

console.log(comboCreator(2));
