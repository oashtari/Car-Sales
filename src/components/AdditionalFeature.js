import React from 'react';

import { connect } from 'react-redux';

import { addFeature } from '../actions/index';

const AdditionalFeature = ({ feature, addFeature }) => {

  // const handleClick = () => {
  //   console.log(feature)
  //   addFeature(feature);
  // }

  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button" onClick={() => addFeature(feature)}>Add</button>
      {feature.name} (+{feature.price})
    </li>
  );
};

const mapStateToProps = store => {
  return {
    additionalFeature: store
  }
}

export default connect(
  mapStateToProps,
  { addFeature }
)(AdditionalFeature);