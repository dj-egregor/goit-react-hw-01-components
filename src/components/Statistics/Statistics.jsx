import css from './Statistics.module.css';
import PropTypes from 'prop-types';

const randColor = () => {
  return (
    '#' +
    Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, '0')
      .toUpperCase()
  );
};

export const Statistics = ({ stats, title }) => {
  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}

      <ul className={css.statList}>
        {stats.map(statElem => (
          <li
            style={{
              backgroundColor: randColor(),
              width: `calc(100% / ${stats.length})`,
            }}
            key={statElem.id}
            className={css.item}
          >
            <span className={css.label}>{statElem.label}</span>
            <span className={css.percentage}>{statElem.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string,
      label: PropTypes.string,
      percentage: PropTypes.number,
    })
  ),
  title: PropTypes.string,
};
