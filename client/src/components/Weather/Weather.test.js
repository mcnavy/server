import React from "react";
import Weather from "./Weather";
import renderer from "react-test-renderer";
const trueData = {
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

describe("weather in main city",() =>{
    it ("pending",() =>{
        const data = {
            id: 0,
            pending: true
        };
        const component = renderer.create(
            <Weather data = {data} findWeatherApiCall = {() =>{}} />
        );
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    })
    it("loaded with error", () =>{
        const data ={
            id: 0,
            pending: false,
            error : {}
        };
        const component = renderer.create(
            <Weather data ={data} findWeatherApiCall = {() => {}}/>

        );
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    })
    it("loaded successfully",()=>{
        const data ={
            id : 0,
            pending: false,
            weather: trueData
        }
        const component = renderer.create(
            <Weather data = {data} findWeatherApiCall = {() => {}}/>
        );
        expect(component.toJSON()).toMatchSnapshot();
    })
});
describe("weather not in main  city",() =>{
    it ("pending",() =>{
        const data = {
            id: 1,
            pending: true
        };
        const component = renderer.create(
            <Weather data = {data} findWeatherApiCall = {() =>{}} />
        );
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    })
    it("loaded with error", () =>{
        const data ={
            id: 1,
            pending: false,
            error : {}
        };
        const component = renderer.create(
            <Weather data ={data} findWeatherApiCall = {() => {}}/>

        );
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    })
    it("loaded successfully",()=>{
        const data ={
            id : 1,
            pending: false,
            weather: trueData
        }
        const component = renderer.create(
            <Weather data = {data} findWeatherApiCall = {() => {}}/>
        );
        expect(component.toJSON()).toMatchSnapshot();
    })
});

