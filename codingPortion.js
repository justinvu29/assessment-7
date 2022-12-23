// 1. Write a function that takes in an array of numbers. The function should return True if any two numbers in list sum to 0, and false otherwise.

arr1 = [1,2,3,-3,4,-2]

const addToZero = arr => {
    for(let i = 0; i < arr.length; i++) {
        for( let j = i + 1; j < arr.length; j++) {
            if(arr[i] + arr[j] === 0) {
                return true
            }
        }
    }
    return false
}

console.log(addToZero(arr1))

// #1 | Runtime = O(n^2), Space complexity: O(1)

// 2. Write a function that takes in a single word, as a string. It should return True if that word contains only unique characters. Return False otherwise.

const hasUniqueChars = (str) => {
    let uniqueChars = new Set([])
    for (let i = 0; i < str.length; i++) {
      uniqueChars.add(str[i])
    }
    return uniqueChars.size === str.length
  }
  
 console.log(hasUniqueChars('Monday'))
 console.log(hasUniqueChars('Moonday'))

 // #2 | Runtime = O(n), Space Complexity = O(n)

 // 3. A pangram is a sentence that contains all the letters of the English alphabet at least once, like “The quick brown fox jumps over the lazy dog.”

 const isPangram = (sentence) => {
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'
    for (let i = 0; i < alphabet.length; i++) {
      if (!sentence.includes(alphabet[i])) {
        return false
      }
    }
    return true
  }

console.log(isPangram('The quick brown fox jumps over the lazy dog.'))

// #3 | Runtime = O(n), Space Complexity = O(1)

// 4. Write a function, find_longest_word, that takes a list of words and returns the length of the longest one.

const findLongestWord = (words) => {
    let longestWordLength = 0
    for (let i = 0; i < words.length; i++) {
      if (words[i].length > longestWordLength) {
        longestWordLength = words[i].length
      }
    }
    return longestWordLength
  }

  console.log(findLongestWord(["hi", "hello"]))
  console.log(findLongestWord(["elephant", "hello", "cat"]))

  // #4 | Runtime = O(n), Space Complexity = O(1)