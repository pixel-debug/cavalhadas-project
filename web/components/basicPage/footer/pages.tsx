export const Pages = () => {
  return (
    <div className="mb-4 font-montserrat xl:text-md text-xs text-neutral-900 mb-2">
      <ul className="list-none">
        <li className="mb-2">
          <a href="/home" className="hover:underline">
            Home
          </a>
        </li>
        <li className="mb-2">
          <a href="/noticias" className="hover:underline">
            Notícias
          </a>
        </li>
        <li className="mb-2">
          <a href="/quem-somos" className="hover:underline">
            Quem Somos
          </a>
        </li>
        <li className="mb-2">
          <a href="/patrocinadores" className="hover:underline">
            Patrocinadores
          </a>
        </li>
      </ul>
    </div>
  );
};
