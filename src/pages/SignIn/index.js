import React, { useCallback} from 'react';
import axios from 'axios';
//mport { Redirect } from 'react-router-dom'
//import {ROUTES} from '../../const'

import './style.css';

import { useDispatch, useSelector} from 'react-redux'
/*
class SignInPageContainer1 extends Component {

  state = {
    phone: '',
    password: '',
    user: null,
    error: ''
  }

  componentDidMount = () => { // вызывается при создании компонента
    console.log('mount');
  }

  componentWillUnmount = async () => { // вызыввается при удалении объекта
    console.log('unmount');
  }

  onLogin = async () => {
    try {
      const response = await axios.post('http://localhost:3001/auth/sign-in', {
        phone: this.state.phone,
        password: this.state.password
      });
      this.setState({ user: response.data, phone: '', password: '' });
      //this.props.history.push(ROUTES.MAIN) - bad practise
    } catch (err) {
      console.log(err.response);
      this.setState({ error: err.response.data });
    }
  }

  onChangeCredentials = (event, fieldName) => {
    this.setState({ [fieldName]: event.target.value, error: '' });
  }

  render () {
    console.log(this.props.location);//просмотр инфы по пути к странице
    //history - работет по стеку, просмотр истории переходов по страницам
    return (
      <div className="page">
        <div className="page-sign-in">
          <input
          type="text"
          placeholder="phone number"
          onChange={(event) => this.onChangeCredentials(event, 'phone')}
          value={this.state.phone}
        />
        <input
          type="text"
          placeholder="password"
          onChange={(event) => this.onChangeCredentials(event, 'password')}
          value={this.state.password}
        />
        <div>
          {this.state.user && (
            <span>{this.state.user.name.first} {this.state.user.name.last}</span>
          )}
        </div>
          <span className="text-field error-text">{this.state.error}</span>
          <button onClick={this.onLogin}>Sign in</button>
        </div>
        {this.state.user && <Redirect to = {ROUTES.MAIN}/>}
      </div>
    )
  }
}
*/
const SignInPageContainer = () => {

  /*
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState({});
  const [error, setError] = useState('');
  */

  const dispatch = useDispatch();

  const user = useSelector((state) => state.signInState.user);

  const phone = useSelector((state) => state.signInState.phone);

  const password = useSelector((state) => state.signInState.password);

  const error = useSelector((state) => state.signInState.error);

  const onChangePhone = useCallback((event) => {

    const changePhoneAction = {
      type: "CHANGE_PHONE",
      payload: event.target.value
    }

    dispatch(changePhoneAction)
  },[dispatch])

  const onChangePassword = useCallback((event) => {

    const changePasswordAction = {
      type: "CHANGE_PASSWORD",
      payload: event.target.value
    }

    dispatch(changePasswordAction)
  },[dispatch])

  const setUser = useCallback((userData) => {

    const setUser = {
      type: "ADD_USER",
      payload: userData
    }

    dispatch(setUser)
  },[dispatch])

  const setError = useCallback((userData) => {

    const setError = {
      type: "ADD_ERROR",
      payload: userData
    }

    dispatch(setError)
  },[dispatch])

  const onLogin = async () => {
    try {
      const response = await axios.post('http://localhost:3001/auth/sign-in', {
        phone: phone,
        password: password
      });
      setUser(response.data );
    } catch (err) {
      console.log(err.response.data);
      setError(err.response.data);
    }
  }

  /*
  useEffect(() => {
    console.log('Mount');

    return () => console.log('Unmount');
  })
  */

  //const onChangePhone = (phoneNumber) => setPhone(phoneNumber);

  //const onChangePassword = (pass) => setPassword(pass);

  return (
    <div className="page">
      <div className="page-sign-in">
        <input
        type="text"
        placeholder="phone number"
        onChange={onChangePhone}
        value={phone}
      />
      <input
        type="text"
        placeholder="password"
        onChange={onChangePassword}
        value={password}
      />
      <div>
        {user !== null && (
          <span>{user.name.first} {user.name.last}</span>
        )}
      </div>
        <span className="text-field error-text">{error}</span>
        <button onClick={onLogin}>Sign in</button>
      </div>
      {/*user !== null && <Redirect to = {ROUTES.MAIN}/>*/}
    </div>
  )
}

export { SignInPageContainer };