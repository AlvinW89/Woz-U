import React from 'react';
import Thing from './FavoriteThings';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const Things = ({match}) => 
(
    <div>
       <h2>Favorite Things</h2>
       <ul>
           <li>
               <Link to={`${match.url}/Corolla`}>Favorite Car</Link>
           </li>
           <li>
               <Link to={`${match.url}/Popeye's-Pickled-jalapeño`}>Favorite Food</Link>
           </li>
           <li>
               <Link to={`${match.url}/A-Walk-To-Remember`}>Favorite Movie</Link>
           </li>
       </ul>

       <Route path={`${match.url}/:thingId`} component={Thing} />
       <Route exact path={match.url} render={() => <h3>Please select.</h3>}  />
    </div>
);

export default Things;