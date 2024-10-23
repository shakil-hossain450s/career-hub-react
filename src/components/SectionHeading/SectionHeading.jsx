import PropTypes from 'prop-types';

const SectionHeading = ({heading}) => {
    return (
        <div className="lg:max-w-2xl mx-auto text-center mb-5 lg:mb-8">
            <h2 className="text-4xl font-extrabold mb-4">{heading}</h2>
            <p className="font-medium opacity-80">Explore thousands of job opportunities with all the information you need. Its your future</p>
        </div>
    );
};

SectionHeading.propTypes = {
    heading: PropTypes.string
}

export default SectionHeading;