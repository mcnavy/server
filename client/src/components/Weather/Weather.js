import React from "react";
import "../App/App.css"
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import Loader from 'react-loader-spinner'

class Weather extends React.Component{

    componentDidMount() {
        this.props.findWeatherApiCall();
    }

    render(){



        if(this.props.data.error){

            return(
                <div className='Weather error'>
                    <div>Error</div>
                    {this.props.data.id !==0 && <button onClick={this.props.deleteCity}>x</button>}
                </div>
            );
        }else{



            if(this.props.data.pending === false){
                console.log(this.props);
                const data = this.props.data.weather;
                const img = this.props.data.id ? `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`:
                    `https://openweathermap.org/themes/openweathermap/assets/vendor/owm/img/widgets/${data.weather[0].icon}.png`

                return(
                    <div className= "Weather">
                        <div className="topInfo">
                            <div className="cityIcon"><img alt="weather icon" src={img}/></div>
                            <div>{data.name}</div>
                            <div>{data.main.temp}</div>
                        </div>
                        <div className="mainInfo">

                            <div>Humidity:{data.main.humidity} %</div>
                            <div>Wind speed:{data.wind.speed}</div>
                            <div>Clouds:{data.clouds.all}%</div>
                        </div>
                        {this.props.data.id !==0 && <button onClick={this.props.deleteCity}>x</button>}

                    </div>
                );
            }else{
                return(
                    <div className="Weather">
                        <Loader
                            type="Puff"
                            color="#00BFFF"
                            height={100}
                            width={100}
                            timeout={30000} //30 secs

                        />

                    </div>
                );
            }
        }
    }
}
export default Weather;
