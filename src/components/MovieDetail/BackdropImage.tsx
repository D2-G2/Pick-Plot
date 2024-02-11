interface BackdropImageProps {
  url: string;
  children: React.ReactNode;
}

export default function BackdropImage({ url, children }: BackdropImageProps) {
  return (
    <div className="w-full h-96 relative">
      <img src={url} alt="backdrop" className="w-full h-full object-cover opacity-80 rounded-xl" />
      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50 rounded-xl" />
      {children}
    </div>
  );
}
