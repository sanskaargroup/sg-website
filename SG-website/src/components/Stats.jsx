import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import './Stats.css'; // Ensure you create a corresponding CSS file for styling

const Stats = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const stats = [
    { number: 11, label: 'Years' },
    { number: 20, label: 'Countries' },
    { number: 100, label: 'Events', plus: true },
    { number: 4, label: 'Awards' },
  ];

  return (
    <div className="stats-container" ref={ref}>
      {stats.map((stat, index) => (
        <div key={index} className="stat-item">
          {inView && (
            <span className="stat-number">
              <CountUp
                start={0}
                end={stat.number}
                duration={2}
                delay={0}
              />
              {stat.plus && '+'}
            </span>
          )}
          <p className="stat-label">{stat.label}</p>
        </div>
      ))}
    </div>
  );
};

export default Stats;
