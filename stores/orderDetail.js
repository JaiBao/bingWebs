import { defineStore } from 'pinia'

export const useOrderDetailStore = defineStore('orderDetail', {
  state: () => ({
    orderCode: '',
    name: '',
    tel: '',
    address: '',
    selectedDate: '',
    selectedTime: '',
    orderCount: 0,
    finalPrice: 0
  }),
  actions: {
    setOrderDetails(orderCode, name, tel, address, selectedDate, selectedTime, orderCount, finalPrice) {
      this.orderCode = orderCode
      this.name = name
      this.tel = tel
      this.address = address
      this.selectedDate = selectedDate
      this.selectedTime = selectedTime
      this.orderCount = orderCount
      this.finalPrice = finalPrice
    }
  }
})
