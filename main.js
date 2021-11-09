function whiteboard1() {

let problem1 = 'Build a Complex Object'
let instructions1 = 'Find an item, possibly from the break room, and build an object in code. Challenge yourself to add a property of each data type, and then create a string to describe the object accessing each of those properties.'
document.getElementById('problem1').innerHTML = problem1
document.getElementById('instructions1').innerHTML = instructions1

let dog = {
  name: 'Rudy',
  color: 'Orange',
  size: 'Medium',
  age: 11,
  sex: 'Male',
  altered: true
}

let solution1 = 'The dog, ' + dog.name + ', is a ' + dog.sex.toLowerCase() + ' with ' + dog.color.toLowerCase() + ' fur.'
if (dog.altered) {
  document.getElementById('solution1').innerHTML = solution1 + ' Dog is altered.'
} else {
  document.getElementById('solution1').innerHTML = solution1 + ' Dog is intact.'
}
}

function whiteboard2() {
  let problem2 = 'Even or Odd'
  let instructions2 = 'Write a function that takes in a number and returns \"even\" if the number is even or \"odd\" if it is odd.'
  document.getElementById('problem2').innerHTML = problem2
  document.getElementById('instructions2').innerHTML = instructions2
}

function evenOrOdd(num) {
    if ( num % 2 == 0) {
      document.getElementById('solution2').innerHTML = 'EVEN'
          } else
    document.getElementById('solution2').innerHTML = 'ODD'
}

function whiteboard3() {
    let problem3 = 'Longest Word'
    let instructions3 = 'Write a function that will take in a single argument, a string. The string will be a sentence and your function will return the longest word in that sentence. If there are multiple words tied for longest word, then return the word that appears in the sentence first.'
    document.getElementById('problem3').innerHTML = problem3
    document.getElementById('instructions3').innerHTML = instructions3
}

function longestWord(sentence) {
    let arr = sentence.split(' ')
    let longest = ''
    for (let i=0; i < arr.length; i++) {
      if (arr[i].length > longest.length) {
        longest = arr[i]
      }
    }
    
    document.getElementById('solution3').innerHTML = longest
    }

function whiteboard4() {
  let problem4 = 'Palindrome'
  let instructions4 = 'Write a function that will take in one argument, a string. Determine if the given string is a palindrome, and return either true or false. (A palindrome is a word that\'s spelled the same both forward and backward.) For this exercise let\'s not worry about space characters.'
  document.getElementById('problem4').innerHTML = problem4
  document.getElementById('instructions4').innerHTML = instructions4
}

function palindrome(str) {
  let firstHalf = ''
  let secondHalf = ''
for (let i=0; i < str.length/2; i++) {
  firstHalf += str[i]
  console.log('firsthalf is ' + firstHalf)
}
for (let i=str.length-1; i > (str.length/2) -1; i--) {
  secondHalf += str[i]
  console.log('secondthalf is ' + secondHalf)
}
if (firstHalf == secondHalf) {
  document.getElementById('solution4').innerHTML = 'This word is a Palindrome.'
} else {
  document.getElementById('solution4').innerHTML = 'This word is not a Palindrome'
}
}

function whiteboard5() {
  let problem5 = 'Most Common Letter'
  let instructions5 = 'Write a function that takes in a single str and return the most frequently occurring letter within that string'
  document.getElementById('problem5').innerHTML = problem5
  document.getElementById('instructions5').innerHTML = instructions5
}

function mostCommonLetter(str) {
  let newString = str.toLowerCase()
  let highestLetter = ''
  let highestLetterCount = 0
  let newLetter = ''
  let newLetterCount = 0 
  for (let i = 0; i < newString.length; i++) {
    newLetter = newString[i]
    newLetterCount = 1
    for (let j = i+1; j< newString.length; j++) {
      if (newLetter === newString[j]) {
        newLetterCount++
      }
      if (newLetterCount > highestLetterCount) {
        highestLetter = newLetter
        highestLetterCount = newLetterCount
      }
      // Problem: if there is a tie, it only shows the first letter with that high count.  
    }
  }
  document.getElementById('solution5').innerHTML = 'Most frequent letter is ' + highestLetter + '. With a count of ' + highestLetterCount
}

function whiteboard6() {
  let problem6 = 'Factorialize A Number'
  let instructions6 = 'Create a function that takes a number as its argument and returns an array of all its factors.'
  document.getElementById('problem6').innerHTML = problem6
  document.getElementById('instructions6').innerHTML = instructions6
}

function factorialize(num) {
  let factors = [1, parseInt(num)]
  for (let i=2; i < num; i++) {
    if (num % i == 0) {
      factors.splice(factors.length-1, 0, i)
    }
  }
  document.getElementById('solution6').innerHTML = 'Factors for ' + num + ' are:  ' + factors
}

function whiteboard7() {
  let problem7 = 'Make Time'
  let instructions7 = 'Write a function called timeConvert(min) that takes the min parameter being passed and returns the number of hours and minutes the parameter converts to (ie. if num = 63 then the output should be 1:3). Separate the number of hours and minutes with a colon. If it is less than an hour you can return a 0 for hours'
  document.getElementById('problem7').innerHTML = problem7
  document.getElementById('instructions7').innerHTML = instructions7
}

whiteboard1()
whiteboard2()
whiteboard3()
whiteboard4()
whiteboard5()
whiteboard6()
whiteboard7()
