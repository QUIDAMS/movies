import React from 'react';

const Similar = ({similar}) => {
	return(
		<div className="similar" style={{ backgroundImage: `url(${similar.image})` }}>
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
		</div>
	)
}

export default Similar;