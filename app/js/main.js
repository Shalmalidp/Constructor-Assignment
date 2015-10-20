(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
// Constructors
// Only add code to *THIS* section!

"use strict";

var Dog = function Dog(params1) {
  params1 = params1 || {};
  this.color = params1.color;
  this.hungry = params1.hungry !== undefined ? params1.hungry : true;
  this.status = params1.status || "normal";
};

var Human = function Human(params2) {
  params2 = params2 || {};
  this.cool = params2.cool !== undefined ? params2.cool : false;
  this.feed = function (x) {
    x.hungry = false;
  };
  this.owner = params2.owner;
  this.pet = function (y) {
    return y.status = "happy";
  };
};

// Do not ADD or MODIFY code below this line :)
// Dogs
var sadie = new Dog({
  color: 'black',
  hungry: false
});

var moonshine = new Dog({
  color: 'blue-red'
});

var atticus = new Dog();

// Humans
var mason = new Human();

var julia = new Human({
  cool: true
});

var it = function it(description, contents) {
  console.log('\n\n"It ' + description + '"');
  contents();
};

var expect = function expect(target) {
  return {
    toBe: function toBe(expectation) {
      if (target === expectation) {
        console.log('\n     %cPASSED', 'color:green;', 'Expected', target, 'to be', expectation);
        return true;
      } else {
        console.log('\n     %cFAILED', 'color:red;', 'Expected', target, 'to be', expectation);
        return false;
      }
    }
  };
};

// Tests
it("should make Sadie happy when Mason pets her", function () {
  expect(sadie.status).toBe('normal');
  mason.pet(sadie);
  expect(sadie.status).toBe('happy');
});

it("should make Sadie black", function () {
  expect(sadie.color).toBe('black');
});

it("should be make Moonshine hungry and Sadie not hungry", function () {
  expect(moonshine.hungry).toBe(true);
  expect(sadie.hungry).toBe(false);
});

it("should make Moonshine no longer hungry when you feed him", function () {
  julia.feed(moonshine);
  expect(moonshine.hungry).toBe(false);
});

it("should not affect Atticus and Moonshine's owner properties when setting Mason as Sadie's owner ", function () {
  sadie.owner = mason;
  expect(moonshine.owner).toBe(undefined);
  expect(atticus.owner).toBe(undefined);
});

it("should make Julia cool and Mason not cool", function () {
  sadie.owner = mason;
  expect(julia.cool).toBe(true);
  expect(mason.cool).toBe(false);
});

},{}]},{},[1])


//# sourceMappingURL=main.js.map
