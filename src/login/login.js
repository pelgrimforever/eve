import React from 'react';
import Store from '../services/store.js';
import Popupmessage from '../popups/popupmessage.js';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedin: Store.user.loggedin,
      showpopup: false,
      popuptitle: 'Authentication response',
      popupmessage: '',
    };
  }

  componentDidMount = async () => {
    this.setState( { loggedin : await Store.user.authenticate("pelgrim", "fralas") } );    
  }

  hidePopup = () => {
    this.setState( { showpopup: false });
  }

  authenticate = async (event) => {
    event.preventDefault();
    const formdata = new FormData(event.target);
    const user = formdata.get('user');
    const password = formdata.get('password');
    this.setState( { loggedin : await Store.user.authenticate(user, password) } );
    if(!this.state.loggedin) {
      this.setState({
        showpopup: true,
        popupmessage: 'Wrong user/password combination.'
      });
    }
  }

  logout = async (event) => {
    event.preventDefault();
    Store.user.reset();
    alert("logout");
    this.setState( { loggedin : Store.user.loggedin } );
  }

  render() {
      const showlogin = !this.state.loggedin;
      const username = Store.user.username;

    return (
      <div>
      { showlogin ? (
    <form onSubmit={this.authenticate} className="form-inline row">
      <div className="form-group input-group input-group-sm input-group-autowidth p-0">
        <div className="input-group-prepend">
          <span className="input-group-text">user</span>
        </div>
        <input type="text" className="form-control mr-sm-2" id="user" placeholder="Enter user" name="user" required/>
      </div>

      <div className="form-group input-group input-group-sm input-group-autowidth p-0">
        <div className="input-group-prepend">
          <span className="input-group-text">password</span>
        </div>
        <input type="password" className="form-control mr-sm-2" id="password" placeholder="Enter password" name="password" required/>
      </div>

      <div className="form-group input-group input-group-sm input-group-autowidth p-0">
        <button type="submit" className="btn btn-sm btn-dark">Login</button>
      </div>
    </form>

        ) : (

    <form onSubmit={this.logout} className="form-inline row">
      <div className="form-group input-group input-group-sm input-group-autowidth p-0">
        <div className="input-group-prepend">
          <span className="input-group-text">user</span>
        </div>
        <input type="text" className="form-control mr-sm-2" defaultValue={username} disabled/>
      </div>
      <div className="form-group input-group input-group-sm input-group-autowidth p-0">
        <button type="submit" className="btn btn-sm btn-dark">Logout</button>
      </div>
    </form>

        )
      }

      <Popupmessage show={this.state.showpopup} title={this.state.popuptitle} message={this.state.popupmessage} onHide={this.hidePopup} />
      </div>
    )
  }
}

export default Login;