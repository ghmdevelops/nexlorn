import Breadcrumbs from '../Breadcrumbs/Breadcrumbs.jsx';
import './PageHero.css';

function PageHero({ breadcrumbs, label, title, intro, children }) {
  return (
    <section className="page-hero">
      <div className="page-hero__bg" aria-hidden="true" />
      <div className="container page-hero__container">
        <div className="page-hero__inner">
          {breadcrumbs && <Breadcrumbs items={breadcrumbs} />}
          {label && <span className="section-label anim-in">{label}</span>}
          <h1 className="anim-slide">{title}</h1>
          {intro && (
            <p className="page-hero__intro anim-in" style={{ animationDelay: '120ms' }}>
              {intro}
            </p>
          )}
          {children && (
            <div className="page-hero__extra anim-in" style={{ animationDelay: '200ms' }}>
              {children}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default PageHero;
