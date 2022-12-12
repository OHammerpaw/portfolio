import React from 'react'
import { Image, Grid, Container, Header, Icon, IconGroup } from 'semantic-ui-react'

const PortfolioHeader = () => {

  return(
    <div>
        <Container fluid align='center' style={{backgroundColor: 'rgb(255,255,250)'}} >
            <Image style={{marginBottom: '.5em', marginTop:'.5em'}} src={`${process.env.PUBLIC_URL}/images/header.png`} />
        </Container>
        <Container fluid  textAlign='center' className='header' style={{backgroundColor: 'rgb(255,255,250)'}}>
                {/* <Header as='h1' content='Lauren Routier' style={{fontfamily: 'FinkHeavy',fontSize: '4em', marginTop: '1em', color:'rgb(196, 141, 63)'}}> */}
                <Header>
                {/* <Header />
                <Header.Subheader>
                Full Stack Developer
                </Header.Subheader> */}
                <Header.Subheader>
                    <IconGroup  size='big' style={{marginBottom: '.5em', marginTop:'.5em', backgroundColor: 'rgb(255,255,250)'}}>
                    <a 
                        href='https://github.com/OHammerpaw' 
                        target='_blank'
                        aria-label='Github'>
                        <Icon className='devicon-github-original'  color='teal' size='large'/>
                    </a>
                    <a 
                        href='https://www.linkedin.com/in/lauren-routier/' 
                        target='_blank'
                        aria-label='LinkedIn'>
                        <Icon className='devicon-linkedin-plain'  color='brown' size='large'/>
                    </a>
                    <a 
                        href={`${process.env.PUBLIC_URL}/Resume.pdf`} 
                        target='_blank'
                        aria-label='Resume'>
                        <Icon name='file alternate'  color='yellow' size='large'/>
                    </a>
                    </IconGroup>
            </Header.Subheader>
        </Header>
        
        </Container>
    </div>
)
}
export default PortfolioHeader