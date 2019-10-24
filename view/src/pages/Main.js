import React, {useState} from 'react';
import Users from '../components/users/Users';

const Main = () => {

    const [items, setItems] = useState('')
    return ( 
        <React.Fragment>
            <Users />
        </React.Fragment>
     );
}
 
export default Main;