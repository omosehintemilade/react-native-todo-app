import React, {useState} from 'react';
import {Alert, FlatList, SafeAreaView, StyleSheet} from 'react-native';
import AddItem from './components/AddItem';
import Header from './components/Header';
import ListItem from './components/ListItem';

const App = () => {
  const [items, setItems] = useState([
    {
      id: '1',
      text: 'Milk',
    },
    {
      id: '2',
      text: 'Bread',
    },
    {
      id: '3',
      text: 'Eggs',
    },
    {
      id: '4',
      text: 'Juice',
    },
  ]);

  const addItem = itemText => {
    if (!itemText) {
      Alert.alert('Error', 'Cannot add empty item to your shopping list', [
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ]);
      return;
    }
    setItems(prevState => [
      {
        id: items.length + 1,
        text: itemText,
      },
      ...prevState,
    ]);
  };

  const renderItem = ({item}) => <ListItem item={item} setItems={setItems} />;
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <AddItem addItem={addItem} />
      <FlatList
        data={items}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingTop: 60,
  },
});
export default App;
