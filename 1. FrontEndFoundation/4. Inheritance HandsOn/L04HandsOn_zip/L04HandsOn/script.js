class Employee {
    constructor(name, salary, hireDate) {
      this.name = name;
      this.salary = salary;
      this.hireDate = hireDate;
    }
    getName() {
      console.log(this.name.toUpperCase());
    }
    getSalary() {
      console.log(this.salary);
    }
    getHireDate() {
      console.log(this.hireDate);
    }
    getRole()
    {
        console.log(this.descriptionOfJob);
        console.log(this.experience);
        console.log(this.degrees);
    }
    
  }

  class Manager extends Employee
  {
    constructor(descriptionOfJob, name, salary, hireDate)
    {
        
        super(name, salary, hireDate);
        this.descriptionOfJob = descriptionOfJob;

    }

    jobDescription()
    {
        console.log("Name: " + this.name + " Hire Date: " + this.hireDate + " Salary: " + this.salary + " Role: " + this.descriptionOfJob);
    }
  }

  class Designer extends Employee
  {
    constructor(experience,name, salary, hireDate)
    {
        super(name, salary, hireDate);
        this.experience = experience;
    }
    yearsExperience()
        {
            console.log("Name: " + this.name + " Hire Date: " + this.hireDate + "  Salary: " + this.salary + " Role: " + this.experience);
        }
  }

  class SalesAssociate extends Employee
  {
    constructor(degrees,name, salary, hireDate)
    {
        super(name, salary, hireDate);
        this.degrees = degrees;
    }
    degreeCompleted()
        {
            console.log("Name: " + this.name + " Hire Date: " + this.hireDate + " Salary: " + this.salary + " Role: " + this.degrees);
        }
  }
  
  let myMGInstance = new Manager("Store Manager", "Alvin", 60.000, 1989);
      myMGInstance.jobDescription();
  let myDGInstance = new Designer("Lead Designer", "Cody", 120.000, 2008);
      myDGInstance.yearsExperience();
  let mySAInstance = new SalesAssociate("Tech Department - Sales", "Master Cheif", 30.000, 2015);
      mySAInstance.degreeCompleted();
  