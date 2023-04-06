export interface Weather {
  name: string
  description: string
  temperature: number
  humidity: number
  pressure: number
}

export interface WeatherError {
  cod: string
  message: string
}

export interface WeatherItem {
  id: number
  main: string
  description: string
  icon: string
}

export interface WeatherResponseCoord {
  lon: number
  lat: number
}

export interface WeatherResponseMain {
  temp: number
  feels_like: number
  temp_min: number
  temp_max: number
  pressure: number
  humidity: number
  sea_level: number
  grnd_level: number
}

export interface WeatherResponseWind {
  speed: number
  deg: number
  gust: number
}

export interface WeatherResponseClouds {
  all: number
}

export interface WeatherResponseSys {
  type: number
  id: number
  country: string
  sunrise: number
  sunset: number
}

export interface WeatherResponse {
  coord: WeatherResponseCoord
  weather: WeatherItem[]
  base: string
  main: WeatherResponseMain
  visibility: number
  wind: WeatherResponseWind
  clouds: WeatherResponseClouds
  dt: number
  sys: WeatherResponseSys
  timezone: number
  id: number
  name: string
  cod: number
}
