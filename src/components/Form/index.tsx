import { Text, View, TextInput, TouchableOpacity } from "react-native";
import Result from "../Result";
import { useState } from "react";
import styles from "./style";

export default function Form() {
  const [height, setHeight] = useState<string>("");
  const [weight, setWeight] = useState<string>("");
  const [result, setResult] = useState<number>(0);

  function calculate() {
    const value = +weight / (+height * +height);
    setResult(+value.toFixed(2));
  }

  return (
    <View style={styles.container}>
      <View style={styles.field}>
        <Text style={styles.label}>Altura</Text>
        <TextInput
          style={styles.input}
          value={height}
          onChangeText={setHeight}
          placeholder="Ex. 1.75"
          keyboardType="numeric"
        ></TextInput>
      </View>
      <View style={styles.field}>
        <Text style={styles.label}>Peso</Text>
        <TextInput
          style={styles.input}
          value={weight}
          onChangeText={setWeight}
          placeholder="Ex. 75.365"
          keyboardType="numeric"
        ></TextInput>
      </View>
      <TouchableOpacity style={styles.button} onPress={calculate}>
        <Text style={styles.buttonText}>Calcular IMC</Text>
      </TouchableOpacity>
      <Result IMC={result} />
    </View>
  );
}
