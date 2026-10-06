import './Breadcrumbs.css';

function Breadcrumbs({ items }) {
  return (
    <nav className="breadcrumbs" aria-label="Trilha de navegação">
      <ol>
        {items.map((item) => (
          <li key={item.name}>
            {item.path ? <a href={item.path}>{item.name}</a> : <span aria-current="page">{item.name}</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export default Breadcrumbs;
