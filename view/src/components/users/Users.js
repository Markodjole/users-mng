import React, {useState} from 'react';
import Menu from '../menu/Menu';
import ListUsers from './ListUsers'

const Users = () => {

    const [items, setItems] = useState('')
    return ( 
        <React.Fragment>
            <Menu />
            <ListUsers />
        </React.Fragment>
     );
}
 
export default Users;