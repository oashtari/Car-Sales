import React from 'react';

const AddedFeature = props => {

  const clickX = e => {
    props.removeFeature(props.feature)
    console.log(props.feature.name)

  }

  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      {/* <button className="button" onClick={clickX}>X</button> */}
      {props.feature.name}
    </li>
  );
};

export default AddedFeature;
