import React from 'react';
import {Link} from "react-router-dom";
import AllGenres from "../AllGenres";

const List = ({movie}) => {
	return(
		
		<div className="list">
			<div className="element">
		  	<div className="poster">
		  		<Link to={`/movies/${movie.id}`}><img src={movie.image} alt=""/></Link>
		  	</div>
		  	<div className="info infoPosition">
		  		<div className="titleAndRating">
		  			<Link to={`/movies/${movie.id}`}><h4>{movie.title}</h4></Link>
			  		<div className="rating">
			  			<p>
			  				<span className="textButtonPosition">IMDb</span><span>{movie.imDbRating}</span>
			  			</p>
			  		</div>
			  	</div>
			  	<ul className="infoList">
			  		<li className="infoItem positionItemRight positionLeft576 borderItem">{movie.type}</li>
			  		<li className="infoItem positionItemRight borderItem positionItemLeft">{movie.year}</li>
			  		<AllGenres 
			  			movie={movie} 
			  			classes="infoItem positionItemLeft"
			  		/>
			  	</ul>
			  	<hr className="line positionLine"/>
			  	<p className="award positionLeft576">{movie.awards}</p>
		  	</div>
		  </div>
		</div>
	);
}


export default List;