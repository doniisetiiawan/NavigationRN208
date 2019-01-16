import React, { Component } from 'react';
import { DrawerActions } from 'react-navigation';

import {
  View, Text, Image, TouchableOpacity,
} from 'react-native';

import styles from './SectionStyles';

export default class Home extends Component {
  static navigationOptions = {
    drawerIcon: () => (
      <Image
        style={styles.iconsItem}
        source={require('../assets/home.png')}
      />
    ),
  };

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          /* eslint-disable-next-line react/prop-types */
          onPress={() => this.props.navigation.dispatch(DrawerActions.openDrawer())}
          style={styles.iconMenu}
        >
          <Image
            style={styles.menu}
            source={require('../assets/menu.png')}
          />
        </TouchableOpacity>

        <Text style={styles.titleText}>Home section</Text>
      </View>
    );
  }
}
