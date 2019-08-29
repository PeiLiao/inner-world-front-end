import React from 'react';
import Svg from './logo.svg';
import './index.less';

class HomePage extends React.Component<any, any> {
	public render() {
		return (
			<div className="App">
				<header className="App-header">
					<img src={Svg} className="App-logo" alt="logo" />
					{/* <a
						className="App-link"
						href="/content"
						target="_self"
						rel="noopener noreferrer"
					>
						Enter
					</a> */}
					<input/>
					<a
						className="App-link"
						href="/login"
						target="_self"
						rel="noopener noreferrer"
					>
						Enter
					</a>
					<a
					className="App-link"
					href="/login"
					target="_self"
					rel="noopener noreferrer"
					>去注册</a>
					<a
					className="App-link"
					href="/login"
					target="_self"
					rel="noopener noreferrer"
					>去登陆</a>
				</header>
			</div>
		);
	}
}

export default HomePage;
