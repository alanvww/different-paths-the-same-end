import React, { Suspense } from 'react';
import { useState } from 'react';
import Maps from './components/maps';
import Text from './components/text';
import EngText from './components/engText';
import Footer from './components/footer';
import Tiles from './components/tiles';
import './App.css';
import './styles/tiles.css';

function App() {
	const [eng, setEng] = useState(false);

	const showEng = () => {
		setEng(!eng);
	};

	return (
		<>
			<Suspense fallback={<div>Loading...</div>}>
				<div className="first-panel no-select">
					<Tiles />
					<span className="title">
						<h1>殊途同歸</h1>
						<h1 className="eng">Different paths, the same end.</h1>
					</span>
				</div>

				<button className="viewTextButton no-select" onClick={showEng}>
					{eng ? (
						<span className="chtFont">中文版</span>
					) : (
						<span className="engFont">English Version</span>
					)}
				</button>

				<Maps eng={eng} />
				{eng ? <EngText /> : <Text />}
			</Suspense>
			<Footer />
		</>
	);
}

export default App;
