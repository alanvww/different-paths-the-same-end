import React from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useLayoutEffect, useRef, useState } from 'react';
import Text from './components/text';
import './App.css';

gsap.registerPlugin(ScrollTrigger);

function App() {
	return (
		<>
			<div className="first-panel no-select">
				<h1>殊途</h1>
				<h1>同歸</h1>
			</div>
			<Text />
			<div className="last-panel">
				<h1>The End</h1>
			</div>
		</>
	);
}

export default App;
