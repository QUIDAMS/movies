import React from 'react';
import {Link} from "react-router-dom";

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
			  		<li className="infoItem positionItemRight borderItem">{movie.type}</li>
			  		<li className="infoItem positionItemRight positionItemLeft borderItem">{movie.genres}</li>
			  		<li className="infoItem positionItemRight positionItemLeft">{movie.year}</li>
			  	</ul>
			  	<hr className="line"/>
			  	<p className="award">{movie.awards}</p>
		  	</div>
		  </div>
		</div>
	);
}


export default List;