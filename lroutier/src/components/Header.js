import React from 'react'
import { Image, Grid, Container, Header, Icon, IconGroup } from 'semantic-ui-react'



const PortfolioHeader = () => {


  return(
  <div>
    <Container fluid  align='center' >
        <Image style={{marginBottom: '.5em', marginTop:'.5em'}} src={`${process.env.PUBLIC_URL}/images/header.png`} />
    </Container>
    <Container fluid  textAlign='center' className='header'>
        {/* <Header as='h1' content='Lauren Routier' style={{fontfamily: 'FinkHeavy',fontSize: '4em', marginTop: '1em', color:'rgb(196, 141, 63)'}}> */}
        <Header>
        {/* <Header />
        <Header.Subheader>
        Full Stack Developer
        </Header.Subheader> */}
        <Header.Subheader>
            <IconGroup  size='big' style={{marginBottom: '.5em', marginTop:'.5em'}}>
            <a 
                href='https://github.com/OHammerpaw' 
                target='_blank'
                aria-label='Github'>
                <Icon className='devicon-github-original'  color='teal'/>
            </a>
            <a 
                href='https://www.linkedin.com/in/lauren-routier/' 
                target='_blank'
                aria-label='LinkedIn'>
                <Icon className='devicon-linkedin-plain'  color='brown'/>
            </a>
            <a 
                href={`${process.env.PUBLIC_URL}/Resume.pdf`} 
                target='_blank'
                aria-label='Resume'>
                <Icon name='file alternate'  color='yellow'/>
            </a>
            </IconGroup>
    </Header.Subheader>
  </Header>
 
  </Container>
  </div>
)
}
export default PortfolioHeader