const Weather = (props) => {
    const rise = new Date(props.data.sunrise * 1000);
    const set = new Date (props.data.sunset * 1000);
    const sunriseHour = rise.getHours();
    const sunriseMin = ('0'+rise.getMinutes()).slice(-2);
    const sunsetHour = set.getHours();
    const sunsetMin = ('0'+set.getMinutes()).slice(-2);
    const formatSunriseHr = sunriseHour >=13 ? sunriseHour%12 : sunriseHour;
    const formatSunsetHr = sunsetHour >=13 ? sunsetHour%12 : sunsetHour;
    const am_pm1 = sunriseHour>=12 ? 'PM' : 'AM';
    const am_pm2 = sunsetHour>=12 ? 'PM' : 'AM';
    const days = ['Sunday','Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const time = new Date();
    const year = time.getFullYear();
    const month = time.getMonth();
    const date = time.getDate();
    const day = time.getDay();
    const hour = time.getHours();
    const format_hour = hour === 0 ? 12 : hour >=13 ? hour%12 : hour;
    const minutes = time.getMinutes();
    const am_pm = hour>=12 ? 'PM' : 'AM';

    return (
        <div className="weather_info">
        <div id="city">{props.data.name ? props.data.name : ''}</div>
        <div id="current_time">{format_hour}:{(minutes < 10? '0'+minutes : minutes)} {am_pm}</div>
        <div id="current_date">{days[day]}, {months[month]} {date}, {year}</div>
        <div id="current_temp"><div id="temp_fahrenheit">{props.data.temp ? props.data.temp : ''} &deg;F</div><button type="submit" id="celsius">to &deg;C</button></div>
        <div id="current_icon"></div>
        <div id="current_conditions"></div>
        <div id="temp_hi_low"><div id="high">{props.data.temp_max ? props.data.temp_max : ''} &deg;F</div><div className="middle_line2"></div><div id="low">{props.data.temp_min ? props.data.temp_min : ''} &deg;F</div></div>
        <div id="more_data">
            <div className="added_data">
                <div id="feels_like">
                    <div className="added_title">Feels Like</div>
                    <div className="img_and_data">
                        <div className="icon"><i className="fa-solid fa-temperature-high"></i></div>
                        <div id="feels_like_current">{props.data.feels_like ? props.data.feels_like : ''}</div>                    
                    </div>
                </div>
                <div className="middle_line"></div>
                <div id="clouds">
                    <div className="added_title">Clouds</div>
                    <div className="img_and_data">
                        <div className="icon"><i className="fa-solid fa-cloud"></i></div>
                        <div id="clouds_current">{props.data.all ? props.data.all : ''}</div>
                    </div>
                </div>
           </div>     
            
            <div className="added_data">
                <div id="pressure">
                    <div className="added_title">Pressure</div>
                    <div className="img_and_data">
                    <div className="icon"><i className="fa-solid fa-gauge"></i></div>
                    <div id="pressure_current">{props.data.pressure ? props.data.pressure : ''}</div>
                    </div>
                </div>
                <div className="middle_line"></div>
                <div id="humidity">
                    <div className="added_title">Humidity</div>
                    <div className="img_and_data">
                    <div className="icon"><i className="fa fa-tint" aria-hidden="true"></i></div>
                    <div id="humidity_current">{props.data.humidity ? props.data.humidity : ''}</div>
                    </div>
                </div>
            </div>
            <div className="added_data">
                <div id="wind">
                    <div className="added_title">Wind</div>
                    <div className="img_and_data">
                    <div className="icon"><i className="fa-solid fa-wind"></i></div>
                    <div id="wind_current">{props.data.speed ? props.data.speed : ''}</div>
                    </div>
                </div>
                <div className="middle_line"></div>
                <div id="visibility">
                    <div className="added_title">Visibility</div>
                    <div className="img_and_data">
                    <div className="icon"><i className="fa-solid fa-eye"></i></div>
                    <div id="visibility_current">{props.data.visibility ? props.data.visibility : ''}</div>
                    </div>
                </div>
            </div>
            <div className="added_data">
                <div id="sunrise">
                    <div className="added_title" id="sun">Sunrise</div>
                    <div className="img_and_data">
                    <div id="sunrise_current" className="sun_rise">{formatSunriseHr}:{sunriseMin} {am_pm1}</div>
                    </div>
                </div>
                <div className="middle_line"></div>
                <div id="sunset">
                    <div className="added_title" id="set">Sunset</div>
                    <div className="img_and_data">
                    <div id="sunset_current" className="sun_set">{formatSunsetHr}:{sunsetMin} {am_pm2}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Weather; 