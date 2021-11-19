/* WRITE THE CODE FOR THE FOLLOWING FUNCTIONS */

// Input: a (number), b (number)
// Action: Add both numbers together
// Output: The result (number)
function add(a, b) {

  let sum = a + b
  console.log(`The sum is : ${Number(sum)}`)
  return sum

}

// Input: number
// Action: Check if the number given is even or not
// Output: The result (boolean)
function isEven(number) {

  if (number % 2 === 0) {
    console.log(`It is Even : ${Boolean(number)}`)
    return Boolean(number)
  }

  else if (number % 2 === 1) {
    console.log(`It is odd : ${Boolean(number)}`)
    return Boolean(number)
  }

}

// Input: name (string)
// Action: Greet the user by name
// Output: The greeting (string)
function greet(name) {

    alert(`Hi user : ${name}`)
    return name

}

// Input: age (number)
// Action: Check if the age is 18 or over
// Output: The result (boolean)
function isAnAdult(ageOfPersonParameter) {

    if (Number(ageOfPersonParameter) >= 18) {
        alert("It is adult")
        return true
    }

    else {
        alert("You are a kid !")
        return false
    }

}

// Input: age (number)
// Action: Check how many years are left until adulthood (18)
// Output: The result (number)
function yearsToAdulthood(numberParameter) {

    if (numberParameter < 18) {
        alert(`You are ${(18 - numberParameter)} years away of adult age`)
        return (18 - numberParameter)
    }

}

// Input: person ({ age: number, name: string })
// Action:
//   - check if a person is an adult
//   - if they are, greet them
//   - if they are not, tell them to come back in X years (when they are)
// Output: The result (string)
function admit(personParameter) {

    alert("Here we check everything")
    let insideGreet = greet(personParameter.name)
    let insideAdult = isAnAdult(personParameter.age)
    let insideAdultHood = yearsToAdulthood(personParameter.age)

    if (insideAdult) {
        alert(`Hi : ${insideGreet}`)
    }

    else {
        alert(`Hi : ${insideGreet} you can come after : ${insideAdultHood} years when you will become an adult`)
    }

}

let nameOfPerson = prompt("Please enter your name: ")
let ageOfPerson = Number(prompt("Please enter your age: "))
let numberOfPerson = Number(prompt("Enter a number to check"))

let person = {
    age: ageOfPerson,
    name: nameOfPerson
}

console.log(`Object value age: ${person.age} and name: ${person.name}`)

let fuctionSum = add(numberOfPerson, 10)
let functionIsEven = isEven(numberOfPerson)
let functionGreet = greet(nameOfPerson)
let functionIsAdult = isAnAdult(ageOfPerson)
let functionAdultHood = yearsToAdulthood(ageOfPerson)

console.log("Sum is: " + fuctionSum)
console.log(`Hi ${functionGreet} you are Adult: ${functionIsAdult} \n 
and if you are not then you are : ${functionAdultHood} years from becoming one adult \n, 
\n The number you entered : ${numberOfPerson}`)

admit(person)