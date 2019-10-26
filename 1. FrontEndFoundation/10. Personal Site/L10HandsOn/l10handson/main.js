
function load()
{
  let gitRequest = new XMLHttpRequest();
  gitRequest.onreadystatechange = function()
    {
    if (this.readyState == 4 && this.status == 200) 
    {
      gitCatch = JSON.parse(this.responseText);
      for(i = 0; i < gitCatch.length; i++)
      {
          let ulTag = document.getElementById('gitRepos');
          let aTag = document.createElement('a');
          let liTag = document.createElement('li');
          liTag.appendChild(document.createTextNode(gitCatch[i].name));
          aTag.appendChild(liTag)
          aTag.setAttribute("href", gitCatch[i].html_url);
          aTag.setAttribute("target", "_blank");
          ulTag.appendChild(aTag);
      } 
          
    }
  }
  
  gitRequest.open("GET", "https://api.github.com/users/AlvinW89/repos", true);
  gitRequest.send();
};