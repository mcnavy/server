import React from 'react';

import {getCities} from "../../store/reducers";
import {connect} from "react-redux";
import axios from "axios"
import { addCityPending,addCityError,addCitySuccess} from "../../store/actions";
import {BE} from "../../store/constants";

class AddCity extends React.Component {
    constructor(props){
        super(props);
        this.handleFormInput = this.handleFormInput.bind(this)

    }

    handleFormInput = (event) => {

        event.preventDefault();
        let i;
        let flag = true;
        for(i = 0; i < this.props.cities.length;i++){
            if(this.props.cities[i].name === event.target[0].value){ flag = false;}

        }
        if(flag) {
            this.props.addCity(event.target[0].value);
        }
        event.target[0].value = '';

    };
    render() {

        return (
            <div>
                <form onSubmit={this.handleFormInput}>
                    <input id='addCity' placeholder="Type new city to add"/>

                    <button type="submit">Add</button>
                </form>


            </div>
        )
    }
}
const addCityAction = name =>{
    return dispatch =>{
        dispatch(addCityPending(name));
        axios
            .post(`${BE}favourites`,{name})
            .then(response =>{
                const city = {
                    id: response.data.city._id,
                    name: response.data.city.name
                };
                dispatch(addCitySuccess(city));
            })
            .catch(error =>{
                dispatch(addCityError(error));
            });
    };
};
const mapStateToProps = state => ({
    cities: getCities(state)
});
const mapDispatchToProps = dispatch =>({
    addCity:name=>dispatch(addCityAction(name))
});
const AddCityForm = connect(mapStateToProps,mapDispatchToProps)(AddCity);
export default AddCityForm;