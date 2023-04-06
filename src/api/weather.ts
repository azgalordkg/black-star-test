import { API_KEY } from 'constants/api'
import axios from './api'

export const fetchWeatherForCity = async (city: string) => {
  try {
    const response = await axios.get('/weather', {
      params: {
        q: city,
        appid: API_KEY,
        units: 'metric', // or 'imperial' for Fahrenheit
      },
    })

    return response.data
  } catch (error) {
    console.error('Error fetching weather data:', error)
    throw error
  }
}
