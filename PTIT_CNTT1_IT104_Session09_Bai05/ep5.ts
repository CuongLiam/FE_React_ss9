class DataStore<T>{
    private data : T[] = [];

    constructor(data : T[]){
        this.data = data;
    }

    add(item  : T) : void{
        this.data.push(item);
    }

    getAll() : T[]{
        return this.data;
    }
    remove(idx : number) : void{
        this.data.splice(idx, 1);
    }
}

let example = new DataStore([1,2,4,5,6])
console.log(example.getAll());
example.add(69);
console.log(example.getAll());
example.remove(2); // 4
console.log(example.getAll());



