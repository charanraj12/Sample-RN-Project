import * as React from 'react';
import { useAppDispatch, useAppSelector } from 'app/hooks'
import { View, FlatList } from "react-native"
import Summary from "./Summary"
import OrderLineItem from "./OrderLineItem"
import { fetchEarningData } from "../api"
import { OrderLineItem as OrderLineItemInterface } from "utils/interfaces"

import styles from "./EarningsData.style"

const OrderLineItemList: React.FC<{ item: OrderLineItemInterface }> = ({ item }) => {
    return <OrderLineItem
        timeText={item.timeText}
        distance={item.distance}
        amount={item.amount}
        wayBillNumberText={item.wayBillNumberText}
        paymentMode={item.paymentMode}
        customerCode={item.customerCode}
        orderComponents={item.orderComponents}
    />
}

const FoodSummary: React.FC = () => {
    const earningsData = useAppSelector(state => state.earningsData);
    const dispatch = useAppDispatch();

    React.useEffect(() => {
        if (earningsData.orderLineItems.length === 0) {
            dispatch(fetchEarningData())
        }
    }, [dispatch, earningsData])

    return <View style={styles.container}>
        <Summary totalEarnings={earningsData.totalEarnings} totalDistance={earningsData.totalDistance} orderCount={earningsData.orderCount} />
        <FlatList data={earningsData.orderLineItems} renderItem={OrderLineItemList} keyExtractor={item => item.wayBillNumberText} />
    </View>
}

export default FoodSummary