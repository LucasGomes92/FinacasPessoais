import React, { useState } from 'react';
import Slider from '@react-native-community/slider';
import { KeyboardAvoidingView, TouchableOpacity } from 'react-native';

import { 
  Text,
  View,
  Alert,
  Switch,
  ScrollView,
  TextInput,
  StyleSheet,
} from 'react-native';

export default function Sacar() {

  const [origem, setOrigem] = useState(null);
  const [data, setData] = useState(null);
  const [limitAccount, setLimitAccount] = useState(0);  
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const showAlert = (origem, data, limitAccount, enable) =>
    Alert.alert(
      "Confirme seus dados:",
          'origem: ' + origem + '\n' +
          'Data: ' + data + '\n' + 
          'valor: $' + parseFloat(limitAccount).toFixed(2) + '\n' +
          'negativo?: ' + enable,
      [
        {
          text: "Confirm",
          onPress: () => Alert.alert("Deposito realizado!"),
          style: "cancel",
        },
        {
          text: "Cancel",
          onPress: () =>  resetOpenAccount(),
          style: "cancel",
        },
      ]    
  );

  function validetionFormOpenAccount(){
      if (origem != null && data != null && limitAccount != 0){
            showAlert(origem, data,  limitAccount, isEnabled)
      }else{
          Alert.alert('Erro ao depositar!')
      }
  }
  function resetOpenAccount(){
      setOrigem(null)
      setData(null)
      setLimitAccount(0)
      setIsEnabled(false)
  }

  return (    
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={130}
    >
     <ScrollView>
      <View style={styles.container}>
            <View>
              <Text style={styles.title}>Saque</Text>   
            </View>
            <View>

              <Text style={styles.titleInputs}>origem:</Text>
              <TextInput
                value={origem}
                onChangeText={setOrigem}            
                style={styles.inputText}
                placeholder="Origem do saque:"          
              />


              <Text style={styles.titleInputs}>Data:</Text>
              <TextInput
                value={data}
                maxLength={2}
                keyboardType="numeric"
                onChangeText={setData}            
                style={styles.inputText}
                placeholder="Data deposito:"          
              /> 
              
          </View>       
            
            
            <View >
                <Text style={styles.titleInputs}>Quanto que depositar ? R$ {parseFloat(limitAccount).toFixed(2)}</Text>
                <Slider
                  style={styles.slider}
                  minimumValue={0.00}
                  maximumValue={1000.00}
                  onValueChange={setLimitAccount}
                  minimumTrackTintColor="#F7EA46"
                  maximumTrackTintColor="#fff"
                />
            </View>

            <View >
              <Text style={styles.titleInputs}>Saldo negativo ?</Text>
              <Switch
                style={styles.switch}
                trackColor={{ false: "#767577", true: "#9CB4CC" }}
                thumbColor={isEnabled ? "#F7EA46" : "#f4f3f4"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled}
              />
            </View>
            
            <View >            
             
              <TouchableOpacity
                      style={styles.button}
                      onPress={() => {validetionFormOpenAccount()}}
                    >
                      <Text>Enviar</Text>
              </TouchableOpacity>

              <TouchableOpacity
                      style={styles.button}
                      onPress={() => {resetOpenAccount()}}
                    >
                      <Text>Resetar</Text>
              </TouchableOpacity>
              
            </View>  
            
        </View>
     </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  
  container: {
    margin: 14,
  },
  title:{
    color: "black",
    fontSize: 42,
    fontWeight: 'bold',
    alignSelf: 'center',
  } , 
  titleInputs:{
    margin:4, 
    fontWeight: 'bold',
    color: "black",
    marginLeft: 10,
  },

  pickerItem:{
    backgroundColor: "yellow",
    color: "black",
  },
  slider:{
    width: '100%',
    height: 40,
    marginTop: 10,
    marginBottom: 10,

  },
  switch:{
    padding:5,
    alignSelf: 'flex-start',
  },
  inputText: {
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 10,
    padding: 20,
    marginBottom: 10,
    backgroundColor: "white",
  },
  button: {
    borderColor: "black",
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
    margin: 10,
  },
  
});