import { Button, StyleSheet, View } from 'react-native';
import { Text } from 'react-native';

const MyReactNativeComponent = () => {
  return (
    <>
      <Button>click</Button>
      <View style={styles.container}>
        <View style={styles.loginButton}>
          <Text style={styles.loginText}>로그인</Text>
        </View>
        <View style={styles.signIn}>
          <Text style={styles.findId}>아이디 찾기</Text>
          <View style={styles.findPasswordGroup}>
            <View style={styles.line}></View>
            <Text style={styles.findPassword}>비밀번호 찾기</Text>
            <View style={styles.line}></View>
            <Text style={styles.signUp}>회원가입</Text>
          </View>
        </View>
        <View style={styles.homeIndicator}>
          <View style={styles.base}></View>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  statusBar: {
    width: '100%',
    height: 20,
  },
  arrowLeft: {
    width: 20,
    height: 20,
  },
  image: {
    width: 100,
    height: 100,
  },
  loginButton: {
    // Add your styles for login button container
  },
  loginText: {
    // Add your styles for login text
  },
  signIn: {
    // Add your styles for sign-in container
  },
  findId: {
    // Add your styles for find id text
  },
  findPasswordGroup: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  line: {
    // Add your styles for line
  },
  findPassword: {
    // Add your styles for find password text
  },
  signUp: {
    // Add your styles for sign-up text
  },
  homeIndicator: {
    // Add your styles for home indicator container
  },
  base: {
    // Add your styles for base
  },
});

export default MyReactNativeComponent;
