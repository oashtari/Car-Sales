import { ADD_FEATURE, REMOVE_FEATURE } from '../actions/index';

export const initialState = {
    additionalPrice: 0,
    car: {
        price: 26395,
        name: '2019 Ford Mustang',
        image:
            'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
        features: [{ name: 'test' }]
    },
    additionalFeatures: [
        { id: 1, name: 'V-6 engine', price: 1500 },
        { id: 2, name: 'Racing detail package', price: 1500 },
        { id: 3, name: 'Premium sound system', price: 500 },
        { id: 4, name: 'Rear spoiler', price: 250 }
    ]
};

export const carReducer = (state = initialState, action) => {
    // console.log('testing reducer state and action in main reducer file', state.car, action)
    switch (action.type) {
        case ADD_FEATURE:
            console.log('testing ADD_FEATURE', state)
            return {
                ...state,
                car: {
                    ...state.car,
                    features: [...state.car.features, action.payload.name]
                }
            }

        default:
            return state;
    }
}

// return { ...state, items: [...state.items, action.payload] };



                // ...state.car,
                // features: [...state.car.features, action.payload.name]


                // ...state,

                // return {
                //     ...car.features,
                //     features: [...state.car.features, action.payload.name]