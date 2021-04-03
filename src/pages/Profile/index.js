import { Component , useEffect, useCallback} from 'react'

import axios from 'axios';

import { useSelector, useDispatch } from 'react-redux'

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

export const Profile1 = (props) => {
    /*
    const [profData, setProfData] = useState({});

    const [seconds, setTime] = useState(0);
    */

    const dispatch = useDispatch();

    const profData = useSelector((state) => state.profileState.profData);

    const seconds = useSelector((state) => state.profileState.seconds)
    console.log(seconds);
    const upTime = useCallback(()=> {
      
      const changeTime = {
        type: "CHENGE_TIME",
      }

      dispatch(changeTime)
    },[dispatch])

    useEffect(() => {

    },[profData])

    /*useEffect(() => {
        const intervalId = setInterval(() => setTime((seconds) => seconds + 1), 1000)
    },[])*/ //так как секунды ещё ноль, их нужно прокидывать предыдущее состояние для setTime 

    useEffect(() => {
      async function fetchData() {
      
        const indexOfUsers = props.match.params.index - 1;
        const response = await axios.get(`http://localhost:3001/users/${indexOfUsers}`)
  
        const chengeProfile = {
          type: "CHENGE_PROFILE",
          payload: response.data,
        }
  
        dispatch(chengeProfile)
      
      }
      fetchData();
    },[dispatch,props.match.params.index])

    /*
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
    */

    return (
        <div className="page">
          <div className="page-users">
            {profData?.about}
          </div>
          {seconds}
            <button onClick = {upTime}>click</button>
        </div>
      )
}

export {Profile};