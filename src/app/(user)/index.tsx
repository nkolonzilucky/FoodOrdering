import { Redirect } from "expo-router";

export default function TabIndex() {
    console.log("Hi from app/(user)/index.tsx");
    return <Redirect href={"/(user)/menu/"} />;
}