import React, {useState} from 'react';
import {Link} from "react-router-dom";
import Modal from "../Modal";
import Similar from "../Similar/";
import AllGenres from "../AllGenres";

import './style.css';
// тестовый файл для подстановки данных
// import result from '../../data.js'; 


const MovieDetails = ({id, workingKey}) => {
	console.log('workingKey', workingKey)
	const fetchMovie = (id, workingKey) => {
		return fetch(`https://imdb-api.com/en/API/Title/${workingKey}/${id}/FullActor,Posters,Trailers`)
			.then(res => res.json())
			.then(result => setMovie(result))
			// тестовый файл для подстановки данных
		// setMovie(result) 
	}

	const [movie, setMovie] = useState()
	const [isModal, setModal] = useState(false)
	if (!movie) {
		fetchMovie(id, workingKey)
		return null
	}
  const onClose = () => setModal(false)

	return(
		<>
			<header className="header">
				<div className="content">
					<nav className="nav">
		  			<Link to="/"><div className="logo"></div></Link>
						<form className='headerSearch'>
							<input type="text" placeholder='Type here smth...'/>
							<button type="submit"  >
								<i className="fa fa-search"></i>
							</button>
						</form>
					</nav>			
				</div>
			</header>
			<section 
				className="description descriptionPoster" 
				style={{ 
					backgroundImage: `linear-gradient(to left, rgba(0, 0, 0, 0.2), 50%, rgba(0, 0, 0, 1)), 
					url(${movie.posters.backdrops[0].link})`
				}}
			>
				<div className='content'>
					<div className="film">
						<h1 className="filmTitle">{movie.title}</h1>
						<div className="tags tagsPosition">
							<div className="ratingDetails">
				  			<p>
				  				<span className="textButtonPosition">IMDb</span><span>{movie.imDbRating}</span>
				  			</p>
				  		</div>
				  		<ul className="infoList">
					  		<AllGenres movie={movie} classes="ratingPosition  borderItem" />
					  		<li className="ratingPosition  borderItem">{movie.type}</li>
					  		<li className="ratingPosition ">{movie.year}</li>
					  	</ul>
						</div>
						<button className="buttonWatch" onClick={() => setModal(true)}>
							<span 
								className="buttonWatchText"
							>
								Watch
							</span>
						</button>
            <Modal
          		header={false}
              visible={isModal}
              onClose={onClose}
              content={	
								<div>
								  <div style={{position: 'relative', paddingTop: '56.25%'}}>
								    <iframe 
								    	src={movie.trailer.linkEmbed} 
								    	frameborder="0" 
								    	allowfullscreen
								      style={{
								      	position: 'absolute', 
								      	top: 0, 
								      	left: 0, 
								      	width: 100 + '%', 
								      	height: 100 + '%'
								      }} />
								  </div>
								</div>
							}
            />
						<p className="awardFilm">{movie.awards}</p>
					</div>
				</div>
			</section>
			<section className="page">
				<div className="content">
					<div className="pageDetails">
						<h3 className="pageTitle">Watch {movie.title} on Richbee Shows</h3>
						<p className="pageDescription pageDescriptionPosition">{movie.plot}</p>
						<h5 className="alsoLike alsoLikePosition">You may also like</h5>
					</div>
					<div className="similarsBox similarsBoxPosition">
						{movie.similars.map(similar => <Similar similar={similar}/>)}
					</div>
				</div>
			</section>
			
		</>
	)
}

export default MovieDetails;




