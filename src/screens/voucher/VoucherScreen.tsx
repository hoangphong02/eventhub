import { View, Text, FlatList, StyleSheet } from 'react-native'
import React, { useEffect } from 'react'
import { Dispatch } from 'redux'
import { useDispatch, useSelector } from 'react-redux'
import { IApplicationState } from '../../redux/storeConfig/store'
import { TextComponent } from '../../components'
import { getVouchers } from '../../redux/voucher/actions'

const VoucherScreen = () => {
  const dispatch: Dispatch = useDispatch()
  const { vouchers, isLoading } = useSelector(
    (state: IApplicationState) => state.voucherReducer,
  );
  useEffect(() => {
    dispatch(getVouchers(6));
  }, []);
  return (
    <View>
      <FlatList
        style={{ paddingHorizontal: 16 }}
        showsHorizontalScrollIndicator={false}
        data={vouchers}
        renderItem={({ item }) => (
          <View style={styles.container}>
            <TextComponent styles={{ fontSize: 14 }} text={item.name} />
          </View>
        )
        }
        contentContainerStyle={{ gap: 10 }}
      />
    </View>
  )
}

export default VoucherScreen
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
    justifyContent: "space-between",
    flexDirection: 'column',
    alignItems: 'center',
    flex: 1
  },
})