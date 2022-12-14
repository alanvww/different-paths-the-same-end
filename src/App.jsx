import React from 'react';
import { useCallback, useLayoutEffect, useRef, useState } from 'react';
import { AdobeFonts } from 'react-adobe-fonts';
import Text from './components/text';
import Footer from './components/footer';
import Tiles from './components/tiles';
import './App.css';
import './styles/tiles.css';

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

	// 			<AdobeFonts kitId="lkf2tqm" onLoading={onLoading} onActive={onActive} />

	return (
		<>
			<div className="first-panel no-select">
				<Tiles />
				<span className="title">
					<h1>殊途同歸</h1>
					<h1 className="eng">Different paths, the same end.</h1>
				</span>
			</div>
			<Text />
			<Footer />
		</>
	);
}

export default App;
