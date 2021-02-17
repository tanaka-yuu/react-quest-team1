import { connect } from 'react-redux';
import LessonReady from '../../components/pages/LessonReady/index';
import { getExpress } from './expressAction'

function mapStateToProps(state) {
    return{
        html: state.express.html
    };
}

function mapDispatchToProps(dispatch){
    return {
        get: () => dispatch(getExpress()),
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LessonReady);