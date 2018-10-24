import React, { Component } from 'react';
import { View, Text, Image, ScrollView, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';

class SideMenu extends Component {
    constructor(props) {
        super(props);
         this.state = {
        };
    }

   
    
    


    render() {
        return (
            <View style={styles.container}>
                <View style={styles.separador} >
                   <TouchableOpacity style={{
                        width: 280,
                        height: 200,
                    }} >
                        <ImageBackground
                            source={{ uri: 'https://c.wallhere.com/photos/f2/5d/happy_women_music_glasses_women_with_glasses_face_profile_headphones-220024.jpg!d' }}
                            style={{ alignItems: 'center', }}>
                            <View style={styles.imageLogoView}>
                                <Image
                                    style={styles.imageLogo}
                                    source={{ uri: 'https://c.wallhere.com/photos/f2/5d/happy_women_music_glasses_women_with_glasses_face_profile_headphones-220024.jpg!d' }}></Image>
                                <Text style={styles.textItemNavigationTitle} >Ana Maria</Text>
                            </View>
                        </ImageBackground>
                    </TouchableOpacity>
                </View>
                <View style={{
                    width: 300,
                    height: 3,
                    backgroundColor: '#2E2EFE',
                }}></View>
                <ScrollView>
                    <View style={styles.separador} >
                        <TouchableOpacity style={{
                            width: 300,
                            height: 110,
                        }} onPress={() => this.props.navigation.navigate('LigaScreen')}>
                            <ImageBackground
                                source={{ uri: 'https://c.wallhere.com/photos/f2/5d/happy_women_music_glasses_women_with_glasses_face_profile_headphones-220024.jpg!d' }}
                                style={{ alignItems: 'center', }}>
                                <View style={styles.imageBarnner}>
                                    <Text style={styles.textItemNavigation} >Equipo</Text>
                                </View>
                            </ImageBackground>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.separador} >
                        <TouchableOpacity style={{
                            width: 300,
                            height: 110,
                        }} onPress={() => this.props.navigation.navigate('EquipoScreen')}>
                            <ImageBackground
                                source={{ uri: 'https://c.wallhere.com/photos/f2/5d/happy_women_music_glasses_women_with_glasses_face_profile_headphones-220024.jpg!d' }}
                                style={{ alignItems: 'center', }}>
                                <View style={styles.imageBarnner}>
                                    <Text style={styles.textItemNavigation} >Equipo</Text>
                                </View>
                            </ImageBackground>
                        </TouchableOpacity>
                    </View>
                   
                    
                </ScrollView>

            </View >
        );
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 2,
        flex: 1,
        backgroundColor: '#ccc'
    },
    itemSectionNavigation: {
        backgroundColor: '#2E2EFE'
    },
    textItemNavigation: {
        fontSize: 24,
        color: '#ffffff',

    },
    textItemNavigationTitle: {
        fontSize: 18,
        color: '#ffffff',

    },
    footerContainer: {
        padding: 40,
        fontSize: 15,
        resizeMode: 'contain'

    },
    imageBarnner: {
        width: 100,
        height: 110,
        top: 40, bottom: 0, left: 0, right: 0,
        alignItems: 'center',

    },
    imageLogo: {
        width: 150,
        height: 150,
        marginTop: 20,
        borderRadius: 75,
    },
    imageLogoView: {
        width: 250,
        height: 200,
        alignItems: 'center',


    },
    separador: {
        // borderBottomWidth: 1,
        //borderBottomColor: '#F5A9A9',
        borderTopColor: '#2E2EFE',
        borderTopWidth: 1,
        marginVertical: 1,
    }
});
export default SideMenu;
