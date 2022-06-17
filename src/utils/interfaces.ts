export interface OrderLineItem {
    "timeText": string,
    "distance": number,
    "amount": number,
    "wayBillNumberText": string,
    "paymentMode": string,
    "customerCode": string,
    "business"?: "FOOD" | "ECOM" | "STORE"
    "orderComponents": OrderComponent[]
}

export interface OrderComponent {
    "displayText": string,
    "lineItems": {
        "displayText": string,
        "amount": number
    }[]
}

export interface Earnings {
    "totalEarnings": number,
    "orderCount": number,
    "totalDistance": number,
    "orderLineItems": OrderLineItem[]
}