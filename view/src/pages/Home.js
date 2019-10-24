import React, {useState} from 'react';
import Menu from '../components/menu/Menu';
import Splash from '../components/splash/Splash';

const Home = () => {

    const [items, setItems] = useState('')
    return ( 
        <React.Fragment>
            <Menu />
            <Splash />
        </React.Fragment>
     );
}
 
export default Home;