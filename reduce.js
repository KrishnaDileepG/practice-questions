const reduce = function (fn, init, array) {};

// sumOf([1, 2, 3, 4]) => 10
const add = function (value1, value2) {
  return value1 + value2;
};

const sumOf = function (numbers) {
  return numbers.reduce(add, 0);
};

// productOf([1, 2, 3, 4]) => 24
const productOf = function (numbers) {
  return numbers.reduce((product, currentNumber) => product * currentNumber);
};

// averageOf([1, 2, 3, 4, 5]) => 3
const averageOf = function (numbers) {
  return numbers.reduce((sum, number) => sum + number) / numbers.length;
};

// minOf([3, 1, 4, 1, 5, 9, 2]) => 1
const minOf = function (numbers) {
  return numbers.reduce((min, number) => (min < number ? min : number));
};

// maxOf([3, 1, 4, 1, 5, 9, 2]) => 9
const maxOf = function (numbers) {
  return numbers.reduce((max, number) => (max > number ? max : number));
};

// sumPositiveNumbers([1, -2, 3, -4]) => 4

// const numberToAdd = function (number) {
//   return number > 0 ? number : 0;
// };

// const reducer = function (sum, number) {
//   return sum + numberToAdd(number);
// };

const sumPositiveNumbers = function (numbers) {
  return numbers.reduce(reducer);
};

// sumOfSquares([1, 2, 3, 4]) => 30
const sumOfSquares = function (numbers) {
  return numbers.reduce((sum, number) => sum + number * number);
};

// sumOfOddNumbers([1, 2, 3, 4, 5]) => 9

const sumOfOddNumbers = (numbers) =>
  numbers.reduce((sum, number) => (number % 2 !== 0 ? sum + number : sum));

// countNegativeNumbers([1, -2, 3, -4]) => 2

const reducer = (count, number) => (number < 0 ? count + 1 : count);
const countNegativeNumbers = function (numbers) {
  return numbers.reduce(reducer, 0);
};

// findSumOfEvenSquares([1, 2, 3, 4]) => 20

const sumOfEven = (sum, number) => (number % 2 === 0 ? sum + number : sum);

const findSumOfEvenSquares = function (numbers) {
  return numbers.reduce(sumOfEven, 0);
};

// concatenateWords(["hello", "world"]) => "helloworld"
const concatenateWords = function (words) {
  return words.reduce(add, "");
};

//console.log(concatenateWords(["hello", "world"]));

// longestWord(["apple", "banana", "cherry", "kiwi"]) => "banana"
const maxLengthWord = (longWord, word) =>
  longWord.length > word.length ? longWord : word;

const longestWord = function (words) {
  return words.reduce(maxLengthWord);
};

//console.log(longestWord(["apple", "banana", "cherry", "kiwi"]));

// shortestWord(["apple", "banana", "cherry", "kiwi"]) => "kiwi"

const minLengthWord = (shortWord, word) =>
  shortWord.length < word.length ? shortWord : word;

const shortestWord = function (words) {
  return words.reduce(minLengthWord);
};

// console.log(shortestWord(["apple", "banana", "cherry", "kiwi"]));

// joinWithComma(["apple", "banana", "cherry"]) => "apple,banana,cherry"

const joinTheWords = function (newWord, word) {
  return newWord + "," + word;
};

const joinWithComma = function (words) {
  return words.reduce(joinTheWords);
};

// reverseWords(["hello", "world"]) => "world hello"

const reverseTheWord = (newWord, word) => word + newWord;
const reverseWords = function (words) {
  return words.reduce(reverseTheWord);
};

// joinWordsWithSpace(["apple", "banana", "cherry"]) => "apple banana cherry"

const joinWithSpace = function (WordWithSpace, word) {
  return WordWithSpace + " " + word;
};

const joinWordsWithSpace = function (words) {
  return words.reduce(joinWithSpace);
};

// concatenateNames(["John", "Jane", "Doe"]) => "JohnJaneDoe"

const concatenateNames = function (names) {
  return names.reduce(add);
};

//console.log(concatenateNames(["John", "Jane", "Doe"]));

const hasVowel = function (word) {
  const vowels = "aeiouAEIOU";
  const wordArray = word.split("");

  return wordArray.reduce(
    (onlyVowel, character) =>
      vowels.includes(character) ? onlyVowel + character : onlyVowel,
    ""
  );
};

