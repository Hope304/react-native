import {
  View,
  ActivityIndicator,
  Dimensions,
  Platform,
  StyleSheet,
} from "react-native";
import { COLOR } from "../constants";

const Loader = ({ isLoading }) => {
  // if (!isLoading) return null;

  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={COLOR.primary} />
    </View>
  );
};

export default Loader;

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
  },
});
