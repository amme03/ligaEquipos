import React from 'react';
import { Text, View , Image,StyleSheet,
    TouchableHighlight} from 'react-native';
import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);


const ItemLiga = (
    props,
) => (
    
    <View style={styles.container}>
        <View  style={styles.imageView}>
            <Image
             style={styles.image}
             source={{uri:props.article.strThumb}}></Image>
        </View>
        <View  style={styles.content}>
            <Text style={styles.articleName}>{props.article.strPlayer}</Text>
            <Text style={styles.articlePrice}>{props.article.dateBorn}</Text>
            <Text style={styles.articlePrice}>{props.article.strNationality}</Text>
            <Text style={styles.articlePrice}>{props.article.strDescriptionEN}</Text>

        </View>

    </View>

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
