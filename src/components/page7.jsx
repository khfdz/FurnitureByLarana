import React from "react";

const Page7 = () => {
    return (
        <div className="flex flex-col items-center justify-center h-[400px] bg-black text-white text-sm">
            <div className="flex flex-col md:flex-row justify-between w-full  mb-6 p-14">
                <div className="">
                    <h2 className="text-xl font-semibold mb-2">Company</h2>
                    <ul>
                        <li>About Us</li>
                        <li>Gift Cards</li>
                        <li>Careers</li>
                        <li>Location</li>
                    </ul>
                </div>

                <div className="">
                    <h2 className="text-xl font-semibold mb-2">Customer</h2>
                    <ul >
                        <li >My Order</li>
                        <li>My Account</li>
                        <li>Track Order</li>
                        <li>Report</li>
                    </ul>
                </div>

                <div className="">
                    <h2 className="text-xl font-semibold mb-2">More Link</h2>
                    <ul>
                        <li>Terms of Use</li>
                        <li>Privacy Policy</li>
                        <li>Support</li>
                    </ul>
                </div>

                <div className="">
                    <h2 className="text-xl font-semibold mb-2">Contact</h2>
                    <ul>
                        <li>Customer Service</li>
                        <li>Open.Closes 8.00PM WIB</li>
                        <br/>
                        <li>Shopping Assistance</li>
                        <li>Open. Closes 8.00PM WIB</li>
                    </ul>
                </div>

                <div className="">
                    <h2 className="text-xl font-semibold mb-2">News Letter</h2>
                    <ul>
                        <li>Sign up to receive news, app update,
                        <br/>
                        interviews, and other exclusive info via email
                        </li>
                        <div className="border-[1px] mt-4 border-warna1 rounded-3xl p-1 flex items-center justify-between">
    <p className="text-white text-md ml-2">E-Mail</p>
    <button className="bg-white text-warna1 rounded-2xl px-8 py-1 font-semibold">
        Subscribe
    </button>
</div>

                    </ul>
                </div>



            </div>

            

            {/* Full-width horizontal line */}
            <div className="border-t border-warna1 w-full my-6" />

            <p className="text-center">Copyright © 2023 All right reserved | website design by Larana</p>
            <p className="text-center">Frontend by @khfdz</p>
        </div>
    );
};

export default Page7;
