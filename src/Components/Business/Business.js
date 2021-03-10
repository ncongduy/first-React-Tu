import React from 'react';
import './Business.css';

const bussiness_settings = {
	imageSrc: 'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
	name: 'MarginOtto Pizzeria',
	address: '1010 Paddington Way',
	city: 'Flavortown',
	state: 'NY',
	zipCode: '10101',
	category: 'Italian',
	rating: 4.5,
	reviewCount: 90
}

class Business extends React.Component {
	render() {
		return (
			<div className="Business">
				<div className="image-container">
					<img src='https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg' alt=''/>
				</div>
				<h2>{bussiness_settings.name}</h2>
				<div className="Business-information">
					<div className="Business-address">
						<p>{bussiness_settings.address}</p>
						<p>{bussiness_settings.city}</p>
						<p>{bussiness_settings.state}</p>
					</div>
					<div className="Business-reviews">
						<h3>{bussiness_settings.category}</h3>
						<h3 className="rating">{bussiness_settings.rating}</h3>
						<p>{bussiness_settings.reviewCount}</p>
					</div>
				</div>
			</div>
		)
	}
}

export default Business;