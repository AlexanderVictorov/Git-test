// const li =document.querySelector('[data-id="ololo"]').style.color='red'
// const title=document.querySelector('[title="container div"]').style.color='green'
// const ololo=document.querySelector('[title="div"]').style.color='yellow'
// const input=document.querySelector('[type="radio"]')
// const autocomplete=document.querySelector('[autocomplete="off"]')

/**
 * Описание задачи: Напишите функцию, которая возвращает вложенный массив вида [[key, value], [key, value]].
 * Ожидаемый результат: ({ a: 1, b: 2 }) => [['a', 1], ['b', 2]]
 * Сложность задачи: 1 of 5
 * @param {Object} object - любой объект для трансформации
 * @returns {Array} - вложенный массив
 */
// const data = {a: 1, b: 2, c: 3};
// // const makePairs = (object) => Object.entries(object)
// const makePairs = (obj) => {
//     console.log(obj)
//     let array = []
//     for (let i = 0; i < obj.length; i++) {
//         let [key, value] = obj[i]
//         array.push([key, value])
//     }
//     // for(value in obj){
//     //     if(obj.hasOwnProperty(value)){
//     //         array.push([value, obj[value]])
//     //     }
//     // }
//     return array
// }
// console.log(makePairs(data)); // [['a', 1], ['b', 2]]

/**
 * Описание задачи: Напишите функцию, которая возвращает новый объект без указанных значений.
 * Ожидаемый результат: ({ a: 1, b: 2 }, 'b') => { a: 1 }
 * Сложность задачи: 2 of 5
 * @param {Object} object - любой объект
 * @param {?} args - список значений для удаления
 * @returns {Object} - новый объект без удаленных значений
 */
// const without = (object, ...args) => {
//     let newObj=JSON.parse(JSON.stringify(object))
//     args.forEach(el=>{
//         delete newObj[el]
//     })
//     return newObj
// };
//
// const data = {a: 1, b: 2, c: 3, d:4};
// console.log(without(data, 'b', 'c'),data); // { a: 1 }
/**
 * Описание задачи: Напишите функцию, которая поверхностно сравнивает два объекта.
 * Ожидаемый результат: True если объекты идентичны, false если объекты разные ({ a: 1, b: 1 }, { a: 1, b: 1 }) => true
 * Сложность задачи: 2 of 5
 * @param {Object<string | number>} firstObj - объект с примитивами
 * @param {Object<string | number>} secondObj - объект с примитивами
 * @returns {boolean}
 */

// const isEqual = (firstObject, secondObject) => {
//     if(JSON.stringify(firstObject)===JSON.stringify(secondObject))return true
//     return false
// };
//
// const data = {a: 1, b: 1};
// const data2 = {a: 1, b: 1};
// const data3 = {a: 1, b: 2};
// console.log(isEqual(data, data2)); // true
// console.log(isEqual(data, data3)); // false

/**
 * Описание задачи: Напишите функцию, которая поверхностно находит пересечения объектов и возвращает объект пересечений.
 * Ожидаемый результат: ({ a: 1, b: 2 }, { c: 1, b: 2 }) => { b: 2 }
 * @param {Object<string | number>} firstObj - объект с примитивными значениями
 * @param {Object<string | number>} secondObj - объект с примитивными значениями
 * @returns {Object}
 */

// const intersection = (firstObject, secondObject) => {
// let array=Object.entries(firstObject)
//     let obj={}
//     console.log('firstObject: ', firstObject)
//     for(let i=0; i<array.length;i++){
//         let [key, value]=array[i]
//         if(firstObject[key]===secondObject[key]){
//             obj[key]=value
//         }
//     }
// return obj
// };
//
// const data = {a: 1, b: 2, d: 3};
// const data2 = {c: 1, b: 2, d: 3};
// console.log(intersection(data, data2)); // { b: 2 }

