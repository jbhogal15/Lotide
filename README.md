# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @jbhogal15/lotide`

**Require it:**

`const _ = require('@username/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `function1(assertArrayEqual)`: Takes in two arrays and compares them and console.logs an appropriate response.
* `function2(assertEqual)`: Takes in two values and prints out a message if they match or not. 
* `function3(assertObjectsEqual)`: Takes in two objects and compares them and console.logs an appropriate response
* `function4(countLetters)`: Returns a count of each of the letters in a given string.
* `function5(countOnly)`: Takes in an array and a object, returns an object containing counts of everything that the input object listed; limited to strings.
* `function6(eqArray)`: Takes in two arrays and returns true or false, based on a perfect match.
* `function7(eqObjects)`: Takes in two objects and returns true or false, based on a perfect match.
* `function8(findKey)`: Takes in an object and callback function; returns the frist key for which callback returns a truthy value. Returns undefined if no key is found.
* `function9(findKeyByValue)`: Takes in an object and given value; returns the first key which contains the given value. If no key with given value; returns undefined.
* `function10(head)`: Returns the first item in the array, returns undefined if an empty array.
* `function11(letterPositions)`: Returns all the indices in the string where each letter or character is found in the inputted string. 
* `function12(map)`: Takes in an array and callback function as arguments; returns a new array based on results of the callback function. 
* `function13(middle)`: Return(s) the middle-most element(s) of the given array, if array has one or two elements, returns an empty array.
* `function14(tail)`: Returns the "tail" of an array: everything except for the first item(head) in an array; if provided array is empty returns empty array.
* `function15(takeUntil)`: Returns an array with elements taken from the beginning; keeps going until the callback function returs a truthy value. 
* `function16(without)`: Return a subset of a given array, removing unwanted elements.