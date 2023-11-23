// Importing essential components and APIs from React Native for UI and interaction handling
import { Alert, StyleSheet, Text, View, TextInput, KeyboardAvoidingView, StatusBar, Keyboard } from 'react-native';
import Task from './components/Task';
import { TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { ScrollView } from 'react-native';
// import { Platform } from 'react-native';

export default function App() {

  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);
  const [nextSerialNumber, setnextSerialNumber] = useState(1);

  // add task
  const handleAddText = () => {
    Keyboard.dismiss();
    const newTask = { serialNumber: nextSerialNumber, text: task }
    setTaskItems([...taskItems, newTask]);
    setTask(null);
    setnextSerialNumber(nextSerialNumber + 1);
  }

  // Delete task
  const completeTask = (index) => {
    Alert.alert( //alert to confirm
      "Delete Task",
      "Are you sure you want to delete this task?",
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "OK", onPress: () => {
            let itemsCopy = [...taskItems];
            itemsCopy.splice(index, 1);
            setTaskItems(itemsCopy);
          }
        }
      ]
    );
  }


  return (
    <View style={styles.container}>
      {/* Today's Tasks */}
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Today's Tasks</Text>
        {/* This is where the tasks will go */}
        <ScrollView style={styles.items}>
          {
            taskItems.map((item, index) => {
              return (
                <TouchableOpacity key={index} onPress={() => completeTask(index)}>
                  <Task text={`${item.serialNumber}- ${item.text}`} />
                </TouchableOpacity>
              )
            })
          }
        </ScrollView>
      </View>
      {/* Write a Task */}
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? "padding" : "height"}
        style={styles.writeTaskWrapper}>
        <TextInput style={styles.input} placeholder={"Write a Task"} value={task} onChangeText={text => setTask(text)} />

        <TouchableOpacity onPress={() => handleAddText()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

// StyleSheet for App.js

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
    justifyContent: "space-between",
  },
  tasksWrapper: {
    paddingTop: StatusBar.currentHeight + 15, // Adjust for status bar height
    paddingHorizontal: 20,
    flex: 1, // Add flex to take up available space
  },
  // tasksWrapper: {
  //   paddingTop: 80,
  //   paddingHorizontal: 20,
  // },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  items: {
    marginTop: 30,
    // height: "75%",
  },
  // writeTaskWrapper: {
  //   position: "absolute",
  //   bottom: 25,
  //   flexDirection: "row",
  //   width: "100%",
  //   justifyContent: "space-around",
  //   alignItems: "center",
  //   // paddingHorizontal: 20,
  // },
  writeTaskWrapper: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 25,
    backgroundColor: "#FFF",
    width: 250,
    borderRadius: 60,
    borderColor: "#C0C0C0",
    borderWidth: 1,
  },
  addWrapper: {
    backgroundColor: "#FFF",
    width: 60,
    height: 60,
    borderRadius: 60,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#C0C0C0",
    borderWidth: 1,
  },
  addText: {

  },
});
