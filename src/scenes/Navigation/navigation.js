import { createStackNavigator, createMaterialTopTabNavigator, createDrawerNavigator,createSwitchNavigator } from 'react-navigation';
//import Icon from 'react-native-vector-icons/FontAwesome';
import SideMenu from './side-menu'

//stack
import Liga from '../Liga';
import Equipo from '../Equipo';
import SitioWeb from '../SitioWeb';



const AppNavigator = createStackNavigator({
    LigaScreen: {
        screen: Liga
    },
    EquipoScreen: {
        screen: Equipo
    },
    SitioScreen: {
        screen: SitioWeb
    },

},
    {
        initialRouteName: 'LigaScreen',
        navigationOptions: {
            headerStyle: {
                backgroundColor: '#2E2EFE',
                borderBottomColor: '#2E2EFE'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: '500',
                fontSize: 18,
            },
        }
    }
);

//const iconCatalogo = (<Icon name="shopping-basket" size={24} color='#999' />);
//const iconMercado = (<Icon name="shopping-bag" size={24} color='#999' />);
//const iconFormulario = (<Icon name="user-circle" size={24} color='#999' />);


const Drawer = createDrawerNavigator(
    {
        Liga: { screen: AppNavigator },
       
    }, { drawerWidht: 300,
        contentComponent: SideMenu,
        contentOptions: {
            activeTintColor: 'blue',
            itemsContainerStyle: {
                marginVertical: 1,
            },
            iconContainerStyle: {
                opacity: 10,
                backgroundColor: '#2E2EFE',
                borderBottomColor: '#2E2EFE'
            },
        }

    });

    export default SwitchNavigator = createSwitchNavigator({
        App: Drawer
      },)