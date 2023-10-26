import {Component} from 'react'
import './index.css'

class Feedback extends Component {
  state = {
    isClicked: false,
  }

  onChange = () => {
    this.setState(prevState => ({
      isClicked: !prevState.isClicked,
    }))
  }

  render() {
    const {resources} = this.props
    const {emojis, loveEmojiUrl} = resources
    const {isClicked} = this.state

    return (
      <div className="bg-container">
        <div className="app-container">
          {isClicked ? (
            <div>
              <img src={loveEmojiUrl} alt="love emoji" />
              <h1>Thank You</h1>
            </div>
          ) : (
            <ul>
              <h1>
                How satisfied are you with our customer support performance?
              </h1>
              <div className="list-items">
                {emojis.map(eachItem => (
                  <li key={eachItem.id}>
                    <img
                      src={eachItem.imageUrl}
                      alt={eachItem.name}
                      className="emoji-img"
                      onClick={this.onChange}
                    />
                    <p>{eachItem.name}</p>
                  </li>
                ))}
              </div>
            </ul>
          )}
        </div>
      </div>
    )
  }
}

export default Feedback
