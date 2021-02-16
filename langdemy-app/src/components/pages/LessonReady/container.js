import { connect } from "react-redux";
import LessonReady from './index';
import { getExpress } from './action';

function mapStateToProps(state) {
    return{
        html: state.express.html
    };
}

function mapDispatchToProps(dispatch) {
    return {
        getExpressFunc: () => dispatch(getExpress()),
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(LessonReady)