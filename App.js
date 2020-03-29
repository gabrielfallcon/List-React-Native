import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList, TouchableOpacity } from 'react-native';
import styles from './style';

export default function App() {
  const[nome, setNome] = useState ("");
  const[telefone, setTelefone] = useState ("");

  const capturarNome = (textoDigitado) => {
    setNome(textoDigitado)
  }

  const capturarTelefone = (textoDigitado) => {
    // setContato({telefone: textoDigitado});
    setTelefone(textoDigitado)
  }

  const [contatos, setContatos] = useState ([]);


 

  return (
    <View style={styles.container}>
      <View style={styles.welcome}>
        <Text style={styles.welcomeTitle}>Cadastre um nome e um telefone!</Text>
      </View>
      <View style={styles.lembreteView}>
        { /*Usuário irá inserir lembretes aqui */}
        <TextInput 
          placeholder="Nome..."
          style={styles.lembreteTextInput}
          onChangeText={capturarNome}
          value={nome}
          //defaultValue={contato.nome}
        />
        <TextInput 
          placeholder="Telefone..."
          style={styles.lembreteTextInput}
          onChangeText={capturarTelefone}
          //onChangeText={telefone => setContato({telefone : telefone})}
          value={telefone}
          //defaultValue={contato.telefone}
        />
        <TouchableOpacity
          style={styles.datailsButton}
          onPress={adicionarContato}
        >
          <Text style={styles.detailsButtonText}>Cadastrar</Text>
        </TouchableOpacity>
      </View>
      <FlatList 
        data={contatos}
        renderItem={
          contato => (
            <View style={styles.itemNaLista}>
              <Text style={styles.listaTitle}>{"Nome: " + contato.item.value.nome}</Text>
              <Text style={styles.listaPhone}>{"Telefone: " + contato.item.value.telefone}</Text>
            </View>
          )
        }
      />
    </View>
  );
}

