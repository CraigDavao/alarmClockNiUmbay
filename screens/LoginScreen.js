import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';

const LoginScreen = ({ navigation }) => {
  const handleLogin = () => {
    // Add your authentication logic here
    // If authentication is successful, navigate to HomePageScreen
    navigation.navigate('HomePage');
  };

  return (
    <View style={styles.container}>
      {/* Clock Image */}
      <Image
        source={require('../assets/logo.png')}
        style={styles.image}
      />

      {/* App Title */}
      <Text style={styles.title}>W A K E</Text>
      <Text style={styles.subtitle}>Personalized Alarm Clock</Text>

      {/* Input Fields */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#888"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#888"
          secureTextEntry
        />
      </View>

      {/* Login Button */}
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      {/* Forgot Password Button */}
      <TouchableOpacity
        style={styles.forgotButton}
        onPress={() => navigation.navigate('ForgotPassword')} // Navigate to ForgotPassScreen
      >
        <Text style={styles.forgotText}>Forgot Password?</Text>
      </TouchableOpacity>

      {/* Register Text */}
      <Text style={styles.registerText}>
        You Don’t Have an Account?{' '}
        <Text
          style={styles.registerLink}
          onPress={() => navigation.navigate('Register')} // Navigate to RegisterScreen
        >
          Register
        </Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#101820FF',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#ED2938',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    color: '#FFF',
    marginBottom: 70,
  },
  inputContainer: {
    width: '100%',
  },
  input: {
    backgroundColor: '#333333',
    color: '#FFF',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 15,
    fontSize: 16,
    marginBottom: 20,
  },
  loginButton: {
    backgroundColor: '#ED2938',
    paddingVertical: 15,
    borderRadius: 20,
    alignItems: 'center',
    marginVertical: 20,
    width: '100%',
  },
  buttonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  forgotButton: {
    marginVertical: 10,
  },
  forgotText: {
    color: '#ED2938',
    fontSize: 14,
    fontWeight: 'bold',
  },
  registerText: {
    color: '#FFF',
    fontSize: 14,
    marginBottom: 80,
  },
  registerLink: {
    color: '#ED2938',
    fontWeight: 'bold',
  },
});

export default LoginScreen;
