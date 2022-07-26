import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Ionicon from 'react-native-vector-icons/Ionicons';

import FeedScreen from '../Screens/Feed';
import CreatePost from '../Screens/CreatPost';
import { StyleSheet } from 'react-native';

const Tab = createMaterialBottomTabNavigator();

const BottomTabNavigator = () => {
    return(
        <Tab.Navigator
            labeled={false}
            barStyle={styles.bottomTabStyle}
            screenOptions = {({route})=>({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    if (route.name === 'FeedScreen') {
                        iconName = focused ? 'book' : 'book-outline';
                    } else if (route.name === 'CreatePost') {
                        iconName = focused ? 'create' : 'create-outline';
                    }
                    return <Ionicon name={iconName} size={size} color={color}/>;
                },
            })}
            tabBarOptions={{
                activeTintColor: 'tomato',
                inactiveTintColor: 'gray',
            }}
        >
            <Tab.Screen name="FeedScreen" component={FeedScreen}/>
            <Tab.Screen name="CreatePost" component={CreatePost}/>
        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
    bottomTabStyle : {
        backgroundColor: "#2f345d",
        height: "8%",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        overflow: "hidden",
        position: "absolute"
    }
})

export default BottomTabNavigator;