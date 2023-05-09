import { StyleSheet, Text, View, Image, StatusBar } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context'

const Lesson1 = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View >
                <Image
                    style={{
                        height: 250,
                        width: "100%",
                        padding: 10,
                        marginTop: 5,
                        resizeMode: "contain"
                    }} source={
                        require('../assets/dongnama.png')}>
                </Image>
            </View>
            <View style={styles.View}>
                <Text style={styles.textTenBai}>CHỦ ĐỀ 1. VỊ TRÍ ĐỊA LÍ VÀ PHẠM VI LÃNH THỔ VIỆT NAM</Text>
            </View>
            <ScrollView style={styles.scrollView}>
                <View>
                    <Text style={styles.textDeMuc}>
                        1. Vị trí địa lí:
                    </Text>
                    <Text style={styles.textNoiDung}>
                        -  Nằm ở rìa phía đông của bán cầu trên bán đảo Đông Dương, gần trung tâm khu vực Đông Nam Á.
                    </Text>
                    <Text style={styles.textNoiDung}>
                        - Hệ tọa độ địa lý:
                    </Text>
                    <Text style={styles.textNoiDung}>
                        + Điểm cực Bắc : 23o23'B (tại xã Lũng Cú, huyện Đồng Văn, tỉnh Hà Giang).
                    </Text>
                    <Text style={styles.textNoiDung}>
                        + Điểm cực Nam : 8o34'B (tại xã Đất Mũi, huyện Ngọc Hiển, tỉnh Cà Mau).
                    </Text>
                    <Text style={styles.textNoiDung}>
                        + Điểm cực Đông : 109o24'Đ (tại xã Vạn Thạch, huyện Vạn Ninh, tỉnh Khánh Hoà).
                    </Text>
                    <Text style={styles.textNoiDung}>
                        + Điểm cực Tây : 102o09'Đ (tại xã Sín Thầu, huyện Mường Nhé, tỉnh Điện Biên).
                    </Text>
                    <Text style={styles.textDeMuc}>
                        2. Phạm vi lãnh thổ:
                    </Text>
                    <Text style={styles.textDeMuc}>
                        a. Vùng đất
                    </Text>
                    <Text style={styles.textNoiDung}>
                        - Diện tích đất liền và các hải đảo 331.212 km2. Đường biên giới trên đất liền dài 4600km (Phía Bắc giáp Trung Quốc, Phía Tây giáp Lào và Campuchia). Đường bờ biển dài 3260km.
                    </Text>
                    <Text style={styles.textNoiDung}>
                        - Nước ta có 4000 đảo lớn, trong đó có hai quần đảo Trường Sa (Khánh Hoà), Hoàng Sa (Đà Nẵng).
                    </Text>
                    <Text style={styles.textDeMuc}>
                        b. Vùng biển
                    </Text>
                    <Text style={styles.textNoiDung}>
                        - Diện tích khoảng 1 triệu km2 gồm vùng nội thuỷ, lãnh hải, vùng tiếp giáp lãnh hải, vùng đặc quyền kinh tế và vùng thềm lục địa.
                    </Text>
                    <Text style={styles.textNoiDung}>
                        - Nội thuỷ: Từ đất liền tới đường cơ sở (Đường cơ sở là đường nối các đảo gần bờ và các mũi đất nhô ra xa nhất của đất liền).
                    </Text>
                    <Text style={styles.textNoiDung}>
                        - Lãnh hải: Rộng ra 12 hải lý so với vùng nội thuỷ.
                    </Text>
                    <Text style={styles.textNoiDung}>
                        - Vùng tiếp giáp lãnh hải: Rộng ra 12 hải lý so với vùng lãnh hải.
                    </Text>
                    <Text style={styles.textNoiDung}>
                        - Vùng đặc quyền kinh tế: Rộng ra 200 hải lý tính từ đường cơ sở.
                    </Text>
                    <Text style={styles.textNoiDung}>
                        - Thềm lục địa: Là phần đất dưới biển ra tới độ sâu khoảng 200 m.
                    </Text>
                    <Text style={styles.textDeMuc}>
                        c. Vùng Trời
                    </Text>
                    <Text style={styles.textNoiDung}>
                        Khoảng không giới hạn độ cao, bao trùm trên lãnh thổ.
                    </Text>
                    <Text style={styles.textDeMuc}>
                        3. Ý nghĩa vị trí địa lí:
                    </Text>
                    <Text style={styles.textDeMuc}>
                        a. Ý nghĩa về tự nhiên:
                    </Text>
                    <Text style={styles.textNoiDung}>
                        - Thiên nhiên mang tính chất nhiệt đới ẩm gió mùa.
                    </Text>
                    <Text style={styles.textNoiDung}>
                        - Đa dạng về động - thực vật, nông sản.
                    </Text>
                    <Text style={styles.textNoiDung}>
                        - Nằm trên vành đai sinh khoáng nên có nhiều tài nguyên khoáng sản.
                    </Text>
                    <Text style={styles.textNoiDung}>
                        - Có sự phân hoá da dạng về tự nhiên, phân hoá Bắc - Nam. Đông – Tây.
                    </Text>
                    <Text style={styles.textNoiDung}>
                        -  Khó khăn: bão, lũ lụt, hạn hán.
                    </Text>
                    <Text style={styles.textNoiDung}>
                        Khoảng không giới hạn độ cao, bao trùm trên lãnh thổ.
                    </Text>
                    <Text style={styles.textDeMuc}>
                        b. Ý nghĩa về kinh tế, văn hóa, xã hội và quốc phòng:.
                    </Text>
                    <Text style={styles.textDeMuc}>
                        - Về kinh tế:
                    </Text>
                    <Text style={styles.textNoiDung}>
                        + Có nhiều thuận lợi dể phát triển cả về giao thông đường bộ, đường biển, đường không với các nước trên thế giới tạo điều kiện thực hiện chính sách mở cửa, hội nhập với các nước trong khu vưc và trên Thế giới.
                    </Text>
                    <Text style={styles.textNoiDung}>
                        + Vùng biển rộng lớn, giàu có, phát triển các ngành kinh tế (khai thác, nuôi trồng, đánh bắt hải sản, giao thông biển, du lịch).
                    </Text>
                    <Text style={styles.textDeMuc}>
                        - Về văn hoá - xã hội:
                    </Text>
                    <Text style={styles.textNoiDung}>
                        Thuận lợi nước ta chung sống hoà bình, hợp tác hữu nghị và cùng phát triển với các nước láng giềng và các nước trong khu vực Đông Nam Á.
                    </Text>
                    <Text style={styles.textDeMuc}>
                        - Về chính trị và quốc phòng:
                    </Text>
                    <Text style={styles.textNoiDung}>
                        Là khu vực quân sự đặc biệt quan trọng của vùng Đông Nam Á. Biển Đông đối với nước ta là 1 hướng chiến lược có ý nghĩa sống còn trong công cuộc xây dựng, phát triển kinh tế và bảo vệ Tổ Quốc.
                    </Text>
                </View>
            </ScrollView>
        </SafeAreaView>

    )
}

export default Lesson1

const styles = StyleSheet.create({
    image: {
        height: 100,
        width: 100,
        marginLeft: 50,
        borderRadius: 10,
        flexDirection: "row",
    },
    View: {
        padding: 10,


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
        justifyContent: "center"
    },
    container: {
        flex: 1,
        paddingTop: StatusBar.currentHeight,
    },
    scrollView: {
        padding: 3,
        marginVertical: 5,
        marginBottom: 5,
    },
})