import React from "react";
import AddCity from "./AddCity";
import renderer from "react-test-renderer";
import {INITIAL_STATE} from "../../store/constants";
import configureMockStore from "redux-mock-store";
import {Provider} from "react-redux"

it ("AddCity works correct",() =>{
    const mockStore = configureMockStore();
    const state = INITIAL_STATE;
    const store = mockStore(state)
    const tree = renderer.create(
        <Provider store = {store}>
            <AddCity />
        </Provider>).toJSON()

    expect(tree).toMatchSnapshot();
});