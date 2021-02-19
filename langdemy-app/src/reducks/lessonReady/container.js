import { connect } from 'react-redux';
import LessonReady from '../../components/pages/LessonReady/index';
import { getZoomRequest } from './actions'

function mapStateToProps(state) {
  return{
    //レッスン時刻かどうか
    isStartTime: state.lessonReady.isStartTime,
    //ZoomURL
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