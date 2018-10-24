import React, { Component } from 'react';
import { View, ScrollView, Image, SectionList, Text } from 'react-native';
import styles from './components/styles/styles-liga';
//import Api from './../../../utils/api' --con api externa
import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

import ItemLiga from './components/item-liga';
import ItemSeparator from './components/item-separator';
import HttpLiga from '../Services/Liga/http-liga';

class Liga extends Component {
  constructor(props) {
    super(props);
    this.state = {
      EquipoListLiga: [],

    }
  }

  //Ciclo de vida del componente
  async componentDidMount() {
     this.getLiga();
  }
 

  async getLiga() {

    const data = await HttpLiga.getLiga();
    this.setState({ EquipoListLiga: data.teams })

  }
  //Encabezado de la interfaz
  static navigationOptions = {
    title: 'Liga',
    headerTitleStyle: {
      fontSize: 26,
    }
  }

  renderItem = ({ item }) => <ItemLiga navigation={this.props.navigation} article={item} />;
  separatorComponent = () => <ItemSeparator />;
  sectionHeader = ({ section }) => <Text style={styles.header}>{section.key}</Text>
  keyExtractor = item => item.idTeam.toString();

  render() {
    return (
      <ScrollView style={styles.container}>
        <View>
          <Image
            style={styles.imageBarnner}
            source={require('./components/image/descarga.jpg')} />
        </View>
        <View>
          <ScrollView style={styles.container}>
            <SectionList
              renderItem={this.renderItem}
              renderSectionHeader={this.sectionHeader}
              ItemSeparatorComponent={this.separatorComponent}
              keyExtractor={this.keyExtractor}
              sections={[{
                data: this.state.EquipoListLiga, key: 'LIGA'
              },
              ]}
            ></SectionList>
          </ScrollView>
        </View>
      </ScrollView>
    );
  };
}
export default Liga;