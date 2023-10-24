import React from "react";

type Props = {};

function Blog({ }: Props) {
    return (
        <>
            <div className="container ml-12">
                {/* Picture and introdution   */}
                <div className="font-bold text-3xl mt-16 ml-12 ">
                    <h1>Hi there, I'm SUON PSIEY</h1>
                </div>
                <div className="flex">
                    <div className=" basis-3/4 mt-6  ">
                        <div>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                            Excepturi doloremque quidem molestiae. Ducimus possimus dolor
                            optio vel laborum cum non delectus commodi tempore! Recusandae
                            maxime quisquam tenetur! Tempora, praesentium at? Lorem, ipsum
                            dolor sit amet consectetur adipisicing elit. Excepturi doloremque
                            quidem molestiae. Ducimus possimus dolor optio vel laborum cum non
                            delectus commodi tempore! Recusandae maxime quisquam tenetur!
                            Tempora, praesentium at? Lorem, ipsum dolor sit amet consectetur
                            adipisicing elit. Excepturi doloremque quidem molestiae. Ducimus
                            possimus dolor optio vel laborum cum non delectus commodi tempore!
                            Recusandae maxime quisquam tenetur! Tempora, praesentium at?
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                            Excepturi doloremque quidem molestiae. Ducimus possimus dolor
                            optio vel laborum cum non delectus commodi tempore! Recusandae
                            maxime quisquam tenetur! Tempora, praesentium at?{" "}
                        </div>
                        <div className="mt-10 flex gap-4 ">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 256 256">
                                <path fill="#1877F2" d="M256 128C256 57.308 198.692 0 128 0C57.308 0 0 57.307 0 128c0 63.888 46.808 116.843 108 126.445V165H75.5v-37H108V99.8c0-32.08 19.11-49.8 48.347-49.8C170.352 50 185 52.5 185 52.5V84h-16.14C152.958 84 148 93.867 148 103.99V128h35.5l-5.675 37H148v89.445c61.192-9.602 108-62.556 108-126.445" /><path fill="#FFF" d="m177.825 165l5.675-37H148v-24.01C148 93.866 152.959 84 168.86 84H185V52.5S170.352 50 156.347 50C127.11 50 108 67.72 108 99.8V128H75.5v37H108v89.445A128.959 128.959 0 0 0 128 256a128.9 128.9 0 0 0 20-1.555V165h29.825" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 256 256">
                                <defs><linearGradient id="logosTelegram0" x1="50%" x2="50%" y1="0%" y2="100%"><stop offset="0%" stop-color="#2AABEE" /><stop offset="100%" stop-color="#229ED9" /></linearGradient></defs><path fill="url(#logosTelegram0)" d="M128 0C94.06 0 61.48 13.494 37.5 37.49A128.038 128.038 0 0 0 0 128c0 33.934 13.5 66.514 37.5 90.51C61.48 242.506 94.06 256 128 256s66.52-13.494 90.5-37.49c24-23.996 37.5-56.576 37.5-90.51c0-33.934-13.5-66.514-37.5-90.51C194.52 13.494 161.94 0 128 0Z" /><path fill="#FFF" d="M57.94 126.648c37.32-16.256 62.2-26.974 74.64-32.152c35.56-14.786 42.94-17.354 47.76-17.441c1.06-.017 3.42.245 4.96 1.49c1.28 1.05 1.64 2.47 1.82 3.467c.16.996.38 3.266.2 5.038c-1.92 20.24-10.26 69.356-14.5 92.026c-1.78 9.592-5.32 12.808-8.74 13.122c-7.44.684-13.08-4.912-20.28-9.63c-11.26-7.386-17.62-11.982-28.56-19.188c-12.64-8.328-4.44-12.906 2.76-20.386c1.88-1.958 34.64-31.748 35.26-34.45c.08-.338.16-1.598-.6-2.262c-.74-.666-1.84-.438-2.64-.258c-1.14.256-19.12 12.152-54 35.686c-5.1 3.508-9.72 5.218-13.88 5.128c-4.56-.098-13.36-2.584-19.9-4.708c-8-2.606-14.38-3.984-13.82-8.41c.28-2.304 3.46-4.662 9.52-7.072Z" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><path fill="currentColor" d="M508.64 148.79c0-45-33.1-81.2-74-81.2C379.24 65 322.74 64 265 64h-18c-57.6 0-114.2 1-169.6 3.6C36.6 67.6 3.5 104 3.5 149C1 184.59-.06 220.19 0 255.79q-.15 53.4 3.4 106.9c0 45 33.1 81.5 73.9 81.5c58.2 2.7 117.9 3.9 178.6 3.8q91.2.3 178.6-3.8c40.9 0 74-36.5 74-81.5c2.4-35.7 3.5-71.3 3.4-107q.34-53.4-3.26-106.9ZM207 353.89v-196.5l145 98.2Z" /></svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 128 128"><path fill="#1d9bf0" d="M114.896 37.888c.078 1.129.078 2.257.078 3.396c0 34.7-26.417 74.72-74.72 74.72v-.02A74.343 74.343 0 0 1 0 104.21c2.075.25 4.16.375 6.25.38a52.732 52.732 0 0 0 32.615-11.263A26.294 26.294 0 0 1 14.331 75.09c3.937.76 7.993.603 11.857-.453c-12.252-2.475-21.066-13.239-21.066-25.74v-.333a26.094 26.094 0 0 0 11.919 3.287C5.5 44.139 1.945 28.788 8.913 16.787a74.535 74.535 0 0 0 54.122 27.435a26.277 26.277 0 0 1 7.598-25.09c10.577-9.943 27.212-9.433 37.154 1.139a52.696 52.696 0 0 0 16.677-6.376A26.359 26.359 0 0 1 112.92 28.42A52.227 52.227 0 0 0 128 24.285a53.35 53.35 0 0 1-13.104 13.603z" /></svg>
                        </div>
                    </div>
                    <div className="basis-1/4   mb-14">
                        <img src="/assets/logo.png" className=" w-80 h-80" alt="logo" />
                    </div>
                </div>
                <div className="recent">
                    <h3 className="font-bold text-3xl ml-12">Recent <span className="text-cyan-400"><a href="#">Project</a></span> </h3>
                    <div className="list mt-10">
                        <div className="project-1   items-center flex  flex-grow border-solid border-2 pl-3 pb-1 pr-1 pt-1   h-36   " >
                            <img src="/assets/logo.png" className="w-20 h-20 ml-12" />
                            <div>
                                <div className="ml-12">
                                <h3 className="font-bold " >Project 1</h3>
                                <div>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus saepe sunt repellat at, numquam mollitia alias dolorem obcaecati eligendi omnis officia aspernatur vero est exercitationem commodi laudantium modi nam aliquid.</div>
                                </div>
                           </div>
                        </div>
                        <div className="project-1   items-center flex  flex-grow border-solid border-2 pl-3 pb-1 pr-1 pt-1   h-36   " >
                            <img src="/assets/logo.png" className="w-20 h-20 ml-12" />
                            <div>
                                <div className="ml-12">
                                <h3 className="font-bold " >Project 1</h3>
                                <div>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus saepe sunt repellat at, numquam mollitia alias dolorem obcaecati eligendi omnis officia aspernatur vero est exercitationem commodi laudantium modi nam aliquid.</div>
                                </div>
                           </div>
                        </div>
                        <div className="project-1   items-center flex  flex-grow border-solid border-2 pl-3 pb-1 pr-1 pt-1   h-36   " >
                            <img src="/assets/logo.png" className="w-20 h-20 ml-12" />
                            <div>
                                <div className="ml-12">
                                <h3 className="font-bold " >Project 1</h3>
                                <div>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus saepe sunt repellat at, numquam mollitia alias dolorem obcaecati eligendi omnis officia aspernatur vero est exercitationem commodi laudantium modi nam aliquid.</div>
                                </div>
                           </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Blog;
