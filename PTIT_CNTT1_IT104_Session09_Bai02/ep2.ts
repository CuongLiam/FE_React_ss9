const wrapInArray = <T>(args : T) : T[]=>{
    return [args];
}

console.log(wrapInArray(5));
console.log(wrapInArray("hello"));
console.log(wrapInArray({ a : 1 }));
