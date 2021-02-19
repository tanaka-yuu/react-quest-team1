import { connect } from 'react-redux';
import LessonReady from '../../components/pages/LessonReady/index';
import { getZoomRequest } from './actions'

function mapStateToProps(state) {
    return{
        lessonReady: state.lessonReady
    };
}

function mapDispatchToProps(dispatch){
    return {
        get: () => dispatch(getZoomRequest()),
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LessonReady);