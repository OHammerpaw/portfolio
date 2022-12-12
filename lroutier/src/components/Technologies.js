import React from 'react'
import { Icon, Segment, Header, Container } from 'semantic-ui-react'



const Technology = ()=> {

	

	return(
		<div>
			<Header size='huge' textAlign='center' color='brown'>Skills</Header>
			<Segment vertical color='brown' style={{backgroundColor: 'rgb(157,252,176)'}}>
			<Container fluid textAlign='center' style={{backgroundColor: 'rgb(157,252,176)'}}>
				
				<Icon className='devicon-express-original' size ='huge' color='brown'/>

				<Icon className='devicon-vscode-plain' size='huge' color='brown'/>
			
				<Icon className='devicon-mongodb-plain-wordmark' size ='huge' color='brown'/>
			
				<Icon className='devicon-javascript-plain' size ='huge' color='brown'/>
			
				<Icon className='devicon-django-plain colored' size ='huge' color='brown'/>
			
				<Icon className='devicon-postgresql-plain' size ='huge' color='brown'/>
			
				<Icon className='devicon-nodejs-plain' size ='huge' color='brown'/>
			
				<Icon className='devicon-python-plain' size ='huge' color='brown'/>
			
				<Icon className='devicon-github-original' size ='huge' color='brown'/>
			
				<Icon name='css3 alternate' size ='huge' color='brown'/>
		
				<Icon name='html5' size ='huge' color='brown'/>
			
				<Icon name='react' size ='huge' color='brown'/>
			
				<Icon className='devicon-sass-original' size ='huge' color='brown'/>
			
				<Icon className='devicon-bootstrap-plain' size ='huge' color='brown'/>
			
				<Icon className='devicon-canva-plain' size ='huge' color='brown'/>
		
				</Container>
			
			</Segment>
		
		
	</div>

	)
}

export default Technology