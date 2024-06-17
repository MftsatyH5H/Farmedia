import { StyleSheet } from "react-native";
import { StatusBar } from "react-native";
export const styles = StyleSheet.create({
    contentContainer: {
      padding: 25,
      alignItems: 'center',
      justifyContent: 'center',
    },
    animalDetailsContainer: {
      padding: 25,
      alignItems: 'center',
      justifyContent: 'center',
    },
    sectionContainer: {
      borderColor: 'grey',
      borderRadius: 15,
      backgroundColor: 'white',
      borderWidth: 1,
      padding: 25,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 15
    },
    ImageContainer: {
      marginTop: 50,
      backgroundColor: '#FDFFFE',
      alignItems: 'center',
      justifyContent: 'center',
    },
    containerPoultry: {
        marginTop: 70,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 25
      },
    image: {
        flex: 1,
        justifyContent: 'center',
      },
    loginText:{
        fontWeight: 'bold',
    },
    navbar:{
      padding: 15,
      backgroundColor: 'green'
    },
    navbarTitle:{
      fontWeight: 'bold',
      color: 'white',
    },
    menuContainer:{
      marginTop: 90,
      justifyContent: 'center', 
      alignItems: 'center',
      paddingBottom: 180
    },
    tableContainer: {
      padding: 15,
      alignItems: 'center',
      justifyContent: 'center',
      fontWeight: 'bold'
    },
    boxContainer: {
      alignItems: 'center',
      justifyContent: 'center',
    }
}); 

export const buttons = StyleSheet.create({
  primaryButton: {
    marginTop: 25,
    backgroundColor: '#689336'
  },
  menuButton: {
    backgroundColor: 'white',
    color: 'black',
    width: 150,
    height: 150,
    borderRadius: 20,
    borderColor: 'black',
  },
  menuButtonText:{
    color: 'black', 
    fontSize: 20,
    fontWeight: '500',
  },
  menuButtonTextTraining:{
    color: 'black', 
    fontSize: 20,
    fontWeight: '500',
    marginRight: 10
  },
  menuButtonLarge:{
    marginTop: 20,
    width: 300,
    height: 130, 
    backgroundColor: 'green' 
  },
  changeLngButton: {
    marginLeft: 210,
    backgroundColor: 'white',
    border: '1px solid black',
    height: 22
  },
  listContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  listContent: {
    backgroundColor: 'lightblue',
    padding: 20,
  },
})