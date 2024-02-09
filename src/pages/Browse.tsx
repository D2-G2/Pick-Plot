import ContentsBox from '../components/ContentsBox';
import Layout from '../components/Layout';

export default function Browse() {
  const apiKey = import.meta.env.VITE_API_KEY;

  const pop = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=ko-KR`;

  // Country
  const koPop = `https://api.themoviedb.org/3/discover/movie?include_adult=false&&primary_release_year=2024|primary_release_year=2023&api_key=${apiKey}&language=ko-KR&page=1&sort_by=popularity.desc&with_original_language=ko&without_genres=10749`;

  // Genre
  const action = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=ko-KR&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=28`;
  const crime = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=ko-KR&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=80`;
  const thriller = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=ko-KR&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=53`;
  const sf = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=ko-KR&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=878`;

  // watch providers
  const netFlix = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=ko-KR&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_providers=8&watch_region=KR`;
  const disney = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=ko-KR&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_providers=337&watch_region=KR`;
  const wavve = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=ko-KR&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_providers=356&watch_region=KR`;
  const watcha = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=ko-KR&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_providers=97&watch_region=KR`;
  const apple = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=ko-KR&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_providers=350&watch_region=KR`;

  return (
    <Layout>
      <ContentsBox title="🔥 인기 영화" url={pop} />

      <ContentsBox title="🇰🇷 한국 영화" url={koPop} />
      <ContentsBox title="🎬 액션 영화" url={action} />
      <ContentsBox title="🔫 범죄 영화" url={crime} />
      <ContentsBox title="👻 스릴러 영화" url={thriller} />
      <ContentsBox title="👽 SF 영화" url={sf} />

      <ContentsBox title="🍿 넷플릭스" url={netFlix} />
      <ContentsBox title="🏰 디즈니" url={disney} />
      <ContentsBox title="📺 웨이브" url={wavve} />
      <ContentsBox title="🍿 왓챠" url={watcha} />
      <ContentsBox title="🍎 Apple TV" url={apple} />
    </Layout>
  );
}
