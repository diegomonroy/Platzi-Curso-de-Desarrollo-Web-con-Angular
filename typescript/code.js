// let x = 3;
// console.log(x);
var x = 3;
var s = "Hola";
var a;
// let user_1 : User ={
// 	name : 'Josue',
// 	age : 30,
// 	date : '20/10/2016'
// }
var UserAdd = (function () {
    function UserAdd() {
    }
    UserAdd.prototype.add = function (user) {
        this.users.push(user);
    };
    return UserAdd;
}());
var u = new UserAdd();
var user_1 = {
    name: 'Josue',
    age: 30,
    date: '20/10/2016'
};
u.add(user_1);
