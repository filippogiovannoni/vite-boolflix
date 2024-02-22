import { reactive } from "vue";
import axios from 'axios'

export const store = reactive({
    base_api_movie_url: 'https://api.themoviedb.org/3/search/movie?api_key=91f2dc118b557f534c070e6855ef9feb&query=',
    trending_movies_url: 'https://api.themoviedb.org/3/trending/movie/week?api_key=91f2dc118b557f534c070e6855ef9feb',
    films: [],
    getMovieUrl(url) {
        axios
            .get(url)
            .then((response) => {
                this.films = response.data.results
                console.log(this.films);
            })
    },
    flag_base: 'flag-icon flag-icon-'
})