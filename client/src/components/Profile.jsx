import React from 'react';
import Header from './Header.jsx';

class Profile extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Header />
        <h3>Hello</h3>
      </div>
    )
  }
}

export default Profile
