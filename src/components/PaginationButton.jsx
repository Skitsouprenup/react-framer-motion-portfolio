import PropTypes from 'prop-types';
import { PageButton } from '../styles/projectssection.styles';

const PaginationButton = ({
    selected,
    setCurrentPage, 
    label,
    clickable
}) => {

    return (
        <PageButton 
            $cursor={clickable ? 'pointer' : 'default'}
            $bg={selected ? 'white' : 'rgba(0,0,0,0)'}
            $color={selected ? 'black' : 'white'}
            $border={selected ? '1px solid gray' : 'none'}
            onClick={() => clickable ? setCurrentPage(Number(label) - 1) : null}>
            {label}
        </PageButton>
    );
};

PaginationButton.propTypes = {
    selected: PropTypes.bool,
    setCurrentPage: PropTypes.func,
    label: PropTypes.string,
    clickable: PropTypes.bool
};

export default PaginationButton;