import React from 'react';

import { connect } from 'react-redux';

import { removeFeature } from '../actions';

const AddedFeature = ({ feature, removeFeature }) => {

  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button" onClick={() => removeFeature(feature)}>X</button>
      {feature.name}
    </li >
  );
};

const mapStateToProps = store => {
  return {
    addedFeature: store
  }
}

export default connect(
  mapStateToProps,
  { removeFeature }
)(AddedFeature);
