import { POSTS } from '../../content/posts.js';
import Contact from '../../components/Contact/Contact.jsx';
import CTA from '../../components/CTA/CTA.jsx';
import PageHero from '../../components/PageHero/PageHero.jsx';
import PostList from '../../components/PostList/PostList.jsx';
import '../pages.css';

function BlogIndex({ route }) {
  return (
    <>
      <PageHero
        breadcrumbs={route.breadcrumbs}
        label="Blog"
        title={
          <>
            Blog Nexlorn: tecnologia <span className="gradient-text">sem tecniquês</span>
          </>
        }
        intro="Guias práticos para quem quer criar um site, lançar um aplicativo ou automatizar a empresa, com respostas diretas para as dúvidas mais comuns."
      />

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <PostList posts={POSTS} />
        </div>
      </section>

      <CTA />
      <Contact />
    </>
  );
}

export default BlogIndex;
