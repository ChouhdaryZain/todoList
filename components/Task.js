import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Task = (props) => {
    return (
        <View style={styles.item}>
            <View style={styles.itemLeft}>
                <TouchableOpacity style={styles.square}></TouchableOpacity>
                <Text style={styles.itemText}>{props.text}</Text>
            </View>
            <View style={styles.circular}></View>
        </View>
    )
}

export default Task

const styles = StyleSheet.create({
    item: {
        backgroundColor: "#FFF",
        padding: 15,
        borderRadius: 10,
        alignItems: "center",
        flexDirection: 'row',
        marginBottom: 20,
        justifyContent: "space-between",
    },
    itemLeft: {
        // flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    square: {
        width: 24,
        height: 24,
        backgroundColor: "#55BCF6",
        opacity: 0.4,
        borderRadius: 5,
        marginRight: 15,
    },
    itemText: {
        maxWidth: "80%",
    },
    circular: {
        width: 12,
        height: 12,
        borderColor: "#55BCF6",
        borderWidth: 2,
        borderRadius: 5,
    },
})