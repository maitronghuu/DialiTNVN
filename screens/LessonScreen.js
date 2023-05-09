import { Pressable, StyleSheet, Text, View, StatusBar, } from 'react-native'
import React, { useState } from 'react'
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from "@react-navigation/native";
import Lesson1 from '../Lesson/Lesson1';
import Lesson2 from '../Lesson/Lesson2';
import Lesson3 from '../Lesson/Lesson3';
import Lesson4 from '../Lesson/Lesson4';
import Lesson5 from '../Lesson/Lesson5';
import Lesson6 from '../Lesson/Lesson6';
import Lesson7 from '../Lesson/Lesson7';
import Lesson8 from '../Lesson/Lesson8';
import Lesson9 from '../Lesson/Lesson9';




const LessonScreen = () => {
    const navigation = useNavigation();
    const [Items, setItems] = useState([
        { key: 1, item: 'Bài 1' },
        { key: 2, item: 'Bài 2' },
        { key: 3, item: 'Bài 3' },
        { key: 4, item: 'Bài 4' },
        { key: 5, item: 'Bài 5' },
        { key: 6, item: 'Bài 6' },
        { key: 7, item: 'Bài 7' },
        { key: 8, item: 'Bài 8' },
        { key: 9, item: 'Bài 9' },
       
        

    ]);
    return (
        <SafeAreaView style={styles.container}>
            <View style={{
                padding: 10,
                marginTop: 5,
            }}>
                <Text style={{
                    color: "#FFFFFF",
                    backgroundColor: "#FF00FF",
                    padding: 14,
                    borderRadius: 10,
                    flexDirection: "row",
                    marginLeft: "auto",
                    marginRight: "auto",
                }}>
                    CHỦ ĐỀ ĐỊA LÍ TỰ NHIÊN VIỆT NAM
                </Text>
            </View>

            <ScrollView style={styles.scrollView} >

                <View style={styles.item}>
                    <Pressable onPress={() => navigation.navigate(Lesson1)}>
                        <Text style={styles.text}>Chủ đề 1. Vị trí địa lí và phạm vi lãnh thổ Việt Nam</Text>
                    </Pressable>
                </View>

                <View style={styles.item}>
                    <Pressable onPress={() => navigation.navigate(Lesson2)}>
                        <Text style={styles.text}>Chủ đề 2. Lịch sử hình thành và phát triển lãnh thổ Việt Nam</Text>
                    </Pressable>
                </View>

                <View style={styles.item}>
                    <Pressable onPress={() => navigation.navigate(Lesson3)}>
                        <Text style={styles.text}>Chủ đề 3. Đặc điểm tài nguyên khoáng sản Việt Nam</Text>
                    </Pressable>
                </View>

                <View style={styles.item}>
                    <Pressable onPress={() => navigation.navigate(Lesson4)}>
                        <Text style={styles.text}>Chủ đề 4. Đặc điểm địa hình Việt Nam</Text>
                    </Pressable>
                </View>

                
                <View style={styles.item}>
                    <Pressable onPress={() => navigation.navigate(Lesson5)}>
                        <Text style={styles.text}>Chủ đề 5. Đặc điểm khí hậu Việt Nam</Text>
                    </Pressable>
                </View>

                <View style={styles.item}>
                    <Pressable onPress={() => navigation.navigate(Lesson6)}>
                        <Text style={styles.text}>Chủ đề 6. Đặc điểm sông ngòi Việt Nam</Text>
                    </Pressable>
                </View>

                <View style={styles.item}>
                    <Pressable onPress={() => navigation.navigate(Lesson7)}>
                        <Text style={styles.text}>Chủ đề 7. Đặc điểm đất Việt Nam</Text>
                    </Pressable>
                </View>

                <View style={styles.item}>
                    <Pressable onPress={() => navigation.navigate(Lesson8)}>
                        <Text style={styles.text}>Chủ đề 8. Đặc điểm sinh vật Việt Nam</Text>
                    </Pressable>
                </View>

                <View style={styles.item}>
                    <Pressable onPress={() => navigation.navigate(Lesson9)}>
                        <Text style={styles.text}>Chủ đề 9. Các miền tự nhiên Việt Nam</Text>
                    </Pressable>
                </View>



            </ScrollView>

        </SafeAreaView>


    )
}

export default LessonScreen

const styles = StyleSheet.create({
    item: {
        padding: 3,
        marginVertical: 5,

    },
    container: {
        flex: 1,
        marginHorizontal: 16,
        paddingTop: StatusBar.currentHeight,
    },
    scrollView: {
        padding: 3,
        marginVertical: 5,
        marginBottom: 10,

    },
    text: {
        color: "#FFFFFF",
        backgroundColor: "#0000FF",
        padding: 10,
        borderRadius: 10,
        flexDirection: "row",
        marginLeft: 10,

    },
})