//Enum in TypeScript is a way to create a group of named, fixed values.
var Tcolor;
(function (Tcolor) {
    Tcolor["Red"] = "red";
    Tcolor["Green"] = "green";
    Tcolor["Yellow"] = "yellow";
})(Tcolor || (Tcolor = {}));
const t1 = {
    size: 42,
    color: Tcolor.Red,
};
//--------------------------------------------
//--------------------------------------------
var Status;
(function (Status) {
    Status[Status["draft"] = 0] = "draft";
    Status[Status["private"] = 1] = "private";
    Status[Status["public"] = 2] = "public";
})(Status || (Status = {}));
const artical1 = {
    id: 1,
    title: "me",
    status: Status.draft,
};
console.log(artical1);
export {};
