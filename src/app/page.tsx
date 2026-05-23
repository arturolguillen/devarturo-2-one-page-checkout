import Column from "@/components/Column";
import ContactInfo from "@/components/ContactInfo";
import MainWrapper from "@/components/MainWrapper";
import ShippingInfo from "@/components/ShippingInfo";
import TopAppBar from "@/components/TopAppBar";
import TopAppBarLogo from "@/components/TopAppBarLogo";
import TopAppBarSteps from "@/components/TopAppBarSteps";

export default function Home() {
    return (
        <>
            <TopAppBar>
                <TopAppBarLogo />
                <TopAppBarSteps />
            </TopAppBar>
            <MainWrapper>
                <Column className="w-full md:w-8/12 flex flex-col gap-8">
                    <ContactInfo />
                    <ShippingInfo />
                </Column>
                <Column className="w-full md:w-4/12">
                    <></>
                </Column>
            </MainWrapper>
        </>
    );
}
