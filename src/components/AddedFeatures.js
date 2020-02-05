import React from 'react';
import { connect } from 'react-redux';

import AddedFeature from './AddedFeature';

import { removeFeature } from '../actions';

const AddedFeatures = props => {
  return (
    <div className="content">
      <h6>Added features:</h6>
      {props.addedFeatures.length ? (
        <ol type="1">
          {props.addedFeatures.map(item => (
            <AddedFeature key={item.id} feature={item} removeFeature={removeFeature} />
          ))}
        </ol>
      ) : (
          <p>You can purchase items from the store.</p>
        )}
    </div>
  );
};

const mapStateToProps = store => {
  return {
    addedFeatures: store.car.features
  }
}

export default connect(
  mapStateToProps,
  { removeFeature }
)(AddedFeatures);
