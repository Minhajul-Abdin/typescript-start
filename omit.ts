type User = {
    id: number,
    name: string,
    email: string,
}

const users: User[] = [];

let lastId: number = 0;

function adduser(user: Omit<User,"id">): User{
    const newUser: User = {
        ...user,
        id: ++lastId
    }
    users.push(newUser);
    return newUser;
}

adduser({name:"min",email:"min@"});
adduser({name:"min",email:"min@"});
console.log(users)