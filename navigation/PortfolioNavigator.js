import React from 'react';
import {Platform} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createDrawerNavigator,DrawerItems} from 'react-navigation-drawer';

import ProfileScreen from '../screens/Profile';
import AboutScreen from '../screens/About';
import EducationScreen from '../screens/Education';
import AchievementsScreen from '../screens/Achievements';
import ContactsScreen from '../screens/Contacts';
import ExperienceScreen from '../screens/Experience';
import ProjectsScreen from '../screens/Projects';
import ResumeScreen from '../screens/Resume';
import SkillsScreen  from '../screens/Skills';
import Colors  from '../constants/Colors';

const defaultNav = {
    headerStyle : {
        backgroundColor:Platform.OS === 'android' ? Colors.primary: ''
    },
    headerTitleStyle:{
        fontfamily:'open-sans-bold'
    },
    headerBackTitleStyle:{
        fontFamily:'open-sans'
    },
    headerTintColor: Platform.OS === 'android'? Colors.accent : Colors.primary
};

const ProfileNavigator = createStackNavigator({
    Profile : ProfileScreen
},{
    defaultNavigationOptions: defaultNav
});

const AboutNavigator = createStackNavigator({
    About : AboutScreen
},{
    defaultNavigationOptions: defaultNav
});

const EducationNavigator = createStackNavigator({
    Education : EducationScreen
},{
    defaultNavigationOptions: defaultNav
});

const AchievementsNavigator = createStackNavigator({
    Achievements : AchievementsScreen
},{
    defaultNavigationOptions: defaultNav
});

const ContactsNavigator = createStackNavigator({
    Contacts : ContactsScreen
},{
    defaultNavigationOptions: defaultNav
});

const ExperienceNavigator = createStackNavigator({
    Experience  : ExperienceScreen
},{
    defaultNavigationOptions: defaultNav
});

const ProjectsNavigator = createStackNavigator({
    Projects : ProjectsScreen
},{
    defaultNavigationOptions: defaultNav
});

// const ResumeNavigator = createStackNavigator({
//     Resume : ResumeScreen
// },{
//     defaultNavigationOptions: defaultNav
// });

const SkillsNavigator = createStackNavigator({
    Skills : SkillsScreen
},{
    defaultNavigationOptions: defaultNav
});

const PortfolioNavigator = createDrawerNavigator(
    {
     Profile : ProfileNavigator,
     About : AboutNavigator,
     Education : EducationNavigator,
     Skills : SkillsNavigator,
     Experience : ExperienceNavigator,
     Projects : ProjectsNavigator,
     Achievements:AchievementsNavigator,
    //  Resume:ResumeNavigator,
     Contacts:ContactsNavigator
    },
    {
     contentOptions:{
         activeTintColor:Colors.primary
     }   
    }
)

export default createAppContainer(PortfolioNavigator);