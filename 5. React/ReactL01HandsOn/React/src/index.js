import React from 'react';
import ReactDOM from 'react-dom';


const colorList = React.createElement('ol', {className: 'colors'}, 
                                        React.createElement('li', {}, 'Green'),
                                        React.createElement('li', {}, 'Blue'),
                                        React.createElement('li', {}, 'Red')
);

const musicList = React.createElement('ol', {className: 'colors'}, 
                                        React.createElement('li', {}, 'Regina Spektor'),
                                        React.createElement('li', {}, 'Antonín Dvořák'),
                                        React.createElement('li', {}, 'Radiohead')
);

const foodList = React.createElement('ol', {className: 'colors'}, 
                                        React.createElement('li', {}, 'Pizza'),
                                        React.createElement('li', {}, 'Ceasar Salad'),
                                        React.createElement('li', {}, 'Gnocchi')
);

const siteList = React.createElement('ol', {className: 'colors'}, 
                                        React.createElement('li', {}, 
                                            React.createElement('a', 
                                                {href: 'http://www.google.com'}, 'Google')),
                                        React.createElement('li', {}, 
                                            React.createElement('a', 
                                                {href: 'http://www.facebook.com'}, 'Facebook')),     
                                        React.createElement('li', {}, 
                                            React.createElement('a', 
                                                {href: 'http://www.instagram.com'}, 'Instagram'))
);
ReactDOM.render
(
    React.createElement('h1', {}, 'MY Fav Things',
    colorList,
    musicList,
    foodList,
    siteList
    ),
    document.getElementById('root')
);   