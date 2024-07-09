import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'

export default function CategoryGrid({ title, color,pressFood }) {
    return (
        <View style={styles.gridItem}>
            <Pressable style={({ pressed }) => [styles.button,
            pressed ? styles.buttonPressed : null]}

            onPress={pressFood}

            >
                <View style={[styles.insideView, { backgroundColor: color }]}>
                    <Text style={styles.title}>{title}</Text>
                </View>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 15,
        height: 150,
        backgroundColor: 'white',
        elevation: 4,
        borderRadius: 10,
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 10,
    },
    button: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    insideView: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18,
        color: 'black',
    },
    buttonPressed:{
        opacity:0.5
    }

})