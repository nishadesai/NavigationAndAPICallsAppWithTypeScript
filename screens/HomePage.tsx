import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import axios, { AxiosResponse } from 'axios';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import {stackScreens} from '../App'
import { Item } from '../types/Item';

// Define the type of props expected by the HomePage component
type HomePageProps = NativeStackScreenProps<stackScreens, "Home">;

const HomePage: React.FC<HomePageProps> = (props) => {

  const { navigation } = props;
  const [data, setData] = useState<Item[]>([]);

  // Fetch data from API when component mounts
  useEffect(() => {
    fetchData();
  }, []);

  // Function to fetch data from API
  const fetchData = async () => {
    try {
      const response: AxiosResponse<Item[]> = await axios.get('https://jsonplaceholder.typicode.com/posts');
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  // Render individual item in the list
  const renderItem = ({ item }: { item: Item }) => (
    <TouchableOpacity onPress={() => navigation.navigate('Details', { item })}>
      <View style={styles.itemContainer}>
        <Text style={styles.itemTitle}>{item.title}</Text>
      </View>
    </TouchableOpacity>
  );

  // Display Title, and FlatList to render the list of items
  return (
    <View style={styles.container}>
      <Text style={styles.title}>List of Items (Posts)</Text>
      <FlatList
        data={data}
        renderItem={renderItem}
      />
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#76b5c5'
  },
  title: {
    padding: 15,
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333'
  },
  listContent: {
    paddingVertical: 10,
  },
  itemContainer: {
    padding: 15,
    marginBottom: 6,
    backgroundColor: '#abdbe3',
    borderRadius: 8,
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333'
  },
});

export default HomePage;
