import { StyleSheet, Dimensions } from 'react-native'
import { Colors, Metrics } from '../../Themes/'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "skyblue"
  },
  stair: {
    padding: 15,
    height: (Dimensions.get('window').height - 20)/3,
    width: Dimensions.get('window').width,   
    backgroundColor: 'pink', 
    alignItems: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  mood: {
    padding: 15,
height: (Dimensions.get('window').height - 20)/3,
    width: Dimensions.get('window').width, 
    backgroundColor: 'orange', 
    alignItems: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  first: {
    padding: 15,
height: (Dimensions.get('window').height - 20)/3,
    width: Dimensions.get('window').width, 
    backgroundColor: 'green', 
    alignItems: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  nav: {
    height: 56,
    elevation: 8,
    position: 'absolute',
    left: 0,
    bottom: 0,
    right: 0
  },
  textElements: { 
    color:'white', 
    fontSize: 24
  },
  textStyleTitle: {
    textAlign: 'center', 
    color:'white', 
    fontSize: 35,
    backgroundColor: 'blue'
  },
})