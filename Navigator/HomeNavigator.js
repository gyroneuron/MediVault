import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/Home/HomeScreen";
import UploadScreen from "../screens/Home/UploadScreen";
import SettingsScreen from "../screens/Home/SettingsScreen";
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function HomeNavigator(){

    const Tab = createBottomTabNavigator();

    return (
        <Tab.Navigator
            screenOptions={{
                
            }}
        >
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{headerShown: false}}
            />
            <Tab.Screen
                name="Upload"
                component={UploadScreen}
                options={{headerShown: false}}
            />
            <Tab.Screen
                name="Settings"
                component={SettingsScreen}
                options={{headerShown: false}}
            />
        </Tab.Navigator>
    );
}