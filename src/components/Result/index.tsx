import { Text, View } from "react-native";
import styles from "./style";
import { ResultProps } from "./types";

export default function Result({ IMC }: ResultProps) {
  return (
    <View style={styles.container}>
      {IMC !== 0 && !Number.isNaN(IMC) ? (
        <View>
          <Text style={styles.text}>Seu IMC é igual:</Text>
          <Text style={styles.result}>{IMC}</Text>
        </View>
      ) : (
        <Text style={styles.text}>Preencha o peso e altura</Text>
      )}
    </View>
  );
}
