import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_gfoplvc', 'template_zc0wyyq', form.current, 'user_1mDAqHsXB5VjnfxdEQ0zV')
            .then((result) => {
                console.log(result.text);
                alert("Message sent.");
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
    };

    return (
        <section id="contact" className="contact-section text-gray-600 body-font relative">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-col text-center w-full mb-12">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Contact Me</h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">I am always ready to hear. Message me if you have any query</p>
                    <div className="flex mt-6 justify-center">
                        <div className="w-16 h-1 rounded-full bg-color-1 inline-flex"></div>
                    </div>
                </div>
                <div className="lg:w-1/2 md:w-2/3 mx-auto">
                    <div className="flex flex-wrap -m-2">
                        <form
                            className="flex flex-wrap -m-2"
                            ref={form}
                            onSubmit={sendEmail}
                        >
                            <div className="p-2 w-1/2">
                                <div className="relative">
                                    <label for="name" className="leading-7 text-sm text-gray-600">Name</label>
                                    <input type="text" id="name" name="name" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-red-500 focus:bg-white focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>
                            </div>
                            <div className="p-2 w-1/2">
                                <div className="relative">
                                    <label for="email" className="leading-7 text-sm text-gray-600">Email</label>
                                    <input type="email" id="email" name="email" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-red-500 focus:bg-white focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>
                            </div>
                            <div className="p-2 w-full">
                                <div className="relative">
                                    <label for="message" className="leading-7 text-sm text-gray-600">Message</label>
                                    <textarea id="message" name="message" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-red-500 focus:bg-white focus:ring-2 focus:ring-red-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                                </div>
                            </div>
                            <div className="p-2 w-full">
                                <button
                                    class="flex mx-auto custom-btn border px-8 py-2 rounded-full border-color text-color-1 text-lg"
                                    type="submit"
                                >
                                    Submit
                                </button>
                                
                            </div>
                        </form>
                        <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
                            <p className="text-red-500">+880 1775 646995</p>
                            <p className="text-red-500">mashod.rana.prof@email.com</p>
                            <p className="leading-normal my-5">#15, Rd-8/1, Block-A, Section-11, Mirpur
                                <br />
                                Dhaka-1216, Bangladesh
                            </p>
                            <span className="inline-flex text-4xl">
                                <a
                                className="text-gray-500"
                                href="https://www.facebook.com/mashod.rana/"
                                target="_blank"
                                >
                                    <i class="fab fa-facebook-square"></i>
                                </a>
                                <a 
                                className="ml-4 text-gray-500"
                                href="https://github.com/MashodRana"
                                target="_blank"
                                >
                                <i class="fab fa-git-square"></i>
                                </a>
                                <a 
                                className="ml-4 text-gray-500"
                                href="http://www.linkedin.com/in/mashod-rana-145948132"
                                target="_blank"
                                >
                                <i class="fab fa-linkedin"></i>
                                </a>
                                <a 
                                className="ml-4 text-gray-500"
                                href="https://www.kaggle.com/mashodrana"
                                target="_blank"
                                >
                                <i class="fab fa-kaggle"></i>
                                </a>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
