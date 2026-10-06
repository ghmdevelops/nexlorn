import { INLINE_PATTERN } from '../../content/inline.js';
import './Blocks.css';

function Inline({ text }) {
  const parts = [];
  let last = 0;
  for (const match of text.matchAll(INLINE_PATTERN)) {
    const [whole, bold, label, href] = match;
    parts.push(text.slice(last, match.index));
    parts.push(bold ? <strong key={match.index}>{bold}</strong> : <a key={match.index} href={href}>{label}</a>);
    last = match.index + whole.length;
  }
  parts.push(text.slice(last));
  return <>{parts}</>;
}

function Blocks({ blocks }) {
  return (
    <div className="blocks">
      {blocks.map((block, index) => {
        switch (block.type) {
          case 'h2':
            return <h2 key={index}>{block.text}</h2>;
          case 'h3':
            return <h3 key={index}>{block.text}</h3>;
          case 'ul':
          case 'ol': {
            const List = block.type;
            return (
              <List key={index}>
                {block.items.map((item) => (
                  <li key={item}>
                    <Inline text={item} />
                  </li>
                ))}
              </List>
            );
          }
          case 'table':
            return (
              <div key={index} className="blocks__table">
                <table>
                  <thead>
                    <tr>
                      {block.head.map((cell) => (
                        <th key={cell} scope="col">
                          {cell}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {block.rows.map(([first, ...cells]) => (
                      <tr key={first}>
                        <th scope="row">{first}</th>
                        {cells.map((cell, cellIndex) => (
                          <td key={cellIndex}>{cell}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );
          case 'callout':
            return (
              <aside key={index} className="blocks__callout">
                <Inline text={block.text} />
              </aside>
            );
          default:
            return (
              <p key={index}>
                <Inline text={block.text} />
              </p>
            );
        }
      })}
    </div>
  );
}

export default Blocks;
