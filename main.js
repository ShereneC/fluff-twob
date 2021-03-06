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

function timeConvert(min) {
  let hours = 0
  for (let i = 0; min >= 60; i++) {
    hours++
    min-=60
  }
  if (min<10) {
    document.getElementById('solution7').innerHTML = hours + ':0' + min
  } else {
    document.getElementById('solution7').innerHTML = hours + ':' + min
  }
}

function whiteboard8() {
  let problem8 = 'Triangulation'
  let instructions8 = 'Given three numbers to represent the length of each side of a triangle, determine if the three numbers can actually make a triangle or not. (hint: Triangle Inequality Theorem)'
  document.getElementById('problem8').innerHTML = problem8
  document.getElementById('instructions8').innerHTML = instructions8
}

function triangulation(num1, num2, num3) {
  num1 = parseInt(num1)
  num2 = parseInt(num2)
  num3 = parseInt(num3)
  if ((num1 + num2) < num3 || (num2 + num3) < num1 || (num1 + num3) < num2) {
    console.log(num1, num2, num3)
    console.log(num1 + num2, num3)
    console.log(num2+num3, num1)
    console.log(num1 + num3, num2)
    document.getElementById('solution8').innerHTML = 'No, this will NOT make a triangle.'
  } else {
    document.getElementById('solution8').innerHTML = 'Yes, this will make a triangle.'
  }
}

function whiteboard9() {
  let problem9 = 'Repeater Code'
  let instructions9 = 'You are a secret agent and Something is jamming your communications with your team. Fortunately, your signal is only partially jammed, and protocol in situations like this is to switch to a simple repetition code to get the message through.'

  'In this model, the same message is sent repeatedly. You\'ve recorded the repeating message signal (your puzzle input), but the data seems quite corrupted - almost too badly to recover. Almost.'
  
  'All you need to do is figure out which character is most frequent for each position. '
  document.getElementById('problem9').innerHTML = problem9
  document.getElementById('instructions9').innerHTML = instructions9
}

function repeaterCode() {
let message = [
'eedadn',
'drvtee',
'eandsr',
'raavrd',
'atevrs',
'tsrnev',
'sdttsa',
'rasrtv',
'nssdts',
'ntnada',
'svetve',
'tesnvt',
'vntsnd',
'vrdear',
'dvrsen',
'enarar']

for (let j=0; j<message[0].length; j++) {
  let highestLetter = ''
  let highestLetterCount = 0
  let newLetter = message[0][j]
  let newLetterCount = 1
  // I am stumped on this one.  Do I need to make a switch with 26 options??????
  for (let i=1; i<message.length; i++) {
    if (newLetter === message[i][j]) {
      newLetterCount++
    }
    if (newLetterCount > highestLetterCount) {
      highestLetter = newLetter
      highestLetterCount = newLetterCount
    }
  }
  console.log('highest letter ' + highestLetter)
  console.log('highest Letter Count ' + highestLetterCount)
  document.getElementById('solution9').innerHTML = document.getElementById('solution9').innerHTML + highestLetter
}  
}

function whiteboard10() {
  let problem10 = 'Explain what a callback function is and provide a simple example'
  let instructions10 = 'The function \'modifyArray\' takes in an array and a function.  100 is pushed onto the end of the array, the array prints, and then the function executes which prints the words \'The array has been ammended\' after the array.'
  document.getElementById('problem10').innerHTML = problem10
  document.getElementById('instructions10').innerHTML = instructions10
}

function modifyArray(arr, callback) {
  arr.push(100)
  document.getElementById('solution10').innerHTML = arr
  callback()
}

function whiteboard11() {
  let problem11 = 'Reverse Words'
  let instructions11 = 'Given a sentence, reverse each word in the sentence'
  document.getElementById('problem11').innerHTML = problem11
  document.getElementById('instructions11').innerHTML = instructions11
}

function reverseWords(str) {
  // Would like to remove all punctuation.  Use a splice?  But must find punctuation first.
  // str.splice()
  str = str.toLowerCase()
  let str2 = str.split(' ').reverse().join(' ')
  str2 = str2.charAt(0).toUpperCase() + str2.slice(1)
  document.getElementById('solution11').innerHTML = str2
}

function whiteboard12() {
  let problem12 = 'Fizz Buzz'
  let instructions12 = 'Create a for loop that iterates up to 100 while outputting "fizz" at multiples of 3, "buzz" at multiples of 5 and "fizzbuzz" at multiples of 3 and 5'
  document.getElementById('problem12').innerHTML = problem12
  document.getElementById('instructions12').innerHTML = instructions12
}

function fizzBuzz(num) {
  for (let i=1; i<=num; i++) {
    let fizz = i % 3 == 0
    let buzz = i % 5 == 0
    let saying = fizz ? (buzz ? 'fizzbuzz' : 'fizz') : buzz ? 'buzz' : i
    console.log(saying)
    document.getElementById('solution12').innerHTML += '<br></br>' + saying
  }
}

function whiteboard13() {
  let problem13 = 'Anagrams?'
  let instructions13 = 'Given two strings, return true if they are anagrams of one another'
  document.getElementById('problem13').innerHTML = problem13
  document.getElementById('instructions13').innerHTML = instructions13
}

function isAnagram(firstStr, secondStr) {
  document.getElementById('solution13').innerHTML = firstStr.toLowerCase().split('').sort().join('') == secondStr.toLowerCase().split('').sort().join('') ? 'Yes, it\'s an Anagram' : 'No, it\'s not an Anagram'
}

