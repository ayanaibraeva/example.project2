
// const generateArray =(array) => {
//     for(var i = 0; i < 20; i++){
//         const random = Math.floor(Math.random()*(100-0)+0)
//         array.push(random)
//     }
//     console.log(array)
// }

// const arr =[];
// generateArray(arr)


// foraech() - метод, который просто перебирает массив

// map()
// filter()
// find()
// reduce()
// findindex()


// BEFORE

// for(var i = 0; i < arr.length;i++){
//     console.log(arr[i])
// }
// AFTER ES6

// var arr2 = [1,2,3,4,5,6]

// // arr2.forEach((item) => console.log(item))
// arr2.forEach((item) => item % 2 === 0 && console.log(item))


// const arr2 = [
//     {
//         id:1,
//       name:"Alex",
//       age: 20
//     },
//     {
//         id:2,
//       name:"Alisa",
//       age: 20
//     },
//     {
//         id:3,
//       name:"Frank",
//       age: 20
//     },
//     {
//         id:4,
//       name:"Taje",
//       age: 34
//     },
//   ]

  // const newArray = arr2.map(item =>{
  //   if(item.age > 20){
  //       item.name = "Alisher"
  //       return item
  //   }else{
  //       return item
  //   }
  // })

//   console.log(newArray)

// const newArray = arr2.map(item =>{
//     return {isDiplom: true, ...item}
// })
// console.log(newArray)
// const name = prompt("Name")

// const newArray = arr2.filter(item => item.age > 20 && item)
// console.log(newArray)


// const newArray = arr2.filter(item => item.name === name && item)

// console.log(newArray)



// const newArray = arr2.find(item => item.id === 2 && item.age === 20 && item)
// console.log(newArray)

//................................................................................................................



// const generateArray = array =>{
//   for(var i = 0; i < 20; i++){
//     array.push(Math.floor(Math.random () * 100))
//   }
//   console.log(array)
// }

// const arr = [];
// generateArray(arr)

// // for(var i = 0; i < arr.length; i++){
// //   console.log(arr[i])
// // }

// const iterator = (item) =>{
//   console.log(item)
// }
// arr.forEach(iterator)

// const generate = array =>{
//   for(var i  = 0; i < 20; i++){
//     array.push(Math.floor(Math.random()*100))
//   }
//   console.log(array)
// }

// const arr = [];
// generate(arr)



// const iterator = item =>{
//   console.log(item)
// }
// arr.forEach(iterator)


// //////////////////////////////////////////////////////////////////////////////////////////////////////////////
// const someFunction = func =>{
//   console.log(func)
// }

// someFunction("AYANA")

// func()
// //////////////////////////////////////////////////////////////////////////////////////////////////////////////


// const iterators = item =>{
//   console.log(item)
// }

// arr.forEach(iterators)

// arr.forEach(function(item){
//   console.log(item)
// })



// const arr2 = [1, 2, 3, 4, 6, 7, 8, 9];

// // arr2.forEach(function (item) {
// //   console.log(item)
// // })

// // const iterator = item => {
// //   console.log(item)
// // }

// // arr2.forEach(iterator)

// arr2.forEach((item) => console.log(item))









// const generateArray = array =>{
//   for(var i = 0; i < 20; i++){
//     array.push(Math.floor(Math.random () * 100))
//   }
//   console.log(array)
// }

// const arr = [];
// generateArray(arr)

// arr.forEach((item) => item % 2 === 0 && console.log(item))


// for (var i = 0; i < arr.length; i++){
//   arr[i] = {
//     name: "ALeax"
//   }
// }
// console.log(arr)

// const newArray = arr.map(item => {
//   return {...item ,name: "Alex"}
// })
// console.log(newArray)

// const newArray = arr.map((item) => {
//   if(item % 2 === 0){
//     return item
//   }
// })
// console.log(newArray)

// const newArray = arr.map(item => item % 2 === 0 ? item = "k" : item )
// console.log(newArray)

// const arr2 = [
//   {
//     id: 1,
//     name: "Aman",
//     age: 20
//   },
//   {
//     id: 1,
//     name: "Asel",
//     age: 20
//   },
//   {
//     id: 1,
//     name: "Erka",
//     age: 20
//   },
//   {
//     id: 1,
//     name: "Adi",
//     age: 20
//   }
// ]

// const newArray = arr2.map(item => item.age > 20 ? item.name = "Alischer"   :  item)
// console.log(newArray)

// const newArray = arr2.map(item => {
//   if(item.age > 20 ){
//     item.name = "Alisher" 
//     return item
//   }else{
//     return item
//   }
// })
// console.log(newArray)


// const newArray = arr2.map(item => {
//   return {isDiplom: true, ...item}
// })
// console.log(newArray)

// const newArray = arr2.filter(item => {
//   if( item.age > 20 ){
//     return item
//   }
// })
// console.log(newArray)

// const newArray = arr2.map(item => {
//   if( item.age > 20){
//    return item.name = "ALisa"
//   }})

// console.log(newArray)
// const name = prompt("Name")
// const newArray = arr2.filter(item => item.name === name && item)
// console.log(newArray)

// const newArray = arr2.find(item => item.age === 20 && item.id === 1 && item)
// console.log(newArray)


// const generateArray = (array) =>{
//   for(var i = 0; i < 20; i++){
//     array.push(Math.floor(Math.random()*100))
//   }
//   console.log(array)
// }
// const arr = [];
// generateArray(arr)

// const iterator = arr.map(item => item % 2 === 0 && console.log(item))

// for(var i = 0; i < arr.length ; i++){
//   console.log(arr[i])
// }


// const newArray = arr.map(item => item % 2 === 0 ? item = "Hi": item )
// console.log(newArray)


// const arr2 = [
//     {
//         id:1,
//       name:"Alex",
//       age: 20
//     },
//     {
//         id:2,
//       name:"Alisa",
//       age: 20
//     },
//     {
//         id:3,
//       name:"Frank",
//       age: 20
//     },
//     {
//         id:4,
//       name:"Taje",
//       age: 34
//     },
//   ]

  // const newArray = arr2.map(item =>{
  //   if(item.age > 20 ){
  //     item.name = "Alisher"
  //     return item
  //   } else{
  //     return item
  //   }
  // })
  // console.log(newArray)

  // const newArray = arr2.map(item => {
  //   return{
  //     ...item,
  //     isDiplom: true
  //   }
  // })
  // console.log(newArray)

  // const newArray = arr2.find (item => item.age > 20 && item.name)
  //  console.log(newArray)
  

