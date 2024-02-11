interface TitleBoxProps {
  title: string;
  releaseDate: string;
  runtime: number;
}

export default function TitleBox({ title, releaseDate, runtime }: TitleBoxProps) {
  return (
    <div className="p-5 m-5 absolute bottom-0">
      <h2 className=" font-semibold text-white text-2xl">{title}</h2>
      <div className="text-white text-sm">
        <div>{releaseDate ? releaseDate.slice(0, 4) : ''}</div>
        <div>{runtime}분</div>
      </div>
    </div>
  );
}
