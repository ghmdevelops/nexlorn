import { useInView } from '../../hooks/useInView';
import './Reveal.css';

function Reveal({
  children,
  as: Tag = 'div',
  direction = 'up',
  delay = 0,
  className = '',
  ...rest
}) {
  const [ref, inView] = useInView();

  const classes = ['reveal', `reveal--${direction}`, inView ? 'reveal--visible' : '', className]
    .filter(Boolean)
    .join(' ');

  return (
    <Tag ref={ref} className={classes} style={{ transitionDelay: `${delay}ms` }} {...rest}>
      {children}
    </Tag>
  );
}

export default Reveal;
