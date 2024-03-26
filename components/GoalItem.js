import { StyleSheet } from "react-native";
import { View,Text,Pressable } from "react-native";
function GoalItem(props){
    
    return(
        <View style={styles.goalitem} key={props.itemd.index} > 
        <Pressable onPress={props.delete.bind(this,props.id)} 
        android_ripple={{color:'#210644'}}
        style={({pressed})=> pressed && styles.presseditem}
        >
            
        <Text style={{color:"white",padding:8}}>{props.itemd.item.text}</Text>  
        
    
        </Pressable>
        </View>
    );    

}
export default GoalItem;
const styles = StyleSheet.create({
    goalitem:{
        margin:8,
        borderRadius: 6 ,
        
        color:"white",
        backgroundColor:"#5e0acc",
       }
       , presseditem:{
        opacity:0.5,
       }
});