import logo from '../assets/logo4.png';

export default function Navbar() {
  const menuItems = [
    { href: '/browse', label: '둘러보기' },
    { href: '/collection', label: '컬렉션' },
    { href: '/community', label: '커뮤니티' },
  ];

  return (
    <>
      <div className="flex items-center justify-center mx-3 w-20 h-12">
        <a href="/" className="text-blue-500 hover:text-blue-200">
          <img src={logo} className="object-contain" />
        </a>
      </div>
      {menuItems.map((item, index) => (
        <div key={index} className="flex items-center justify-center mx-3 h-12 w-15">
          <a href={item.href} className="text-blue-500 hover:text-blue-200">
            {item.label}
          </a>
        </div>
      ))}
    </>
  );
}
