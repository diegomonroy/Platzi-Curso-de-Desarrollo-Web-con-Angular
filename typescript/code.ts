// let x = 3;
// console.log(x);

let x : number = 3;
let s : string = "Hola";
let a : any [];

interface User {
	name : string,
	age : number,
	date : string
}

// let user_1 : User ={
// 	name : 'Josue',
// 	age : 30,
// 	date : '20/10/2016'
// }

class UserAdd {
	users : User[];
	add( user : User ) {
		this.users.push(user);
	}
}

const u = new UserAdd();
let user_1 : User = {
	name : 'Josue',
	age : 30,
	date : '20/10/2016'
}
u.add(user_1);