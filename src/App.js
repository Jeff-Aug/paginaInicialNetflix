import React, { useEffect, useState } from "react";
import MovieRow from "./components/MovieRow";
import Header from "./components/Header";

import FearturedMovie from "./components/FearturedMovie";
import './App.css'
import Tmdb from "./Tmdb";


export default function App() {
  const [movieList, setMovieList] = useState([]);
  const [featuredData, setFeaturedData] = useState(null)
  //barra  no topo da pagina (remover quando é rolada para baixo)
  const [blackHeader,setBlackHeader] = useState(false)

  useEffect(() => {
    const loadAll = async () => {
      //Pegando a lista TOTAL em alta,ação, comedia ...
      let list = await Tmdb.getHomeList();
      setMovieList(list);

      //Pegando o Featured (filme em destaque)
      let originals = list.filter(i => i.slug === 'originals')
      //Sortendo o filme em destaque
      let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length-1))
      let chosen = originals[0].items.results[randomChosen]
      let chosenInfo = await Tmdb.getMovieInfo(chosen.id,'tv')

      setFeaturedData(chosenInfo)
      
    }
    loadAll();
  }, [])
  useEffect(()=>{
    const scrollListener = () =>{
      if(window.scrollY > 10){
        setBlackHeader(true)
      }else{
        setBlackHeader(false)
      }

    }
    window.addEventListener('scroll',scrollListener);

    return ()=>{
      window.removeEventListener('scroll',scrollListener)
    }
  })

  return (
    <>


        <div className="progressbar">

        </div>
        <div className="scrollPath">
          
        </div>
      <div className="page ">
        <Header black={blackHeader}/>
        {featuredData &&
          <FearturedMovie item={featuredData} />

        }

        <section className="lists">
          {movieList.map((item, key) => (
            <div>
              <MovieRow key={key} title={item.title} items={item.items} />

            </div>

          ))}
        </section>

            <footer>
              Direito de imagem Netflix
              <br/>
              Dados pegos no Site Themoviedb.org
              <br/>
              Autor: Jefferson Augusto
            </footer>
            {movieList.length <=0 &&

              <div className="loading">
                <img src="http://s2.glbimg.com/6JNMArQr1wJuMFMnI2u4SMwfFzk=/0x0:999x563/695x392/s.glbimg.com/po/tt2/f/original/2015/02/20/buffering-animation.gif" alt="Carregando"></img>

            </div>
            }


      </div>
    </>

  )
}



