import { configureStore, createAction, createReducer } from "@reduxjs/toolkit";

export const setMarker = createAction('set_marker',(location) => {
    return {
        payload: location,
    }
});


const markerReducer = createReducer({city: "Mountain View",
country: "US",
geonameId: 5375480,
lat: 37.38605,
lng: -122.08385,
postalCode: "94035",
region: "California",
timezone: "-07:00"},(builder) => {
    builder.addCase(setMarker, (state, action) => {
        return action.payload;
    })
});


// logger middleware : log each state change
function logger({getState}){
    return next => action => {
        console.log('will dispatch: ', action);

        // call the next dispatch method in the middleware chain
        const returnValue = next(action);

        console.log('state after dispatch: ' ,getState());

        return returnValue;
    }
}


export const store = configureStore({
    reducer: markerReducer,
    middleware: [logger],
})

// store.dispatch(setMarker({lat: -55.2545, lng: 25.254}));

// console.log(store.getState());