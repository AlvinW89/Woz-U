import React from "react";
import ReactDOM from "react-dom";

const stateInfo = ( 
                    state1, 
                    state2, 
                    state3, 
                    state4, 
                    pop1, 
                    pop2, 
                    pop3, 
                    pop4, 
                    cap1, 
                    cap2, 
                    cap3, 
                    cap4
                ) => {
                        return (
                            <table>
                                <tbody>
                                    <th>State</th>
                                    <th>Population</th>
                                    <th>Capital</th>
                                </tbody>
                                <tbody>
                                    <td>{state1}</td>
                                    <td>{pop1}</td>
                                    <td>{cap1}</td>
                                </tbody>
                                <tbody>
                                    <td>{state2}</td>
                                    <td>{pop2}</td>
                                    <td>{cap2}</td>
                                </tbody>
                                
                                <tbody>
                                    <td>{state3}</td>
                                    <td>{pop3}</td>
                                    <td>{cap3}</td>
                                </tbody>
                                <tbody>
                                    <td>{state4}</td>
                                    <td>{pop4}</td>
                                    <td>{cap4}</td>
                                </tbody>
                            </table>
                        );
                    };

ReactDOM.render(
    stateInfo(  'Idaho',
                'Tennessee',
                'Maine',
                'Wisconsin',
                null,
                '6.651 million',
                '1.331 million',
                '5.779 million',
                'Boise',
                'Nashville',
                'Agusta',
                'Madison'), 
                document.getElementById('root')
                );