import styled from '@emotion/styled'
import {
  Box,
  Button,
  FormHelperText,
  List,
  ListItemText,
  TextField,
} from '@mui/material'

export const StyledContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
`

export const StyledContent = styled(Box)`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 700px;
  margin-bottom: 40px;
`

export const StyledTextField = styled(TextField)`
  width: 68%;
`

export const StyledButton = styled(Button)`
  width: 30%;
`

export const StyledList = styled(List)`
  width: 100%;
  max-width: 700px;
  background: rgb(231, 235, 240);
`

export const StyledListItemText = styled(ListItemText)`
  width: 50%;
`

export const StyledFormHelperText = styled(FormHelperText)`
  margin-bottom: 20px;
  font-size: 18px;
`
