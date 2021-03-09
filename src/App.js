import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Animation from './component/animation';
import ArrayModify from './component/array-modify';
import ConditionalRender from './component/conditional-render';
import LoginForm from './component/login-form';
import PLayPause from './component/play-pause';
import PropAnimation from './component/prop-animation';
import ShowListProp from './component/show-list-prop';
import ShowList from './component/showList';
import StateModify from './component/state-modification';
import UserList from './component/user_list.js'

class App extends Component {
  render() {
    return (
    <Router>
        <div>
          <h2 className = 'nameHomework'>My homework tasks</h2>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <ul className="navbar-nav mr-auto">
              <li className = "li"><Link to={'/'} className="nav-link"> User list </Link></li>
              <li className = "li"><Link to={'/animation'} className="nav-link">Animation</Link></li>
              <li className = "li"><Link to={'/array-modify'} className="nav-link">Modify array</Link></li>
              <li className = "li"><Link to={'/render'} className="nav-link"> Conditional render </Link></li>
              <li className = "li"><Link to={'/form'} className="nav-link">Form</Link></li>
              <li className = "li"><Link to={'/play-pause'} className="nav-link">PLay and pause</Link></li>
              <li className = "li"><Link to={'/prop-animation'} className="nav-link"> Prop animmation </Link></li>
              <li className = "li"><Link to={'/show-list-prop'} className="nav-link">Show list prop</Link></li>
              <li className = "li"><Link to={'/show-list'} className="nav-link">Show list</Link></li>
              <li className = "li"><Link to={'state-modify/'} className="nav-link"> Modify state </Link></li>
            </ul>
          </nav>
          <Switch>
              <Route exact path='/' component={UserList} />
              <Route path='/animation' component={Animation} />
              <Route path='/array-modify' component={ArrayModify} />
              <Route path='/render' component={ConditionalRender} />
              <Route path='/form' component={LoginForm} />
              <Route path='/play-pause' component={PLayPause} />
              <Route path='/prop-animation' component={PropAnimation} />
              <Route path='/show-list-prop' component={ShowListProp} />
              <Route path='/show-list' component={ShowList} />
              <Route path='/state-modify' component={StateModify} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;