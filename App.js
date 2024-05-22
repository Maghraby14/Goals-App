import { StatusBar } from 'expo-status-bar';
import GoalItem from './components/GoalItem';
import { StyleSheet, View , Button,TextInput  , FlatList , Image} from 'react-native';
import {useState} from 'react';
import GoalInput from './components/GoalInput';



export default function App() {
  const [goal,setGoal]=useState('');
  const [goals,setGoals] = useState([]);
  const [modalvisible,setvisible] = useState(false);
  function startapp(){
setvisible(true);
  
  }
  function onChangeinput (text){
    setGoal(text);
  }
  function onaddButton(){
   setGoals((current) => [...current,{text:goal , id:Math.random().toString()}]);
   setGoal("");
   setvisible(false);
   
  }
  function ondeleteitem(id){
    setGoals((current) => {
      return current.filter((goal) => goal.id !== id)
    });
    
  }
  function returntostart(){
    setvisible(false);
  }
  return (
     /*
    
    <View style={styles.container}>
      <Text style={{margin:16,borderWidth:2,borderColor:'red',padding:16}}>Hello Maghraby</Text>
      <Text style={styles.dummy} >How are you ?</Text>
      <Button title="Tap me!"/>
    </View>


    <ScrollView alwaysBounceVertical={false}>
      {goals.map(
        (g)=> (
        <View style={styles.goalitem} key={g}> 
        <Text style={{color:"white"}}>{g}</Text>  
        </View>
        ))}
    </ScrollView>
    keyExtractor generates key
    renderitem generates jsx
    */
    <>

   
    <StatusBar style="light" />
   <View style={styles.appcontainer}>
    <Button title="Add new Goal" color="#a065ec" onPress={startapp} />
     <GoalInput onchangein={onChangeinput} onaddButton={onaddButton} value={goal} visible={modalvisible} notvisible={returntostart}/> 
    
    <View style={styles.goals}>
    <FlatList alwaysBounceVertical={false} 
     data={goals}
     renderItem={(itemdata) =>{
      return <GoalItem itemd={itemdata} delete={ondeleteitem} id={itemdata.item.id}/>;
     }}
     keyExtractor={(item,index)=>{
      return item.id;
     }}
     >
      
    </FlatList>
    </View>
    
   </View>
   </>
  );
}

const styles = StyleSheet.create({
  /*
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dummy : {
    margin:16,borderWidth:2,borderColor:'blue',padding:16,
  }
  */
 appcontainer:{
  paddingTop:50,
  paddingHorizontal:16,
  flex:1,
  backgroundColor:"#1e085a",
 },
 
 goals:{
  flex:5,
 }
 , goalitem:{
  margin:8,
  borderRadius: 6 ,
  padding:8,
  color:"white",
  backgroundColor:"#5e0acc",
 }
});
