import React, {useState} from 'react';
import { Route, Switch } from 'react-router-dom';
import Page404 from '../page404/Page404';
import Home from '../../pages/Home';
import Main from '../../pages/Main';

const Navigation = () => {

    const [items, setItems] = useState('')
    return ( 
        <React.Fragment>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/users' component={Main} />
                    <Route component={Page404} />
                </Switch>
        </React.Fragment>
     );
}
 
export default Navigation;