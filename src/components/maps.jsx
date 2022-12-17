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
					<span>{eng ? 'Cheng Du' : '成都'}</span>
					<InnerImageZoom
						src={getImageUrl('Cheng-Du-OG')}
						zoomSrc={getImageUrl('CD')}
					/>
				</div>
				<div className="imageBox">
					<span>{eng ? 'Zhan Jiang' : '湛江'}</span>
					<InnerImageZoom
						src={getImageUrl('Zhan-Jiang-OG')}
						zoomSrc={getImageUrl('ZJ')}
					/>
				</div>
				<div className="imageBox">
					<span>{eng ? 'Xi An' : '西安'}</span>
					<InnerImageZoom
						src={getImageUrl('Xi-An-OG')}
						zoomSrc={getImageUrl('XA')}
					/>{' '}
				</div>
				<div className="imageBox">
					<span>{eng ? 'Lu Zhou' : '瀘州'}</span>
					<InnerImageZoom
						src={getImageUrl('Lu-Zhou-OG')}
						zoomSrc={getImageUrl('LZ')}
					/>
				</div>
			</div>
			<div className="imageContainer">
				{' '}
				<div className="imageBox">
					<span>{eng ? 'Chong Qing' : '重慶'}</span>
					<InnerImageZoom
						src={getImageUrl('Chong-Qing-OG')}
						zoomSrc={getImageUrl('CQ')}
					/>
				</div>
				<div className="imageBox">
					<span>{eng ? 'Long Nan' : '隴南'}</span>
					<InnerImageZoom
						src={getImageUrl('Long-Nan-OG')}
						zoomSrc={getImageUrl('LN')}
					/>
				</div>
				<div className="imageBox">
					<span>{eng ? 'Rui Li' : '瑞麗'}</span>
					<InnerImageZoom
						src={getImageUrl('Rui-Li-OG')}
						zoomSrc={getImageUrl('RL')}
					/>{' '}
				</div>
				<div className="imageBox">
					<span>{eng ? 'Hei He' : '黑河'}</span>
					<InnerImageZoom
						src={getImageUrl('Hei-He-OG')}
						zoomSrc={getImageUrl('HH')}
					/>
				</div>
			</div>
		</>
	);
}
