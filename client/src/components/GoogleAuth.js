import { Component } from "react";
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions';

class GoogleAuth extends Component{

  componentDidMount(){
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId: '435416806708-itttams6om377ksqo0npgk3sr2m2u81d.apps.googleusercontent.com',
        scope: 'email'
      }).then(() => {
        this.auth = window.gapi.auth2.getAuthInstance();
        this.onAuthChange(this.auth.isSignedIn.get())
        this.auth.isSignedIn.listen(this.onAuthChange);
      })
    });
  }

  onAuthChange = (isSignedIn) =>{
    if (isSignedIn === true){
      this.props.signIn();
    }else{
      this.props.signOut();
    }
  };

  onSignInClick = () =>{
    this.auth.signIn()
  }

  onSignOutClick = () =>{
    this.auth.signOut()
  }

  renderAuthButton(){
    if (this.props.isSignedIn ===  null){ 
      return null;
    }else if (this.props.isSignedIn === true){
      return (
      <button className="ui red google button" onClick={this.onSignOutClick}>
        <i className="google icon" />
        Sign Out
      </button>
      )
    }else{
      return (
        <button className="ui red google button" onClick={this.onSignInClick}>
          <i className="google icon" />
          Sign In with google
        </button>
        )
    }
  }

  render(){
    return(
      <div>
        {this.renderAuthButton()}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { isSignedIn: state.auth.isSignedIn };
}

export default connect(
  mapStateToProps,
  {signIn, signOut}
)(GoogleAuth);