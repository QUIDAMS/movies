import React, {Component} from 'react';

import sample from '../../video/AWAKENING.mp4';

import List from '../List';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import MovieDetails from '../MovieDetails';
import './index.css';

export default class  App extends Component {
	constructor(props){
		super(props);
		this.state = {
			error: null,
      isLoaded: true,
      movies: [],
      movieId: null,
      value: '',
		}
	}
	getMovies = (e) => {
		e.preventDefault()
    fetch(`https://imdb-api.com/en/API/SearchTitle/k_6saccxi8/${this.state.value}`)
      .then(res => res.json())
      .then(
        (result) => {
        	this.setState({movies: []})
        	result.results.map(result => 
          fetch(`https://imdb-api.com/en/API/Title/k_6saccxi8/${result.id}/FullActor,Posters,Trailers`)
          	.then(res => res.json())
          	.then(
          	(result) => {
          		this.setState({movies: [...this.state.movies, result]})
          	}
        	)
        )},
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  changeSearch = (e) => {
  	this.setState({value: e.target.value})
  }

	render(){
		const { error, isLoaded, movies, value } = this.state;
    if (error) {
      return <div>Ошибка: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Загрузка...</div>;
    } else {
    	return (
				<Router>
					<main>
						<Switch>
							<Route path='/' exact >
								<div className="container">

							  	<div className="container-video" >
				            <video autoPlay="autoplay" loop="loop" muted className='video' >
				                <source src={sample} type="video/mp4" />
				                Your browser does not support the video tag.
				            </video>
				            <div className='content-video'>
				                <div className='subContent' >
				                  <div className="field">
														<h2 className="positionH1">Unlimited movies, TV shows, and more.</h2>
														<h3 className="positionH2">Watch anywhere. Cancel anytime.</h3>
														<div className="searchForm">
														  <form>
															  <input 
															  	value={value} 
															  	type="text" 
															  	placeholder="Type here smth..."
															  	onChange={this.changeSearch}
															  />
															  <button type="submit" onClick={this.getMovies} >
															  </button>
														  </form>
														</div>
													</div>
				                </div>
				            </div>
					        </div>
									{movies && movies.map(movie => <List movie={movie}/>)}
								</div>
							</Route>
							<Route path='/movies/:id' render={
	              (elem) => { 
	                return <MovieDetails id={elem.match.params.id}/>
	              } 
	            }/>
			      </Switch>
					</main>
				</Router>
			)
		}
	}
}
  