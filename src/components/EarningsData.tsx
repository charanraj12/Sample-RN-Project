import * as React from 'react';
import { View, FlatList } from "react-native"
import Summary from "./Summary"
import OrderLineItem from "./OrderLineItem"
import { OrderLineItem as OrderLineItemInterface } from "../utils/interfaces"

import styles from "./Food.styles"

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

const EarningsData: React.FC<{ data: OrderLineItemInterface[] }> = ({ data }) => {
    return <View style={styles.container}>
        <Summary totalEarnings={+data.reduce((p, c) => p + c.amount, 0).toFixed(2)} totalDistance={+data.reduce((p, c) => p + c.distance, 0).toFixed(2)} orderCount={data.length} />
        <FlatList data={data} renderItem={OrderLineItemList} keyExtractor={item => item.wayBillNumberText} />
    </View>
}

export default EarningsData