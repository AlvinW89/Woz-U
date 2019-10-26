let highSchoolGrade = 11;
let yourGrade;

function updateGrade(){
switch(highSchoolGrade)
{
  case 9:
    {
      yourGrade = "Freshman";
    }
    break;
  case 10:
    {
      yourGrade = "Sophomore";
    }
    break;  
  case 11:
    {
      yourGrade = "Junior";
    }
    break;  
  case 12:
    {
      yourGrade = "Senior";
    }
    break; 
  default:
  {
    yourGrade = "invalid";
  }
}


}

function name(){
  let firstName;
  return (firstName === 'John') ? "Hello John!" : "Hello Human!";

}