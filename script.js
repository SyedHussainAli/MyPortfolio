// let x=5;
// let y =x++;
// x+=y;
// console.log(y);
// console.log(x);
// console.log(x-=y);

// x=x+y;

///////////////////////////////////////    Assignment      //////////////////////////////////////////////////
// var str = "hussain zaidi";
// const pi = 3.14;
// function fun1() {
//   let pi = 2;

//   console.log("value  of pi is :" + pi);
//   console.log("value of string is :" + str);
// }

// let a = 5;
// let b = 3;
// function fun2() {
//   console.log("value of a is: " + a);
//   console.log("value of b is: " + b);
//   console.log("addition of a and b is:" + (a + b));
//   console.log("subtraction of a and b is:" + (a - b));
// }

// function fun3() {
//   if (a > b) {
//     console.log("a is greater number");
//   } else {
//     console.log("b is greater number");
//   }
// }

// function fun4() {
//   var h = true;
//   if (a > b && h === true) {
//     console.log("conditions working correctly");
//   } else {
//     console.log("conditions may have problems");
//   }
// }

// function fun5() {
//   var str1 = "Hussain ";
//   var str2 = "Zaidi";
//   console.log(str1 + str2);
// }
// function fun6() {
//   var str1 = "Hussain ";
//   var str2 = "Zaidi";
//   console.log(str1.toUpperCase());
//   console.log(str2.toLowerCase());
// }
// // console.log("//////////            1            ////////////");
// // fun1();
// // console.log("//////////            2            ////////////");
// // fun2();
// // console.log("//////////            3            ////////////");
// // fun3();
// // console.log("//////////            4            ////////////");
// // fun4();
// // console.log("//////////            5            ////////////");
// // fun5();
// // console.log("//////////            6            ////////////");
// // fun6();

// // index=20;
// // if (index >=10 || index <=20) {
// //     console.log("Inside");

// // }
// // else
// // {
// //     console.log("outside");
// // }
// function InsideOuside(value) {
//   if (value < 10 || value > 20) {
//     console.log("outside");
//     console.log(value);
//   } else {
//     console.log("inside");
//     console.log(value);
//   }
// }

// // InsideOuside(2);
// // InsideOuside(10);
// // InsideOuside(15);
// // InsideOuside(20);
// // InsideOuside(25);

// function InsideOuside1(value) {
//   if (value < 5) {
//     console.log("Smaller than 5");
//     console.log(value);
//   } else if (value >= 5 && value <= 10) {
//     console.log("Betyween 5 and 10");
//     console.log(value);
//   } else {
//     console.log("Greater than 10");
//     console.log(value);
//   }
// }
// // InsideOuside1(2);
// // InsideOuside1(4);
// // InsideOuside1(5);
// // InsideOuside1(8);
// // InsideOuside1(10);
// // InsideOuside1(12);

// // addi(2, 89);
// // addi(243, 89);
// var addi = function (a, b) {
//   console.log(a + b);
// };

// const user = {
//   username: "Hussain",
//   Age: 27,
//   education: "BSCS",
// };
///////////////////////////////////////////////////////////////////////////////////////////
// const nestedObject = {
//   obj1: {
//     a: 1,
//     b: 2,
//     obj2: {
//       c: 3,
//       d: 4,
//       obj3: {
//         e: 5,
//         f: 6,
//         obj4: {
//           g: 7,
//           h: 8,
//         },
//       },
//     },
//   },
// };

// const{obj1:{a,b,obj2:{c,d,obj3:{e,f,obj4:{g,h}}}}}=nestedObject;
// console.log(nestedObject.obj1.obj2.obj3.obj4.g);


//console.log(a,b,c,d,e,f,g,h);

// const book ={
//   title: "Harry prtter",
//   author:"JK Rolling",
//   year:2004,
//   genre:"Magic and Adventurer",


//   getSummary: function () {
//     return "Title is: "+this.title+"\n Author is: "+this.author+"\n Year is:"+this.year;
//   }

// }
// const {title,author,year,genre}=book;

// console.log(title,author,year,genre);
// book.language="English";
// console.log(book);

// delete book.language;
// console.log(book);


// console.log(book.getSummary());

// const person = {
//   name: 'Alice',
//   age: 30,
//   address: {
//     city: 'Wonderland',
//     zip: '12345'
//   }
// };


// const {name,age,address:{city, zip}}=person;

// console.log(name,age,city,zip)
////////////////////////////////////      This Keyword!!      //////////////////////////////////////////////////////////////////////////////
const person = {
  name: 'Alice',
  age: 30,
  getvalue:{
    a:1,
    b:2
  }
};
const nestedObject = {
  obj1: {
    a: 1,
    b: 2,
    obj2: {
      c: 3,
      d: 4,
      obj3: {
        e: 5,
        f: 6,
       
      },
    },
  },
};

function fun1(obj){
for (const key in obj) {
  if (obj.hasOwnProperty( key)) {
 
    if (typeof obj[key]==="object" && obj[key]!==null) {
      console.log(`${key}`);
       fun1(obj[key]);
    }
    else{
      console.log(`${key}:${obj[key]} `);
    }
    
  }
}
}

const arr=[1,2,3,4,565,7,687,];

//fun1(nestedObject);

let str="This is first string";
let str1="                                                     This is second string                                    ";
console.log(str.length);
console.log(str.charAt(2));
console.log(str.at(2));
console.log(str.slice(3,6));
console.log(str.substring(8,9));
console.log(str.toUpperCase());

console.log(str1.concat("",str));
console.log(str1.trim());
console.log(str.replace("first","Last"))

