import React from 'react';

const AllGenres = ({ movie, classes}) => {
	console.log('movie', movie)
	if(!movie.genres){
		return null;
	}
	const array = movie.genres.split(',');
	return (
		array.map((genre, i) => {
			const last = i === array.length - 1;
			return (
				<li className= {classes} >
					{genre}{!last && <span>,&nbsp;</span>} 
		  	</li>
		  );
		})
	)
} 

export default AllGenres;

