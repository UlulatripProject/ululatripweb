import React from 'react'
import Rodal from 'rodal'
import styled from 'react-emotion'
import theme from '../../styles/constants'

// include styles
import 'rodal/lib/rodal.css'

const Header = styled('div')``

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
        <Rodal visible={this.state.visible} onClose={this.hide.bind(this)}>
          <Header className="register">Register</Header>
        </Rodal>
      </div>
    )
  }
}

export default Signup
