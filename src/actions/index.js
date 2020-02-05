export const ADD_FEATURE = "ADD_FEATURE";
export const REMOVE_FEATURE = "REMOVE_FEATURE";

export const addFeature = (feature) => {
    // console.log('testing add feature in actions folder', feature)
    return {
        type: ADD_FEATURE,
        payload: feature
    }
}

export const removeFeature = (feature) => {
    // console.log('testing REMOVE feature in actions folder')
    return {
        type: REMOVE_FEATURE,
        payload: feature
    }
}

