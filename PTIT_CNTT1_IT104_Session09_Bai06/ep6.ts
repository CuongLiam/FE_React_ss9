const firstMatch = <T>(arr : T[], predicate : (item) => boolean) : T | undefined=>{
    for(let i = 0; i < arr.length; i++){
        if(predicate(arr[i]) === true)
            return arr[i];
    }
    return undefined;
}

console.log(firstMatch([1,2,4,6], (n) => n % 2 === 0));
console.log(firstMatch(["cat", "house", "car"], (word) => word.length > 4));

