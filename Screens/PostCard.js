import React, {Component} from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import Ionicons from "react-native-vector-icons/Ionicons";

export default class PostCard extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.cardContainer}>
          <View style={styles.authorContainer}>
            <View style={styles.authorImageContainer}>
              <Image 
              source={require("../assets/profile_img.png")}
              style={styles.profileImage}
              ></Image>
            </View>
            <View style={styles.authorNameContainer}>
              <Text style={styles.authorNameText}>AHHH</Text>
            </View>
          </View>
          <Image source={require("../assets/post.jpeg")} style={styles.postImage} />
        </View>
        <View style={styles.actionContainer}>
          <View style={styles.likeButton}>
            <Ionicons name={"heart"} size={RFValue(30)} color={"white"} />
            <Text style={styles.likeText}>69k</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  actionContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: RFValue(10)
  },
  likeButton: {
    width: RFValue(160),
    height: RFValue(40),
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "#eb3948",
    borderRadius: RFValue(30)
  },
  likeText: {
    color: "white",
    fontSize: RFValue(25),
    marginLeft: RFValue(5)
  },
  authorNameText: {
    fontSize: RFValue(18),
    color: "white"
  },
  authorNameContainer: {
    paddingLeft: RFValue(20),
    justifyContent: "center"
  },
});
