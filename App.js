import { Card } from 'react-native-elements';
import React, {useState} from 'react';
import {StyleSheet, Text, View, Button } from 'react-native';

export default function App() {

const [Sport, setSport] = useState();
const [votes, setVotes] = useState(false);

function increaseFootballVote(value){
  setSport('Football');
  setVotes(true);
}

function increaseBasketballVote(value){
  setSport('Basketball');
  setVotes(true);
}

function increaseBaseballVote(value){
  setSport('Baseball');
  setVotes(true);
}


  return (
    <View style={styles.container}>
    { votes ? (
      <View style={styles.container}>
      <Text>You voted for {Sport}!</Text>
    </View>
) : (
  <View>
  <Text style={styles.headerText}>Vote for your favorite!</Text>
  <Card>
   <Button title="Football" onPress={(value) => (increaseFootballVote('Football'))}/>
   </Card>
   <Card.Divider/>
   <Card>
   <Button title="Basketball" onPress={(value) => (increaseBasketballVote('Basketball'))}/>
</Card>
<Card.Divider/>
<Card>
<Button title="Baseball" onPress={(value) => (increaseBaseballVote('Baseball'))}/>
</Card>
<Card.Divider/>
</View>
)
}
</View>

);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  headerText: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
    fontWeight: "bold"
  }})
