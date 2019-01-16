import React from 'react';
import {
  Image, ScrollView, StyleSheet, View,
} from 'react-native';

import { createDrawerNavigator, createAppContainer, DrawerItems } from 'react-navigation';

import Home from './sections/Home';
import Configuration from './sections/Configuration';

const styles = StyleSheet.create({
  area: {
    flex: 1,
  },
  drawer: {
    height: 150,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    height: 120,
    width: 120,
    borderRadius: 60,
  },
});

const CustomDrawerComponent = props => (
  <View style={styles.area}>
    <View style={styles.drawer}>
      <Image
        source={require('./assets/codejobs.jpeg')}
        style={styles.logo}
      />
    </View>

    <ScrollView>
      <DrawerItems {...props} />
    </ScrollView>
  </View>
);

const AppDrawerNavigator = createDrawerNavigator({
  Home,
  Configuration,
},
{
  contentComponent: CustomDrawerComponent,
});

const AppContainer = createAppContainer(AppDrawerNavigator);

const App = () => (
  <AppContainer />
);

export default App;
