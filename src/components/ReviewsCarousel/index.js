// Write your code here
import {Component} from 'react'
import './index.css'

class ReviewCarousel extends Component {
  state = {
    count: 0,
  }

  decrement = () => {
    this.setState(prev => ({
      count: prev.count - 1,
    }))
  }

  increment = () => {
    this.setState(prev => ({
      count: prev.count + 1,
    }))
  }

  render() {
    const {reviewsList} = this.props

    const {length} = reviewsList
    console.log(length)
    const {count} = this.state
    const {imgUrl, username, companyName, description} = reviewsList[count]
    return (
      <div className="container">
        <h1 className="heading">Reviews</h1>
        <div className="content">
          <button
            type="button"
            data-testid="leftArrow"
            className="arrow"
            onClick={count > 0 ? this.decrement : null}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
            />
          </button>
          {/* {reviewsList[count].map(items => ( */}
          <div className="carousel">
            <img className="profile-pic" src={imgUrl} alt={username} />
            <p className="name">{username}</p>
            <p className="company">{companyName}</p>
            <p className="desc">{description}</p>
          </div>
          {/* ))} */}

          <button
            className="arrow"
            type="button"
            data-testid="rightArrow"
            onClick={count < length - 1 ? this.increment : null}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
            />
          </button>
        </div>
      </div>
    )
  }
}

export default ReviewCarousel
