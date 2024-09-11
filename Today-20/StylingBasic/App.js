import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>

      <View style={styles.darkMode}>
        <Text style={styles.darkModeText}>Style Inheritance <Text style={styles.darkModeFontWeight}>Bold text</Text> </Text>
        {/* in native the inheritance is not as like it is in the web here for some specific element the inheritance works and in this case the text element is one of them that lets the inheritance process to occur  */}
      </View>
      {/* now for using multiple object attributes within a style we can use the array */}
      <View style={[styles.lightBlueBox, styles.box, styles.boxShadow]}>
        <Text >Light Blue Box</Text>
      </View>
      <View style={[styles.lightGreenBox, styles.box, styles.androidShadow]}>
        <Text >Light Green Boxs</Text>
      </View>
    </View>
  );
}
// border radious is applicable for view component in both android and ios but for text componenet its only applicable for android,if we need to add border radious for an ios device we first have to wrap the text in a view and then use border radious in the view component 


const styles = StyleSheet.create({
  container: {
    flex: 1, backgroundColor: "plum", padding: 60,
  },
  darkMode: {
    backgroundColor: "black",

  },
  darkModeText: {
    color: "white"
  },
  darkModeFontWeight: {
    fontWeight: "bold"
  },
  box: {
    // padding: 10,
    width: 250,
    height: 250,
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginHorizontal: 10,
    marginVertical: 10,
    borderWidth: 2,
    borderColor: "purple",
    borderRadius: 5
  },
  lightBlueBox: {
    backgroundColor: "lightblue",

  },
  lightGreenBox: {
    backgroundColor: "lightgreen",


  },
  boxShadow: {
    shadowColor: "blue",
    shadowOffset: {
      width: 6,
      height: 6
    },
    shadowOpacity: 0.6,
    shadowRadius: 4
  },
  // for android we have to use the following way to make a box shadow beacse there is no distinct way to seperate it from the ios other than this
  androidShadow: {
    elevation: 10
  }
});
