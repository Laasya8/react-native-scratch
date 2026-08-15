import "@/global.css"
import { Text, View } from "react-native";
import {Link} from "expo-router";

import {styled} from "nativewind";
import {SafeAreaView as RNSafeAreaView} from "react-native-safe-area-context";
const SafeAreaView=styled(RNSafeAreaView);

export default function App() {
    return (
        <SafeAreaView className="flex-1 bg-background p-5">
            <Text className="text-xl font-bold text-orange-400">
                Welcome to my first project!!
            </Text>
            <Link href="/onboarding" asChild>
                <Text className="mt-4 rounded bg-[#081126] text-white p-4">
                    Go to Onboarding
                </Text>
            </Link>
            <Link href="/(auth)/sign-in" asChild>
                <Text className="mt-4 rounded bg-[#081126] text-white p-4">
                    Go to Sign In
                </Text>
            </Link>
            <Link href="/(auth)/sign-up" asChild>
                <Text className="mt-4 rounded bg-[#081126] text-white p-4">
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
        </SafeAreaView>
    );
}


