function checkDigitsInName(name) {
    if (typeof name !== "string") {
      return "Invalid Input";
    }
  
    for (const x of name) {
      if (!isNaN(Number(x)) && x !== ' ') {
        return true;
      }
    }
 
        return false;
  
 
  }

const result = checkDigitsInName('Raj123');
console.log (result)

const result2 = checkDigitsInName('n9ayeem');
console.log (result2)

const result3 = checkDigitsInName('e1mu3');
console.log (result3)

const result4 = checkDigitsInName('Suman');
console.log (result4)

const result5 = checkDigitsInName('Name2024');
console.log (result5)

const result6 = checkDigitsInName('!@#');
console.log (result6)

const result7 = checkDigitsInName ( ["Raj"])
console.log (result7)