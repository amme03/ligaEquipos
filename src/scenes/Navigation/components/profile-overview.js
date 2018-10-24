import React from 'react';
import { View, Text, StyleSheet,  ImageBackground, } from 'react-native';

const ProfileOverview = props => (
  <View style={styles.profileContainer}>
    <ImageBackground
      source={{ uri: props.user.photo }}
      style={{ alignItems: 'center', }}>
      <View style={styles.imageLogoView}>
        <Text style={styles.profileName}> {props.user.name} </Text>
        <Text style={styles.profileEmail}> {props.user.email} </Text>
      </View>
    </ImageBackground>
  </View>
);

const styles = StyleSheet.create({
  profileContainer: {
    backgroundColor: '#4a148c',
    alignItems: 'center'
  },
  profileName: {
    color: '#fff',
    fontSize: 24,
    marginTop: 10,
  },
  profileImage: {
    width: 140,
    height: 140,
    resizeMode: 'cover',
    borderRadius: 70,
    marginTop: 10
  },
  profileEmail: {
    color: '#fff',
    marginBottom: 10
  },
});

export default ProfileOverview;