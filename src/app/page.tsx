import TopAppBar from "@/components/TopAppBar";
import TopAppBarLogo from "@/components/TopAppBarLogo";
import TopAppBarSteps from "@/components/TopAppBarSteps";
import Image from "next/image";

export default function Home() {
    return (
        <>
            <TopAppBar>
                <TopAppBarLogo />
                <TopAppBarSteps />
            </TopAppBar>
        </>
    );
}
