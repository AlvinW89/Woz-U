import React from "react";
import ReactDOM from "react-dom";
import { runInThisContext } from "vm";

const App = props =>
{
    return <NumberOfStudents />;
}

class NumberOfStudents extends React.Component
{
    constructor(props){
        super(props);

        this.state =
        {
            enrolledStudents: 87,
            waitlistStudents: 8,
            add: 0

        };
    }

    addEnrolledStudent()
    {
        this.setState(
            {
                enrolledStudents: this.state.enrolledStudents + parseInt(this.state.add)
            }
        );
    }

    addWaitlistStudent()
    {
        this.setState(
            {
                waitlistStudents: this.state.waitlistStudents + parseInt(this.state.add)
            }
        );
    }

    addOneEnrolled()
    {
        this.setState(
            {
                enrolledStudents: this.state.enrolledStudents + 1
            }
        );
    }

    addOneWaitlist()
    {
        this.setState(
            {
                waitlistStudents: this.state.waitlistStudents + 1
            }
        );
    }

    render()
    {
        return (
            <div>
                <h1>Student of Students</h1>
                <hr></hr>
                <br></br>
                <h3>Enrolled: {this.state.enrolledStudents}</h3>
                <p>
                    <button onClick={this.addOneEnrolled.bind(this)}>Add 1 to Enrolled</button>
                </p>
                <h4>Add Multiple:</h4>
                <input type= "number"  onChange={event => this. setState({ add: event.target.value})} value = {this.state.value}/>
                
                <button onClick = {this.addEnrolledStudent.bind(this)}>Modify Enrolled</button>

                

                <h3>Waitlist: {this.state.waitlistStudents}</h3>
                <p>
                    <button onClick={this.addOneWaitlist.bind(this)}>Add 1</button>
                </p>                
                <h4>Add Multiple:</h4>
                <input id ="wiatlistInput"  type= "number"  onChange={event => this. setState({ add: event.target.value})} value = {this.state.value}/>
                
                <button onClick = {this.addWaitlistStudent.bind(this)}>Modify Waitlist</button>
                <hr></hr>
            </div>
            
        );
    }
    
}

ReactDOM.render(<App />, document.getElementById('root'));
