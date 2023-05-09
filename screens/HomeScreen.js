import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context';

const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <View style={{ marginTop: 5 }}>
        <Image
          style={{
            height: 300,
            width: "100%",
            padding: 10,
            marginTop: 25,
            resizeMode: "contain"
          }}
          source={{
            uri: "https://cacnuoc.vn/wp-content/uploads/2018/01/ban-do-dia-ly-viet-nam.png",
          }}
          Image />
        <View style={{ padding: 10 }}>
          <Text
            style={{
              textAlign: "center",
              color: "magenta",
              fontSize: 25,
              fontWeight: "600",
            }}
          >
            ĐỊA LÍ TỰ NHIÊN VIỆT NAM
          </Text>
        </View>


        <View style={styles.view}>
          <View>
            <Image style={styles.image} source={{
              uri: "https://cdn.zenquiz.net/external/2017/03/22/06/a82ca0e0-0ec6-11e7-bf57-050901070303-compressed.jpg",
            }}>
            </Image>
          </View>

          <View>
            <Pressable onPress={() => navigation.navigate("Lesson")}
              style={styles.press}>
              <Text style={styles.text}>
                1. KIẾN THỨC TRỌNG TÂM
              </Text>
            </Pressable>
          </View>
        </View>

        

        <View style={styles.view}>
          <View>
            <Image style={styles.image} source={{
              uri: "http://th-thcsthanhan.haiduong.edu.vn/null/viet_tin/images/24.jpg",
            }}>
            </Image>
          </View>

          <View>
            <Pressable onPress={() => navigation.navigate("Tudien")}
              style={styles.press}>
              <Text style={styles.text}>
                2. TRA CỨU THUẬT NGỮ
              </Text>
            </Pressable>
          </View>
        </View>

        <View style={styles.view}>
          <View>
            <Image style={styles.image} source={{
              uri: "https://cdn.vietnambiz.vn/2019/8/30/hiring-mistakes-interview-test-1567170969526886882102.png",
            }}>
            </Image>
          </View>

          <View>
            <Pressable onPress={() => navigation.navigate("Quiz")}
              style={styles.press}>
              <Text style={styles.text}>
                3. CÂU HỎI TRẮC NGHIỆM
              </Text>
            </Pressable>
          </View>
        </View>



      </View>
    </SafeAreaView>
  );
}

export default HomeScreen

const styles = StyleSheet.create({
  view: {
    padding: 10,
    flexDirection: "row",
    borderRadius: 10,
    marginBottom: 10,

  },
  
  image: {
    height: 100,
    width: 100,
    marginLeft: 50,
    borderRadius: 10,
    flexDirection: "row",
  },
  
  text: {

    fontSize: 15,
    color: 'blue',
    borderRadius: 5,
    marginLeft: 10,
    flexDirection: "row",
  },
  
  press: {
    padding: 20,
    borderRadius: 10,
    flexDirection: "row",

  },
})