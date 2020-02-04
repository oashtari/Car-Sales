import React from 'react';
import { connect } from 'react-redux';

const Total = props => {
  return (
    <div className="content">
      <h4>Total Amount: ${props.totalPrice + props.additionalPrice}</h4>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    totalPrice: state.car.price,
    additionalPrice: state.additionalPrice
  }
}

export default connect(
  mapStateToProps,
  { //action goes in here?

  }
)(Total);