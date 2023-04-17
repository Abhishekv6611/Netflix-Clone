import { API_KEY } from "./Component/constance/constance"
export const originals=`discover/tv?api_key=${API_KEY}&with_networks=213`
export const trendings=`trending/all/week?api_key=${API_KEY}&language=en-US`
export const actions=`discover/movie?api_key=${API_KEY}&with_genres=28`
export const Comedy=`discover/movie?api_key=${API_KEY}&with_genres=35`
export const documentry=`discover/movie?api_key=${API_KEY}&with_genres=99`
export const Horror=`discover/movie?api_key=${API_KEY}&with_genres=27`
export const Romance=`discover/movie?api_key=${API_KEY}&with_genres=10749`
export const Toprrated=`/movie/top_rated?api_key=${API_KEY}&language=en-US`
export const Upcoming=`https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`