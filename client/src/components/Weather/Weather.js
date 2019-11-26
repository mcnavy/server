import React from "react";
import "../App/App.css"
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import Loader from 'react-loader-spinner'

class Weather extends React.Component{

    componentDidMount() {
        this.props.findWeatherApiCall();
    }

    render(){



        if(this.props.error){
            console.log("error")
            return(
                <div className='Weather error'>
                    <div>Error</div>
                    {this.props.data.id !==0 && <button onClick={this.props.deleteCity}>x</button>}
                </div>
            );
        }else{
            console.log("not erro")
            const weather = this.props.weather;

            if(this.props.pending === false){
                const img = this.props.id ? `https://openweathermap.org/img/wn/${weather.weather[0].icon}.png`:
                    `https://openweathermap.org/themes/openweathermap/assets/vendor/owm/img/widgets/${weather.weather[0].icon}.png`
                return(
                    <div className= "Weather">
                        <div className="topInfo">
                            <div className="cityIcon"><img alt="weather icon" src={img}/></div>
                            <div>{weather.name}</div>
                            <div>{weather.main.temp}</div>
                        </div>
                        <div className="mainInfo">

                            <div>Humidity:{weather.main.humidity} %</div>
                            <div>Wind speed:{weather.wind.speed}</div>
                            <div>Clouds:{weather.clouds.all}%</div>
                        </div>
                        {this.props.id !==0 && <button onClick={this.props.deleteCity}>x</button>}
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
