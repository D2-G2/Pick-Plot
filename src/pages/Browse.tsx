import ContentsBox from '../components/ContentsBox';
import Layout from '../components/Layout';

export default function Browse() {
  const apiKey = import.meta.env.VITE_API_KEY;
  const popUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=ko-KR`;
  const koPopUrl = `https://api.themoviedb.org/3/discover/movie?include_adult=false&&primary_release_year=2024|primary_release_year=2023&api_key=${apiKey}&language=ko-KR&page=1&sort_by=popularity.desc&with_original_language=ko&without_genres=10749`;
  const actionUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=ko-KR&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=28`;

  return (
    <Layout>
      <ContentsBox title="🔥 인기 영화" url={popUrl} />
      <ContentsBox title="🇰🇷 한국 영화" url={koPopUrl} />
      <ContentsBox title="🎬 액션 영화" url={actionUrl} />
    </Layout>
  );
}
