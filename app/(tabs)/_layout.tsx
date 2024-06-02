import {Tabs} from "expo-router"

export default () => {
    return(
        <Tabs>
            <Tabs.Screen name="login" />
            <Tabs.Screen name="inscription" />
            <Tabs.Screen name="home" />
            <Tabs.Screen name="details"/>
            <Tabs.Screen name="paiement"/>
        </Tabs>

    )
}