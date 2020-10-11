// 21. Cho một mảng là một tập các số, tính tổng tất cả các số của mảng này?
// VD: a = [1,2,3,4,5,6,7,8,9,9,8,7,6,5,4,3,2,1] .Output: 90
//var a = [1,2,3,4,5,6,7,8,9,9,8,7,6,5,4,3,2,1];
// var totalArray = a.reduce(function(a, b) {
//     return a + b;
// }, 0);
// console.log("Total Array: ", totalArray);

// 22. Cho một mảng là một tập các số, tìm số lớn nhất, nhỏ nhất và số trung bình trong mảng này?
// VD: a = [1,2,3,4,5,6,7,8,9,9,8,7,6,5,4,3,2,1] .Output: 9, 1, 5
//var a = [1,2,3,4,5,6,7,8,9,9,8,7,6,5,4,3,2,1];
// var maxNumber = Math.max.apply(Math, a);
// var minNumber = Math.min.apply(Math, a);
// console.log("Max, Min, Average Number: ", maxNumber, minNumber, totalArray/a.length);

// 23. Cho một mảng là một tập các số nguyên, tìm số có tần suất xuất hiện nhiều nhất?
// VD: a = [1,2,3,4,5,6,7,8,9,9,9,8,7,6,5,4,3,2,1] .Output: 3
// var a = [1,2,3,4,5,6,7,8,9,9,9,8,7,6,5,4,3,2,1];
// let acc = a.reduce((acc, val) => acc.set(val, 1 + (acc.get(val) || 0)), new Map());
// console.log(acc);

// 24. Cho một mảng là một tập các số nguyên dương, lọc ra một bảng b gồm tất cả các số là số nguyên tố? (Dùng filter)
// VD: a = [1,2,3,2,3,4,6,7] .Output: b=[2,3,2,3,7]
// a = [1,2,3,2,3,4,6,7];
// function checkPrime(n) {
//     if(n < 2) {
//         return false;
//     }
//     for (var i = 2; i <= Math.sqrt(n); i++) {
//         if(n % i == 0) {
//             return false;
//         }
//     }
//     return true;
// }
// var b = a.filter(checkPrime);
// console.log(b);

// 25. Cho một mảng là một tập các số nguyên dương, hãy tạo một mảng b là tập hợp bình phương của các số trong mảng a
// VD: a = [1,2,3,2,3,4,6,7] .Output: b=[1,4,9,4,9,16,36,49]
// var a = [1,2,3,2,3,4,6,7]
// var b = a.map(number => number * 2)
// console.log(b)

// 26. Cho một mảng là một tập các số nguyên dương không trùng giá trị, và một số k. Hãy tìm trong mảng phần có khoảng 
// cách tử gần với k nhất. Vì có thể có nhiều đáp án in ra tất cả vào một mảng.
// var a = [1,2,3,4,6,7];
// var k = 7
// var afterK=k+1
// var beforeK=k-1
// console.log("k =",k);
// for(var i=0;i<a.length;i++){
//     if(a[i]==k){
//         a[i]=afterK 
//     }
// }
// console.log("After k =",afterK);
// for(var i=0;i<a.length;i++){
//     if(a[i]==k){
//         a[i]=beforeK
//     }
// }
// console.log("Before k =",beforeK);

// 27. Cho một mảng là một tập hợp các học viên trong lớp REACTJS, mảng là một tập hợp object của học viên gồm 
// 3 thông tin: id, firstName, lastName, và age. Hãy đưa tên và họ về chuẩn tên với ký tự đầu tiên của tên Viết Hoa 
// và tìm tất cả học viên có tên tồn tại chữ cái “a” hoặc “A” và tên dài hơn hoặc bằng 3 ký tự.

