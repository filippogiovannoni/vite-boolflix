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
    starVote(number) {
        return Math.round(number / 2)
    },
    getFlag(content) {
        return [store.flag_base + `${content.original_language === 'en' ? 'flag-icon-gb' : 'flag-icon-' + content.original_language}`]
    },
    getImage(content) {
        return content.poster_path === null ? store.base_img_url + content.backdrop_path : store.base_img_url + content.poster_path
    },
    hideTitle(content) {
        return content.title === content.original_title ? 'd-none' : 'd-block'
    },
    getOverview(content) {
        return content.overview === '' ? 'd-none' : 'd-block'
    },
    noImage(content) {
        return content.poster_path === null && content.backdrop_path === null ? 'd-none' : 'd-block';
    },
    flag_base: 'flag-icon '
})