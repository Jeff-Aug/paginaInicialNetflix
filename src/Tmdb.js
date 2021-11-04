//Arquivo responsável por fazer a ligação com API, sou seja, que for mudar de API apenas mudamos esse arquivo
const API_KEY = '9a283c41f5dae768674afdb79c448f51';
const API_BASE = 'https://api.themoviedb.org/3';
/**
 * Aqueles serão busca do na API, para cada um será uma consulta diferente 
 * 
 * ---Originais netflix 
 * ---Recomendado NetFlix 
 * ---Em alta (top rated)
 * ---ação
 * ---comédia
 * ---romance
 * ---Documentário
 * 
 */



const basicFetch = async (endpoint)=>{
//função responsável por busca os dados dentro da api
    const req = await fetch(`${API_BASE}${endpoint}`);
    const json = await req.json();
    return json;

}

export default {
    getHomeList: async () => {
        return [
            {
                slug: 'originals',
                title: 'Originais do NetFlix',
                items: await basicFetch(`/discover/tv?with_network=213&language=pt-BR&api_key=${API_KEY}`)

            },
            {
                slug: 'trending',
                title: 'Recomendados para Você',
                items: await basicFetch(`/trending/all/week?language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'toprated',
                title: 'Em alta',
                items: await basicFetch(`/movie/top_rated?language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'action',
                title: 'Ação',
                items: await basicFetch(`/discover/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'comedy',
                title: 'Comédia',
                items: await basicFetch(`/discover/movie?with_genres=35&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'horror',
                title: 'Terror',
                items: await basicFetch(`/discover/movie?with_genres=27&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'romance',
                title: 'Romance',
                items: await basicFetch(`/discover/movie?with_genres=10749&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'documentary',
                title: 'Documetários',
                items: await basicFetch(`/discover/movie?with_genres=99&language=pt-BR&api_key=${API_KEY}`)
            }
        ]
    },
    getMovieInfo: async (movieId, type) => {
        let info = {}

        //verifica se chegou algo
        if(movieId){
            switch(type){
                case 'movie':
                    info = await basicFetch(`/movie/${movieId}?language=pt-BR&api_key=${API_KEY}`)
                break;
                case 'tv':
                    info = await basicFetch(`/tv/${movieId}?language=pt-BR&api_key=${API_KEY}`)
                break;
                default:
                    info = null
                break;
                }
        }
        return info
    }

}

