import React from 'react';
import { Text, View , Image,StyleSheet,
    TouchableHighlight} from 'react-native';
import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);


const ItemLiga = (
    props,
) => (
    <TouchableHighlight onPress={()=>props.navigation.navigate('EquipoScreen', {idTeam:props.article.idTeam})}
    underlayColor="#ccc">
    <View style={styles.container}>
        <View  style={styles.imageView}>
            <Image
             style={styles.image}
             source={{uri:props.article.strTeamBadge}}></Image>
        </View>
        <View  style={styles.content}>
            <Text style={styles.articleName}>{props.article.strAlternate}</Text>
            <Text style={styles.articlePrice}>{props.article.intFormedYear}</Text>
            <Text style={styles.articlePrice}>{props.article.strStadium}</Text>
            <Text style={styles.articlePrice}>{props.article.strDescriptionES}</Text>

        </View>

    </View>
    </TouchableHighlight>
);


const styles = StyleSheet.create({
    container:{
         flexDirection: 'row',
    },
    content:{
          paddingLeft:10 ,
          justifyContent:'center'
    },
    image:{
    width:80,
    height:90,
    padding:10,
    margin: 15,
    
    },
    imageView:{
        width:90,
        height:100,
  
        
        },
    articleName:{
        fontSize:24,
        fontWeight: '200',
    },
    articlePrice:{
        fontSize:10,
        fontWeight: '200',
        
    }

});
export default ItemLiga;
