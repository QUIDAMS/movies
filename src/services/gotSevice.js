
export default class GotService {
  constructor(){
    this._apiBase = 'https://imdb-api.com/en/API';
    this.apiKeys = [
      'k_tihm83sb', 'k_j7k21h7v', 'k_6saccxi8', 'k_axtondoz', 'k_bcgyddx4',   
    ];
    this.retries = 0;
  }
  async getMovies( value ){
  	const searchTitle = await fetch(`${ this._apiBase }/SearchTitle/${ this.apiKeys[this.retries] }/${value}`)
  	const serchTitleJson = await searchTitle.json();
  	if (serchTitleJson.errorMessage !== '') {
      this.retries = this.retries + 1;
      return this.getMovies(value);
    } else {
      const movies = await Promise.all(serchTitleJson.results.map( movie => {
	  		return this.getMoviesById(movie.id)
	  	}))
	  	return movies;
    }
  }
	async getMoviesById(id){
		const searchTitle = await fetch((`${ this._apiBase }/Title/${ this.apiKeys[this.retries] }/${id}/FullActor,Posters,Trailers`))
		return await searchTitle.json();
	}
}

// const data = new GotService;
// const mov = await data.getMovies('it');
// const m = await data.getMoviesById('tt1396484');
