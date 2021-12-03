import React from 'react';
import Navigation from './Screens/Navigation';
import { NativeBaseProvider , View } from 'native-base';
import { useState, useEffect } from 'react';

export default function App() {
	const [coins, setCoins] = useState([]);

	const getData = async () => {
		const response = await fetch(
			`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false`
		);
		const data = await response.json();
		setCoins(data);
	};

	useEffect(() => {
		getData();
	}, []);

	return (
		<NativeBaseProvider>
			<Navigation coins={coins} />
		</NativeBaseProvider>
	);
}
