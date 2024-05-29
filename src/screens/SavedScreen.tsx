import React, { useCallback, useState } from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  ImageBackground,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
} from "react-native";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { image500 } from "../../utils/moviesapi";
import { StackNavigationProp } from "@react-navigation/stack";

const { width, height } = Dimensions.get("window");

interface Movie {
  id: string;
  title?: string;
  poster_path?: string;
  // Add other movie properties as needed
}

type RootStackParamList = {
  Movie: { movie: Movie };
  // Add other routes as needed
};

const SavedScreen: React.FC = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  const [savedMovies, setSavedMovies] = useState<Movie[]>([]);

  useFocusEffect(
    useCallback(() => {
      // Load saved movies from AsyncStorage when the screen gains focus
      const loadSavedMovies = async () => {
        try {
          const savedMovies = await AsyncStorage.getItem("savedMovies");
          const savedMoviesArray: Movie[] = savedMovies ? JSON.parse(savedMovies) : [];
          setSavedMovies(savedMoviesArray);
          console.log("Pulled saved movies from AsyncStorage");
        } catch (error) {
          console.log(error);
        }
      };
      loadSavedMovies();
    }, [navigation])
  );

  const clearSavedMovies = async () => {
    try {
      await AsyncStorage.removeItem("savedMovies");
      setSavedMovies([]);
      console.log("Cleared all saved movies");
    } catch (error) {
      console.log("Error clearing saved movies", error);
    }
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <ImageBackground
          source={require("../../assets/images/homescreen.png")}
          style={styles.backgroundImage}
          resizeMode="cover"
        >
          <View style={styles.content}>
            <View style={styles.header}>
              <Text style={styles.headerText}>Saved Movies</Text>
              <TouchableOpacity onPress={clearSavedMovies} style={styles.clearButton}>
                <Text style={styles.clearButtonText}>Clear</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.moviesContainer}>
              {savedMovies.map((movie, index) => (
                <View style={styles.movieItem} key={index}>
                  <TouchableOpacity onPress={() => navigation.push("Movie", { movie })}>
                    {movie.poster_path ? (
                      <Image
                        source={{ uri: image500(movie.poster_path) || undefined }}
                        style={styles.movieImage}
                      />
                    ) : (
                      <View style={[styles.movieImage, styles.placeholderImage]}>
                        <Text style={styles.placeholderText}>No Image</Text>
                      </View>
                    )}
                    <Text style={styles.movieTitle}>
                      {movie.title && movie.title.length > 15
                        ? movie.title.slice(0, 15) + "..."
                        : movie.title || "No Title"}
                    </Text>
                  </TouchableOpacity>
                </View>
              ))}
            </View>
          </View>
        </ImageBackground>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  content: {
    marginTop: 12,
    padding: 16,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 24,
    color: "white",
  },
  clearButton: {
    backgroundColor: "#1E40AF",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  clearButtonText: {
    fontWeight: "bold",
    fontSize: 18,
    color: "white",
  },
  moviesContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  movieItem: {
    marginTop: 16,
  },
  movieImage: {
    width: width * 0.41,
    height: height * 0.25,
    borderRadius: 12,
  },
  placeholderImage: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ccc",
  },
  placeholderText: {
    color: "#555",
    fontSize: 16,
  },
  movieTitle: {
    color: "#D1D5DB",
    fontWeight: "bold",
    fontSize: 18,
    marginLeft: 4,
  },
});

export default SavedScreen;
