import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './ListUsers.css';
import Button from '../actButton/Button';
import ModalComponent from '../modal/Modal';
import * as ac from '../../store/actions/userActions'; 
import { connect } from 'react-redux';

const ListUsers = ({users, currentUser, modal, modalClose, modalOpen, setUser, setAllUsers }) => {

    // const [users, setUsers] = useState('');

    useEffect(() => {
        axios.get(`/users`)
      .then(res => {
        const persons = res.data.users;
        console.log(persons)
        persons && setAllUsers( persons );
      })
      },[]);

    // useEffect(() => {
    //     console.log('users changed')
    //   },[users]);

    const buttonClick = (user, act) => {
        if(act == 'delete'){
            axios.delete(`/users/${user._id}`)
            .then(res => {
                axios.get(`/users`)
                .then(res => {
                    const persons = res.data.users;
                    console.log(persons)
                    persons && setAllUsers( persons );
                })
              })
              .catch(err => console.log(err))
            return
        }
        if(act == 'update'){
            setUser(user)
            modalOpen()
            return
        }
        // setUser(user={_id:null, Name:'',Surname:'',Address:'',City:'',Phone:''})
        modalOpen()
    }

    return ( 
        <React.Fragment>
            <div className="wrapper">
            <button type="button" className="btn update createUser" onClick={modalOpen}>
                Create New User
            </button>
            <ModalComponent open={modal} modalClose={modalClose} />
                <div className="table">
            <table>
                <thead>
                 <tr>
                   <th>#</th>
                   <th>Name</th>
                   <th>Surname</th>
                   <th>City</th>
                   <th>Address</th>
                   <th>Phone</th>
                   <th>Date created</th>
                   <th></th>
                   <th></th>
                 </tr>
                </thead>
                <tbody>
                { users && users.map((user,i) => {
                    return (
                        <tr key={i+1}>
                            <td>{i+1}</td>
                            <td>{user.Name}</td>
                            <td>{user.Surname}</td>
                            <td>{user.City}</td>
                            <td>{user.Address ? user.Address : '-'}</td>
                            <td>{user.Phone ? user.Phone : '-'}</td>
                            <td>{user.CreatedDate ? user.CreatedDate : '-'}</td>
                            <td><Button user={user} act="update" onBtnClick={buttonClick} /></td>
                            <td><Button user={user} act="delete" onBtnClick={buttonClick}  /></td>
                        </tr>
                    )
                })
            }
                </tbody>
            </table>
            </div>
            </div>
        </React.Fragment>
     );
}
const mapStateToProps = (state) => {
    return {
        modal : state.modal,
        users: state.users,
        currentUser: state.user
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        modalClose: () => dispatch(ac.onCloseModal()),
        modalOpen: () => dispatch(ac.onOpenModal()),
        setUser: (user) => dispatch(ac.setUser(user)),
        setAllUsers: (users) => dispatch(ac.setAllUsers(users)),
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(ListUsers);