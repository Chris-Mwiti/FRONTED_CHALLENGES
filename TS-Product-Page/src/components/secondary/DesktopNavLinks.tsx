const DesktopNavLinks = () => {
  return (
    <div
        className="
            hidden
            sm:flex
            items-center
            w-max h-max p-3
        "
    >
        <ul
                className="
                    items-center
                    flex
                    sm:flex-row sm:space-x-4 sm:gap-y-0
                "
            >
                <li
                    className="
                        sm:text-dGrayishBlue sm:text-base sm:font-normal
                    "
                > 
                    Collections
                </li>
                <li
                    className="
                       sm:text-dGrayishBlue sm:text-base sm:font-normal
                    "
                >
                    Men
                </li>
                <li
                    className="
                       sm:text-dGrayishBlue sm:text-base sm:font-normal
                    "
                >
                    Women
                </li>
                <li
                    className="
                       sm:text-dGrayishBlue sm:text-base sm:font-normal
                    "
                >
                    About
                </li>
                <li
                    className="
                        sm:text-dGrayishBlue sm:text-base sm:font-normal
                    "
                >
                    Contact
                </li>
            </ul>
    </div>
  )
}

export default DesktopNavLinks