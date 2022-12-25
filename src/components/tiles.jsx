import React from 'react';
import anime from 'animejs';

export default class Tiles extends React.Component {
	state = {
		columns: 0,
		rows: 0,
		total: 1,
	};

	handleStagger = (i) => {
		const { columns, rows } = this.state;
		const el = i.target.id;
		anime({
			targets: '.grid-item',
			/*
			backgroundColor: `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(
				Math.random() * 255
			)}, ${Math.floor(Math.random() * 255)},0.2)`,
			*/
			backgroundColor: `hsl(${Math.floor(Math.random() * 360)}, 20%, 40%)`,
			delay: anime.stagger(50, { grid: [columns, rows], from: el }),
		});
	};

	getGridSize = () => {
		const columns = Math.floor(document.body.clientWidth / 50);
		const rows = Math.floor(document.body.clientHeight / 50);

		this.setState({ columns, rows, total: rows * columns });
		anime({
			targets: '.grid-item',
			backgroundColor: '#fff',
			duration: 0,
			easing: 'linear',
		});
	};

	componentDidMount() {
		this.getGridSize();
		window.addEventListener('resize', this.getGridSize);
	}
	render() {
		const { total, columns, rows } = this.state;
		console.log([columns, rows], total);
		return (
			<div id="grid">
				{[...Array(total)].map((x, i) => (
					<div
						key={i}
						className="grid-item"
						id={i}
						onClick={(i) => this.handleStagger(i)}
					/>
				))}
			</div>
		);
	}
}
