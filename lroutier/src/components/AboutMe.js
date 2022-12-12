import React from 'react';
import { Grid, Image, Segment } from 'semantic-ui-react';

const AboutMe = ()=> {

	return(
		<div>
	
            <Segment fluid style={{ padding: '3em 0em', backgroundColor: 'rgb(157,252,176)'}} vertical color='brown'>
                <Grid container stackable verticalAlign='middle'>
                    <Grid.Row>
                        <Grid.Column width={6}>
                            <Image size='huge' circular src={`${process.env.PUBLIC_URL}/images/profile.jpeg`} />
                        </Grid.Column>
                        <Grid.Column floated='right' width={10}>
                            <Image size='huge' src={`${process.env.PUBLIC_URL}/images/aboutchat.png`} />
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment>
		
	</div>

	)
}

export default AboutMe