import {connect} from 'react-redux'
import {setVisibilityFilter} from '../actions'
import Link from '../components/Link'

const mapStateToProps = (state, ownProps) => {
    console.log('containerss mapStateToProps state');
    console.log(state);
    return {
        active: ownProps.filter === state.visibilityFilter
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    console.log('containerss mapDispatchToProps');
    console.log(ownProps);
    return {
        onClick: () => {
            dispatch(setVisibilityFilter(ownProps.filter))
        }
    }
};

const FilterLink = connect(
mapStateToProps, 
mapDispatchToProps
)(Link);

export default FilterLink