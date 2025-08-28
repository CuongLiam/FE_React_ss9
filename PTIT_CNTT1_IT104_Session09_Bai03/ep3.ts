function mergeObjects<T, U>(obj1 : T, obj2 : U) : T & U{ //type intersection → meaning the result has all properties from T and U.
    // return {obj1, obj2};
    return {...obj1, ...obj2};
}

let person = {name : "John"}
let job = {role : "Dev"}

let merged = mergeObjects(person, job);
console.log(merged);