// var students = [
//     {
//         id: "T3HXX1",
//         firstName: "NgAN",
//         lastName: "Duong Thuy"
//     },
//     {
//         id: "T3HXX2",
//         firstName: "Ha",
//         lastName: "Do Thi Thu"
//     },
//     {
//         id: "T3HXX5",
//         firstName: "Minh",
//         lastName: "Nguyen Nhat"
//     }
// ]
// var b = students.map(student => {
//         return {
//             id: student.id,
//             firstName: student.firstName.split(' ').map(item => item[0].toUpperCase() + item.substr(1).toLowerCase()).join(' '),
//             lastName: student.lastName.split(' ').map(item => item[0].toUpperCase() + item.substr(1).toLowerCase()).join(' ')
//         }
//     })
//     function search_Student (item) {
//         var st = item.firstName.split('')
//         for( var i = 0; i < st.length; i++) {
//             if (st[i] == 'a' || st[i] == 'A') {
//                 return item.firstName;
//             }
//         }
//     }
//     var temp = b.filter(item => item.firstName.length > 3)
//     var result = temp.filter(search_Student)
//     console.log("Result: ", result)

// 28. Cho một mảng là một tập hợp các học viên trong lớp REACTJS, mảng là một tập hợp object của học viên 
// gồm 3 thông tin: id, firstName, lastName, và age. Hãy tìm tất cả học sinh cá biệt của lớp biết rằng học sinh cá biệt có họ là “Do”.
//  students = [
//     {
//         id: "T3HXX1",
//         firstName: "NgAN",
//         lastName: "Duong Thuy"
//     },
//     {
//         id: "T3HXX2",
//         firstName: "Ha",
//         lastName: "Do Thi Thu"
//     },
//     {
//         id: "T3HXX5",
//         firstName: "Minh",
//         lastName: "Nguyen Nhat"
//     }
// ]
// for (let i = 0; i < students.length; i++) {
//     if (students[i].lastName.includes("Do")) {
//         console.log("Result:", students[i]);
//     }
// }

//29. Cho một mảng là một tập hợp các học viên trong lớp REACTJS, 
// mảng là một tập hợp object của học viên 
// gồm 3 thông tin: id, firstName, lastName, và age. Hãy sắp xếp danh sách học viên theo tên (firstName).
// var students = [
//     {
//         id: "T3HXX1",
//         firstName: "Ngan",
//         lastName: "Duong Thuy"
//     },
//     {
//         id: "T3HXX2",
//         firstName: "Ha",
//         lastName: "Do Thi Thu"
//     },
//     {
//         id: "T3HXX5",
//         firstName: "Minh",
//         lastName: "Nguyen Nhat"
//     }
// ]
// var outPut = students.sort(function sort(a,b){
//         var x = a.firstName;
//         var y = b.firstName;
//         if (x > y) {return 1;}
//         if (x < y) {return -1;}
//         return 0;
//     })
//     console.log(outPut)

//Bai 30:Cho một mảng là một tập các số nguyên dương, tìm số lớn thứ nhì trong mảng, không có thì in ra -1?
// var a = [1,2,3,4,5,6,7,8,9,9,9,8,7,6,5,4,3,2,1]
// var a= [1,1,1,1,1,1,1,1,1,1]
// var b = Math.max.apply(Math,a); 
// var c=0
// for(var i=0;i<a.length;i++){
//     if(a[i]==b){
//      c=b-1
//     }
//     if(a[i]==a[i]){
//         c=-1
//        }
// }
// console.log("Second Max: ",c);

// 31. Cho một mảng là một tập các số nguyên dương và một số nguyên dương k, tìm xem trong mảng có tồn tại 3 số có tổng bằng k? (1s) , length of array.
// VD: a = [1,2,3,4,5,6,7,8,9,9,9,8,7,6,5,4,3,2,1]; k = 26 .Output: YES.giải thích ( 9 + 9 + 8)
// VD: a = [1,2,3,4,5,6,7,8,9,9,9,8,7,6,5,4,3,2,1]; k = 30 .Output: NO

// 32. Cho một mảng là một tập các số nguyên dương theo thứ tự tăng dần, và một số k. Hãy chèn k vào mảng và đảm bảo mảng ko mất tính tăng dần
// VD: a = [1,3,6,9,11,20]; k = 13 .Output: a = [1,3,6,9,11,13,20]
 
// //Bai 33: [Extra]Cho một mảng là một tập các số nguyên dương và một số nguyên dương k, sắp xếp mảng mà không dùng hàm sort() cho sẵn?
//  a = [9, 8, 7, 6, 4, 5, 3, 2, 1] - Output: [1,2,3,4,5,6,7,8,9]
// var a = [9, 8, 7, 6, 4, 5, 3, 2, 1] 
// console.log("Result:", sortUp(a))