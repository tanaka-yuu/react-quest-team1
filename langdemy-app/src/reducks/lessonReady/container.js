import { connect } from 'react-redux';
import LessonReady from '../../components/pages/LessonReady/index';
import { getZoomRequest } from './actions'

function mapStateToProps(state) {
    return{
        isStartTime: state.lessonReady.isStartTime,
        joinUrl: state.lessonReady.joinUrl,
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