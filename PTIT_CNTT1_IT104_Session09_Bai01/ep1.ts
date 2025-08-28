const identity = <T>(args : T) : T=>{
    return args;
}

console.log(identity(5));
console.log(identity("Hello"));
console.log(identity({a : 1}));
