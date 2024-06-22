import React from 'react';

const Chat = () => {
  const handleButtonClick = (url) => {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };



  return (
    <div className="chat">
      <img src={require('./giphy.gif')} alt={"logo"} />
      <button onClick={() => handleButtonClick('/record')}>
        Talk to virtual therapist
      </button>
      <button onClick={() => handleButtonClick('/response')}>
        Get response
      </button>

    </div>
  );
}


export default Chat;
