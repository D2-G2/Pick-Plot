import Layout from '../components/Layout';
import ContentsBox from '../components/ContentsBox';

export default function Home() {
  const apiKey = import.meta.env.VITE_API_KEY;
  const today = `https://api.themoviedb.org/3/trending/movie/day?api_key=${apiKey}&language=ko-KR`;
  const week = `https://api.themoviedb.org/3/trending/movie/week?api_key=${apiKey}&language=ko-KR`;
  const nowPlaying = `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=ko-KR&page=1&region=KR`;
  const topRated = `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=ko-KR&page=1&region=KR`;
  const upcoming = `https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}&language=ko-KR&page=1&region=KR`;

  return (
    <Layout>
      <ContentsBox title="현재 상영중인 영화" url={nowPlaying} />
      <ContentsBox title="오늘의 영화" url={today} />
      <ContentsBox title="이 주의 영화" url={week} />
      <ContentsBox title="평점 높은 영화" url={topRated} />
      <ContentsBox title="개봉 예정 영화" url={upcoming} />
    </Layout>
  );
}
