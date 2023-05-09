import { StyleSheet, Text, View, Image, StatusBar } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context'

const Lesson8 = () => {
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
            require('../assets/sinhvat.jpg')}>
        </Image>
      </View>
      <View style={styles.View}>
        <Text style={styles.textTenBai}>CHỦ ĐỀ 8. ĐẶC ĐIỂM SINH VẬT VIỆT NAM</Text>
      </View>
      <ScrollView style={styles.scrollView}>
        <View>
          <Text style={styles.textDeMuc}>
            1. Đặc điểm chung:
          </Text>
          <Text style={styles.textNoiDung}>
            - Sinh vật Việt Nam rất phong phú và đa dạng( Đa dạng về thành phần loài, gen di truyền, kiểu hệ sinh thái, công dụng của các sản phẩm)
          </Text>
          <Text style={styles.textNoiDung}>
            - Sinh vật phân bố khắp nơi trên lãnh thổ và phát triển quanh năm, như trên đất liền phát triển một đới rừng nhiệt đới gió mùa và trên biển Đông phát triển một khu hệ sinh vật biển nhiệt đới vô cùng giàu có.
          </Text>
          <Text style={styles.textNoiDung}>
            -Do tác động của con người, nhiều hệ sinh thái tự nhiên bị tàn phá, biến đổi và suy giảm về số lượng và chất lượng.
          </Text>


          <Text style={styles.textDeMuc}>
            2. Sự đa dạng về hệ sinh thái.
          </Text>
          <Text style={styles.textDeMuc}>
            a. Hệ sinh thái rừng ngập mặn
          </Text>
          <Text style={styles.textNoiDung}>
            - Phân bố: Rộng 300.000 ha phân bố dọc bờ biển, ven hải đảo.
          </Text>
          <Text style={styles.textNoiDung}>
            - Đặc điểm: Sống trong môi trường ngập mặn, đất bùn lỏng. Có các sinh vật: thực vật (sú, vẹt, đước); các hải sản; chim, thú.
          </Text>
          <Text style={styles.textDeMuc}>
            b. Hệ sinh thái rừng nhiệt đới gió mùa.
          </Text>
          <Text style={styles.textNoiDung}>
            - Phân bố: ở vùng đồi núi nước ta ( đồi núi chiếm ¾ diện tích lãnh thổ)
          </Text>
          <Text style={styles.textNoiDung}>
            - Có các kiểu rừng như: Rừng thường xanh: ở Cúc Phương, Ba Bể. Rừng thưa rụng lá (rừng Khộp): Tây Nguyên.
            Rừng tre nứa : Việt Bắc. Rừng ôn đới: vùng núi cao Hoàng Liên Sơn
          </Text>
          <Text style={styles.textDeMuc}>
            c. Các khu bảo tồn thiên nhiên và vườn quốc gia.
          </Text>
          <Text style={styles.textNoiDung}>
            - Phân bố: 11 vườn quốc gia.
          </Text>
          <Text style={styles.textNoiDung}>
            - Đặc điểm: Nơi bảo tồn gen sinh vật tự nhiên. Là cơ sở nhân giống, lai tạo giống mới. Phòng thí nghiệm tự nhiên.
          </Text>

          <Text style={styles.textDeMuc}>
            d. Các hệ sinh thái nông nghiệp
          </Text>
          <Text style={styles.textNoiDung}>
            - Phân bố: ở các vùng nông thôn đồng bằng, trung du miền núi.
          </Text>
          <Text style={styles.textNoiDung}>
            - Đặc điểm: Duy trì cung cấp lương thực, thực phẩm. Trồng cây công nghiệp, cây lấy gỗ.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Lesson8

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