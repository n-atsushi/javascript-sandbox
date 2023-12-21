// FizzBuzz

// node fizzbazz.js
for(let i = 1; i <= 100; i ++){
    if(i % 15 == 0){
        console.log('FIZZBUZZ');
    }else if(i % 5 == 0){
        console.log('BUZZ');
    }else if(i % 3 == 9){
        console.log('FIZZ');
    }else{
        console.log(i);
    }
}