/* import React, { Component } from 'react';
import {
	AppRegistry,
	StyleSheet,
	Text,
	View
} from 'react-native';

export default class AwesomeProject extends Component {
	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.welcome}>
					Welcome to React Native!
				</Text>
				<Text style={styles.instructions}>
					To get started, edit index.android.js
				</Text>
				<Text style={styles.instructions}>
					Double tap R on your keyboard to reload,{'\n'}
					Shake or press menu button for dev menu
				</Text>
		
		<Text style={styles.nigga}>
					{'\n'}
					FUCK YOU, NIGGAS RULE DA STREETS,{'\n'}
					FUCK YOU, I'MA COOL AS BITCH!
				</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF',
	},
	welcome: {
		fontSize: 20,
		textAlign: 'center',
		margin: 10,
	},
	instructions: {
		textAlign: 'center',
		color: '#333333',
		marginBottom: 5,
	},
	nigga: {
		fontSize: 20,
		textAlign: 'center',
		color: '#70185a',
		marginBottom: 15,	
	},
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject); */

import React, { Component } from 'react';
import {
	AppRegistry,
	StyleSheet,
	Text,
	View,
	Image
} from 'react-native';

import {
	Container,		//all the components within <Container>
	Header,			//Renders as Header (navbar) of your screen | Button, Title (Text)
	Content,		//Represents the main content of your screen. ONLY ONE!
	Footer,			//Renders as Footer of your screen.	| FooterTab
	
	Title,		
	FooterTab,
	Body,
	Left,
	Right,
	Button,
	Icon,
	Thumbnail,
	DeckSwiper,
	Card,
	CardItem,
	H1, H2, H3
} from 'native-base';

export default class AwesomeProject extends Component {
	render() {
		return (
			<Container>
				<Header>
					<Left>
						<Button transparent>
							<Icon name='menu' />
						</Button>
					</Left>
					
					<Body>
						<Title>Shop!t</Title>
					</Body>
					<Right />
				</Header>
				
				<Content padder>	
					<Card>
						<CardItem bordered>
							<Thumbnail square source={require('./img/001_01.jpg')} />
							<Body>
								<H2>Fucking CardItem Header</H2>
								<Text note>Some more text</Text>
							</Body>
						</CardItem>
						
						<CardItem>
							<Body>
								<Text>Fucking CardItem Header</Text>
								<Text note>Some more text</Text>
							</Body>
						</CardItem>
					</Card>
					
				</Content>
				
				<Footer>
					<FooterTab>
						<Button>
							<Icon name="cart" />
						</Button>
						
						<Button>
							<Icon name="camera" />
						</Button>
						
						<Button>
							<Icon active name="share" />
						</Button>
					</FooterTab>
				</Footer>
			</Container>
		);
	}
}

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);