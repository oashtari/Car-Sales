import { ADD_FEATURE, REMOVE_FEATURE } from '../actions/index';

export const initialState = {
    additionalPrice: 0,
    car: {
        price: 26395,
        name: '2019 Ford Mustang',
        image:
            'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
        features: []
    },
    additionalFeatures: [
        { id: 1, name: 'V-6 engine', price: 1500 },
        { id: 2, name: 'Racing detail package', price: 1500 },
        { id: 3, name: 'Premium sound system', price: 500 },
        { id: 4, name: 'Rear spoiler', price: 250 }
    ]
};

export const carReducer = (store = initialState, action) => {
    // console.log('testing reducer store and action in main reducer file', store.car, action)
    switch (action.type) {

        case ADD_FEATURE:
            return {
                ...store,
                additionalPrice: store.additionalPrice + action.payload.price,
                car: {
                    ...store.car,
                    features: [...store.car.features, action.payload]
                }
            };


        case REMOVE_FEATURE:
            console.log('testing REMOVE_FEATURE', store)
            return {
                ...store
            };

        default:
            return store;
    }
}

// both need to affect price
// both need to change additional features list
// both need to change added features list
// remove needs a 'remove' button -- already included as an 'X'