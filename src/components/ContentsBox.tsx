import { useEffect, useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

interface ContentBoxProps {
  title: string;
}

interface Content {
  id: number;
  title: string;
  poster_path: string;
}

export default function ContentsBox({ title }: ContentBoxProps) {
  const [contents, setContents] = useState([]);
  const [startIndex, setStartIndex] = useState(0);

  const prevContents = () => {
    if (startIndex === 0) return;
    setStartIndex(startIndex - 5);
  };

  const nextContents = () => {
    if (startIndex + 5 >= contents.length) return;
    setStartIndex(startIndex + 5);
  };

  useEffect(() => {
    fetch('https://api.themoviedb.org/3/movie/popular?api_key=14e87cdd982ab893bf2ec332b64c606e&language=ko-KR')
      .then((res) => res.json())
      .then((json) => setContents(json.results))
      .catch((err) => console.error('error:' + err));
  }, []);

  return (
    <div className="p-5 m-5 relative">
      <h2 className=" font-semibold">{title}</h2>
      <div className="my-2 flex justify-between p-3 bg-slate-100 bg-opacity-80 rounded-xl">
        {startIndex > 0 && (
          <button
            onClick={prevContents}
            className="absolute left-6 top-1/2 bg-slate-300 bg-opacity-60 rounded-full p-1.5"
          >
            <FaArrowLeft color="white" />
          </button>
        )}
        {contents.slice(startIndex, startIndex + 5).map((content: Content) => (
          <div key={content.id}>
            <div className="text-center m-2">{content.title}</div>
            <div className=" mx-2 justify-center">
              {/* image */}
              <img src={`https://image.tmdb.org/t/p/w500${content.poster_path}`} alt={content.title} />
            </div>
          </div>
        ))}
        {startIndex + 5 < contents.length ? (
          <button
            onClick={nextContents}
            className="absolute right-6 top-1/2 bg-slate-300 bg-opacity-60 rounded-full p-1.5"
          >
            <FaArrowRight color="white" />
          </button>
        ) : null}
      </div>
    </div>
  );
}
