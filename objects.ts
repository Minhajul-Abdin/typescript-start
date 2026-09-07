//the way of writting objects in ts using [type keyword syntax]
type User = {
    id : number,
    name : string,
}

const student : User = {
    id: 101,
    name: "minhaj",
}

const student2 : User = {
    id: 201,
    name: "abdin",
}

//the way of writting objects in ts using [interface keyword syntax]

interface User1 {
    id : number,
    name : string,
}

const student1 : User = {
    id: 101,
    name: "minhaj",
}

const student22 : User = {
    id: 201,
    name: "abdin",
}