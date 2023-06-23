import React from 'react';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTime: this.getCurrentTime(),
    };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      currentTime: this.getCurrentTime(),
    });
  }

  getCurrentTime() {
    const date = new Date();
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  }

  render() {
    const { userProfilePic, username } = this.props;
    const { currentTime } = this.state;

    return (
      <div className="header">
        <div className="header-left">
          <img
            src="https://www.thefatherhoodproject.org/media/profile-placeholder.gif"
            alt="User Profile"
            className="profile-pic"
          />
          <span className="welcome-message">Welcome, Julia</span>
        </div>
        <div className="header-right">
          <span className="current-time">{currentTime}</span>
        </div>
      </div>
    );
  }
}

export default Header;
