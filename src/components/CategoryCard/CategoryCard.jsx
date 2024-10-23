import PropTypes from 'prop-types';

const CategoryCard = ({ card }) => {
    const { icon, title, description } = card;
    return (
        <div style={{ background: "linear-gradient(90deg, rgba(126, 144, 254, 0.05) 0%, rgba(152, 115, 255, 0.05) 100%)" }} className='rounded-lg p-6 shadow'>

            <img className='p-4 rounded-lg mb-6' style={{ background: "linear-gradient(90deg, rgba(126, 144, 254, 0.10) 0%, rgba(152, 115, 255, 0.10) 100%)" }} src={icon} alt="" />
            <h3 className='text-xl text-[#474747] font-extrabold mb-2'>{title}</h3>
            <p className='text-[#A3A3A3]'>{description}</p>
        </div>
    );
};

CategoryCard.propTypes = {
    card: PropTypes.object
}

export default CategoryCard;