import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Splash from './Splash';
import Login from './Login';
import SignUp from './SignUp';
import InputOTPScreen from './InputOTPScreen';
import Verify from './Verify';


const App=createStackNavigator({

  Splash:{screen:Splash, navigationOptions:{headerShown:false}},
  Login:{screen:Login, navigationOptions:{headerShown:false}},
  SignUp:{screen:SignUp, navigationOptions:{headerShown:false}},
  InputOTPScreen:{screen:InputOTPScreen, navigationOptions:{headerShown:false}},
  Verify:{screen:Verify, navigationOptions:{headerShown:false}},
  

});

export default createAppContainer(App);