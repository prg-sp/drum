import React from 'react';
import Pad from './Pad';

class Pads extends React.Component {
	constructor(props) {
		super(props);
		console.log(props);
	}
	render() {
		let ban;
		if (this.props.power) {
			ban = this.props.bank.map((pad) => {
				return (
					<Pad
						skaicius={pad.keyCode}
						trigger={pad.keyTrigger}
						id={pad.id}
						url={pad.url}
						toggleInfo={this.props.toggleInfo}
						volume={this.props.volume}
						power={this.props.power}
					/>
				);
			});
		} else {
			ban = this.props.bank.map((pad) => {
				return (
					<Pad
						skaicius={pad.keyCode}
						trigger={pad.keyTrigger}
						id={pad.id}
						url="#"
						toggleInfo={this.props.toggleInfo}
						volume={this.props.volume}
						power={this.props.power}
					/>
				);
			});
		}
		return <div className="pad-bank">{ban}</div>;
	}
}

export default Pads;
