//print output
var x=21;
a();
b();
console.log(a);
a=function(){
    x=20;
    console.log(x);
};
b=function(){
    x=40;
    console.log(x);
};

//output //js4.7.js:3 Uncaught ReferenceError: a is not defined at js4.7.js:3:1
