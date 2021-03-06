import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import ChatRoom from './ChatRoom.jsx'
class Match extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      userProfile: {},
      matchProfile: {
        first: '',
        photo: ''
      }
    }
    this.makePath = this.makePath.bind(this);
  }
  componentDidMount() {
    let that = this;
    const id = this.props.matchID.match;
    axios.get('/api/profiles/' + id )
    .then(function(response) {
      that.setState({matchProfile: response.data});
    })
    .catch(function(error) {
      console.log(error);
    });
  }
  makePath() {
    if(this.state.matchProfile.id < this.props.userProfile.id) {
      var path = "/chat/" + this.state.matchProfile.id + "z" + this.props.userProfile.id;
    } else {
      var path = "/chat/" + this.props.userProfile.id + "z" + this.state.matchProfile.id;
    }
    return path;
  }
  render() {
    var path = "/chat/";
    if(this.state.matchProfile.id) {
      path = this.makePath();
    }
    return (
      <div className="match" >
        <img className="img-circle center-block match-img"src={this.state.matchProfile.photo}/>
        <Link to={{pathname: path, state: {userProfile: this.props.userProfile, matchProfile: this.state.matchProfile}}}>
          <p>{this.state.matchProfile.first}</p>
          <p>click to enter chat...</p>
        </Link>
      </div>
    )
  }
}
export default Match;