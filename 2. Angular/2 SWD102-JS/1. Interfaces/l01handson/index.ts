interface Person
{
    firstName: string;
    lastName?: string;
}


interface Contact
{
    phoneNumber: number;
    email?: string;
}

class ContactCard implements Person, Contact 
{
   
    
    firstName: string;
    lastName?: string;

    phoneNumber: number;
    email?: string | undefined;

    constructor(firstName: string, phoneNumber: number) 
    {
        this.firstName = firstName;
        this.phoneNumber = phoneNumber;
    }

    sendMessage(): void
    {
        console.log("Name: " + this.firstName + " Phone:" + this.phoneNumber);
    }
}

let personNew = new  ContactCard("Henry", 1234567890);
personNew.sendMessage();