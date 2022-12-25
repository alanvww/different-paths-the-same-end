import React from 'react';
import InnerImageZoom from 'react-inner-image-zoom';
import '../styles/maps.css';
import '../styles/InnerImageZoom.css';

export default function Maps({ eng }) {
	function getImageUrl(name) {
		return new URL(`../assets/img/${name}.webp`, import.meta.url).href;
	}

	return (
		<>
			<div className="imageContainer">
				<div className="imageBox">
					{eng ? (
						<span className="engFont">Cheng Du</span>
					) : (
						<span className="chtFont">成都</span>
					)}
					<InnerImageZoom
						src={getImageUrl('Cheng-Du-OG')}
						zoomSrc={getImageUrl('CD')}
					/>
				</div>
				<div className="imageBox">
					{eng ? (
						<span className="engFont">Zhan Jiang</span>
					) : (
						<span className="chtFont">湛江</span>
					)}
					<InnerImageZoom
						src={getImageUrl('Zhan-Jiang-OG')}
						zoomSrc={getImageUrl('ZJ')}
					/>
				</div>
				<div className="imageBox">
					{eng ? (
						<span className="engFont">Xi An</span>
					) : (
						<span className="chtFont">西安</span>
					)}
					<InnerImageZoom
						src={getImageUrl('Xi-An-OG')}
						zoomSrc={getImageUrl('XA')}
					/>{' '}
				</div>
				<div className="imageBox">
					{eng ? (
						<span className="engFont">Lu Zhou</span>
					) : (
						<span className="chtFont">瀘州</span>
					)}
					<InnerImageZoom
						src={getImageUrl('Lu-Zhou-OG')}
						zoomSrc={getImageUrl('LZ')}
					/>
				</div>
			</div>
			<div className="imageContainer">
				{' '}
				<div className="imageBox">
					{eng ? (
						<span className="engFont">Chong Qing</span>
					) : (
						<span className="chtFont">重慶</span>
					)}

					<InnerImageZoom
						src={getImageUrl('Chong-Qing-OG')}
						zoomSrc={getImageUrl('CQ')}
					/>
				</div>
				<div className="imageBox">
					{eng ? (
						<span className="engFont">Long Nan</span>
					) : (
						<span className="chtFont">隴南</span>
					)}
					<InnerImageZoom
						src={getImageUrl('Long-Nan-OG')}
						zoomSrc={getImageUrl('LN')}
					/>
				</div>
				<div className="imageBox">
					{eng ? (
						<span className="engFont">Rui Li</span>
					) : (
						<span className="chtFont">瑞麗</span>
					)}
					<InnerImageZoom
						src={getImageUrl('Rui-Li-OG')}
						zoomSrc={getImageUrl('RL')}
					/>{' '}
				</div>
				<div className="imageBox">
					{eng ? (
						<span className="engFont">Hei He</span>
					) : (
						<span className="chtFont">黑河</span>
					)}
					<InnerImageZoom
						src={getImageUrl('Hei-He-OG')}
						zoomSrc={getImageUrl('HH')}
					/>
				</div>
			</div>
		</>
	);
}
