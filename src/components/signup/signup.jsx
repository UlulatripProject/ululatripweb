import React from 'react'
import Rodal from 'rodal'
import styled from 'react-emotion'
import Grid from '@material-ui/core/Grid'
import theme from '../../styles/constants'
import Form from './Form'
import { TiSocialFacebook, TiSocialGooglePlus } from 'react-icons/ti'

// include styles
import 'rodal/lib/rodal.css'

const Header = styled('div')`
  margin-bottom: 16px;
`
const SecondHeader = styled('div')``

const Button = styled.button`
  height: 40px;
  width: 225px;
  border-radius: 5px;
  margin-top: 24px;
  cursor: pointer;
`

const ButtonSignUp = styled.button`
  height: 44px;
  width: 290px;
  border-radius: 5px;
  margin-top: 24px;
  cursor: pointer;
`

const Line = styled.div`
  box-sizing: border-box;
  height: 2px;
  width: 150px;
  border: 1px solid #d4d4d4;
`

const HaveAccount = styled.div`
  margin-top: 16px;
`

const Link = styled.span`
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
  color: #fd7575;
`

class Signup extends React.Component {
  constructor(props) {
    super(props)
    this.state = { visible: false }
  }

  componentDidMount() {
    this.props.onRef(this)
  }

  show() {
    this.setState({ visible: true })
  }

  hide() {
    this.setState({ visible: false })
  }

  render() {
    return (
      <div>
        <Rodal
          visible={this.state.visible}
          onClose={this.hide.bind(this)}
          width={625}
          height={670}
        >
          <Header className="register">Sign Up</Header>
          <SecondHeader className="registerline">
            Register so you can feel the best{' '}
            <span style={{ color: theme.colors.primary }}>experience</span> with
            Ululatrip.
          </SecondHeader>
          <Grid
            container
            direction="row"
            justify="space-evenly"
            alignItems="center"
          >
            <Button className="regbluebut">
              <Grid
                container
                direction="row"
                alignItems="center"
                justify="center"
              >
                <TiSocialFacebook size={30} />
                REGISTER WITH FACEBOOK
              </Grid>
            </Button>
            <Button className="regredbut">
              <Grid
                container
                direction="row"
                alignItems="center"
                justify="center"
              >
                <TiSocialGooglePlus size={30} />
                REGISTER WITH GOOGLE
              </Grid>
            </Button>
          </Grid>
          <Grid
            container
            direction="row"
            alignItems="center"
            justify="space-around"
            style={{ marginTop: '36px' }}
          >
            <Line />
            <SecondHeader className="optionalreg">
              Or Register With Email
            </SecondHeader>
            <Line />
            <Form />
            <ButtonSignUp className="signupbut">SIGN UP</ButtonSignUp>
          </Grid>
          <Grid container direction="row" alignItems="center" justify="center">
            <HaveAccount className="link">
              Already have an account? <Link>Sign In</Link>
            </HaveAccount>
          </Grid>
        </Rodal>
      </div>
    )
  }
}

export default Signup
