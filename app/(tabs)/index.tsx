import "@/global.css"
import { Text, View } from "react-native";
import {Link} from "expo-router";

export function App() {
    return (
        <View className="flex-1 items-center justify-center bg-white">
            <Text className="text-xl font-bold text-success">
                Welcome to my first project!!
            </Text>
            <Link href="/onboarding" asChild>
                <Text className="mt-4 rounded bg-primary text-white p-4">
                    Go to Onboarding
                </Text>
            </Link>
            <Link href="/(auth)/sign-in" asChild>
                <Text className="mt-4 rounded bg-primary text-white p-4">
                    Go to Sign In
                </Text>
            </Link>
            <Link href="/(auth)/sign-up" asChild>
                <Text className="mt-4 rounded bg-primary text-white p-4">
                    Go to Sign Up
                </Text>
            </Link>
            <Link
                href={{
                    pathname:"/subscriptions/[id]",
                    params:{id:"spotify"},
                }}
                asChild
            >
                <Text className="mt-4">Spotify subscription</Text>
            </Link>
            <Link
                href={{
                    pathname:"/subscriptions/[id]",
                    params:{id:"claude"},
                }}
                asChild
            >
                <Text className="mt-4">Claude Subscription</Text>
            </Link>
        </View>
    );
}

export default App;


