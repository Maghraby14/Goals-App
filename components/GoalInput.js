import { StyleSheet } from "react-native";
import { TextInput,Button,View ,Modal,Image} from "react-native";
function GoalInput(props){
    return(
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.inputContainer}>
<Image source={require('../assets/images/goal.png')}
 style={styles.image}/>
        <TextInput placeholder="Your Course Goals" 
               placeholderTextColor="gray" 
              style={styles.Textinput} 
             onChangeText={props.onchangein} value={props.value}/>
             <View style={{flexDirection:"row"}}>
                <View style={{width:"30%" , marginHorizontal:8 , marginTop:16}}>
                <Button title="Add Goal"  onPress={props.onaddButton} color="#b180f0"/>
                </View>
                <View style={{width:"30%" , marginHorizontal:8 ,marginTop:16}}>
                <Button title="Cancel" onPress={props.notvisible} color="#f31282"/>
                </View>
             
             
             </View>
          
          </View>  
        </Modal>
        
    );

}
export default GoalInput;
const styles = StyleSheet.create({
    inputContainer:{
        flex:1,
      justifyContent: 'center',
      alignItems:'center',
      padding:16,
      backgroundColor:"#311b6b",
      
       },
       Textinput:{
        borderWidth:1,borderColor:'#ccc',width:'70%',padding:8,
        width: "90%",
        color:"white",
       }
       ,
       image:{
        width:100,
        height:100,
        margin:20,
       },
});