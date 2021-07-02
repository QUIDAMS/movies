import React from 'react';
import {Link} from "react-router-dom";

const Similar = ({similar}) => {
	

	return(
		<div className="similar" style={{ backgroundImage: `url(${similar.image})` }}>
				<Link to={`/movies/${similar.id}`}>
					<div className="info infoSimilarSize">
						<h5 className="similarTitle ">{similar.title}</h5>
				  	<p className="similarItem">{similar.genres}</p>
				  	<p className="similarDescription">{similar.plot}</p>
				  	<div className="rating ">
		  			<p>
		  				<span className="textButtonPosition">IMDb</span><span>{similar.imDbRating}</span>
		  			</p>
		  		</div>
				</div>
			</Link>
		</div>
	)
}

export default Similar;