import _ from 'lodash'
import React from 'react'
import {  Image,  Segment, Header, Card, Button } from 'semantic-ui-react'

import '../App.css'



const Projects = ()=> {

	const projects = [
		
        // {
		// 	header: 'Bam Pow',
		// 	description:"This is an application where users can add to a continuously growing database of comic books. Users will be able to 'favorite' their favorite authors, characters, illustrators, and publishers. These 'favorites' guide the user to other comics they may be interested in. Never miss an issue featuring your favorite character again! Admins have the ability to delete and edit entries making this a great app for comic book shops!",
		// 	meta:'Django, Python, PostgreSQL, React, Semantic UI',
		// 	image:"",
		// 	href: '',
		// 	signIn: ''
			
		// },
        
        {
			header: 'Honey Badges',
			description:"Honey Badges is an application where users can keep a running list of activites to complete and earn 'badges' for completing multiple activites of the same type. Together, users form a community of badge-earners who can opt to share their accomplishments and use eachother's activities for inspiration. We hope the social aspect of creating and sharing activities will motivate users in a positive way. At the same time, users will have the option to make specific activities on their tasklist private. Users who need some help getting started can also choose to randomly generate an activity within specified parameters.",
			meta:'Node/Express, Mongoose, MongoDB, axios, Bored API, React, Semantic UI',
			image:"honey-badges.png",
			href: 'https://gleaming-platypus-fa2f95.netlify.app/',
			signIn: 'Username: bb@hive.com | Password: buzzbuzz'
			
		},

		{
			header:"Reading Rainbow",
			description:"Reading Rainbow is an app inspired my own love of reading and is meant to harken back to the childhood joy of earning rewards based on how many books you read each summer. It is used to track what books you have read and what you are wanting to read next, as well as which ones you personally own.",
			meta:"HTML5, CSS, Javascript, Express, Liquid, Mongoose",
			image:"reading-rainbow.png",
			href: "https://readingrainbow.fly.dev/auth/login",
			signIn: 'Username: dreamer | Password: book',
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
	<Card key={project.header} style={{backgroundColor: 'rgb(255,255,250)'}}>
	
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
				
			>
				<Button basic color='brown'>Check Out the Live Site</Button>
			</a>
		
		</Card.Content>
	</Card>

 ))
	return(
		<div>
			<Segment fluid style={{ backgroundColor: '255,255,250' }} verticalAlign='justify' color='brown'>
				<Header size='huge' textAlign='center' color='brown' font-family='FinkHeavy' >Projects</Header>
			</Segment>
			<Segment fluid style={{ padding: '3em', marginBottom:'2em', backgroundColor: 'rgb(129,241,247)' }} verticalAlign='justify' color='brown'>
				<Card.Group  centered stackable itemsPerRow={2} >
					{projectCards}
				</Card.Group>
			</Segment>
		</div>
	)
}

export default Projects