interface Person
{
    firstName: string;
    lastName: string;
    birthday: Date;
}

class Entry implements Person
{
    firstName: string;    
    lastName: string;
    birthday: Date;
    constructor(firstName: string, lastName: string, birthday: Date)
    {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthday = birthday;
    }
    
}

let newPerson = new Entry("Albert", "Einstein", new Date(5/14/1879));
console.log(`{------------------------------------*------------------------------------} \n  \nFull Name : ${newPerson.firstName} ${newPerson.lastName} \nDOB: ${newPerson.birthday} \n  \n{------------------------------------*------------------------------------}`);


let numArr = ['twelve', 'one-hundred', 'sixteen', 'forty-four', 'seventy-three', 'three-million'];

console.log(`pre-log: ${numArr}`);

function sortArr<S>(arg: S[]) : S[]
{
    return arg.sort();
}


console.log(`post-log: ${sortArr(numArr)}`);