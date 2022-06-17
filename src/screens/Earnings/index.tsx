import * as React from 'react';
import { View, useWindowDimensions, Text, Image } from 'react-native';
import { TabView, TabBar } from 'react-native-tab-view';
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { fetchEarningData } from "./api"
import EarningsData from "./components/EarningsData"

const renderTabBar = (props: any) => {
  return <TabBar
    {...props}
    indicatorStyle={{ backgroundColor: '#43419e', height: 4, borderTopRightRadius: 3, borderTopLeftRadius: 4 }}
    style={{ backgroundColor: 'white' }}
    renderLabel={({ route, focused }) => (
      <Text style={{ color: focused ? '#43419e' : "grey", margin: 8, fontFamily: "Nunito-Bold", fontSize: 16, fontWeight: "300" }}>
        {route.title}
      </Text>
    )}
  />
};

export default function EarningsPage() {
  const layout = useWindowDimensions();
  const earningsData = useAppSelector(state => state.earningsData);
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    if (earningsData.orderLineItems.length === 0) {
      dispatch(fetchEarningData())
    }
  }, [dispatch, earningsData])

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "food", title: "Food" },
    { key: "ecom", title: "E-Com" },
    { key: "store", title: "Store" }
  ]);

  const renderScene = ({ route }: { route: { [k: string]: string } }) => {
    switch (route.key) {
      case 'food':
        return <EarningsData data={earningsData.orderLineItems.filter(eachLine => eachLine.business && eachLine.business === 'FOOD')}/>;
      case 'ecom':
        return <EarningsData data={earningsData.orderLineItems.filter(eachLine => eachLine.business && eachLine.business === 'ECOM')}/>;
      default:
        return null;
    }
  };

  return (
    <>
      <View style={{ padding: 21, backgroundColor: "white", display: "flex", flexDirection: "row", marginRight: 9 }}>
        <Image source={require('../../../assets/images/back_icon.png')} />
        <Text style={{ fontFamily: "Nunito-Bold", fontSize: 17, color: 'black' }}>01 Nov, Thu</Text>
      </View>
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width, height: layout.height }}
        renderTabBar={renderTabBar}
      />
    </>
  );
}