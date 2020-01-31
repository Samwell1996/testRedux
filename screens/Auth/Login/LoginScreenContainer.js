// import { connect } from 'react-redux';
// import {
//   compose,
//   withHandlers,
//   hoistStatics,
//   withState,
// } from 'recompose';
// import { authOperations } from '../../../modules/auth';
// import LoginScreen from './LoginScreen';

// function mapStateToProps(state) {
//   return {
//     isLoading: state.auth.login.isLoading,
//   };
// }

// const mapDispatchToProps = {
//   login: authOperations.login,
// };

// const enhance = compose(
//   connect(mapStateToProps, mapDispatchToProps),
//   withHandlers({
//     onLogin: (props) => async () => {
//       try {
//         await props.login({ email, password });
//       } catch (err) {
//         console.log(err);
//       }
//     },
//   }),
// );

// export default hoistStatics(enhance)(LoginScreen);
