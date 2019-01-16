import React, { Component } from 'react';

import {
  View, Text, Image, TouchableOpacity,
} from 'react-native';

import styles from './SectionStyles';

export default class Configuration extends Component {
  static navigationOptions = {
    drawerIcon: () => (
      <Image
        style={styles.iconsItem}
        source={require('../assets/config.png')}
      />
    ),
  };

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          /* eslint-disable-next-line react/prop-types */
          onPress={() => this.props.navigation.openDrawer()}
          style={styles.iconMenu}
        >
          <Image
            style={styles.menu}
            source={require('../assets/menu.png')}
          />
        </TouchableOpacity>

        <Text style={styles.titleText}>Configuration section</Text>
      </View>
    );
  }
}
