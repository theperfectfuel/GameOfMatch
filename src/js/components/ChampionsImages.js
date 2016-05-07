import React, { Component } from 'react';
import Radium from 'radium';
import Image from './ImageChampions';
​
class ImagesChampions extends Component {
	render() {
		return (
			<div style={styles.base}>
				<Image kda={this.props.kda}/>
                <Image />
                <Image />
			</div>
		);
	}
};
​
​
​
​
​
let styles = {
    image1 = {
        backgroundImage: 'url(http://ddragon.leagueoflegends.com/cdn/6.9.1/img/champion/Ashe.png)'
    }
	base: {
		backgroundColor: 'red',
		fontStyle
	}
};
​
​
export default Radium(ProfileBase);