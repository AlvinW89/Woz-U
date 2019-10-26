import React from 'react';
import ReactDOM from 'react-dom';

const  App = props => 
{
    const favoriteCars = ['Honda CR-V ', 'Toyota Highlander', 'Ford F-150', 'BMW X3', 'Subaru Crosstrek'];
    return <List favoriteCarList ={favoriteCars} />;
}

const List = props =>
{
    const listCar = props.favoriteCarList.map((car, index) =>
    (
        <li key = {index}>{car}</li>
    ));

    return <ul>{listCar}</ul>;
}

ReactDOM.render(<App />, document.getElementById('root'));