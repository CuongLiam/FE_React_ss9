const withDefault = <T>(value? : T) : T | string =>{
    if(value){
        return value;
    }
    return `"default"`;
}

console.log(withDefault());
console.log(withDefault(42));
console.log(withDefault(true));
