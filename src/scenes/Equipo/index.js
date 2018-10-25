import React, { Component } from 'react';
import { View, ScrollView, Image, SectionList, Text } from 'react-native';
import styles from './components/styles/styles-liga';
//import Api from './../../../utils/api' --con api externa
import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

import ItemLiga from './components/item-jugador';
import ItemSeparator from './components/item-separator';
import HttpLiga from '../Services/Liga/http-liga';

class Equipo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      JugadorListLiga: [],
      EquipoListLiga: []
 
    }
  }

  //Ciclo de vida del componente
  async componentDidMount() {
     this.getLiga();
  }
 

  async getLiga() {

    const data = await HttpLiga.getJugadoresByIdEquipo(this.props.navigation.getParam('idTeam', ''));
    this.setState({ JugadorListLiga: data.player })
    const dataEquipo = await HttpLiga.getEquipoById(this.props.navigation.getParam('idTeam', ''));
    console.log(dataEquipo);
    this.setState({ EquipoListLiga: dataEquipo.teams })

  }
  //Encabezado de la interfaz
  static navigationOptions = {
    title: 'Equipo',
    headerTitleStyle: {
      fontSize: 26,
    }
  }

  renderItem = ({ item }) => <ItemLiga navigation={this.props.navigation} article={item} />;
  separatorComponent = () => <ItemSeparator />;
  sectionHeader = ({ section }) => <Text style={styles.header}>{section.key}</Text>
  keyExtractor = item => item.idPlayer.toString();

  render() {
    return (
      <ScrollView style={styles.container}>
        <View>
          <Image
            style={styles.imageBarnner}
            source={{uri:this.state.EquipoListLiga.strStadiumThumb}} />
        </View>
        <View>
          <ScrollView style={styles.container}>
            <SectionList
              renderItem={this.renderItem}
              renderSectionHeader={this.sectionHeader}
              ItemSeparatorComponent={this.separatorComponent}
              keyExtractor={this.keyExtractor}
              sections={[{
                data: this.state.JugadorListLiga, key: 'Jugador'
              },
              ]}
            ></SectionList>
          </ScrollView>
        </View>
      </ScrollView>
    );
  };
}
export default Equipo;