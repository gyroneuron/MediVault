import { createNativeStackNavigator } from "@react-navigation/native-stack";
import StartScreen1 from "../screens/Auth/StartScreen1";
import PhoneScreen from "../screens/Auth/PhoneScreen";
import LoginScreen from "../screens/Auth/LoginScreen";
import RegisterScreen from "../screens/Auth/RegisterScreen";

export default function AuthNavigator(){

    const Auth = createNativeStackNavigator();

    return (
        <Auth.Navigator screenOptions={{headerShown: false}}>
            <Auth.Screen
                name="Start"
                component={StartScreen1}
                options={{headerShown: false}}
            />
            <Auth.Screen
                name="Phone"
                component={PhoneScreen}
                options={{headerShown: false}}
            />
            <Auth.Screen
                name="Login"
                component={LoginScreen}
                options={{headerShown: false}}
            />
            <Auth.Screen
                name="Register"
                component={RegisterScreen}
                options={{headerShown: false}}
            />
        </Auth.Navigator>
    );
}