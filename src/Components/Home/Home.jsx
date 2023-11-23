import React, { useEffect, useState } from 'react';
import axios from "axios";
//import {Biplay,AiOutlinePlus}from "react-icons"
import { AiOutlinePlus } from "react-icons/ai"
import { BiPlay } from "react-icons/bi";
import { Link } from 'react-router-dom';
const apiKey = "34a9e24cda14e1b7243290309b802cb2";
const url = "https://api.themoviedb.org/3";
const upcoming = "upcoming"; // Corrected endpoint for upcomingMovies movies
const imgUrl = "https://image.tmdb.org/t/p/original"
const nowplaying = "now_playing"
const popular = "popular"
const toprated = "top_rated"
const Card = ({ img }) => {
  return (
    <img src={img} alt="cover" className="card" />
  );
}

const Row = ({ title, arr = [] }) => {
  return (
    <div className="row">
      <h2>{title}</h2>
      <div>
        {arr.map((item, index) => (
          <Card key={index} img={`${imgUrl}${item.poster_path}`} />
        ))}
      </div>
    </div>
  );
}

const Home = () => {
  const [upcomingMovies, setUpcoming] = useState([]); // State for storing upcomingMovies movies

  useEffect(() => {
    const fetchUpcoming = async () => {
      const { data: { results } } = await axios.get(`${url}/movie/${upcoming}?api_key=${apiKey}`);
      console.log(results); // Log the data to see what you get
      setUpcoming(results);

    };

    fetchUpcoming();
  }, []);
  const [TopratedMovies, setToprated] = useState([]); // State for storing upcomingMovies movies

  useEffect(() => {
    const fetchToprated = async () => {
      const { data: { results } } = await axios.get(`${url}/movie/${toprated}?api_key=${apiKey}`);
      console.log(results); // Log the data to see what you get
      setToprated(results);

    };

    fetchToprated();
  }, []);
  const [PopularMovies, setPopular] = useState([]); // State for storing upcomingMovies movies

  useEffect(() => {
    const fetchPopular = async () => {
      const { data: { results } } = await axios.get(`${url}/movie/${popular}?api_key=${apiKey}`);
      console.log(results); // Log the data to see what you get
      setPopular(results);

    };

    fetchPopular();
  }, []);
  const [nowplayingmovies, setNowplaying] = useState([]); // State for storing upcomingMovies movies

  useEffect(() => {
    const fetchNowplaying = async () => {
      const { data: { results } } = await axios.get(`${url}/movie/${nowplaying}?api_key=${apiKey}`);
      console.log(results); // Log the data to see what you get
      setNowplaying(results);

    };

    fetchNowplaying();
  }, []);
  return (
    <section className='Home'>

      <div className='banner' style={{
        backgroundImage: PopularMovies[0] ? `url(${`${imgUrl}/${PopularMovies[0].poster_path}`})` : " rgb(16, 16, 16);"
      }}>
     
        <h1>{PopularMovies[0]?.original_title}</h1>
        <p>{PopularMovies[0]?.overview}</p>
        <div>
          <button><BiPlay />Play</button>
          <button>My List<AiOutlinePlus /></button>
        </div>
      </div>

      <Row title={"Upcoming Movies"} arr={upcomingMovies} />
      <Row title={"Now playing Movies"} arr={nowplayingmovies} />
      <Row title={"Popular"} arr={PopularMovies} />
      <Row title={"Top Rated"} arr={TopratedMovies} />
    </section>
  );
}


export default Home;
