import { connect } from 'react-redux';

import RouteForm from './route_form';
import { createRoute } from '../../actions/route_actions';

const mapStateToProps = ({ session }) => ({
  user_id: session.currentUser.id
});

const mapDispatchToProps = dispatch => ({
  createRoute: route => dispatch(createRoute(route))
});

export default connect(mapStateToProps, mapDispatchToProps)(RouteForm);
