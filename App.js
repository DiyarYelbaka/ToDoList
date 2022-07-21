import React,{useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
} from 'react-native';




const App = () => {

 


  const Item = ({item,index}) =>(
    <View style={styles.tasksContainer}>
      <Text style={styles.taksText}>{item}</Text>
      <TouchableOpacity style={styles.taskDelete} onPress={()=>HandleDeleteTaskPress(index)} >
        <Text style={styles.taskDeleteText}>X</Text>
      </TouchableOpacity>
    </View>
  )
  
 
  
  const[text,setText]=useState("");

  const[tasks,setTasks] = useState([]);

  const [count,setCount]=useState(0)

  const HandleAddTaskPress = ()=>{
    setTasks([...tasks, text]);
    setText("");
    setCount(count+1);
  } ;
  const HandleDeleteTaskPress = (index)=>{
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
    setCount(count-1);
  } ;

  return (
    <View style={styles.conteiner}>
       <View style={styles.View}>
         <Text style={styles.text1}>Yapılacaklar      {count}          </Text>
       </View>
       
        <FlatList 
          data={tasks}
          renderItem={Item}
          keyExtractor={(item)=> item + Date.now() + Math.random()}
        />
       
        
       <View style={styles.View2}>
         <TextInput
          placeholder='Yapılacaklar'
          value={text}
          onChangeText={setText}
          />
          <TouchableOpacity onPress={HandleAddTaskPress} >
            <View  style={styles.button}>
              <Text style={styles.buttonText}>
                Kaydet
              </Text>
            </View>
          </TouchableOpacity>
         
       </View>
    </View>
  );
};

const styles = StyleSheet.create({
  conteiner:{
   flex:1,
   backgroundColor:`#2f4f4f`,
    
  },
  View:{
    flexDirection:'row',
    margin:10,
    
  },
  text1:{
    color:'#FCB900',
    fontSize:35,
  },
  View2:{
    backgroundColor:'#ABB8C3',
    weight:100,
    height:100,
    borderRadius:20,
    
  },
  button:{
   borderRadius:20,
   paddingVertical:13,
   paddingHorizontal:10,
   backgroundColor:'#FCB900',
  },
  buttonText:{
    color:'white',
    fontWeight:'bold',
    textTransform:'uppercase',
    textAlign:'center',
  },
  taksText:{
    color:'black',
    margin:5,
    fontSize:20,
    
  },
  tasksContainer:{
   flexDirection:'row',
   justifyContent:"space-between",
   backgroundColor:'#228b22',
   borderRadius:10,
   margin:5,
   borderBottomWidth:1,
   
  },
  taskDelete:{
    backgroundColor:'red',
    width:23,
    height:23,
    borderRadius:13,
    justifyContent:'center',
    alignItems:'center',
  },
  taskDeleteText:{
     fontSize:18,
     color:'white',
  }



});

export default App;
