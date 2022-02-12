import {StyleSheet} from 'react-native'
const homeScreenStyle = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    
    backgroundColor: '#ecf0f1',
  },
  block1:{
    height:"30%",
    backgroundColor:"#fff",
    margin:40,
    borderWidth:2,
    borderColor:'black',
      marginBottom:10,
alignItems:'center',
justifyContent:'space-evenly'

  },
  block2:{
    height:"30%",
  
    backgroundColor:"#fff",
    margin:40,
      borderColor:'black',
      borderWidth:2,
      marginTop:10,
      alignItems:'center'


  },
  checkoutButton:{
    backgroundColor:'green',
        height:40,
margin:40,
      borderRadius:10,
    


  },
  updatePriceContainer:{
    flex:1,
    flexDirection:'row',
    justifyContent:'space-evenly'
   
  },
      textColor:{
        color:"white",
        margin:10,
        textAlign:'center',
        fontWeight:'bold',
        fontSize:18,
      },
      total:{
        color:"black",
        marginRight:40,
        textAlign:'right',
        fontWeight:'bold',
        fontSize:18,
      },
      decrement:{
        height:30,
        backgroundColor:'white',
        width:30,
        borderRadius:100,
        borderWidth:2,
        borderColor:"black",
        margin:40,

        
      },
      sub:{
color:'black',
textAlign:'center',
fontSize:20,
fontWeight:'bold'
      },
      valueInput:{
        borderWidth:2,
        width:50,
        height:30,
        margin:40,
        textAlign:'center'
   
      },
           add:{
color:'black',
textAlign:'center',
fontSize:20,
fontWeight:'bold'
      },
cartItemTotal:
  {fontSize:40,color:'grey',marginTop:20}


})

export default homeScreenStyle