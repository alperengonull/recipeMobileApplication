// import 'react-native-gesture-handler';
import { StyleSheet } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CategoriesScreen from './src/screens/CategoriesScreen';
import FoodOverviewScreen from './src/screens/FoodOverviewScreen';
import FoodDetailScreen from './src/screens/FoodDetailScreen';
// import { createDrawerNavigator } from '@react-navigation/drawer';
// import FavoritesScreen from './src/screens/FavoritesScreen';

const Stack = createNativeStackNavigator();
// const Drawer = createDrawerNavigator();


// function DrawerNavigator() {
//   return (
//     <Drawer.Navigator>
//       <Drawer.Screen name="Categories" component={CategoriesScreen} />
//       <Drawer.Screen name="Favorites" component={FavoritesScreen} />
//     </Drawer.Navigator>
//   )
// }

export default function App() {
  return (
    <NavigationContainer >
      <Stack.Navigator screenOptions={{
        headerStyle: {
          backgroundColor: 'lightblue',
        },
        headerTintColor: 'black',
        contentStyle: {
          backgroundColor: 'lightblue'
        }
      }}>
        <Stack.Screen name="Categories" component={CategoriesScreen} options={{
          title: 'Tüm Kategoriler',

        }} />
         {/* <Stack.Screen name="Drawer" component={DrawerNavigator} options={{
          headerShown:false,
        }} /> */}
        <Stack.Screen name='FoodOverview' component={FoodOverviewScreen} />
        <Stack.Screen name='FoodDetail' component={FoodDetailScreen} options={{
          title: 'İçerik'
        }} />
      </Stack.Navigator>

    </NavigationContainer>
  )
}

const styles = StyleSheet.create({})