import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import * as interfaces from '../../utils/interfaces'

const initialState: interfaces.Earnings = {
    totalEarnings: 0,
    totalDistance: 0,
    orderCount: 0,
    orderLineItems: [],

}

export const earningsData = createSlice({
  name: 'earningsData',
  initialState,
  reducers: {
    setEarningsData: (state, action: PayloadAction<interfaces.Earnings>) => {
      return action.payload
    },
  }
})

export const { setEarningsData} = earningsData.actions

export default earningsData.reducer