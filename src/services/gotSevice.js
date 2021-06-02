// export default class GotService {
// 	constructor(){
// 		this._apiBase = 'http://www.omdbapi.com/';
// 	}
// 	getResource = async (url) => {
// 		const res = await fetch(`${this._apiBase}${url}`);
// 		if(!res.ok){
// 			throw new Error(`Could not fetch ${url}, status: ${res.status}`);
// 		}
// 		return await res.json();
// 	};
// 	getAllMovies = async () => {
// 		// console.log(this); обязательно!! в this будет GotService
// 		let res = await this.getResource('?s=[title]&apikey=35b223ad')
// 		return res.map(item => item)
// 	}
// }