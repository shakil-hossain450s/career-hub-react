import PropTypes from 'prop-types';

const Button = ({ btnName }) => {
    return (
        <button className="btn bg-[#7E90FE] text-white hover:bg-[#7E90FE] font-bold px-7">{btnName}</button>
    );
};

Button.propTypes = {
    btnName: PropTypes.string
}

export default Button;