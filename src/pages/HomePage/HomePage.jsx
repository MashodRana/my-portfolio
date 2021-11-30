import React, { useEffect, useState } from 'react';
import Contact from '../../components/Contact/Contact';
import introImage from '../../images/Programming.gif'
import profileImage from '../../images/profile.png'
import './HomePage.css'
import Project from '../../components/Project/Project';

const HomePage = () => {

    const [projects, setProjects] = useState([]);

    const checkIcon = <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="text-red-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
        <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
        <path d="M22 4L12 14.01l-3-3"></path>
    </svg>


    useEffect(() => {
        fetch('./projects.json')
            .then(res => res.json())
            .then(data => setProjects(data));
    }, [])


    return (
        <main>
            <div className="grid md:grid-cols-2">
                <div className='bg-white flex justify-center'>
                    <img src={introImage} alt="" />
                </div>
                <div className="flex items-center justify-center p-2" >
                    <div >
                        <h4 className="text-lg">Hi, I'm</h4>
                        <h2 className="text-6xl text-gray-800">Mashod Rana</h2>
                        <h2 className="text-4xl text-gray-600">Love to build things through coding.</h2>
                        <br />
                        <a
                            href="#contact"
                            className="custom-btn px-8 py-2 rounded-full border-color text-color-1"
                        >Hire me</a>
                    </div>
                </div>
            </div>
            <section id="about" className="about-section mt-16">
                <div class="max-w-4xl flex items-center h-auto lg:h-screen flex-wrap mx-auto my-32 lg:my-0">

                    <div id="profile" class="w-full lg:w-3/5 rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl bg-white mx-6 lg:mx-0">


                        <div class="p-4 md:p-12 text-center lg:text-left text-gray-700">
                            <div class="block lg:hidden rounded-full shadow-xl mx-auto -mt-16 h-48 w-48 bg-cover bg-center">
                                <img src={profileImage} class="h-48 w-48 rounded-full shadow-2xl" />
                            </div>

                            <h1 class="text-3xl font-bold pt-8 lg:pt-0">About Me</h1>
                            <div class="mx-auto lg:mx-0 w-4/5 mt-3 border-color"></div>
                            <p class="pt-4 text-base font-bold flex items-center justify-center lg:justify-start">
                                <i class="fas fa-briefcase"></i> &nbsp;Fullstack Software Developer</p>

                            <p class="pt-8 text-md text-justify">Hi! My name is Mashod Rana. I love to solve problem through coding. I build <span className="text-color-1">web application</span> and integrate artificial intelligence(<span className="text-color-1">Machine Lerning</span> and <span className="text-color-1">Deep Learning</span> ) to automated various web services. I work in both <span className="text-color-1">forntend</span> and <span className="text-color-1">backend</span>. I also can <span className="text-color-1">crawl</span> web site to collect information in required format.
                            </p>
                            <p class="text-md text-justify">
                                I am working in as a <span className='text-color-1'>Software Developer (ML)</span> in <span className="text-color-1">Arollo Tech Ltd</span>. Currently I am focusing on web developing.
                            </p>

                            <div class="pt-12 pb-8">
                                <a
                                    class="custom-btn border px-8 py-2 rounded-full border-color text-color-1"
                                    href="#contact"
                                >
                                    Contact me
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="w-full lg:w-2/5">
                        <img src={profileImage} class=" h-auto rounded-none lg:rounded-lg shadow-2xl hidden lg:block" />

                    </div>

                </div>
            </section>

            {/* Skill set section start here */}
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="text-center mb-20">
                        <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4">Skill Set</h1>
                        <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">Here is my skills on that I have worked </p>
                        <div className="flex mt-6 justify-center">
                            <div className="w-16 h-1 rounded-full bg-color-1 inline-flex"></div>
                        </div>
                    </div>
                    <div className="flex items-center lg:w-4/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
                        <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-red-100 text-red-500 flex-shrink-0">
                            <img className='rounded-full border-color' src="https://image.freepik.com/free-vector/global-networking-connection-sphere-social-media-worldwide-concept_98292-4636.jpg" alt="" />
                        </div>
                        <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                            <h2 className="text-gray-900 text-lg title-font font-medium mb-2">Web Technololgy</h2>
                            <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-2">
                                <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                                    {checkIcon}
                                    <span className="title-font font-medium">React</span>
                                </div>
                                <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                                    {checkIcon}
                                    <span className="title-font font-medium">Bootstrap</span>
                                </div>
                                <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                                    {checkIcon}
                                    <span className="title-font font-medium">Tailwind CSS</span>
                                </div>
                                <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                                    {checkIcon}
                                    <span className="title-font font-medium">Node.js</span>
                                </div>
                                <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                                    {checkIcon}
                                    <span className="title-font font-medium">Express.js</span>
                                </div>
                                <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                                    {checkIcon}
                                    <span className="title-font font-medium">Firebase</span>
                                </div>
                                <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                                    {checkIcon}
                                    <span className="title-font font-medium">Django</span>
                                </div>
                                <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                                    {checkIcon}
                                    <span className="title-font font-medium">Django REST</span>
                                </div>
                                <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                                    {checkIcon}
                                    <span className="title-font font-medium">MySQL</span>
                                </div>
                                <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                                    {checkIcon}
                                    <span className="title-font font-medium">MongoDB</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center lg:w-4/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
                        <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                            <h2 className="text-gray-900 text-lg title-font font-medium mb-2">ML and DL Frame Work</h2>
                            <div className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-2">
                                <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                                    {checkIcon}
                                    <span className="title-font font-medium">TensorFlow</span>
                                </div>
                                <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                                    {checkIcon}
                                    <span className="title-font font-medium">Spacy</span>
                                </div>
                                <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                                    {checkIcon}
                                    <span className="title-font font-medium">Pandas</span>
                                </div>
                                <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                                    {checkIcon}
                                    <span className="title-font font-medium">Numpy</span>
                                </div>
                                <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                                    {checkIcon}
                                    <span className="title-font font-medium">Scikit-Learn</span>
                                </div>
                            </div>
                        </div>
                        <div className="sm:w-32 sm:order-none order-first sm:h-32 h-20 w-20 sm:ml-10 inline-flex items-center justify-center rounded-full bg-red-100 text-red-500 flex-shrink-0">
                            {/* <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="sm:w-16 sm:h-16 w-10 h-10" viewBox="0 0 24 24">
                                <circle cx="6" cy="6" r="3"></circle>
                                <circle cx="6" cy="18" r="3"></circle>
                                <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                            </svg> */}
                            <img className='rounded-full border-color' src="https://image.freepik.com/free-vector/cute-artificial-intelligence-robot-isometric-icon_1284-63045.jpg" alt="" />
                        </div>
                    </div>

                </div>
            </section>
            {/* Skill set section ends here */}

            {/* Projects section start here */}
            <section id="projects" className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="text-center mb-20">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">Projects</h1>
                        <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">Things that I have built</p>
                        <div className="flex mt-6 justify-center">
                            <div className="w-16 h-1 rounded-full bg-color-1 inline-flex"></div>
                        </div>
                    </div>
                    <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
                        <div className="flex flex-wrap -m-4">
                            {
                                projects.map((project, _idx) => <Project
                                    key={_idx}
                                    project={project}
                                ></Project>)
                            }


                        </div>
                    </div>
                </div>
            </section>
            {/* Projects section ends here */}

            {/* Contact me section starts here */}
            <Contact></Contact>
            {/* Contact me section ends here */}
        </main>
    );
};

export default HomePage;