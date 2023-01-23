import './App.css';
import { React, useState} from 'react';

function App() {
  const [rating, setRating] = useState('');
  const [submitted, setSubmitted] = useState(false);
  
  const handleClick = (e) => {
    let score = e.target.value;
    setRating(score);
  }

  const handleSubmit = (e) => {
    setSubmitted(true);
  }

  return (
    <div>
      <div className='card' style={{display: submitted ? 'none' : 'block'}}>
        
          <img className='bubble' src='images/icon-star.svg' alt='orange star icon'></img>
      
        
        <h1 className='title'>How did we do?</h1>

        <p className='copy'>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>

        <div className='circle-cont'>
          <button className='circle' value='1' onClick={handleClick}>1</button>
          <button className='circle' value='2' onClick={handleClick}>2</button>
          <button className='circle' value='3' onClick={handleClick}>3</button>
          <button className='circle' value='4' onClick={handleClick}>4</button>
          <button className='circle' value='5' onClick={handleClick}>5</button>
        </div>

        <button className='submit' onClick={handleSubmit}>submit</button>

      </div>
      
      <div className='card centered' style={{display: submitted ? 'block' : 'none'}}>
        <div>
          <img src='images/illustration-thank-you.svg' alt='a mobile device making a transaction'></img>
        </div>
        <div className='oval'>
          <p className='orange-text'>You selected {rating} out of 5</p>
        </div>
        <h1 className='title'>Thank you!</h1>
        <p className='copy'>We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch.</p>
      </div>
    </div>
  );
}

export default App;
