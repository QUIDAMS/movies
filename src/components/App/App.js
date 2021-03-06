import React, {Component} from 'react';
import GotService from '../../services';
import Loading from '../Loading/';

import List from '../List';
import {
  HashRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import MovieDetails from '../MovieDetails';
import './index.css';
// import result from '../../data.js' // файл с тестовыми данными

export default class  App extends Component {

	constructor(props){
		super(props);
		this.state = {
			error: null,
      movies: [],
      value: '',
      loading: false,
		}
	}

	async getMovies (e) {
		this.setState({movies: [], loading: true})
		const {  value } = this.state;
		if(e){
			e.preventDefault();
		}
		
		const data = new GotService();
		const movies = await data.getMovies( value )
		this.setState({ loading: false, movies: movies })
	}

  changeSearch = (e) => {
  	this.setState({value: e.target.value})
  }

	render(){
		const { error, movies, value, loading } = this.state;
    if (error) {
      return <div>Ошибка: {error.message}</div>;
    } else {
    	return (
				<Router  basename='/'>
					<main>
						<Switch>
							<Route path='/' exact >
								<div className="container">
							  	<div className="container-video" >
				            <video autoPlay="autoplay" loop="loop" muted className='video' >
				              <source 
				              	src='https://drive.google.com/uc?export=download&confirm=no_antivirus&id=1eoWRcPP_tj_89kGM0xt2mIj15MOH1N6w' 
				              	type="video/mp4" 
				              />
				            </video>
				            <div className='content-video'>
			                <div className={`${movies.length === 0 ? 'subContent' : 'subListContent'}`}  >
			                  <div className="field">
													<h2 className="positionH2">Unlimited movies, TV shows, and more.</h2>
													<h3 className="positionH3">Watch anywhere. Cancel anytime.</h3>
													<div className="searchForm">
													  <form>
														  <input 
														  	value={value} 
														  	type="text" 
														  	placeholder="Type here smth..."
														  	onChange={this.changeSearch}
														  />
														  <button type="submit" onClick={(e) => this.getMovies(e)} >
														  </button>
													  </form>
													  {loading && <Loading />}
													</div>
												</div>
			                </div>
							        <div>
												{movies && movies.map(movie => <List key={movie.id} movie={movie}/>)}
											</div>
				            </div>
					        </div>
								</div>
							</Route>
							<Route path='/movies/:id' render={
	              (elem) => {
	                return <MovieDetails 
	                	key={elem.match.params.id}
	                	id={elem.match.params.id}
	                	changeSearch={this.changeSearch}
	                	getMovies={(e) => this.getMovies(e)}

	                />
	              } 
	            }/>
			      </Switch>
            <footer className="footer">
							Richbee Shows
						</footer>
					</main>
				</Router>
			)
		}
	}
}

  