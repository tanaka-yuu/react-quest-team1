import { connect } from "react-redux";
import LessonReady from './index';
import { getExpressRequest } from './actions';

function mapStateToProps(state) {
    return{
        
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getExpressFunc: () => dispatch(getExpressRequest()),
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(LessonReady)