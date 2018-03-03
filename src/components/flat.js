import React from 'react';
import './flat.css';

class Flat extends React.Component {
  handleClick = () => {
    // this is to call the parent method selectFlat
    this.props.selectFlat(this.props.flat);
  }
  render(){
    const title = this.props.flat.price
      + this.props.flat.priceCurrency +
      " - " + this.props.flat.name;

    const style = {
      // Template literals ES6 avoir sur google avant den mettre partout
      backgroundImage: `url('${this.props.flat.imageUrl}')`
    };

    return (
      <div className='flat' onClick={this.handleClick}>
        <div className='flat-picture' style={style}></div>
        <div className='flat-title'>
          {title}
        </div>
      </div>
    );
  }
}

export default Flat;
