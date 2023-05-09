import { StyleSheet, Text, View, Image, StatusBar } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context'

const Lesson3 = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View >
                <Image
                    style={{
                        height: 250,
                        width: "100%",
                        marginTop: 5,
                        resizeMode: "contain"
                    }} source={
                        require('../assets/khoangsan.jpg')}>
                </Image>
            </View>

            <View style={styles.View}>
                <Text style={styles.textTenBai}>CHỦ ĐỀ 3. ĐẶC ĐIỂM TÀI NGUYÊN KHOÁNG SẢN VIỆT NAM</Text>
            </View>
            <ScrollView style={styles.scrollView}>
                <View>
                    <Text style={styles.textDeMuc}>
                        1. Việt Nam là nước giàu tài nguyên khoáng sản:
                    </Text>
                    <Text style={styles.textNoiDung}>
                        - Nước ta có nguồn khoáng sản phong phú, đa dạng  (5000 điểm quặng và tụ khoáng của gần 60 loại khoáng sản khác nhau), được coi là nước giàu có về khoáng sản.
                    </Text>
                    <Text style={styles.textNoiDung}>
                        - Song phần lớn các mỏ có trữ lượng vừa và nhỏ. Một số khoáng sản có trữ lượng lớn: than, dầu khí, apatit, đá vôi, sắt, …
                    </Text>
                    <Text style={styles.textDeMuc}>
                        2. Sự hình thành các vùng mỏ chính ở nước ta:
                    </Text>
                    <Text style={styles.textNoiDung}>
                        - Giai đoạn Tiền Cambri: Hình thành các mỏ than  chì, đồng, vàng,  sắt, đá quý trên các mảng nền cổ
                    </Text>
                    <Text style={styles.textNoiDung}>
                        - Giai đoạn Cổ kiến tạo: Hình thành các khoáng sản: apatit, than, sắt, thiếc, mangan, titan, vàng, bôxit trầm tích, đá vôi, đá quý… ở khắp cả nước.
                    </Text>
                    <Text style={styles.textNoiDung}>
                        - Giai đoạn Tân kiến tạo: Hình thành các khoáng sản chủ yếu là dầu mỏ, khí đốt, than nâu, than bùn ở thềm lục địa, Đồng bằng sông Hồng, Đồng bằng sông Cửu Long; bôxit ở Tây Nguyên
                    </Text>

                    <Text style={styles.textDeMuc}>
                        3. Vấn đề khai thác và bảo vệ tài nguyên khoáng sản.
                    </Text>
                    <Text style={styles.textNoiDung}>
                        Cần thực hiện tốt Luật khoáng sản để khai thác hợp lý, sử dụng tiết kiệm hiệu quả nguồn tài nguyên, khoáng sản
                    </Text>

                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Lesson3

const styles = StyleSheet.create({
    View: {
        padding: 10,
        marginTop: 40,

    },
    textTenBai: {
        color: "#FFFFFF",
        backgroundColor: "#0000FF",
        padding: 10,
        borderRadius: 10,
        flexDirection: "row",
        marginLeft: "auto",
        marginRight: "auto",
    },
    textDeMuc: {
        marginLeft: 10,
        fontSize: 20,
        color: "#FF0000",

    },
    textNoiDung: {
        marginLeft: 10,
        fontSize: 20,
        color: "#0000FF",
        justifyContent: 'center'

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
})