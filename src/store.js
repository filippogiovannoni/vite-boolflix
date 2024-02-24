import axios from 'axios';
import { reactive } from "vue";

export const store = reactive({
    base_api_movie_url: 'https://api.themoviedb.org/3/search/movie?api_key=91f2dc118b557f534c070e6855ef9feb&query=',
    trending_movies_url: 'https://api.themoviedb.org/3/trending/movie/week?api_key=91f2dc118b557f534c070e6855ef9feb',
    base_api_tv_url: 'https://api.themoviedb.org/3/search/tv?api_key=91f2dc118b557f534c070e6855ef9feb&query=',
    base_img_url: 'https://image.tmdb.org/t/p/w500/',
    movies: [],
    tvSeries: [],
    getMovieUrl(url) {
        axios
            .get(url)
            .then((response) => {
                this.movies = response.data.results
                console.log(this.movies);
            })
    },
    getTvUrl(url) {
        axios
            .get(url)
            .then((response) => {
                this.tvSeries = response.data.results
                console.log(this.tvSeries);
            })
    },
    flag_base: 'flag-icon '
})