
var a = 1;
var b = 2;
var c = 3;

var add = function(param1,param2) {
    return param1 + param2;
}

console.log(add(a,b));
console.log(add(6.5,14.7));

for (var i = 0; i < 10; i++){
    console.log("boucle:"+ i);
}

if (a < b){
    console.log('a inférieur a b');
}else{
    console.log('a supérieur a b');
}

for (var j = 0; j <= 5; j=j+1){
    if (j < b ){
        console.log('j inférieur a b');
    }else{
        console.log('j supérieur a b');
    }
}


var n = 0;
while (n < 5){
    console.log(n);
    n++;
}

