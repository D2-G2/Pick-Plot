interface OverviewProps {
  overview: string;
  poster_path: string;
  tagline: string;
}

export default function Overview({ overview, poster_path, tagline }: OverviewProps) {
  return (
    <div className="flex mx-10 my-5">
      <div className="w-48 h-auto object-cover">
        <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt="" className="max-w-full" />
      </div>
      <div className="w-full mx-10">
        <h2 className="text-lg font-semibold">{tagline ? tagline : '줄거리'}</h2>
        <p className="text-sm mt-2">{overview}</p>
      </div>
    </div>
  );
}
