import React, { memo } from 'react';
import { KeyboardAvoidingView, View } from 'react-native';
import { connect } from 'react-redux';
import { Formik } from 'formik';
import T from 'prop-types';
import screens from '../../../navigation/screens';
import {
  email,
  password,
  fullName,
  shape,
} from '../../../utils/validationSchema';
import { authOperations } from '../../../modules/auth';
import InputAuth from '../../../components/Auth/InputAuth/InputAuth';
import Bottom from '../../../components/Auth/Bottom/Bottom';
import { s } from '../styles';
import NavigationService from '../../../services/NavigationServices';
import gStyles from '../../../styles/styles';

function RegisterScreen({ navigation, register }) {
  const validationSchema = shape({
    email,
    password,
    passwordAgain: password,
    fullName,
  });

  async function onSubmit({ email, password, fullName }) {
    register({ email, password, fullName });
    NavigationService.navigateToLogin();
  }

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
        passwordAgain: '',
        fullName: '',
      }}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      validateOnBlur
    >
      {({
        values,
        errors,
        handleChange,
        handleSubmit,
        handleBlur,
        touched,
      }) => {
        return (
          <KeyboardAvoidingView
            keyBoardVerticalOffset={80}
            behavior="padding"
            style={s.container}
          >
            <View>
              <InputAuth
                name="Full Name"
                placeholder="David Karen"
                onChangeText={handleChange('fullName')}
                value={values.fullName}
                onBlur={handleBlur('fullName')}
                error={touched.fullName ? errors.fullName : ''}
                autoCapitalize="sentences"
              />
              <InputAuth
                name="Email"
                placeholder="example@gmail.com"
                onChangeText={handleChange('email')}
                value={values.email}
                onBlur={handleBlur('email')}
                keyboardType="email-address"
                error={touched.email ? errors.email : ''}
                autoCapitalize="none"
              />
              <InputAuth
                name="Password"
                placeholder="Password"
                secureTextEntry
                onChangeText={handleChange('password')}
                value={values.password}
                onBlur={handleBlur('password')}
                error={touched.password ? errors.password : ''}
                autoCapitalize="none"
              />
              <InputAuth
                name="Repeat Password"
                placeholder="Password"
                secureTextEntry
                onChangeText={handleChange('passwordAgain')}
                value={values.passwordAgain}
                onBlur={handleBlur('passwordAgain')}
                error={
                  touched.passwordAgain ? errors.passwordAgain : ''
                }
                autoCapitalize="none"
              />
            </View>
            <Bottom
              onPressFirst={() => navigation.navigate(screens.Login)}
              onPressSecond={handleSubmit}
              textFirst="Have an account??"
              textSecond="login"
              textThird="register"
            />
          </KeyboardAvoidingView>
        );
      }}
    </Formik>
  );
}

RegisterScreen.navigationOptions = () => ({
  title: 'Register',
  headerStyle: gStyles.header,
});

RegisterScreen.propTypes = {
  navigation: T.object,
  register: T.func,
};

function mapStateToProps(state) {
  return {
    isLoading: state.auth.register.isLoading,
  };
}

export default connect(
  mapStateToProps,
  authOperations,
)(memo(RegisterScreen));
