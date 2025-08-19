import React, { Component } from 'react';
import './VipContentRating.css';

class VipContentRating extends Component {
  constructor() {
    super();
    this.state = {
      likes: 0,
      dislikes: 0,
      totalRatings: 0
    };
  }

  handleLike = () => {
    this.setState((prevState) => ({
      likes: prevState.likes + 1,
      totalRatings: prevState.totalRatings + 1
    }));
  };

  handleDislike = () => {
    this.setState((prevState) => ({
      dislikes: prevState.dislikes + 1,
      totalRatings: prevState.totalRatings + 1
    }));
  };

  render() {
    const { likes, dislikes, totalRatings } = this.state;

    return (
      <div className='vip-content-rating'>
        <h2>🧪 Rate This Content</h2>
        <p>This is part of my React remix journey — originally built during a Coursera course, now personalized for my GitHub showcase.</p>
        <div className='rating-buttons'>
          <button className='like-button' onClick={this.handleLike}>
            👍 Like ({likes})
          </button>
          <button className='dislike-button' onClick={this.handleDislike}>
            👎 Dislike ({dislikes})
          </button>
        </div>
        <p className='total-ratings'>Total Ratings: {totalRatings}</p>
      </div>
    );
  }
}

export default VipContentRating;