const countOfVowel = function (newString, word) {
  return newString + hasVowel(word);
};

const countVowelsInWords = function (words) {
  return words.reduce(countOfVowel, "");
};

//console.log(countVowelsInWords(["hello", "world"]));

// makeCamelCase(["hello", "world", "how", "are", "you"]) => "helloWorldHowAreYou"
const makeCamelCase = function (words) {
  return words.reduce(
    (camelCaseWord, word) =>
      camelCaseWord + word[0].toUpperCase() + word.slice(1)
  );
};

//console.log(makeCamelCase(["hello", "world", "how", "are", "you"]));

// reverseString(["apple", "banana", "cherry"]) => "elppaananabyrrehc"

const reversedString = (stringReversed, word) =>
  stringReversed + word.split("").reverse().join("");

const reverseString = function (words) {
  return words.reduce(reversedString, "");
};

//console.log(reverseString(["apple", "banana", "cherry"]));

// duplicateNumbers([1, 2, 3]) => [1, 1, 2, 2, 3, 3]

// const duplicate = (arrayWithDuplicates, number) => arrayWithDuplicates.push(number, number);
const duplicateNumbers = function (numbers) {
  return numbers.reduce((acc, num) => {
    acc.push(num, num);
    return acc;
  }, []);
};

//console.log(duplicateNumbers([1, 2, 3]));

// concatenateArrays([[1, 2], [3, 4], [5, 6]]) => [1, 2, 3, 4, 5, 6]
const concatenateArrays = function (arrayOfArray) {
  return arrayOfArray.reduce((init, array) => init.concat(array));
};

// console.log(
//   concatenateArrays([
//     [1, 2],
//     [3, 4],
//     [5, 6],
//   ])
// );

// flattenArray([[1, 2], [3, 4], [5, 6]]) => [1, 2, 3, 4, 5, 6]
const flattenArray = function (arrays) {};

// uniqueNumbers([1, 2, 2, 3, 4, 4, 5]) => [1, 2, 3, 4, 5]
const uniqueNumbers = function (numbers) {
  return numbers.reduce((array, number) => {
    if (!array.includes(number)) {
      array.push(number);
    }

    return array;
  }, []);
};
// console.log(uniqueNumbers([1, 2, 2, 3, 4, 4, 5,6]));

// groupByLength(["apple", "banana", "cherry", "date"]) => { 5: ["apple", "cherry"], 6: ["banana"], 4: ["date"] }

const reducerGroupByLength = function (obj, string) {
  const element = obj[string.length] || [];
  obj[string.length] = [string, ...element];

  return obj;
};

const groupByLength = function (strings) {
  return strings.reduce(reducerGroupByLength, {});
};

// console.log(groupByLength(["apple", "banana", "cherry", "date"]));

// countOccurrences(["apple", "banana", "cherry", "banana"]) => { apple: 1, banana: 2, cherry: 1 }

const reducerCountOccurence = function (obj, string) {
  obj[string] = (obj[string] || 0) + 1;

  return obj;
};

const countOccurrences = function (strings) {
  return strings.reduce(reducerCountOccurence, {});
};

// console.log(countOccurrences(["apple", "banana", "cherry", "date", "date"]));

// mergeObjects([{ a: 1, b: 2 }, { b: 3, c: 4 }, { a: 5 }]) => { a: 6, b: 5, c: 4 }

const objectMerger = function (obj, value) {
  
};

const mergeObjects = function (objects) {
  return objects.reduce(objectMerger, {});
};

// zip(["a", "b", "c"], [1, 2, 3]) => { "a": 1, "b": 2, "c": 3 }
const zip = function (keys, values) {};

// makeObject(["city", "country"], ["Paris", "France"]) => { "city": "Paris", "country": "France" }
const makeObject = function (keys, values) {};

// invertObject({ "a": 1, "b": 2, "c": 3 }) => { 1: "a", 2: "b", 3: "c" }
const invertObject = function (obj) {
  return obj.reduce();
};

// mergeArrays([["a", 1], ["b", 2]], [["c", 3], ["d", 4]]) => { "a": 1, "b": 2, "c": 3, "d": 4 }
const mergeArrays = function (arr1, arr2) {};

