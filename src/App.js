import React from 'react';
import axios from 'axios';
import ReviewList from './ReviewList';

class App extends React.Component {
  
  state = {reviews: []}

  componentDidMount() {
    // calls api directly
    const getReviews = async () => {
        const response = await axios.get('http://localhost:5000/api/v1/consumer/fetch/reviews/customer/betty123')
        this.setState({reviews : response.data});
    }
    getReviews();
  }

  render() {
    return(
      <div className = "ui container" style = {{marginTop: '10px'}}>
        <h1> Reviews count: {this.state.reviews.length} </h1>
        <ReviewList
          reviews = {this.state.reviews}
        />
      </div>

    )
  }
}

export default App;