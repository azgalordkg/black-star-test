import { makeStyles } from '@material-ui/core/styles'

export default makeStyles(
  () => ({
    header: {
      position: 'absolute',
      top: 0,
      left: 0,
      padding: '0',
      backgroundColor: '#7474ff',
    },
    headerContent: {
      display: 'flex',
      justifyContent: 'space-between',
    },
  }),
  { name: 'Header' }
)