/**
 * Описание задачи: Напишите функцию, которая находит наибольшую цифру в целом числе.
 */

// const number = 153433456290;
// function findNumber(num){
//     // let numberToStr=(num).toString().split('')
//     let numberToStr=num+''.split(' ')
//    let res=Math.max(...numberToStr)
//    return res
// }
// // function findNumber(num) {
// //     let numToStr = num+''.split('')
// //     let res = numToStr[0]
// //     for (let i=1;i<numToStr.length;i++){
// //         if(numToStr[i]>res){
// //             res=numToStr[i]
// //         }
// //     }
// //     return res
// // }
// console.log(findNumber(number))

/**
 *  * В это массиве описание ДОМ элементов.
 * // Отрисовать их согласно описанию:
 *
 *
 */
// const arr = [
//     {
//         tag: 'div',
//         styles: {
//             width: '200px',
//             height: '200px',
//             backgroundColor: 'red',
//         },
//         attributes: {
//             title: 'Red Square',
//         },
//         classes: ['red-square', 'square'],
//     },
//     {
//         tag: 'div',
//         styles: {
//             width: '250px',
//             height: '250px',
//             backgroundColor: 'blue',
//         },
//         attributes: {
//             title: 'Blue Square',
//         },
//         classes: ['blue-square', 'square'],
//     },
//
//     {
//         tag: 'div',
//         styles: {
//             width: '300px',
//             height: '300px',
//             backgroundColor: 'yellow',
//         },
//         attributes: {
//             title: 'Yellow Square',
//         },
//         classes: ['yellow-square', 'square'],
//
//     },
//     {
//         tag: 'button',
//         styles: {
//             width: '100px',
//             height: '50px',
//             backgroundColor: 'black',
//             color: 'white',
//         },
//         textContent: 'My Button',
//     },
//     {
//         tag: 'input',
//         attributes: {
//             placeholder: 'My Input',
//         },
//         classes: ['my-input', 'input'],
//     },
// ];
//
// const setStyleToElement=(element, stylesObj)=>{
//     let stylesArr=Object.entries(stylesObj)
//     stylesArr.forEach((styleEntry)=>{
//         const [key,value]=styleEntry
//         element.style[key] = value
//     })
// }
//
// const setAttributesToElement = (element, attributesObject) => {
//     let attributesArray = Object.entries(attributesObject)
//     attributesArray.forEach((attrEntry) => {
//         const [key, value] = attrEntry;
//         element.setAttribute(key, value)
//     })
// }
//
// const addClassToElement = (element, objClass) => {
//     objClass.forEach((classEntry) => {
//         element.classList.add(classEntry)
//     })
// }
//
// function foo(arrey) {
//     const fragment = document.createDocumentFragment();
//     arrey.forEach((tagObject) =>{
//         const { tag, styles, attributes, classes, textContent } = tagObject;
//         let element = document.createElement(`${tag}`)
//
//         if(styles) setStyleToElement(element,styles)
//         if(attributes) setAttributesToElement(element, attributes);
//         if(classes) addClassToElement(element, classes);
//
//         element.textContent=`${textContent || ''}`
//         fragment.appendChild(element)
//     })
//     document.body.appendChild(fragment)
// }
//
// foo(arr)

// const fib = [1, 2, 3, 5, 8, 13]

// for(let i=0; i<fib.length;i++){
//     setTimeout(() => {
//         console.log(`fib[${i}]=${fib[i]}`)
//     },2000)
// }

// for (var i = 0; i < fib.length; i++) {
//     (function (z) {
//         setTimeout(function () {
//             console.log(`fib[${z}]=${fib[z]}`)
//         }, 2000)
//     })(i)
// }

// for (let i = 0; i <= 10; i++) {
//     1 + 1
// }

//     function findMin(arr){
//     let res=0
//      arr.sort((a,b)=>a-b)
//     res=arr[0]
//     return res
// }
// function findMin(arr){
//     let res=Math.max(...arr)
//     return res
// }

