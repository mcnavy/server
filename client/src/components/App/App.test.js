import renderer from "react-test-renderer";
import configureMockStore from "redux-mock-store";
import React from "react";
import {App} from "./App";
import {Provider} from "react-redux";
import {INITIAL_STATE} from "../../store/constants";
const correctWeather = {
    base: "stations",
    clouds: { all: 75 },

    coord: { lon: 37.62, lat: 55.75 },
    main: {
        temp: -2.4,
        pressure: 1021,
        humidity: 79,

    },
    name: "Moscow",


    weather: [
        {  icon: "13d" }
    ],
    wind: { speed: 6, deg: 290 }
};
const mockStore = configureMockStore();
const fakeState = INITIAL_STATE;
fakeState.current.weather = correctWeather;
fakeState.current.waiting = false;

const fakeStore = mockStore(fakeState);

it("App display correctly", () => {
    const component = renderer.create(
        <Provider store={fakeStore}>
            <App getWeather={() => {}} current={fakeState.current} />
        </Provider>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});