let person = null;

let loadFile = new XMLHttpRequest();
    loadFile.onreadystatechange = function()
    {
        person = JSON.parse(this.responseText);
        document.getElementById('main').innerHTML = "Name: " + person.name + "\n DOB:" + person.birthday;
    }
    loadFile.open("GET", "einstein.json", true);
    loadFile.send();

function loadBio()
{
    document.getElementById('bioP').innerHTML = "Bio: " + person.bio;
}