import { Component,useState , useEffect} from 'react'

import axios from 'axios';

import { Card } from '../../components';

class Profile extends Component {

  state = {
    profileData: null,
  }

  componentDidMount = async () => {
      const indexOfUsers = this.props.match.params.index - 1;
      const response = await axios.get(`http://localhost:3001/users/${indexOfUsers}`)
      this.setState({profileData: response.data })
  }

  // willUnmount - остановка таймеров, удаление подписок и подобного.

  render () {
    return (
      <div className="page">
        <div className="page-users">
          {this.state.profileData?.about}
        </div>
      </div>
    )
  }
}

//let intervalId = null;

export const Profile1 = (indexData) => {
    
    const [profData, setProfData] = useState({});

    const [seconds, setTime] = useState(0);

    const upTime = () => setTime(seconds + 1)

    useEffect(() => {

    },[profData])

    /*useEffect(() => {
        const intervalId = setInterval(() => setTime((seconds) => seconds + 1), 1000)
    },[])*/ //так как секунды ещё ноль, их нужно прокидывать предыдущее состояние для setTime 

    useEffect(() => {
        console.log('mounted');
       // const intervalId = setInterval(() => { setTime((seconds) => seconds + 1)},1000);

        return () => {// аналог unmount объекта
            console.log('unmount');
          //  clearInterval(intervalId)
        }
    })

    useEffect(() => {
        if(seconds === 10) {
            console.log('Grac');
        }
    })

    return (
        <div className="page">
          <div className="page-users">
            {seconds}
            <button onClick = {upTime}>click</button>
          </div>
        </div>
      )
}

export {Profile};