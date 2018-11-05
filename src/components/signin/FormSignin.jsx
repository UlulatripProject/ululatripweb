import React from 'react'
import classNames from 'classnames'
import styled from 'react-emotion'
import PropTypes from 'prop-types'
import {
  withStyles,
  MuiThemeProvider,
  createMuiTheme,
} from '@material-ui/core/styles'
import IconButton from '@material-ui/core/IconButton'
import Grid from '@material-ui/core/Grid'
import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'
import InputAdornment from '@material-ui/core/InputAdornment'
import FormControl from '@material-ui/core/FormControl'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import Visibility from '@material-ui/icons/Visibility'
import VisibilityOff from '@material-ui/icons/VisibilityOff'

const styles = theme => ({
  margin: {
    margin: theme.spacing.unit,
  },
  withoutLabel: {
    marginTop: theme.spacing.unit * 3,
  },
  textField: {
    width: '460px',
  },
  colorcheckbox: {
    marginLeft: '66px',
    '&$checked': {
      color: '#FD7575',
    },
  },
  checked: {},
})

const theme = createMuiTheme({
  overrides: {
    MuiInput: {
      underline: {
        '&:after': {
          //underline color when textfield is inactive
          borderBottom: '2px solid #FD7575',
        },
      },
    },
  },
})

const Link = styled.span`
  margin-left: 33%;
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`

class Form extends React.Component {
  state = {
    password: '',
    showPassword: false,
    checked: false,
  }

  handleChange = name => event => {
    this.setState({ [name]: event.target.checked })
  }

  handleChange = prop => event => {
    this.setState({ [prop]: event.target.value })
  }

  handleClickShowPassword = () => {
    this.setState(state => ({ showPassword: !state.showPassword }))
  }

  render() {
    const { classes } = this.props

    return (
      <Grid
        container
        direction="column"
        justify="space-evenly"
        alignItems="center"
        style={{ marginTop: '16px' }}
      >
        <FormControl className={classNames(classes.margin, classes.textField)}>
          <MuiThemeProvider theme={theme}>
            <InputLabel htmlFor="email" style={{ color: '#FD7575' }}>
              Email
            </InputLabel>
            <Input id="email" />
          </MuiThemeProvider>
        </FormControl>
        <FormControl className={classNames(classes.margin, classes.textField)}>
          <MuiThemeProvider theme={theme}>
            <InputLabel htmlFor="password" style={{ color: '#FD7575' }}>
              Password
            </InputLabel>
            <Input
              id="password"
              type={this.state.showPassword ? 'text' : 'password'}
              value={this.state.password}
              onChange={this.handleChange('password')}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="Toggle password visibility"
                    onClick={this.handleClickShowPassword}
                  >
                    {this.state.showPassword ? (
                      <Visibility />
                    ) : (
                      <VisibilityOff />
                    )}
                  </IconButton>
                </InputAdornment>
              }
            />
          </MuiThemeProvider>
        </FormControl>
        <Grid
          container
          direction="row"
          alignItems="center"
          style={{ marginTop: '16px' }}
        >
          <FormControlLabel
            control={
              <Checkbox
                checked={this.state.checkedA}
                onChange={this.handleChange('checked')}
                value="checked"
                classes={{
                  root: classes.colorcheckbox,
                  checked: classes.checked,
                }}
              />
            }
            label="Remember Me"
          />
          <Link className="link">Forgot Password?</Link>
        </Grid>
      </Grid>
    )
  }
}

Form.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Form)
