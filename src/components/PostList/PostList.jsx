import { FiArrowRight } from 'react-icons/fi';
import { formatDate, readingTime } from '../../utils/format.js';
import Reveal from '../Reveal/Reveal.jsx';
import './PostList.css';

function PostList({ posts }) {
  return (
    <div className="post-list">
      {posts.map((post, index) => (
        <Reveal as="article" key={post.slug} className="post-card" delay={(index % 3) * 90}>
          <span className="post-card__category">{post.category}</span>
          <h3>
            <a href={`/blog/${post.slug}/`}>{post.title}</a>
          </h3>
          <p>{post.description}</p>
          <div className="post-card__footer">
            <span>
              <time dateTime={post.published}>{formatDate(post.published)}</time> · {readingTime(post.blocks)} min de leitura
            </span>
            <a href={`/blog/${post.slug}/`} className="post-card__link" aria-label={`Ler: ${post.title}`}>
              Ler <FiArrowRight />
            </a>
          </div>
        </Reveal>
      ))}
    </div>
  );
}

export default PostList;
