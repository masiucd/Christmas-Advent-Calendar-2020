// Generated by BUCKLESCRIPT VERSION 5.0.6, PLEASE EDIT WITH CARE
'use strict';


var fruitAndAnimal = /* tuple */[
  "Apple",
  4,
  "Doggie",
  2
];

console.log(fruitAndAnimal);

var numsAndFloats = /* tuple */[
  5,
  33.5,
  32.7,
  3
];

var moreNumsWithThePrevious = /* tuple */[
  1,
  2,
  2.2,
  12.2,
  numsAndFloats
];

function getFirst(param) {
  return param[0];
}

function getSecond(param) {
  return param[1];
}

function getCharachter(param) {
  return param[0];
}

function getCharachter2(param) {
  return param[0] + (" " + (param[1] + (" " + param[2])));
}

getCharachter2(/* tuple */[
      "Luke",
      "skywalker",
      "jedi"
    ]);

var nameAndBool = /* tuple */[
  "Tim",
  false
];

var johnSnow = /* tuple */[
  "John",
  "snow",
  "Soldier"
];

var num = 6;

var x = 10;

var myNums = /* tuple */[
  24,
  11
];

var c = 11;

exports.fruitAndAnimal = fruitAndAnimal;
exports.numsAndFloats = numsAndFloats;
exports.moreNumsWithThePrevious = moreNumsWithThePrevious;
exports.nameAndBool = nameAndBool;
exports.johnSnow = johnSnow;
exports.num = num;
exports.x = x;
exports.myNums = myNums;
exports.c = c;
exports.getFirst = getFirst;
exports.getSecond = getSecond;
exports.getCharachter = getCharachter;
exports.getCharachter2 = getCharachter2;
/*  Not a pure module */
