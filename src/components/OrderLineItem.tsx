import * as React from 'react'
import { Image, View, Text, TouchableWithoutFeedback, Animated, Easing } from "react-native";
import OrderComponent from './OrderComponent'
import styles from "./OrderLineItem.styles"
import { OrderLineItem as OrderLineItemInterface } from "../utils/interfaces"
import { titleCase } from "../utils/helpers"

const OrderId = ({ id }: { id: string }) => {
    const endChars = id.substring(id.length - 6);
    return <Text>
        <Text style={styles.orderId}>ID:</Text>
        <Text style={styles.orderId}>{`${id.substring(0, 3)}...${endChars.substring(0, 2)}`}</Text>
        <Text style={[styles.orderId, styles.highlight]}>{endChars.substring(2)}</Text>
    </Text>
}

const OrderLineItem: React.FC<OrderLineItemInterface> = (props) => {
    const [expanded, setExpanded] = React.useState(false)
    const logoStyles: {}[] = [styles.expanderIcon];

    const animation = new Animated.Value(expanded ? 0 : 1);

    Animated.timing(animation, {
        toValue: expanded ? 1 : 0,
        duration: 300,
        useNativeDriver: false,
        easing: Easing.linear
    }).start();

    const rotateInterpolate = animation.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '90deg']
    });

    const heightInterpolate = animation.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 100]
    });

    const paddingInterpolate = animation.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 12]
    });

    const animatedRotateStyles = { transform: [{ rotate: rotateInterpolate }] };

    logoStyles.push(animatedRotateStyles);

    return <TouchableWithoutFeedback onPress={() => expanded ? setExpanded(false) : setExpanded(true)}>
        <View style={styles.container}>
            <View style={styles.headerExpanderContainer}>
                <View style={styles.idTimeDistance}>
                    <View style={styles.clientLogoId}>
                        <>
                            {props.customerCode === 'Swiggy' ? <Image source={require(`../../assets/images/client_logo/swiggy.png`)} style={styles.clientLogo} /> :
                                props.customerCode === 'Zomato' ? <Image source={require(`../../assets/images/client_logo/zomato.png`)} style={styles.clientLogo} /> :
                                    props.customerCode === 'Flipkart' ? <Image source={require(`../../assets/images/client_logo/flipkart.png`)} style={styles.clientLogo} /> :
                                        props.customerCode === 'Amazon' ? <Image source={require(`../../assets/images/client_logo/amazon.png`)} style={styles.clientLogo} /> :
                                            props.customerCode === 'Zepto' ? <Image source={require(`../../assets/images/client_logo/zepto.png`)} style={styles.clientLogo} /> :
                                                <Image source={require(`../../assets/images/client_logo/client_logo.png`)} style={styles.clientLogo} />}</>
                        <OrderId id={props.wayBillNumberText} />
                    </View>
                    <View style={styles.timeDistance}>
                        <Text style={styles.timeDistanceText}>{props.timeText}</Text>
                        <Image source={require('../../assets/images/bullet.png')} style={styles.bulletIcon} />
                        <Text style={styles.timeDistanceText}>{`${props.distance} KM`}</Text>
                    </View>
                </View>
                <View style={styles.amtTypeExpander}>
                    <View style={styles.amtType}>
                        <Text style={styles.amount}>{`\u20B9 ${props.amount}`}</Text>
                        <Text style={[styles.paymentType, props.paymentMode === 'prepaid' ? styles.prepaid : styles.cod]}>{props.paymentMode !== 'COD' ? titleCase(props.paymentMode) : props.paymentMode}</Text>
                    </View>
                    <Animated.Image source={require('../../assets/images/arrow_icon.png')} style={logoStyles} />
                </View>
            </View>
            {expanded ? <>
                {props.orderComponents.map(eachComponent => {
                    return <OrderComponent heightInterpolate={heightInterpolate} paddingInterpolate={paddingInterpolate} componentData={eachComponent} />
                })}
            </> : null}
        </View>
    </TouchableWithoutFeedback>
}

export default OrderLineItem