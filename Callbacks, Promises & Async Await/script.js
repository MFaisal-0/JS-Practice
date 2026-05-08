// // async
// console.log("one");
// console.log("two");

// setTimeout(() => {
//     console.log("Hello");
// },4000);

// console.log("three");
// console.log("four");

// // Callback

// function sum(a, b){
//     console.log(a+b);
// }

// function calculator(a, b, sumCallback){
//     sumCallback(a, b);
// }

// calculator(1, 2, sum);

// calculator(1, 2, (a,b) => {
//     console.log(a+b);
// });

// //Callback Hell

// function getData(dataId, getNextdata){
//     setTimeout(() => {
//         console.log("data ",dataId);
//         if(getNextdata){
//             getNextdata();
//         }
//     },2000);
// }

// getData(1, () =>{
//     getData(2, () =>{
//         getData(3);
//     });
// })

// promise

// let promise = new Promise((resolve, reject) => {
//     console.log("I am Promise");
//     // resolve("success");
//     reject("some error occur");
// });

// function getData(dataId, getNextdata) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data ", dataId);
//             resolve("success");
//             // reject("error");
//             if (getNextdata) {
//                 getNextdata();
//             }
//         }, 5000);
//     });
// }

// const getPromise = () => {
//     return new Promise((resolve, reject) => {
//         console.log("i am promise");
//         resolve("success");
//         reject("network error");
//     });
// };

// let promise = getPromise();
// promise.then((res) => {
//     console.log("promise fulfilled", res);
// });
// promise.catch((err) => {
//     console.log("rejected", err);
// });

// Promise Chain

// function asyncFunc1() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data1");
//             resolve("success");
//         }, 4000);
//     });
// };

// function asyncFunc2() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data2");
//             resolve("success");
//         }, 4000);
//     });
// };

// console.log("fetching data1.....");
// let p1 = asyncFunc1();
// p1.then((res) => {
//     console.log("fetching data2.....");
//     let p1 = asyncFunc2();
//     p1.then((res) => {});
// });

// console.log("fetching data1.....");
// asyncFunc1().then((res) => {
//     console.log("fetching data2.....");
//     asyncFunc2().then((res) => {});
// });

// function getData(dataId) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data ", dataId);
//             resolve("success");
//         }, 2000);
//     });
// }

// getData(1)
//     .then((res) => {
//         return getData(2);
//     })
//     .then((res) => {
//         return getData(3);
//     })
//     .then((res) => {
//         console.log(res);
//     });

// async await

// async function hello(){
//     console.log("hello");
// }

// function api(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("wether data");
//             resolve(200);
//         },2000);
//     });
// };

// async function getWetherdata() {
//     await api();
//     await api();
// }

function getData(dataId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data ", dataId);
            resolve("success");
        }, 2000);
    });
}

// // async await

// async function getAllData() {
//     console.log("getting data1");
//     await getData(1);
//     console.log("getting data2");
//     await getData(2);
//     console.log("getting data3");
//     await getData(3);
//     console.log("getting data4");
//     await getData(4);
//     console.log("getting data5");
//     await getData(5);
//     console.log("getting data6");
//     await getData(6);
//     console.log("getting data7");
//     await getData(7);
// }

// // Promise Chain

// getData(1)
//     .then((res) => {
//         return getData(2);
//     })
//     .then((res) => {
//         return getData(3);
//     })
//     .then((res) => {
//         console.log(res);
//     });

// //Callback Hell

// getData(1, () => {
//     console.log("getting data1");
//     getData(2, () => {
//         console.log("getting data2");
//         getData(3, () => {
//             console.log("getting data3");
//             getData(4);
//         });
//     });
// });

// IIFE function

(async function () {
    console.log("getting data1");
    await getData(1);
    console.log("getting data2");
    await getData(2);
    console.log("getting data3");
    await getData(3);
    console.log("getting data4");
    await getData(4);
    console.log("getting data5");
    await getData(5);
    console.log("getting data6");
    await getData(6);
    console.log("getting data7");
    await getData(7);
})();