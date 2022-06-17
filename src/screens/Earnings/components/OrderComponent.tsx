import * as React from 'react'
import { View, Text, Animated } from "react-native";
import { OrderComponent as OrderComponentInterface } from 'utils/interfaces'

import styles from "./OrderLineItem.styles"

const OrderComponent: React.FC<{ heightInterpolate: Animated.AnimatedInterpolation, paddingInterpolate: Animated.AnimatedInterpolation, componentData: OrderComponentInterface }> = ({ paddingInterpolate, heightInterpolate, componentData }) => {
    return <Animated.View style={[styles.earningsContainer, { maxHeight: heightInterpolate, paddingVertical: paddingInterpolate }]}>
        <Text style={styles.lineItemHeader}>{componentData.displayText}</Text>
        {componentData.lineItems.map(eachItem => {
            return <View style={styles.lineItemRow}>
            <Text style={styles.lineItem}>{eachItem.displayText}</Text>
            <Text style={styles.lineItem}>{`\u20B9 ${eachItem.amount}`}</Text>
        </View>
        })}
    </Animated.View>
}

export default OrderComponent