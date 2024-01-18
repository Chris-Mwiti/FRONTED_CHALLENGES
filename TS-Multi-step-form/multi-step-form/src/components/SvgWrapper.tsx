import useWindowSize from "../hooks/useWindowSize";
import StepsUi from "./UI/StepsUi";
import DesktopBg from "./assets/DesktopBg";
import MobileBg from "./assets/MobileBg";

const SvgWrapper = () => {
    const {width} = useWindowSize()
    console.log(width)
    return ( 
        <section
            className="
                w-full h-max relative
                flex
            "
        >
            {width > 375 ? (<DesktopBg />) : (<MobileBg />)}
            <StepsUi />
        </section>
    );
}
 
export default SvgWrapper;