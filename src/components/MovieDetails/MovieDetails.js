import React, {useState, useEffect} from 'react';
import {Link, Redirect} from "react-router-dom";
import Modal from "../Modal";
import Similar from "../Similar/";
import AllGenres from "../AllGenres";
import GotService from '../../services';


import './style.css';
// тестовый файл для подстановки данных
// import result from '../../data.js'; 

const MovieDetails = ({id, changeSearch, getMovies}) => {
	useEffect(() => {
		const getMovie = async (id) => {

			const data = new GotService();
			const movieById = await data.getMoviesById( id )
			console.log('movieById', movieById)
			setMovie(movieById)  // setMovie установит в mov => значение movie; const [mov, setMovie] = useState()
		};
		getMovie(id)
	}, []);  //[] вторым аргументом у useEffect позволяет вызываться ф-ии 1 раз

	const [movie, setMovie] = useState()
	const [isModal, setModal] = useState(false)
	if (!movie) {
		return null
	}
  const onClose = () => setModal(false)
  const redirect = () => {
  	getMovies()
  	return <Redirect to='/' />
  }
	return(
		<>
			<header className="header">
				<div className="content">
					<nav className="nav">
		  			<Link to="/"><div className="logo"></div></Link>
						<form className='headerSearch'>
							<input 
								type="text" 
								placeholder='Type here smth...'
								onChange={changeSearch}
							/>
							<Link to="/">
								<button type="submit" onClick={e => redirect(e)} >
									<i className="fa fa-search"></i>
								</button>
							</Link>
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
					  		<li className="ratingPosition borderItem ">{movie.year}</li>
					  		<li className="ratingPosition borderItem ">{movie.type}</li>
					  		<AllGenres 
					  			movie={movie} 
					  			classes="listRatingPosition" 
					  		/>
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




