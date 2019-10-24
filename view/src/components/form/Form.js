import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import * as ac from '../../store/actions/userActions'; 
import './Form.css';

const Form = ({user, modalClose, setAllUsers}) => {

    // const [name, setName] = useState('');
    const [name, setName] = useState(user ? user.Name : '');
    const [surname, setSurname] = useState(user ? user.Surname : '');
    const [city, setCity] = useState(user ? user.City : '');
    const [address, setAddress] = useState(user ? user.Address : '');
    const [phone, setPhone] = useState(user ? user.Phone : '');
    const [date, setDate] = useState(user ? user.DateCreated : '');

    const submitClick = (event) => {
        event.preventDefault();
        axios.post(`/users${user ? '/' : ''}${user ? user._id : ''}`,
        {
            Name: name,
            Surname: surname,
            City: city,
            Address: address,
            Phone: phone,
            CreatedDate: date
        }
        )
        .then(res => {
            axios.get(`/users`)
                .then(res => {
                    const persons = res.data.users;
                    console.log(persons)
                    persons && setAllUsers( persons );
                })
            modalClose()
          })
          .catch( err => {
            console.log(err);
          });
    }

    return ( 
        <React.Fragment>
            <div className="formWrapper">
        
            <form className="needs-validation" noValidate>
                <div className="form-row">
                    <div className="col-md-12">
                    <label htmlFor="validationTooltip01">First name</label>
                    <input type="text" className="form-control" id="validationTooltip01" placeholder="First name" value={name}  onChange={e => setName(e.target.value)} required />
                    <div className="valid-tooltip">
                        Looks good!
                    </div>
                    </div>
                    <div className="col-md-12">
                    <label htmlFor="validationTooltip02">Last name</label>
                    <input type="text" className="form-control" id="validationTooltip02" placeholder="Last name" value={surname} onChange={e=>setSurname(e.target.value)} required />
                    <div className="valid-tooltip">
                        Looks good!
                    </div>
                    </div>
                    <div className="col-md-12">
                    <label htmlFor="validationTooltip02">City</label>
                    <input type="text" className="form-control" id="validationTooltip02" placeholder="City" value={city} onChange={e=>setCity(e.target.value)} required />
                    <div className="valid-tooltip">
                        Looks good!
                    </div>
                    </div>
                    <div className="col-md-12">
                    <label htmlFor="validationTooltip02">Address</label>
                    <input type="text" className="form-control" id="validationTooltip02" placeholder="Address" value={address} onChange={e=>setAddress(e.target.value)} required />
                    <div className="valid-tooltip">
                        Looks good!
                    </div>
                    </div>
                    <div className="col-md-12">
                    <label htmlFor="validationTooltip02">Phone</label>
                    <input type="text" className="form-control" id="validationTooltip02" placeholder="Phone" value={phone} onChange={e=>setPhone(e.target.value)} required />
                    <div className="valid-tooltip">
                        Looks good!
                    </div>
                    </div>
                    <div className="col-md-12">
                    <label htmlFor="validationTooltip02">Date Created</label>
                    <input type="text" className="form-control" id="validationTooltip02" placeholder="Date Created" value={date} onChange={e=>setDate(e.target.value)} required />
                    <div className="valid-tooltip">
                        Looks good!
                    </div>
                    </div>
                </div>
                <br/>
                <button className="btn btn-primary" type="submit" onClick={submitClick}>Submit form</button>
                </form>
                </div>
        </React.Fragment>
     );
}
const mapStateToProps = (state) => {
    return {
        user : state.user
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        modalClose: () => dispatch(ac.onCloseModal()),
        setAllUsers: (users) => dispatch(ac.setAllUsers(users)),
    }
}
 
export default connect(mapStateToProps,mapDispatchToProps)(Form);