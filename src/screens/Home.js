import { View, Text, TouchableOpacity,  StyleSheet, Image } from 'react-native';


export default function Home({navigation}) {
  return (  
    <View>
      <Text  style={styles.title}>Banco Online</Text>
      <Image style={styles.image}
         
      source={require('../img/test2.png')}

     />
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Depositar')}
      >
      <Text>Depositar</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Sacar')}
      >
        <Text>Sacar</Text>
      </TouchableOpacity>


    </View>
  
);
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 10
  },
  button: {
    justifyContent: 'center',
    alignItems: "center",
    backgroundColor: "white",
    padding: 10,
    margin: 10,
    
  },
  countContainer: {
    alignItems: "center",
    padding: 10
  } ,
  title: {
    color: "black",
    fontSize: 42,
    fontWeight: 'bold',
    alignSelf: 'center',
  }, 

  image: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 370,
    margin: 20,
    

  },
});