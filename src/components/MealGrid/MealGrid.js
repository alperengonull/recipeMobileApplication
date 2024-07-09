import { StyleSheet, Text, View, Pressable, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

export default function MealGrid({ id, imageUrl, title, affordability, complexity, }) {

    const navigation = useNavigation();

    const goDetail = () => {
        navigation.navigate('FoodDetail', {
            foodId: id
        })
    }

    return (
        <View style={styles.foodItem}>
            <Pressable style={({ pressed }) => [
                pressed ? styles.buttonPressed : null]}
                onPress={goDetail}
            >
                <View style={styles.innerView}>
                    <View>
                        <Image style={styles.image} source={{ uri: imageUrl }} />
                        <Text style={styles.title}>{title}</Text>
                    </View>
                    <View style={styles.details}>
                        <Text style={styles.detailItem}>{complexity.toUpperCase()}</Text>
                        <Text style={styles.detailItem}>{affordability.toUpperCase()}</Text>
                    </View>
                </View>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    foodItem: {
        margin: 15,
        backgroundColor: 'white',
        elevation: 4,
        borderRadius: 10,
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 10,
    },
    innerView: {

    },
    image: {
        width: '100%',
        height: 200,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        margin: 8,
    },
    details: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 5,
    },
    detailItem: {
        fontSize: 12,
        marginHorizontal: 4,
    },
    buttonPressed: {
        opacity: 0.5
    },


})