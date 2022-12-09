import React from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useCallback, useLayoutEffect, useRef, useState } from 'react';
import { AdobeFonts } from 'react-adobe-fonts';
import Text from './components/text';
import Footer from './components/footer';
import './App.css';

gsap.registerPlugin(ScrollTrigger);

function App() {
	const [isLoading, setIsLoading] = useState(false);
	const [isActive, setIsActive] = useState(false);

	const onLoading = useCallback(() => {
		setIsLoading(true);
	}, []);

	const onActive = useCallback(() => {
		setIsLoading(false);
		setIsActive(true);
	}, []);

	return (
		<>
			<AdobeFonts kitId="lkf2tqm" onLoading={onLoading} onActive={onActive} />

			<div className="first-panel no-select">
				<h1>殊途</h1>
				<h1>同歸</h1>
			</div>
			<Text />
			<Footer />
		</>
	);
}

export default App;
