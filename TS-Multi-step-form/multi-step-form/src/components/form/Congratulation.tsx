import ThankYouSvg from "../assets/ThankYou"

export const Congratulation = () => {
  return (
    <div
        className="
            w-full h-max flex items-center 
            sm:max-w-[500px] sm:h-[400px]
        "
    >
        <div
            className="
                w-full h-full flex items-center justify-center p-[19px] 
            "
        >
            <div
                className="
                    w-full flex flex-col items-center justify-center gap-y-3
                "
            >
                <ThankYouSvg />
                <p className="text-marineBlue font-bold text-xl">Thank you!</p>
                <p className="text-lightGray text-center font-semibold">Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com</p>
            </div>
        </div>

    </div>
  )
}
