import { StyleSheet, Text, View, Image, StatusBar } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context'

const Lesson7 = () => {
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
            require('../assets/dat.jpg')}>
        </Image>
      </View>
      <View style={styles.View}>
        <Text style={styles.textTenBai}>CHỦ ĐỀ 7. ĐẶC ĐIỂM ĐẤT VIỆT NAM</Text>
      </View>
      <ScrollView style={styles.scrollView}>
        <View>
          <Text style={styles.textDeMuc}>
            1. Đặc điểm chung:
          </Text>
          <Text style={styles.textNoiDung}>
            -  Đất ở nước ta rất đa dạng thể hiện rõ tính chất nhiệt đới gió mùa ẩm của thiên nhiên Việt Nam. Là điều kiện tốt giúp nền nông nghiệp nước ta vừa đa canh, vừa chuyên canh có hiệu quả trên những loại đất thích hợp.
          </Text>
          <Text style={styles.textNoiDung}>
            - Đất ở nước ta có 3 nhóm đất chính
          </Text>
          <Text style={styles.textDeMuc}>
            2. Sự phân hoá :
          </Text>
          <Text style={styles.textDeMuc}>
            a. Đất Feralit
          </Text>
          <Text style={styles.textDeMuc}>
            -  Đặc tính chung
          </Text>
          <Text style={styles.textNoiDung}>
            Chứa ít mùn, nhiều sét. Nhiều hợp chất sắt, nhôm nên màu đỏ, vàng. Dễ bị kết von thành đá ong
          </Text>
          <Text style={styles.textDeMuc}>
            -  Các loại đất
          </Text>
          <Text style={styles.textNoiDung}>
            Vùng núi đá vôi phía Bắc. Đông Nam Bộ, Tây Nguyên.
          </Text>
          <Text style={styles.textDeMuc}>
            -  Phân bố
          </Text>
          <Text style={styles.textNoiDung}>
            Đá mẹ là đá vôi.Đá mẹ là đá badan
          </Text>

          <Text style={styles.textDeMuc}>
            -  Giá trị sử dụng
          </Text>
          <Text style={styles.textNoiDung}>
            Rất thích hợp nhiều loại cây công nghiệp nhiệt đới.
          </Text>

          <Text style={styles.textDeMuc}>
            b. Đất mùn núi cao
          </Text>
          <Text style={styles.textDeMuc}>
            -  Đặc tính chung
          </Text>
          <Text style={styles.textNoiDung}>
            Xốp, giàu mùn, màu đen hoặc nâu.
          </Text>
          <Text style={styles.textDeMuc}>
            -  Các loại đất
          </Text>
          <Text style={styles.textNoiDung}>
            Mùn thô. Mùn than bùn trên núi.
          </Text>
          <Text style={styles.textDeMuc}>
            -  Phân bố
          </Text>
          <Text style={styles.textNoiDung}>
            Địa hình núi cao trên 2000m (Hoàng Liên Sơn, Chư Yang Sin).
          </Text>
          <Text style={styles.textDeMuc}>
            -  Giá trị sử dụng
          </Text>
          <Text style={styles.textNoiDung}>
            Phát triển lâm nghiệp để bảo vệ rừng đầu nguồn.
          </Text>

          <Text style={styles.textDeMuc}>
            c. Đất bồi tụ phù sa sông và biển
          </Text>
          <Text style={styles.textDeMuc}>
            -  Đặc tính chung
          </Text>
          <Text style={styles.textNoiDung}>
            Tơi xốp, ít chua, giàu mùn. Dễ canh tác, độ phì cao.
          </Text>
          <Text style={styles.textDeMuc}>
            -  Các loại đất
          </Text>
          <Text style={styles.textNoiDung}>
            Đất phù sa sông. Đất phù sa biển.

          </Text>
          <Text style={styles.textDeMuc}>
            -  Phân bố
          </Text>
          <Text style={styles.textNoiDung}>
            Tập trung châu thổ sông Hồng, sông Cửu Long. Các đồng bằng khác.

          </Text>
          <Text style={styles.textDeMuc}>
            -  Giá trị sử dụng
          </Text>
          <Text style={styles.textNoiDung}>
            Là  đất nông nghiệp chính, thích hợp với nhiều loại đất cây trồng, đặc biệt cây lúa nước.
          </Text>

        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Lesson7

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