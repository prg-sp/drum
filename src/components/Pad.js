import React from 'react';

const hover1 = {
	background: 'gold',
	color: 'white',
};

const hover2 = {
	background: 'white',
	color: 'gold',
};

class Pad extends React.Component {
	constructor(props) {
		super(props);
		//console.log(this.props);
		this.state = {
			hoveris: hover1,
		};
		this.groti = this.groti.bind(this);
	}

	how = () => {
		if (this.props.power) {
			if (this.state.hoveris.background === 'gold') {
				this.setState({ hoveris: hover2 });
				console.log('powerON white');
			} else {
				this.setState({ hoveris: hover1 });
				console.log('powerON gold');
			}
		} else if (this.state.hoveris.background === 'gold') {
			this.setState({ hoveris: hover2 });
			console.log('powerOFF white');
		} else {
			this.setState({ hoveris: hover1 });
			console.log('powerOFF ogld');
		}
	};

	componentDidMount() {
		document.addEventListener('keydown', this.handleKeyPress);
	}

	componentWillUnmount() {
		document.removeEventListener('keydown', this.handleKeyPress);
	}

	handleKeyPress = (e) => {
		if (e.keyCode === this.props.skaicius) {
			this.groti();
			console.log(e.keyCode + ' klavos mygtukai veikia');
		}
	};

	groti() {
		const daina = document.getElementById(this.props.trigger);
		daina.currentTime = 0;
		daina.play();
		daina.volume = this.props.volume;
		this.props.toggleInfo(this.props.id);

		this.how();
		setTimeout(() => {
			this.how();
		}, 100);
		console.log('groja');
	}

	render() {
		return (
			<div
				style={this.state.hoveris}
				id={this.props.skaicius}
				className="drum-pad"
				onClick={this.groti}
			>
				<audio id={this.props.trigger} className="clip" src={this.props.url} />
				{this.props.trigger}
			</div>
		);
	}
}

export default Pad;
