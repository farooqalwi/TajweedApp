import{View,Text,StyleSheet,ScrollView} from 'react-native';
import  React  from 'react';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


const Result =() => {

    
  return(
    //style={{color:'red'}}
    <ScrollView style={styles.container}>
      <ScrollView style={styles.textWrapper}>
      
        <View style={{ paddingTop: 20, paddingBottom: 30,alignItems:"center"}}>
      <Text style={{ color: 'white', backgroundColor: '#2c93b0', width: 300, fontSize: 25, textAlign: 'center', borderRadius: 30 ,borderWidth:2}}>Recitation Result</Text>
      </View>
      
      <Text style={{ padding: 10 ,color: 'black', fontSize: 25}}>Correct Words:</Text>
      <Text style={{ padding: 10 ,color: 'black', fontSize: 30 ,borderColor: 'black',borderWidth:2}}>قُلْ هُوَ ٱللَّهُ<Text style={{color:'green'}}> أَحَدٌ</Text>۝١ٱللَّهُ ٱلصَّمَدُ۝٢<Text style={{color:'green'}}>لَمْ</Text> يَلِدْ وَلَمْ<Text style={{color:'green'}}> يُولَدْ</Text>۝٣وَلَمْ <Text style={{color:'green'}}>يَكُن</Text> لَّهُۥ <Text style={{color:'green'}}>كُفُوًا</Text> أَحَدٌۢ۝</Text>
      
      <Text style={{ padding: 10 ,color: 'black', fontSize: 25}}>Yours Recited Words:</Text>
      
      <Text style={{marginBottom: 30 , padding: 10 ,color: 'black', fontSize: 30,borderColor: 'black',borderWidth:2}}>قُلْ هُوَ ٱللَّهُ<Text style={{color:'red'}}> أَحَدٌ</Text>۝١ٱللَّهُ ٱلصَّمَدُ۝٢<Text style={{color:'red'}}>لَمْ</Text> يَلِدْ وَلَمْ<Text style={{color:'red'}}> يُولَدْ</Text>۝٣وَلَمْ <Text style={{color:'red'}}>يَكُن</Text> لَّهُۥ <Text style={{color:'red'}}>كُفُوًا</Text> أَحَدٌۢ۝</Text>
      </ScrollView>
      </ScrollView>
      
      
    
  )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'lightblue',
      padding:20,
      paddingHorizontal: 0,
      
    },
    textWrapper: {
      height: hp('80%'), // 80% of height device screen
      width: wp('100%'),  // 100% of width device screen
      padding :20,
    },
})
export default Result;

// Importing modules



{/*import{View,Text,StyleSheet,ScrollView,Button} from 'react-native';
import  React  from 'react';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


export default class Result extends React.Component {
  state={
    data:{"Date":"Loading..."}
  }
  getJsonData=()=> {
    fetch("http://172.16.6.171:5000/data",
    {method:'GET'}).then((response)=> response.json())
    .then ((responseJson)=>{
      console.log(responseJson);
      this.setState({
        data:responseJson
      })
    })
    .catch((error)=>{
      console.error(error)
    });
  }
  componentDidMount=() => {
    this.getJsonData()
  }

  render () {
    return(
    
      <View style={styles.container}>
       <View>
        <Text style={{margin:10,fontSize:16}}>Suggestion</Text>
        <Text style={{margin:10,fontSize:22}} selectable={true}>{this.state.data['Date']}</Text>
        <Text style={{margin:10,fontSize:16}}>{'Name:' + this.state.data['Name']}</Text>
        <Text style={{margin:10,fontSize:16}}>{'Age:' + this.state.data['Age']}</Text>
        <Text style={{margin:10,fontSize:16}}>{'Programming:' + this.state.data['programming']}</Text>
       </View>
       <View style={{position:'absolute',bottom:20,width:'100%'}}>
        <Button onPress={this.getJsonData} title='PREES ME!'></Button>
       </View>
        </View>
        
        
      
    );
  }  
  
}
const styles = StyleSheet.create({
   container:{
      margin:20,
      flex:1,
      backgroundColor:'#fff',
      justifyContent:'center',
      alignItems:'flex-start',  
   },
})

*/}
