import { StyleSheet, Text, View,Image, ScrollView,Pressable } from 'react-native'
import React from 'react'
import { FOODS } from '../data/dummy-data'
import AntDesign from 'react-native-vector-icons/AntDesign';



export default function FoodDetailScreen({route,navigation}) {

    const foodId = route.params.foodId;

    const selectedFood = FOODS.find((food) => food.id === foodId)

    const pressHandler = () => {
        console.log('pressed')
    }


    React.useLayoutEffect(() => {

        navigation.setOptions({
           headerRight: () => 
               { return (
                    <Pressable onPress={pressHandler} style={({pressed}) => (pressed ? styles.pressed : null)}>
                        <AntDesign name="staro" size={30} color="black" />
                    </Pressable>
                )}
        });
    }
    )


  return (
    <ScrollView style={styles.container}>
        <Image style={styles.image} source={{ uri: selectedFood.imageUrl }} />
        <View style={styles.innerContainer}>
        <Text style={styles.title}>{selectedFood.title}</Text>
        <Text style={styles.ingredients}>İçindekiler:  </Text>
        <Text style={styles.duration}>
             {selectedFood.duration}
        </Text>
        </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        width: '100%',
        height: 300,
    },
    innerContainer: {
        margin: 20,
        padding: 10,
        backgroundColor: '#f5f5f5', // Light grey background for the container
        borderRadius: 10, // Rounded corners for the container
        shadowColor: '#000', // Shadow for a subtle depth effect
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 10, // Space after the title
        color: '#333', // Darker text for better readability
    },
    duration: {
        fontSize: 18,
        textAlign: 'center',
        color: '#666', // Slightly lighter than the title for hierarchy
        marginBottom: 5, // Space after the duration
    },
    complexity: {
        fontSize: 18,
        textAlign: 'center',
        color: '#666',
        marginBottom: 5, // Space after the complexity
    },
    affordability: {
        fontSize: 18,
        textAlign: 'center',
        color: '#666',
        marginBottom: 10, // Space before the ingredients list
    },
    ingredients: {
        fontSize: 18,
        textAlign: 'center',
        color: '#333', // Same as the title for importance
        padding: 10, // Padding inside the ingredients list for better readability
        backgroundColor: '#eaeaea', // Slightly different background for distinction
        borderRadius: 5, // Rounded corners for the ingredients list
    },
    pressed:{
        opacity:0.5
    }

})