import React, { Suspense, lazy } from 'react';
import { useCallback, useLayoutEffect, useRef, useState } from 'react';
import { AdobeFonts } from 'react-adobe-fonts';
import Maps from './components/maps';
import Text from './components/text';
import EngText from './components/engText';
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

	const [eng, setEng] = useState(false);

	const showEng = () => {
		setEng(!eng);
	};

	return (
		<>
			<AdobeFonts kitId="lkf2tqm" onLoading={onLoading} onActive={onActive} />
			<Suspense fallback={<div>Loading...</div>}>
				<div className="first-panel no-select">
					<Tiles />
					<span className="title">
						<h1>殊途同歸</h1>
						<h1 className="eng">Different paths, the same end.</h1>
					</span>
				</div>

				<button className="viewTextButton no-select" onClick={showEng}>
					{eng ? '中文版' : 'English Version'}
				</button>

				<Maps eng={eng} />
				{eng ? <EngText /> : <Text />}
			</Suspense>
			<Footer />
		</>
	);
}

export default App;
