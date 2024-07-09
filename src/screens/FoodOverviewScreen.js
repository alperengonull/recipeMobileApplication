import { StyleSheet, Text, View,FlatList } from 'react-native'
import React from 'react'
import { FOODS,CATEGORIES } from '../data/dummy-data'
import MealGrid from '../components/MealGrid/MealGrid'

export default function FoodOverviewScreen({route,navigation}) {
    const categoryId = route.params.categoryId

    const displayedFoods = FOODS.filter((foodItem) => foodItem.categoryIds.indexOf(categoryId) >= 0)
    // console.log(displayedFoods)



    const categoryTitle = CATEGORIES.find((category) => category.id === categoryId).title

    React.useLayoutEffect(() => {

        navigation.setOptions({
            title: categoryTitle,
        });
    }
    )


    function renderFoodItem(itemData){
        const FOODPROPS = {
            id: itemData.item.id,
            imageUrl: itemData.item.imageUrl,
            title: itemData.item.title,
            affordability: itemData.item.affordability,
            complexity: itemData.item.complexity
        }


        return <MealGrid {...FOODPROPS} />
    }
    

  return (
    <View>
        <FlatList
            data={displayedFoods}
            keyExtractor={(item) => item.id}
            renderItem={renderFoodItem}
        />
    </View>
  )
}

const styles = StyleSheet.create({})