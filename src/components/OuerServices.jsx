import { CiDeliveryTruck } from "react-icons/ci";
import { FaExchangeAlt, FaPhone } from "react-icons/fa";


const OuerServices = () => {
    return (
        <div className="max-w-6xl mx-auto ">
            <section className="p-6 my-6 dark:bg-gray-100 dark:text-gray-800">
                <div className="container grid grid-cols-1 gap-6 mx-auto sm:grid-cols-2 xl:grid-cols-3">
                    <div className="flex p-4 space-x-4 rounded-lg md:space-x-6 dark:bg-gray-50 dark:text-gray-800">
                        <div className="flex justify-center p-2 items-center rounded-lg sm:p-4 dark:bg-violet-600">
                        <CiDeliveryTruck className="text-3xl text-white "></CiDeliveryTruck>
                        </div>
                        <div className="flex flex-col justify-center align-middle">
                            <p className="capitalize">
                                FREE SHIPPING</p>
                        </div>
                    </div>
                    <div className="flex p-4 space-x-4 rounded-lg md:space-x-6 dark:bg-gray-50 dark:text-gray-800">
                        <div className="flex justify-center items-center p-2 align-middle rounded-lg sm:p-4 dark:bg-violet-600">
                            <FaExchangeAlt className="text-2xl text-white "></FaExchangeAlt>
                        </div>
                        <div className="flex flex-col justify-center align-middle">
                            <p className="capitalize">Item Return & Exchange</p>
                        </div>
                    </div>
                    <div className="flex p-4 space-x-4 rounded-lg md:space-x-6 dark:bg-gray-50 dark:text-gray-800">
                        <div className="flex justify-center p-2 items-center rounded-lg sm:p-4 dark:bg-violet-600">
                            <FaPhone className="text-2xl text-white "></FaPhone>
                        </div>
                        <div className="flex flex-col justify-center align-middle">
                            <p className="capitalize">24/7 ONLINE SUPPORT</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default OuerServices;