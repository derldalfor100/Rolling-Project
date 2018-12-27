class Users {
    constructor (){
        this.users = [];
    }

    create (newUser){
        return this.users.push(newUser);
    }

    delete (){
        return this.users.pop();
    }

    getUsers(){
        return this.users;
    }
}