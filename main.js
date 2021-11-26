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
  if (num % 2 == 0) {
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
  for (let i = 0; i < arr.length; i++) {
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
  for (let i = 0; i < str.length / 2; i++) {
    firstHalf += str[i]
    console.log('firsthalf is ' + firstHalf)
  }
  for (let i = str.length - 1; i > (str.length / 2) - 1; i--) {
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
    for (let j = i + 1; j < newString.length; j++) {
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
  for (let i = 2; i < num; i++) {
    if (num % i == 0) {
      factors.splice(factors.length - 1, 0, i)
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
    min -= 60
  }
  if (min < 10) {
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
    console.log(num2 + num3, num1)
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

  for (let j = 0; j < message[0].length; j++) {
    let highestLetter = ''
    let highestLetterCount = 0
    let newLetter = message[0][j]
    let newLetterCount = 1
    // I am stumped on this one.  Do I need to make a switch with 26 options??????
    for (let i = 1; i < message.length; i++) {
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
  for (let i = 1; i <= num; i++) {
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
  document.getElementById('solution13').innerHTML = firstStr.split('').reverse().join('') == secondStr ? 'Yes, it\'s an Anagram' : 'No, it\'s not an Anagram'
}

function whiteboard14() {
  let problem14 = 'Use a closure'
  let instructions14 = 'How would you use a closure to create a private counter?'
  document.getElementById('problem14').innerHTML = problem14
  document.getElementById('instructions14').innerHTML = instructions14
}

function useAClosure() {
  var _counter = 0;
  return {
    add: function (increment) { _counter += parseInt(increment); console.log(_counter); document.getElementById('solution14').innerHTML = this.retrieve() },
    retrieve: function () { return 'The counter is currently at: ' + _counter; }
  }
}

function whiteboard15() {
  let problem15 = 'Force Non-Boolean to Boolean'
  let instructions15 = 'When forced would it be truthy or falsey? \n This one does not work - input type is text so everything except blank input comes across as truthy.  Can\'t figure out how to make it see the input text as code and not just as a string. Parse? or is that just for numbers?'
  document.getElementById('problem15').innerHTML = problem15
  document.getElementById('instructions15').innerHTML = instructions15
}

function trueOrFalse(statement) {
  statement ? document.getElementById('solution15').innerHTML = 'truthy' : document.getElementById('solution15').innerHTML = 'falsey'
  //not sure if I can do this one - because input is text - everything is coming in truthy
}

function whiteboard16() {
  let problem16 = 'Find the vowels'
  let instructions16 = 'Write a function that takes a string as argument and returns the number of vowels contained in that string.'
  document.getElementById('problem16').innerHTML = problem16
  document.getElementById('instructions16').innerHTML = instructions16
}

function findVowels(string) {
  string = string.toLowerCase()
  let numVowel = 0
  const vowels = ['a', 'e', 'i', 'o', 'u']
  for (let char of string) {
    if (vowels.includes(char)) {
      numVowel++
    }
  }
  document.getElementById('solution16').innerHTML = 'There are ' + numVowel + ' vowel(s) in your string.'
}

function whiteboard17() {
  let problem17 = 'Fibonacci'
  let instructions17 = 'A Fibonacci sequence is an ordering of numbers where each number is the sum of the preceding two.  For example, the first ten numbers of the Fibonacci sequence are: 0,1,1,2,3,5,8,13,21,34.'
  document.getElementById('problem17').innerHTML = problem17
  document.getElementById('instructions17').innerHTML = instructions17
}

function fibonacci(len) {
  num1 = 0
  num2 = 1
  numarr = [0, 1]
  for (let i = 1; i <= len - 2; i++) {
    num3 = num1 + num2
    numarr.push(num3)
    num1 = num2
    num2 = num3
  }
  document.getElementById('solution17').innerHTML += numarr
}

function whiteboard18() {
  let problem18 = 'Event Listener'
  let instructions18 = 'If we take a simple todo list as an example, the interviewer may tell you that they want an action to occur when a user clicks one of the list items. And they want you to implement this functionality in JavaScript assuming the following HTML code:'
  document.getElementById('problem18').innerHTML = problem18
  document.getElementById('instructions18').innerHTML = instructions18

  // didn't do this one on my own - had to copy it.  I understand it all, except 'DOMContentLoaded', function ()
  document.addEventListener('DOMContentLoaded', function () {
    let app = document.getElementById('todo-app');
    let items = app.getElementsByClassName('item');
    //attach event listener to each item
    for (let item of items) {
      item.addEventListener('click', function () {
        alert('you clicked on item: ' + item.innerHTML);
      })
    }
  });
}

function whiteboard19() {
  let problem19 = 'Event delegation'
  let instructions19 = 'Above, we\'ve attached an event listener to each element - fine for a small amount of elements.  But if you have a list of 10,000 items, then you need what\'s called event delegation.'
  document.getElementById('problem19').innerHTML = problem19
  document.getElementById('instructions19').innerHTML = instructions19

  // didn't do this one on my own - had to copy it.  I understand it all, except 'DOMContentLoaded', function ()
  document.addEventListener('DOMContentLoaded', function () {
    let app = document.getElementById('todo-app2');
    app.addEventListener('click', function (e) {
      if (e.target && e.target.nodeName === 'LI') {
        let item = e.target;
        alert('you clicked on item: ' + item.innerHTML)
      }
    })
  });
}

function whiteboard20() {
  let problem20 = 'Using a Closure Within a Loop'
  let instructions20 = 'Write a function that will loop through a list of integers and print the index of each element after a 3 second delay.'
  document.getElementById('problem20').innerHTML = problem20
  document.getElementById('instructions20').innerHTML = instructions20
}

function closureLoop() {
  //looks like I did this correctly, but didn't get the values of the numbers to come into the numList array from the DOM.  Could use some help on that.  But it did get the length of 4.
  return {
    printIndex: function (numList) {
      console.log(numList)
      for (let i = 0; i < numList.length; i++) {
        setTimeout(function () {
          document.getElementById('solution20').innerHTML += i
        }, 3000)
      }
    }
  }
}

function whiteboard21() {
  let problem21 = 'Best Time to Buy and Sell Stock'
  let instructions21 = 'You are given an array prices where prices[i] is the price of a given stock on the ith day. You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock. Return the maximum profit you can achieve from this transaction.If you cannot achieve any profit, return 0.'
  document.getElementById('problem21').innerHTML = problem21
  document.getElementById('instructions21').innerHTML = instructions21
}

// let prices = [7, 1, 5, 3, 6, 4]
function maxProfit(prices) {
  //first find the lowest number (lowNum)
  // um, actually this plan is too simplified, because you might not buy it at its absolute lowest or sell it at its absolute highest,so this is trash....
  // need to go back to finding the largest differences in the sequence.  ...
  let lowNum = prices[0]
  let lowNumIndex = 0
  let highNum = prices[0]
  let highNumIndex = 0
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < lowNum) {
      lowNum = prices[i]
      lowNumIndex = i
    }
  }
  console.log('lowNum ' + lowNum + ' lowNumIndex ' + lowNumIndex)
  for (let j = 1; j < prices.length; j++) {
    if (prices[j] > highNum) {
      highNum = prices[j]
      highNumIndex = j
    }
  }
  console.log('highNum ' + highNum + ' highNumIndex ' + highNumIndex)
  // document.getElementById('solution21').innerHTML = 'Buy at day ' + lownumIndex + ' and sell at day ' + highNumIndex + ' for a max profit of ' + (parseInt(highNum) - parseInt(lowNum))

}

function whiteboard22() {
  let problem22 = 'Two Sums'
  let instructions22 = 'Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target. You may assume that each input would have exactly one solution, and you may not use the same element twice. You can return the answer in any order. numBers=[2, 7, 11, 15, 25, 3, 4, 9, 10] and target is 19.'
  document.getElementById('problem22').innerHTML = problem22
  document.getElementById('instructions22').innerHTML = instructions22
}

function twoSums(numBers, target) {
  for (let i = 0; i < numBers.length - 1; i++) {
    for (let j = i + 1; j < numBers.length; j++) {
      if (numBers[i] + numBers[j] == target) {
        document.getElementById('solution22').innerHTML = '[' + i + ',' + j + ']'
        return
      }
    }
  }
  document.getElementById('solution22').innerHTML = 0
  return
}

function whiteboard23() {
  let problem23 = 'Contains Duplicate'
  let instructions23 = 'Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct. numBers=[2, 7, 11, 15, 25, 8, 3, 5, 10]'
  document.getElementById('problem23').innerHTML = problem23
  document.getElementById('instructions23').innerHTML = instructions23
}

function containsDuplicate(numBers) {
  for (let i = 0; i < numBers.length - 1; i++) {
    for (let j = i + 1; j < numBers.length; j++) {
      if (numBers[i] === numBers[j]) {
        document.getElementById('solution23').innerHTML = 'There are equal numbers' + numBers[i] + ',' + numBers[j]
        return
      }
    }
  }
  document.getElementById('solution23').innerHTML = 'There are no duplicates'
}

function whiteboard24() {
  let problem24 = 'Are Cirly Braces Matched'
  let instructions24 = 'Write a function areCurlyBracesMatched that takes in a string s containing only { and/or } and returns true if s is properly matched, and false otherwise. A string s is considered properly matched if the string is empty or if every open brace has a corresponding close brace.'
  document.getElementById('problem24').innerHTML = problem24
  document.getElementById('instructions24').innerHTML = instructions24
}

function areCurleyBracesMatched(braces) {
  bracesArr = braces.split

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
modifyArray([1, 2, 3, 4, 5], function () {
  document.getElementById('solution10').innerHTML += ' The array has been appended'
})
whiteboard11()
whiteboard12()
whiteboard13()
whiteboard14()
var c = useAClosure();
whiteboard15()
whiteboard16()
whiteboard17()
whiteboard18()
whiteboard19()
whiteboard20()
var l = closureLoop();
// NOTE 21 sucks - need to move on and revisit later.
whiteboard21()
maxProfit([8, 20, 11, 46, 19, 5])
// [8, 20, 11, 46, 19, 5]
whiteboard22()
twoSums([2, 7, 11, 15, 25, 3, 4, 9, 10], 19)
whiteboard23()
containsDuplicate([2, 7, 11, 15, 25, 8, 3, 5, 10])
whiteboard24()
areCurleyBracesMatched('{}{{}{{{}')