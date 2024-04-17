// screens/DetailsScreen.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import {stackScreens} from '../App'

type DetailsPageProps = NativeStackScreenProps<stackScreens, "Details">;

const DetailsPage: React.FC<DetailsPageProps> = (props) => {
  const { route } = props;
  const { item } = route.params;
  const paragraphs = item.body.split('\n');
  return (
    <View style={styles.container}>
      {/* Display ID */}
      <Text style={styles.heading}>Id:</Text>
      <Text style={styles.content}>{item.id}</Text>

      {/* Display Title */}
      <Text style={styles.heading}>Title:</Text>
      <Text style={styles.content}>{item.title}</Text>

      {/* Display Body */}
      <Text style={styles.heading}>Body:</Text>
      {paragraphs.map((paragraph: string, index: number) => (
        <View key={index} style={styles.bulletItem}>
          <Text style={styles.bullet}>•</Text>
          <Text style={styles.content}>{paragraph}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#abdbe3',
    padding: 20
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333'
  },
  content: {
    fontSize: 18,
    marginBottom: 10,
    color: '#333'
  },
  paragraphContainer: {
    flexDirection: 'row',
    marginBottom: 5
  },
  bullet: {
    fontSize: 20,
    marginRight: 5,
    color: '#333'
  },
  bulletItem: {
    flexDirection: 'row'
  },
});

export default DetailsPage;