// groupByProperty([{name: "John", age: 25}, {name: "Jane", age: 30}]) => { 25: [{name: "John", age: 25}], 30: [{name: "Jane", age: 30}] }
const groupByProperty = function (objects) {};

// ascendingGroups([1,2,3,4,3,4,5,10,6,7,8,9]) => [[1,2,3,4],[3,4,5],[10],[6,7,8,9]]
const ascendingGroups = function (numbers) {};

// flattenToObject([['a', 1], ['b', 2], ['c', 3]]) => { a: 1, b: 2, c: 3 }
const flattenToObject = function (pairs) {};

// longestString(["apple", "banana", "cherry", "dates"]) => "banana"
const longestString = function (strings) {};

// mergeIntervals([[1,3], [2,4], [5,7]]) => [[1, 4], [5, 7]]
const mergeIntervals = function (intervals) {};

// sumAndCount([1, 2, 3, 4]) => { sum: 10, count: 4 }
const sumAndCount = function (numbers) {};

// deepFlatten([[1,2], [3,4, [5,6]], 7]) => [1,2,3,4,5,6,7]
const deepFlatten = function (arr) {};

// findMax([1, 2, 3, 4, 5]) => 5
const findMax = function (numbers) {};

// cumulativeSum([1,2,3,4]) => [1, 3, 6, 10]

const reducerSum = (arrayOfSum, number) => {
  return arrayOfSum;
};

const cumulativeSum = function (numbers) {
  return numbers.reduce(reducerSum, []);
};

//console.log(cumulativeSum([1, 2, 3, 4]));

// equalChunksOfAtLeast([1, 1, 1, 2, 2, 5, 1, 1]) => [[1,1,1], [2,2], [1,1]]
const equalChunksOfAtLeast = function (numbers) {};

// groupByType([1, 'a', 2, 'b', 3, 'c', 4]) => { number: [1, 2, 3, 4], string: ['a', 'b', 'c'] }
const groupByType = function (array) {};

// runningAverages([1, 2, 3, 4]) => [1, 1.5, 2, 2.5]
const runningAverages = function (numbers) {};

// flattenObject({a: {b: {c: 1}}, d: {e: 2}}) => { 'a.b.c': 1, 'd.e': 2 }
const flattenObject = function (obj) {};

// splitIntoSubarrays([1,2,3,4,5,6,7], 3) => [[1,2,3], [4,5,6], [7]]
const splitIntoSubarrays = function (arr, size) {};

// groupByFirstLetter(["apple", "banana", "cherry", "date"]) => { a: ["apple"], b: ["banana"], c: ["cherry"], d: ["date"] }
const groupByFirstLetter = function (words) {};

// findFirstNonRepeated([1,2,3,4,2,1,5]) => 3
const findFirstNonRepeated = function (numbers) {};

// countVowels(["apple", "banana", "grape"]) => { a: 6, e: 3, i: 0, o: 0, u: 0 }
const countVowels = function (words) {};

// mergeConsecutiveDuplicates([1,1,1,2,3,3,4]) => [1,2,3,4]
const mergeConsecutiveDuplicates = function (array) {};

// longestConsecutiveSubsequence([1, 2, 0, 1, 3, 4, 5]) => [0, 1, 2, 3, 4, 5]
const longestConsecutiveSubsequence = function (numbers) {};

// topKFrequent([1,1,1,2,2,3], 2) => [1, 2]
const topKFrequent = function (numbers, k) {};

// nestedAverage([[[1, 2]], [3, 4], [5, [6, 7]]]) => 4
const nestedAverage = function (nestedNumbers) {};

// cartesianProduct([1, 2], ['a', 'b']) => [[1, 'a'], [1, 'b'], [2, 'a'], [2, 'b']]
const cartesianProduct = function (arr1, arr2) {};

// groupByDate([{ date: '2024-01-01', value: 10 }, { date: '2024-01-01', value: 20 }, { date: '2024-01-02', value: 30 }]) => { '2024-01-01': [10, 20], '2024-01-02': [30] }
const groupByDate = function (records) {};

// findMinMax([1, 2, 3, 4, 5]) => { min: 1, max: 5 }
const findMinMax = function (numbers) {};

// sumByCategory([{ category: 'A', value: 10 }, { category: 'B', value: 20 }, { category: 'A', value: 30 }]) => { A: 40, B: 20 }
const sumByCategory = function (items) {};
