import { useEffect, useRef } from 'react';
import './Thought.css';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';

const Thought = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate');
                    } else {
                        entry.target.classList.remove('animate');
                    }
                });
            },
            { threshold: 0.5 }
        );

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => {
            if (containerRef.current) {
                observer.unobserve(containerRef.current);
            }
        };
    }, []);

    return (
        <div className="full">
            <div className="thought-container" ref={containerRef}>
                <FaQuoteLeft className="quote-icon left" />
                <p className="thought-text">
                    Sanskaar our special team stream to offer a birds-eye view
                    of the process from event creation, to make your events
                    memorable and awesome.
                </p>
                <FaQuoteRight className="quote-icon right" />
            </div>
        </div>
    );
};

export default Thought;
