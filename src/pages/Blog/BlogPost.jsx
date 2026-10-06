import { AUTHOR, POSTS } from '../../content/posts.js';
import { SERVICE_PAGES } from '../../content/servicePages.js';
import Blocks from '../../components/Blocks/Blocks.jsx';
import Contact from '../../components/Contact/Contact.jsx';
import CTA from '../../components/CTA/CTA.jsx';
import PageHero from '../../components/PageHero/PageHero.jsx';
import PostList from '../../components/PostList/PostList.jsx';
import { formatDate, readingTime } from '../../utils/format.js';
import '../pages.css';

function BlogPost({ route }) {
  const { post } = route;
  const service = SERVICE_PAGES.find((page) => page.slug === post.service);
  const related = POSTS.filter((item) => item.slug !== post.slug).slice(0, 3);

  return (
    <>
      <article>
        <PageHero breadcrumbs={route.breadcrumbs} label={post.category} title={post.title} intro={post.description}>
          <p className="article__meta">
            Por <strong>{AUTHOR.name}</strong> · Publicado em{' '}
            <time dateTime={post.published}>{formatDate(post.published)}</time>
            {post.updated !== post.published && (
              <>
                {' '}
                · Atualizado em <time dateTime={post.updated}>{formatDate(post.updated)}</time>
              </>
            )}{' '}
            · {readingTime(post.blocks)} min de leitura
          </p>
        </PageHero>

        <div className="container article__body">
          <aside className="article__summary">
            <strong>Resumo rápido</strong>
            <p>{post.summary}</p>
          </aside>
          <Blocks blocks={post.blocks} />
          <footer className="article__author">
            <span className="navbar__logo-mark" aria-hidden="true">
              N
            </span>
            <div>
              <strong>{AUTHOR.name}</strong>
              {AUTHOR.role}
            </div>
          </footer>
        </div>
      </article>

      <section className="section section--alt">
        <div className="container">
          <div className="section-heading">
            <span className="section-label">Continue lendo</span>
            <h2>Outros artigos do blog</h2>
          </div>
          <PostList posts={related} />
        </div>
      </section>

      <CTA />
      <Contact defaultService={service?.serviceKey} />
    </>
  );
}

export default BlogPost;
