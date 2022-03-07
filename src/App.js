//import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import './App.css';
import React, { useEffect, useState } from 'react';
import Pads from './components/Pads';
import { bankOne, bankTwo } from './assets/bank';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			power: true,
			bank: bankOne,
			info: '',
			volume: '.8',
		};
	}

	changeVolume = (e) => {
		if (this.state.power) {
			this.setState({ volume: e.target.value });
			this.setState({
				info: 'volume: ' + Math.round(e.target.value * 100) + ' %',
			});
			setTimeout(() => {
				this.setState({ info: '' });
			}, 1000);
			console.log(this.state.volume);
		}
	};

	toggleInfo = (x) => {
		if (this.state.power) {
			this.setState({ info: x });
		}
	};

	togglePower = () => {
		this.setState({ power: !this.state.power, info: '' });
	};

	toggleEffect = () => {
		if (this.state.power) {
			if (this.state.bank === bankOne) {
				this.setState({ bank: bankTwo, info: 'Heater stuff' });
			} else {
				this.setState({ bank: bankOne, info: 'Piano deal' });
			}
		}
	};

	render() {
		const powerSwitch = this.state.power
			? {
					float: 'right',
					background: 'grey',
			  }
			: {
					float: 'left',
					background: 'red',
			  };

		const effectSwitch =
			this.state.bank === bankOne
				? { float: 'left', background: 'grey' }
				: {
						float: 'right',
						background: 'grey',
				  };

		console.log('1----');
		const ll = [].slice.call(document.getElementsByClassName('clip'));

		ll.forEach((x) => console.log(x));
		console.log('2----');
		return (
			<div class="app-wrapper">
				<div id="drum-machine">
					<Pads
						bank={this.state.bank}
						toggleInfo={this.toggleInfo}
						volume={this.state.volume}
						power={this.state.power}
					/>

					<div className="volume-wrapper">
						<input
							className="volume"
							type="range"
							min="0"
							max="1"
							step=".01"
							value={this.state.volume}
							onChange={this.changeVolume}
						/>
					</div>

					<div id="display">
						<div className="power">
							<p> Power is: {this.state.power ? 'On' : 'Off'}</p>
							<div className="kva-wrapper" onClick={this.togglePower}>
								<div className="kva" style={powerSwitch}></div>
							</div>
						</div>

						<div className="info-wrapper">{this.state.info}</div>

						<div className="effect">
							<p>Bank</p>
							<div className="kva-wrapper" onClick={this.toggleEffect}>
								<div className="kva" style={effectSwitch}></div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