// const maks = [50, 20, 70, 45, 30, -5]

// function findMin(arr){
//     let res=arr[0]
//         arr.forEach((el)=>{
//         if(el<res){
//             res=el
//         }
//     })
//     return res
//     }

// function findMin(arr) {
//     return arr.reduce((acc, value, index, array) => {
//         if (value < array[0])
//             acc[index] = value
//         console.log(acc)
//     }, {})
// }

// function findMax(arr) {
//     return arr.reduce((acc, value, index, array) => {
//         if (!index) {
//             acc[index] = value;
//         }
//         const key = Object.keys(acc)[0];
//         if (acc[key] < value ) {
//             delete acc[key];
//             acc[index] = value
//         }
//         return acc
//     }, {})
// }
//
// console.log(findMin(maks))

//! Функция делает из многомерного массива - одномерный
// const arrayOfArray = [[[[[[-2]]]]], -1, 0, [1, 2], [3, 4], [[5, 6, [7, [8]]]], 9, 10, 11, [12, [13, [14, 15]]], [] ];
// let res=arrayOfArray.flat(99999999)
// console.log(res)

// let myObj = [1,2,3]
//
// function checkObj(obj) {
//     for (let key in obj) {
//         return true;
//     }
//     return false;
// }
//
// console.log(checkObj(myObj))


// for(let i=0;i<words.length;i++){
//     let res={}
//     res=`{${words[i].length} : ['${words[i]}']}`
//     console.log(res)
// }

// let res= words.reduce((acc, word) => {
//      const words = acc[word.length] || []
//      acc[word.length] = [...words, word]
//      return acc
//  }, {})

/**
 *  * returns {'3': ['one', 'two'], '5': ['three']}
 */

// let words = ['one', 'two', 'three', 'WhatDoYouDo'];
//
// function foo(array) {
//     const wordsObj = {}
//     for (let word of array) {
//         const words = wordsObj[word.length] || []
//         wordsObj[word.length] = [...words, word]
//     }
//     return wordsObj
// }
//
// console.log(foo(words))

// let firstObj={name:"hello"}
// let secondObj=firstObj
// firstObj.name='bye'
// console.log(secondObj.name)

// const first = [1, 2, 3, 4]
// const second = [3, 4, 5, 6]
//
// const foo = (a, b) => {
//     return  intersections = a.filter(el => b.includes(el))
// }
//
// console.log(foo(first, second))
// const intersection = (firstObject, secondObject) => {
// let array=Object.entries(firstObject)
//     let obj={}
//     for(let i=0; i<array.length;i++){
//         let [key, value]=array[i]
//         if(firstObject[key]===secondObject[key]){
//             obj[key]=value
//         }
//     }
// return obj
// };
//
// const data = {a: 1, b: 2, d: 3};
// const data2 = {c: 1, b: 2, d: 3};
// console.log(intersection(data, data2)); // { b: 2 }

// const str = ['I', ' ', 'am', ' ', 'Iron', ' ', 'Man']
//
// const result = str.reduce((acc, currentStr) => acc + str, {})
// console.log(result)

// function isEven(num){
//     if(num & 1){
//         return false
//     } else{
//         return true
//     }
// }
//
// console.log(isEven(5))
// const first = [1, 2, 3, 4]
// first.push(7)
// first.unshift(5)
// console.log(first)
//
// let arr=[1,2,3]
// console.log((2||3)&& 5)

// let div=document.querySelector('#container')
//
// div.addEventListener('click', (e)=>console.log(e.target.textContent))

// let b={};
// let c;
//
// b.b=1;
// c=b;
// c.b=2
// console.log(b.b, c.b)

// var x=7
// console.log(0.1 +0.2-0.2)

function f1(a,b){
    console.log(a, b)
}

let f2=f1.bind(null,'foo')
f2('bar', 'baz')