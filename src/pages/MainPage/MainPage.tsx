import React, { ChangeEvent, KeyboardEvent, useState } from 'react'
import {
  StyledButton,
  StyledContainer,
  StyledContent,
  StyledFormHelperText,
  StyledList,
  StyledListItemText,
  StyledTextField,
} from './MainPage.styles'
import { CircularProgress, ListItem } from '@mui/material'
import { fetchWeatherForCity } from 'api/weather'
import { Weather, WeatherError } from 'types/weather'

export const MainPage = () => {
  const [city, setCity] = useState('')
  const [error, setError] = useState<WeatherError>()
  const [loading, setLoading] = useState(false)
  const [weatherData, setWeatherData] = useState<Weather>()

  const handleChangeCity = (e: ChangeEvent<HTMLInputElement>) => {
    setCity(e.target.value)
  }

  const handleSubmitHandler = async () => {
    setLoading(true)
    try {
      const data = await fetchWeatherForCity(city)
      if (data) {
        const {
          name,
          weather: [{ description }],
          main: { temp: temperature, humidity, pressure },
        } = data
        setWeatherData({
          humidity,
          pressure,
          temperature,
          name,
          description,
        })
        setError(undefined)
      }
    } catch (e) {
      setError(e as WeatherError)
    } finally {
      setLoading(false)
    }
  }

  const handleKeypress = async (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      await handleSubmitHandler()
    }
  }

  return (
    <StyledContainer>
      <StyledContent>
        <StyledTextField
          onKeyPress={handleKeypress}
          value={city}
          onChange={handleChangeCity}
          label="City Name"
          variant="outlined"
        />
        <StyledButton onClick={handleSubmitHandler} variant="contained">
          Send
        </StyledButton>
      </StyledContent>

      {error && (
        <StyledFormHelperText error>
          {error?.message ?? 'Something wend wrong'}
        </StyledFormHelperText>
      )}

      {loading ? (
        <CircularProgress />
      ) : (
        <StyledList>
          <ListItem divider>
            <StyledListItemText primary="City" />
            <StyledListItemText primary={weatherData?.name ?? '-'} />
          </ListItem>
          <ListItem divider>
            <StyledListItemText primary="Humidity" />
            <StyledListItemText primary={weatherData?.humidity ?? '-'} />
          </ListItem>
          <ListItem divider>
            <StyledListItemText primary="Pressure" />
            <StyledListItemText primary={weatherData?.pressure ?? '-'} />
          </ListItem>
          <ListItem divider>
            <StyledListItemText primary="Description" />
            <StyledListItemText primary={weatherData?.description ?? '-'} />
          </ListItem>
          <ListItem>
            <StyledListItemText primary="Temperature" />
            <StyledListItemText primary={weatherData?.temperature ?? '-'} />
          </ListItem>
        </StyledList>
      )}
    </StyledContainer>
  )
}
