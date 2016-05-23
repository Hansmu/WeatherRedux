import { combineReducers } from 'redux';
import WeatherReducer from './reducer_weather';

const rootReducer = combineReducers({
  cityWeatherData: WeatherReducer
});

export default rootReducer;
