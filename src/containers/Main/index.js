import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Main extends Component {
	render() {
		return (
			<div>
				<h1>Main</h1>
				<ul>
					<li>
						<Link to="/public">Public Page</Link>
					</li>
					<li>
						<Link to="/protected">Protected Page</Link>
					</li>
				</ul>
			</div>
		);
	}
}

export default Main;
