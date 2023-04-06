import { API_KEY } from 'constants/api'
import axios from './api'
import { WeatherResponse } from 'types/weather'

export const fetchWeatherForCity = async (
  city: string
): Promise<WeatherResponse> => {
  try {
    const response = await axios.get('/weather', {
      params: {
        q: city,
        appid: API_KEY,
        units: 'metric',
      },
    })

    return response.data
  } catch (error) {
    console.error('Error fetching weather data:', error)
    throw error
  }
}
