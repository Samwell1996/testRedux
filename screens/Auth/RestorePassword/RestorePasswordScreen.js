import React, { memo } from 'react';
import { KeyboardAvoidingView, View } from 'react-native';
import T from 'prop-types';
import { Formik } from 'formik';
import { connect } from 'react-redux';
import { email, shape } from '../../../utils/validationSchema';
import Bottom from '../../../components/Auth/Bottom/Bottom';
import InputAuth from '../../../components/Auth/InputAuth/InputAuth';
import { authOperations } from '../../../modules/auth';
import screens from '../../../navigation/screens';
import { s } from '../styles';
import gStyles from '../../../styles/styles';

function RestorePasswordScreen({ navigation, restorePassword }) {
  const validationSchema = shape({
    email,
  });

  async function onSubmit({ email }) {
    restorePassword({ email });
    NavigationService.navigateToLogin();
  }

  return (
    <Formik
      initialValues={{
        email: '',
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
            onSubmit={handleSubmit}
            keyBoardVerticalOffset={80}
            behavior="padding"
            style={s.container}
          >
            <View>
              <InputAuth
                name="Email"
                placeholder="example@gmail.com"
                onChangeText={handleChange('email')}
                value={values.email}
                keyboardType="email-address"
                onBlur={handleBlur('email')}
                error={touched.email ? errors.email : ''}
                autoCapitalize="none"
              />
            </View>
            <Bottom
              onPressFirst={() =>
                navigation.navigate(screens.Register)
              }
              onPressSecond={() => navigation.navigate(screens.Login)}
              textFirst="Don’t have an account?"
              textSecond="register"
              textThird="Send"
            />
          </KeyboardAvoidingView>
        );
      }}
    </Formik>
  );
}

RestorePasswordScreen.navigationOptions = () => ({
  title: 'Restore Password',
  headerStyle: gStyles.header,
});

RestorePasswordScreen.propTypes = {
  navigation: T.object,
  restorePassword: T.func,
};

function mapStateToProps(state) {
  return {
    isLoading: state.auth.register.isLoading,
  };
}

export default connect(
  mapStateToProps,
  authOperations,
)(memo(RestorePasswordScreen));
