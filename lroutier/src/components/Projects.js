import _ from 'lodash'
import React from 'react'
import {  Image,  Segment, Header, Card, Button } from 'semantic-ui-react'

import '../App.css'



const Projects = ()=> {

	const projects = [
		{
			header: 'Honey Badges',
			description:"",
			meta:'',
			image:"honey-badges.png",
			href: 'https://gleaming-platypus-fa2f95.netlify.app/',
			signIn: ''
			
		},

		{
			header:"Reading Rainbow",
			description:"",
			meta:"",
			image:"reading-rainbow.png",
			href: "https://readingrainbow.fly.dev/auth/login",
			signIn: '',
		},

		{
			header:"The Mothman",
			description:"A horror clue-collecting game made using canvas. Use your flashlight to find all the clues before the Mothman finds you first! (Sound on for a scare)",
			meta:"JavaScript, Canvas, HTML 5, and CSS 3",
			image:'mothman.png',
			href:'https://ohammerpaw.github.io/The-Mothman/'
		}

	]
	
 const projectCards = projects.map(project =>(
	<Card key={project.header}>
	
			<Image src={`${process.env.PUBLIC_URL}/images/${project.image}`} wrapped ui={false}/>
	
		<Card.Content>
		
		
		<Card.Header size='huge'>{project.header}</Card.Header>
		<Card.Meta>{project.meta}</Card.Meta>
		<Card.Description>{project.description}</Card.Description><br></br>
		<Card.Meta>{project.signIn}</Card.Meta>
		</Card.Content>
		<Card.Content extra className='ui one button'>
		<a
			href={project.href}
			target='_blank'
			rel="noopener"
			aria-label={project.header}
			
		><Button basic color='brown'>Check Out the Live Site</Button></a>
		
		</Card.Content>
	</Card>

 ))
	return(
		<div>
			<Segment fluid style={{ padding: '3em', marginBottom:'2em', backgroundColor: 'rgb(129,241,247)' }} verticalAlign='justify' color='brown'>
				<Header size='huge' textAlign='center' color='brown' font-family='FinkHeavy' >Projects</Header>
				<Card.Group  centered stackable itemsPerRow={2} >
					{projectCards}
				</Card.Group>
			</Segment>
		</div>
	)
}

export default Projects