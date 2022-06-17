import * as React from 'react';
import { View, Text } from "react-native";
import styles from "./Symmary.styles"

const SummaryData: React.FC<{totalEarnings:number, orderCount: number, totalDistance: number}> = ({totalEarnings, orderCount, totalDistance}) => {
    return <View style={styles.container}>
        <View style={styles.component}>
            <Text style={styles.componentValue}>{`\u20B9 ${totalEarnings}`}</Text>
            <Text  style={styles.componentName}>Total Earnings</Text>
        </View>
        <View style={[styles.component, styles.middleComponent]}>
            <Text style={styles.componentValue}>{orderCount}</Text>
            <Text  style={styles.componentName}>Total Orders</Text>
        </View>
        <View style={styles.component}>
            <Text style={styles.componentValue}>{totalDistance}</Text>
            <Text  style={styles.componentName}>Total KM</Text>
        </View>
    </View>
}

export default SummaryData