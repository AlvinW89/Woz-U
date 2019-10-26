
function run(str, name)
{
    let nameGET = document.getElementById(name).value;

        let nameCheck = "/^[A-Z]/";
        if(nameGET.match(nameCheck))
        {
            nameGET = "First Name: 'Green'";
        } else
        { 
            nameGET = "First Name: 'First letter not uppercase'";
        }
        console.log(str +  nameGET);
    
}



