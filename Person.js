var Person = function (firstAndLast){
    this.getFullName = () => firstAndLast;
    
    this.getFirstName = () => firstAndLast.split(" ")[0];

    this.getLastName = () => firstAndLast.split(" ")[1];

    this.setFirstName = (first) => first + " " + firstAndLast.split(" ")[1];

    this.setLastName =  (last) => firstAndLast.split(" ")[0] + " " + last;

    this.setFullName = (firstAndLast) => firstAndLast;
}

var bob = new Person("Bob Ross");
console.log(bob.getLastName());