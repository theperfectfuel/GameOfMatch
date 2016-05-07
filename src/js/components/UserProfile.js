import React, { Component } from 'react';
import Radium from 'radium';
import ImagesChampions from './ImagesChampions';
​
class ProfileBase extends Component {
	render() {
		return (
			<div style={styles.base}>
				<h1>Primary Position</h1>
				<h1>Second Position</h1>
                <ImagesChampions />
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
	base: {
		backgroundColor: 'red',
		fontStyle
	}
};
​
​
export default Radium(ProfileBase);