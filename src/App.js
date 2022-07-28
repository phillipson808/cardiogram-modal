import './App.css';
import React from 'react';
import backgroundImage from "./images/project-summit-modal.png";
import closeModalImage from "./images/close-modal-btn.png";
import chevronDown from "./images/chevron-down.png";
import ReadMore from './components/Readmore';

const headline = 'Lorem Ipsum';
const body = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna... do eiusmod tempor incididunt ut labore et dolore magna."


class App extends React.Component {
  render() {
    return <div style={containerStyle}><div className="Modal" style={modalContainerStyle}>
      <div className='ImageContainer' style={imageContainerStyle}>
        <img src={closeModalImage} style={closeModalImageStyle}></img>
      </div>
      <div className='ModalContent' style={modalContentStyle}>      <h2 >{headline}</h2>
        <ReadMore>{body}</ReadMore>

        <button style={modalBtn}>Details Here</button>
      </div>

    </div>
    </div >
  }

}

const containerStyle = {
  display: 'flex',
  alignItems: 'center',
  height: '100vh',
  backgroundColor: 'rgba(0,0,0,0.5)'
}
const modalContainerStyle = {
  backgroundColor: '#F6F8FD',
  width: '75vw',
  maxWidth: '400px',
  margin: '0 auto',
  borderRadius: '10px',
  webkitBorderRadius: '10px',
  mozBorderRadius: '10px',
  color: '#727272',
  fontSize: '16px',
}

const imageContainerStyle = {
  backgroundImage: `url(${backgroundImage})`
  ,
  height: '200px',
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundColor: '#fff',
  borderTopLeftRadius: '10px',
  borderTopRightRadius: '10px',
}

const modalContentStyle = {
  padding: '20px',
  textAlign: 'center',
}

const readMoreStyle = {
  color: '#0247A7',

}

const modalBtn = {
  backgroundColor: '#0247A7',
  color: '#fff',
  padding: '10px 30px',
  border: 'none',
  fontFamily: 'Helvetica',
  fontWeight: 'bold',
  borderRadius: '5px',
  width: '80%',

}

const closeModalImageStyle = {
  width: '40px',
  padding: '10px'
}

const readMoreContainerStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

}

export default App;
