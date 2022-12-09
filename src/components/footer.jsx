import React from 'react';
import { useRef, useEffect } from 'react';

export default function Footer() {
	const footerRef = useRef(null);
	useEffect(() => {
		footerRef.current.innerHTML =
			`Present by Katudio &copy;` + new Date().getFullYear();
	}, []);

	return <footer ref={footerRef}></footer>;
}
