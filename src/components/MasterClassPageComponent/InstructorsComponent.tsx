import React from "react";
import YellowBorderButton from "../YellowBorderButton";

const InstructorsComponent: React.FC = ( ) => {
    return(
        <section className="w-[100%] box-border pt-[50px]">
            <div className="w-[100%] mx-auto">
                <h2 className="font-bold text-[50px] font-chakr uppercase text-center mb-[40px]">Our <span className=" text-yellow-400"> Instructors</span></h2>
                <div className="flex flex-wrap justify-center py-[50px] w-100% mx-auto px-[10px]">
                    <div className="text-center basis-[350px] w-[50%] mx-[20px] mb-[20px] border-[1px] border-gray-200 pb-20px uppercase">
                        <img alt="" src="/img/FP.jpeg" />
                        <h4 className=" font-chakra font-bold leading-[3] text-[24px]">@BMB_funding</h4>
                        <p className=" text-yellow-400 mb-[20px] font-bold text-[13px]">Financial Prophet</p>
                        <svg className="w-[18px] h-[18px] m-auto mb-[50px] text-gray-500" fill="currentColor" viewBox="0 0 24 24">
                            <path fillRule="evenodd" d="M10 2a3 3 0 0 0-3 3v1H5a3 3 0 0 0-3 3v2.382l1.447.723.005.003.027.013.12.056c.108.05.272.123.486.212.429.177 1.056.416 1.834.655C7.481 13.524 9.63 14 12 14c2.372 0 4.52-.475 6.08-.956.78-.24 1.406-.478 1.835-.655a14.028 14.028 0 0 0 .606-.268l.027-.013.005-.002L22 11.381V9a3 3 0 0 0-3-3h-2V5a3 3 0 0 0-3-3h-4Zm5 4V5a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v1h6Zm6.447 7.894.553-.276V19a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-5.382l.553.276.002.002.004.002.013.006.041.02.151.07c.13.06.318.144.557.242.478.198 1.163.46 2.01.72C7.019 15.476 9.37 16 12 16c2.628 0 4.98-.525 6.67-1.044a22.95 22.95 0 0 0 2.01-.72 15.994 15.994 0 0 0 .707-.312l.041-.02.013-.006.004-.002.001-.001-.431-.866.432.865ZM12 10a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2H12Z" clipRule="evenodd"/>
                        </svg>
                    </div>
                    {/* <div className="text-center basis-[350px] w-[50%] mx-[20px] mb-[20px] border-[1px] border-gray-200 pb-20px uppercase">
                        <img alt="" src="/img/BS.jpg" />
                        <h4 className=" font-chakra font-bold leading-[3] text-[24px]">@NOEAZE</h4>
                        <p className=" text-yellow-400 mb-[20px] font-bold text-[13px]">BANKRUPTCY SPECIALIST</p>
                        <svg className="w-[18px] h-[18px] m-auto mb-[50px] text-gray-500" fill="currentColor" viewBox="0 0 24 24">
                            <path fillRule="evenodd" d="M10 2a3 3 0 0 0-3 3v1H5a3 3 0 0 0-3 3v2.382l1.447.723.005.003.027.013.12.056c.108.05.272.123.486.212.429.177 1.056.416 1.834.655C7.481 13.524 9.63 14 12 14c2.372 0 4.52-.475 6.08-.956.78-.24 1.406-.478 1.835-.655a14.028 14.028 0 0 0 .606-.268l.027-.013.005-.002L22 11.381V9a3 3 0 0 0-3-3h-2V5a3 3 0 0 0-3-3h-4Zm5 4V5a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v1h6Zm6.447 7.894.553-.276V19a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-5.382l.553.276.002.002.004.002.013.006.041.02.151.07c.13.06.318.144.557.242.478.198 1.163.46 2.01.72C7.019 15.476 9.37 16 12 16c2.628 0 4.98-.525 6.67-1.044a22.95 22.95 0 0 0 2.01-.72 15.994 15.994 0 0 0 .707-.312l.041-.02.013-.006.004-.002.001-.001-.431-.866.432.865ZM12 10a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2H12Z" clipRule="evenodd"/>
                        </svg>
                    </div> */}
                </div>
            </div>
        </section>
    );
}

export default InstructorsComponent;