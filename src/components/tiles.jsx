import './tiles.module.css';
import React from 'react';
import { gsap } from 'gsap';
import { useEffect, useRef, useState } from 'react';

export default function Tiles() {
	const wrapper = useRef(null);

	let columns = 0,
		rows = 0,
		toggled = false;

	const toggle = () => {
		toggled = !toggled;

		document.body.classList.toggle('toggled');
	};

	const handleOnClick = (index) => {
		toggle();
		/*
		gsap.to({
			targets: '.tile',
			opacity: toggled ? 0 : 1,
		});
        */
	};

	const createTile = (index) => {
		const tile = React.createElement(
			'div',
			{ style: { opacity: `${toggled ? 0 : 1}` } },
			{ className: 'tile' },
			{ onClick: () => handleOnClick(index) }
		);

		return tile;
	};

	const createTiles = (quantity) => {
		Array.from(Array(quantity)).map((tile, index) => {
			wrapper.current.appendChild(createTile(index));
		});
	};

	const createGrid = () => {
		wrapper.current.innerHTML = '';

		const size = window.innerWidth > 800 ? 100 : 50;
		console.log(size);

		columns = Math.floor(window.innerWidth / size);
		rows = Math.floor(window.innerHeight / size);

		wrapper.current.style.setProperty('--columns', columns);
		wrapper.current.style.setProperty('--rows', rows);

		createTiles(columns * rows);
	};

	useEffect(() => {
		createGrid();
		window.addEventListener('resize', createGrid);
	}, []);

	return (
		<>
			<div id="tiles" ref={wrapper}></div>

			<h1 id="title" className="centered">
				The name of the game is
				<span className="fancy">Chess</span>.
			</h1>
		</>
	);
}
