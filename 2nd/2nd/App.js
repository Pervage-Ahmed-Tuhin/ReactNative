import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, Image, Button, Pressable, Modal, ActivityIndicator, Alert } from 'react-native';

const logo = require("./assets/icon.png");
export default function App() {
  const [isModalVisible, setModalVisible] = useState(false);
  return (
    <View style={{ flex: 1, backgroundColor: "plum", padding: 60 }}>
      <StatusBar backgroundColor='lightgreen' barStyle="light-content" />
      {/* this is specifically for android but we can change the text color using barStyle and it has dark-content light-content  also has the attribute hidden to hide */}

      <ScrollView>
        <ActivityIndicator size='small' color="midnightblue" />
        <ActivityIndicator size='small' color="midnightblue" animating={false} />
        <Pressable onPress={() => console.log("the image was pressed")} onPressOut={() => console.log("Don't leave me!")} onPressIn={() => console.log("it's in")} onLongPress={() => console.log("Not this long")}>

          <Image source={logo} style={{ width: 300, height: 300 }} />
        </Pressable>
        <Text>
          Beneath the crimson sky, the wind whispered through the ancient trees, carrying stories of forgotten realms. The river's gentle murmur harmonized with the distant chirping of unseen creatures, creating a symphony of nature that calmed the soul. Somewhere in the distance, a lone owl hooted, signaling the arrival of twilight. In this serene world, time seemed to stand still, and the universe, in its vastness, felt intimately close.


        </Text>
        <Image source={logo} style={{ width: 300, height: 300 }} />
        <Button title='Press Me' onPress={() => setModalVisible(true)} color="midnightblue" />
        {/* here we can use the disable style to make the button disable */}

        <Button title='Alert' onPress={() => Alert.alert("Invalid data")} />
        <Button title='Alert 2' onPress={() => Alert.alert("Invalid data", "Date of birth incorrect")} />
        <Button title='Alert 3' onPress={() => Alert.alert("Invalid data", "Date of birth incorrect", [
          {
            text: 'Cancle',
            onPress: () => console.log("The cancle button was pressed")
          },
          {
            text: 'Ok',
            onPress: () => console.log("The ok button was pressed")
          }
        ])} />
        {/* This is how we use the alert component */}

      </ScrollView>
      <Modal visible={isModalVisible} onRequestClose={() => setModalVisible(false)} animationType='slide' presentationStyle='pageSheet'>
        {/* here onRequestClose is used for if the user swips or clickes the back button both for the ios and the android the animation is set to none by default it has 2 value fade or slide the presentationStyle is set to fullScreen by deafault we can use the pageSheet as another value or the formSheet as the value for user needs the presentationStyle prop is for ios only its not applicable for android device */}
        <View style={{ flex: 1, padding: 60, backgroundColor: "lightblue" }}>
          <Text>
            The modal is open you can do what you want with it
          </Text>
          <Button title='Close' color="midnightblue" onPress={() => setModalVisible(false)} />
        </View>
      </Modal>
    </View>
  );
}


