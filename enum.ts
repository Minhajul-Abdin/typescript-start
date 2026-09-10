//Enum in TypeScript is a way to create a group of named, fixed values.
enum Tcolor {
    Red = "red",
    Green = "green",
    Yellow = "yellow",
}

type Teeshirt = {
    size: number,
    color: Tcolor,
}

const t1: Teeshirt = {
    size: 42,
    color: Tcolor.Red,
}

//--------------------------------------------
//--------------------------------------------

enum Status{
    draft,
    private,
    public
}

type Atrical = {
    id: number;
    title: string;
    status: Status;
};

const artical1: Atrical = {
    id: 1,
    title: "me",
    status: Status.draft,
} 

console.log(artical1);


