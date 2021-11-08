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

whiteboard1()
whiteboard2()
whiteboard3()
