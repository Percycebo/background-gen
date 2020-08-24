var database=[
    {
        username:'cebo',
        password:'moneyIsKing'
    },{
        username:'noks',
        password:'moneyIsKing'
    },{
        username:'nosi',
        password:'money'
    }
];
var newsFeed=[
    {
        username:"Bobby",
        timeline:'So tired of this design'
    },{
        username:'Lindo',
        timeline:'Life was really cool back then'
    },{
        username:'Siphe',
        timeline:'I feel for you'
    }
];

var userNamePrompt=prompt("What's your username?");
var passwordPrompt=prompt("What your password?");
function isUserValid(username,password){
    for (var i=0;i<database.length;i++){
        if (database[i].username==username &&
            database[i].password==password){
                return true;
            }
    }
    return false;

}
function signIn(username,password){
    console.log(isUserValid(username,password))
    if (isUserValid(username,password)){
            console.log(newsFeed);
        }else{
            alert('Sorry, wrong username and password');
       }
}

signIn(userNamePrompt,passwordPrompt);


/*
var todos=[
    'clean room','brush teeth','exercise','study javascript','eat healthy'
];

for (var i=0;i<todos.length;i++){
    console.log(todos[i]);
}*/