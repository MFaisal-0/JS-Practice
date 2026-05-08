let data1 = "private data"
class user{
    constructor(name, email){
        this.name = name;
        this.email = email;
    }

    viewData(){
        console.log("data =", data1);
    }
}

class admin extends user{
    constructor(name, email){
        super(name, email);
    }
    editData(){
        data1 = "New Data";
    }
}

let stud1 = new user("umair", "abcd@gmail.com");
let stud2 = new user("farhan", "efgh@gmail.com");
let stud3 = new user("haseeb", "ijkl@gmail.com");

let admin1 = new admin("admin", "admin@gmail.com");