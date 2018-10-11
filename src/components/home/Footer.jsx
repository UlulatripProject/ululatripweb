import React from 'react'
import styled from 'react-emotion'
import { MdCopyright } from 'react-icons/md'
import logogrey from '../../assets/icons/logo/UlulGrey.png'

const Container = styled('div')`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
`

const LogoGrey = styled('img')`
  width: 64px;
  margin-top: 56px;
  text-align: center;
  align-self: center;
  margin-bottom: 24px;
  cursor: pointer;
`

const LinkWrap = styled('div')`
  display: flex;
  flex-direction: row;
  margin-top: 24px;
`

const Link = styled('div')`
  margin-right: 62px;
  cursor: pointer;

  &:hover{
    text-decoration: underline;
  }
`

const Footer = () => {
  return (
    <Container>
      <LogoGrey src={logogrey} />
      <LinkWrap className="footlink">
        <Link>About Us</Link>
        <Link>Be a Trip Host</Link>
        <Link>How We Works</Link>
        <Link>Contact</Link>
        <Link>F.A.Q</Link>
        <Link>Trips</Link>
      </LinkWrap>
      <LinkWrap className="footlink" style={{ marginBottom: '24px', marginTop: '8px' }}>
        <Link>Terms & Conditions</Link>
        <Link>Sitemap</Link>
        <Link>
          <MdCopyright /> Ululatrip
        </Link>
      </LinkWrap>
    </Container>
  )
}

export default Footer
