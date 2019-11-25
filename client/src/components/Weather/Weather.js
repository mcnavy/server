import React from "react";
import "../App/App.css"
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import Loader from 'react-loader-spinner'

class Weather extends React.Component{

    componentDidMount() {
        this.props.findWeatherApiCall();
    }

    render(){

        console.warn(this.props.data.pending)

        if(this.props.data.error){
            setTimeout(this.props.deleteCity,2000);
            return(
                <div className='Weather error'>
                    <div>Error</div>
                    {this.props.data.id !==0 && <button onClick={this.props.deleteCity}>x</button>}
                </div>
            );
        }else{
            const weather = this.props.data.weather;
            if(this.props.data.pending === false){
                const img = this.props.data.id ? `https://openweathermap.org/img/wn/${weather.weather[0].icon}.png`:
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
