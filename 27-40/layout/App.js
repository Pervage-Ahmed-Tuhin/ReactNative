import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Box from './components/Box';

export default function App() {
  return (

    // <View style={{backgroundColor:"plum",flex:1}}></View>
    <View style={styles.container}>
      {/*       
    <Box style={{ backgroundColor: "#8e9b00",alignSelf:'flex-start'}}>Box 1</Box>
    <Box style={{ backgroundColor: "#b65d1f",alignSelf:'flex-end'}}>Box 2</Box>
    <Box style={{ backgroundColor: "#1c4c56",alignSelf:'center' }}>Box 3</Box>
    <Box style={{ backgroundColor: "#ab9156",alignSelf:'stretch' }}>Box 4</Box>
    <Box style={{ backgroundColor: "#6b0803" }}>Box 5</Box>
    <Box style={{ backgroundColor: "#1c4c56" }}>Box 6</Box>
    <Box style={{ backgroundColor: "#b95f21" }}>Box 7</Box> */}


      {/* this part is for explainig the flexWrap property , align content property */}
      {/* 
      <Box style={{ backgroundColor: "#8e9b00" }}>Box 1</Box>
      <Box style={{ backgroundColor: "#b65d1f" }}>Box 2</Box>
      <Box style={{ backgroundColor: "#1c4c56" }}>Box 3</Box>
      <Box style={{ backgroundColor: "#ab9156" }}>Box 4</Box>
      <Box style={{ backgroundColor: "#6b0803" }}>Box 5</Box>
      <Box style={{ backgroundColor: "#1c4c56" }}>Box 6</Box>
      <Box style={{ backgroundColor: "#b95f21" }}>Box 7</Box> */}

      {/* this part is for the example of the flex basis one  */}
      {/* 
      <Box style={{ backgroundColor: "#8e9b00" }}>Box 1</Box>
      <Box style={{ backgroundColor: "#b65d1f" }}>Box 2</Box>
      <Box style={{ backgroundColor: "#1c4c56" ,flexBasis:140,flex:1}}>Box 3</Box>
      <Box style={{ backgroundColor: "#ab9156" ,height:140,flex:1}}>Box 4</Box> */}
      {/* here the flex basis and the height property give the same reasult but there is a crutial change in this case when we want the item to take up the remainig space of the contianer in this case the item that has the property set to height will not take the extra space if we use flex 1 in them the basis will take the remaining space and grow in size  */}
      {/* <Box style={{ backgroundColor: "#6b0803" }}>Box 5</Box>
      <Box style={{ backgroundColor: "#1c4c56" }}>Box 6</Box>
      <Box style={{ backgroundColor: "#b95f21" }}>Box 7</Box> */}


      {/* here we will be discussing the flexShrink property */}


      {/* <Box style={{ backgroundColor: "#8e9b00" ,flexShrink:1}}>Box 1 - shrink</Box> */}
      {/* <Box style={{ backgroundColor: "#b65d1f" ,flexShrink:40}}>Box 2 - shrink</Box> */}
      {/* <Box style={{ backgroundColor: "#1c4c56" }}>Box 3</Box>
      <Box style={{ backgroundColor: "#ab9156" }}>Box 4</Box>
      <Box style={{ backgroundColor: "#6b0803" }}>Box 5</Box>
      <Box style={{ backgroundColor: "#1c4c56" }}>Box 6</Box>
      <Box style={{ backgroundColor: "#b95f21" }}>Box 7</Box> */}

      {/* here we will be exploring the flex gorw property */}


      {/* <Box style={{ backgroundColor: "#8e9b00" }}>Box 1</Box>
      <Box style={{ backgroundColor: "#b65d1f" }}>Box 2</Box>
      <Box style={{ backgroundColor: "#1c4c56" }}>Box 3</Box>
      <Box style={{ backgroundColor: "#ab9156" }}>Box 4</Box> */}
      {/* <Box style={{ backgroundColor: "#6b0803" ,flexGrow:1}}>Box 5</Box> */}
      {/* <Box style={{ backgroundColor: "#1c4c56" ,flexGrow:3}}>Box 6</Box> */}
      {/* <Box style={{ backgroundColor: "#b95f21" }}>Box 7</Box> */}


      {/* here we will be taking a look at the relative and the absolute layout of the ui  */}




      <Box style={{ backgroundColor: "#8e9b00" ,top:75,left:75}}>Box 1</Box>
      <Box style={{ backgroundColor: "#b65d1f" }}>Box 2</Box>
      <Box style={{ backgroundColor: "#1c4c56" }}>Box 3</Box>
      <Box style={{ backgroundColor: "#ab9156" ,top:100,left:100,position:'absolute'}}>Box 4</Box>
      <Box style={{ backgroundColor: "#6b0803" }}>Box 5</Box>
      <Box style={{ backgroundColor: "#1c4c56" }}>Box 6</Box>
      <Box style={{ backgroundColor: "#b95f21" }}>Box 7</Box>
    </View>
  );
}
// flex has flex direction it has 4 value and justyfycontent is used to aligh items with the axis
// the align self is the values are not defined then by default it is set to auto meaning it will inherit the align items style as the default for them 

// the flex basis property determines the inital size of the flex items before any extera space in the container is distributed it serves as an alternative in the flex layout for the height and the weidth property

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // flexWrap: 'wrap',
    // height: 300,
    // flexDirection:"row",
    // justifyContent:'space-around',
    // alignItems: 'flex-start',
    // width:300,
    // alignContent:'stretch',
    // rowGap:20,
    // columnGap:30,
    // gap: 30,
    marginTop: 64,
    borderWidth: 6,
    borderColor: "red",
  },
});
