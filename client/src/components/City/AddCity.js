import React from 'react';
import {addCity} from "../../store/actions";
import {getCities} from "../../store/reducers";
import {connect} from "react-redux";

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
const mapStateToProps = state => ({
    cities: getCities(state)
});
const mapDispatchToProps = dispatch =>({
    addCity:name=>dispatch(addCity(name))
});
const AddCityForm = connect(mapStateToProps,mapDispatchToProps)(AddCity);
export default AddCityForm;