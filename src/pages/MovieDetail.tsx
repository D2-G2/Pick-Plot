import { useParams } from 'react-router';
import BackdropImage from '../components/MovieDetail/BackdropImage';
import Layout from '../components/Layout';
import { useEffect, useState } from 'react';
import TitleBox from '../components/MovieDetail/TitleBox';
import Overview from '../components/MovieDetail/Overview';

export default function MovieDetail() {
  interface Content {
    title: string;
    release_date: string;
    runtime: number;
    backdrop_path: string;
    overview: string;
    poster_path: string;
    tagline: string;
  }

  const { id } = useParams<{ id: string }>();
  const [content, setContent] = useState<Content>();
  const apiKey = import.meta.env.VITE_API_KEY;

  const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=ko-KR`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((json) => setContent(json))
      .catch((err) => console.error('error:' + err));
  }, [id]);

  if (!content) {
    return <div>Loading...</div>;
  }

  return (
    <Layout>
      <BackdropImage url={`https://image.tmdb.org/t/p/original/${content.backdrop_path}`}>
        <TitleBox title={content.title} releaseDate={content.release_date} runtime={content.runtime} />
      </BackdropImage>
      <Overview overview={content.overview} poster_path={content.poster_path} tagline={content.tagline} />
    </Layout>
  );
}
