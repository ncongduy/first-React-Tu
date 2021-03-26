import React from 'react';
import './App.css';
import BusinessList from '../Business/BusinessList';
import SearchBar from '../SearchBar/SearchBar';

const bussiness = {
	imageSrc: 'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
	name: 'MarginOtto Pizzeria',
	address: '1010 Paddington Way',
	city: 'Flavortown',
	state: 'NY',
	zipCode: '10101',
	category: 'Italian',
	rating: 4.5,
	reviewCount: 90
};

const businesses = [bussiness,bussiness,bussiness,bussiness,bussiness,bussiness];

class App extends React.Component {
	render() {
		return (
			<div className="App">
				<h1>ravenous</h1>
				<SearchBar />
				<BusinessList businesses={businesses} /> 
			</div>
		);
	}
}

export default App;