function whiteboard14() {
  let problem14 = 'Use a closure'
  let instructions14 = 'How would you use a closure to create a private counter?'
  document.getElementById('problem14').innerHTML = problem14
  document.getElementById('instructions14').innerHTML = instructions14
}
function useAClosure() {
  // i'm here, but commit/push before continuing
}

function whiteboard26() {
  let problem26 = 'Strip a Word'
  let instructions26 = 'Take a word (longer than 2 characters, and strip the first and last letters from it.'
  document.getElementById('problem26').innerHTML = problem26
  document.getElementById('instructions26').innerHTML = instructions26
}
function stripWord(word) {
  let arrWord = word.split('')
  arrWord.splice(0,1)
  arrWord.splice(arrWord.length -1, 1)
  let newWord = arrWord.join('')
  document.getElementById('solution26').innerHTML= newWord
}

function whiteboard27() {
  let problem27 = 'Vowel Counter'
  let instructions27 = 'Given a word or phrase, count the vowels, a,e,i,o,u.  Lower or Upper case.'
  document.getElementById('problem27').innerHTML = problem27
  document.getElementById('instructions27').innerHTML = instructions27
}
function countVowels(word) {
  let numVowels = 0
  word = word.toLowerCase()
  for (let i=0; i<word.length; i++){
    switch (word[i]) {
      case 'a':
        numVowels++
        break
        case 'e':
          numVowels++
          break
          case 'i':
            numVowels++
            break
            case 'o':
              numVowels++
              break
              case 'u':
                numVowels++
                break
                default:
                  break
                }
              }
              document.getElementById('solution27').innerHTML= numVowels.toString()
            }

function whiteboard28() {
              let problem28 = 'May I have your number?'
              let instructions28 = 'Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.The returned format must be correct in order to complete this challenge.Don\'t forget the space after the closing parentheses!'
              document.getElementById('problem28').innerHTML = problem28
              document.getElementById('instructions28').innerHTML = instructions28
            }

function phoneNumber(str) {
let arr = str.split('')
let phoneStr = ('(' + arr[0] + arr[1] + arr[2] + ') ' + arr[3] + arr[4] + arr[5] + '-' + arr[6] + arr[7] + arr[8] + arr[9])
document.getElementById('solution28').innerHTML = phoneStr
}

function whiteboard29() {
  let problem29 = 'Stop gninnipS My sdroW!'
  let instructions29 = 'Write a function that takes in a string of one or more words and returns the same string, but with all words with five letters or more reversed. Strings passed in will consist of only letters and spaces.'
  document.getElementById('problem29').innerHTML = problem29
  document.getElementById('instructions29').innerHTML = instructions29
}
function stringReverse(str) {
  str = str.split(' ')
  // str[0] = str[0].split('').reverse().join('')
  for (let i=0; i<str.length; i++){
    str[i] = str[i].split('').reverse().join('')
  }
  str = str.join(' ')
  document.getElementById('solution29').innerHTML = str
}
function whiteboard30() {
  let problem30 = 'Pig Latin'
  let instructions30 = 'Write a function that moves the first letter of each word to the end of the word, then add "ay". Leave punctuation untouched.'
  document.getElementById('problem30').innerHTML = problem30
  document.getElementById('instructions30').innerHTML = instructions30
}
function pigLatin() {
  let str = 'Walk around the tree'
  let newStr = str.split(' ')
  let finalStr = ''
  // let newWord = newStr[0].split('')
  // let letterToMove = newWord.splice(0,1)
  // newWord = newWord.concat(letterToMove + 'ay').join('')
  // console.log(letterToMove)
  // console.log(newWord)

  for (let i=0; i < newStr.length; i++) {
    let firstLetter = ''
    let arr = newStr[i].split('')
    switch (arr[i][0]) {
      case 'a':
        break
      case 'e':
        break
      case 'i':
        break
      case 'o':
        break
      case 'u':
        break
      default:
        firstLetter = arr.splice(0,1)
    }
    let newWord = arr.join('')
    newWord+= (firstLetter + 'ay')
    finalStr+= newWord + ' '
    firstLetter = ''
  }
  document.getElementById('solution30').innerHTML = finalStr
}

function pigLatinTwo() {
  let vowels = 'aeiou'
  let str = 'Walk around the tree'
  let newStr = str.split(' ')
  let translation = ''
  console.log(newStr)
  console.log(newStr[0][0])
  for (let i =0; i<newStr.length; i++) {
    let firstPart = ''
    if(!vowels.includes(newStr[i][0])) {
      firstPart = newStr[i][0]
  newStr[i] = newStr[i].slice(1)
  console.log(newStr)
  }
  if(!vowels.includes(newStr[i][0])) {
    firstPart = firstPart + newStr[i][0]
newStr[i] = newStr[i].slice(1) + firstPart + 'ay'
console.log(newStr.join(' '))
}
      }
}

whiteboard1()
whiteboard2()
whiteboard3()
whiteboard4()
whiteboard5()
whiteboard6()
whiteboard7()
whiteboard8()
whiteboard9()
repeaterCode()
whiteboard10()
modifyArray([1,2,3,4,5], function() {
  document.getElementById('solution10').innerHTML += ' The array has been appended'
})
whiteboard11()
whiteboard12()
whiteboard13()


whiteboard26()
whiteboard27()
whiteboard28()
whiteboard29()
whiteboard30()
pigLatinTwo()