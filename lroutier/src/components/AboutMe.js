import React from 'react';
import {Divider, Grid, Image, Segment, Header } from 'semantic-ui-react';

const AboutMe = ()=> {

	return(
		<div>
	
		
		<Segment fluid style={{ padding: '3em 0em' }} vertical color='brown'>
		<Grid container stackable verticalAlign='middle'>
			<Grid.Row>
			<Grid.Column width={8}>
				<Header as='h1' style={{ fontSize: '2em' }}>
				About Me
				</Header>
				<p style={{ fontSize: '1.33em' }}>
				Test
				</p>
				
				
			</Grid.Column>
			<Grid.Column floated='right' width={6}>
                {/* <Image size='huge' src={`${process.env.PUBLIC_URL}/images/header.jpeg`} /> */}
			</Grid.Column>
			</Grid.Row>
			
		</Grid>
		</Segment>
		
	</div>

	)
}

export default AboutMe