import Calculations from "@/components/Calculations";
import CardDetails from "@/components/CardDetails";
import Column from "@/components/Column";
import ContactInfo from "@/components/ContactInfo";
import Footer from "@/components/Footer";
import FooterCopy from "@/components/FooterCopy";
import FooterLogo from "@/components/FooterLogo";
import FooterMenu from "@/components/FooterMenu";
import MainWrapper from "@/components/MainWrapper";
import OrderItem from "@/components/OrderItem";
import OrderItems from "@/components/OrderItems";
import OrderSummay from "@/components/OrderSummary";
import PaymentMethods from "@/components/PaymentMethods";
import PaymentOptions from "@/components/PaymentOptions";
import PromoCode from "@/components/PromoCode";
import ShippingInfo from "@/components/ShippingInfo";
import TopAppBar from "@/components/TopAppBar";
import TopAppBarLogo from "@/components/TopAppBarLogo";
import TopAppBarSteps from "@/components/TopAppBarSteps";
import products from "@/products";

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
                    <PaymentMethods>
                        <PaymentOptions />
                        <CardDetails />
                    </PaymentMethods>
                </Column>
                <Column className="w-full md:w-4/12">
                    <OrderSummay>
                        <OrderItems>
                            {products.map(product => (
                                <OrderItem key={product.id} product={product} />
                            ))}
                        </OrderItems>
                        <PromoCode />
                        <Calculations />
                    </OrderSummay>
                </Column>
            </MainWrapper>
            <Footer>
                <FooterLogo />
                <FooterMenu />
                <FooterCopy />
            </Footer>
        </>
    );
}
