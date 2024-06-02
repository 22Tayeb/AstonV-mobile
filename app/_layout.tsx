import { Stack } from "expo-router"

const StackLayout = () => {
    return (

        <Stack>
            <Stack.Screen name="/login" />
            <Stack.Screen name="/inscription" />
            <Stack.Screen name="/details" />
            <Stack.Screen name="/paiement" />
            <Stack.Screen name="(tabs)"/>
        </Stack>
    )
}