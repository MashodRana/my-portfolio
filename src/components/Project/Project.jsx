import React from 'react';

const Project = (props) => {
    const { category, title, tags, points, livesite, backend, frontend, image } = props.project;
    return (
        <div className="p-4 md:w-1/3">
            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                {/* <img className="lg:h-48 md:h-36 w-full object-cover object-center" src={imgg} alt="blog" /> */}
                <div className="p-6">
                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">{category}</h2>
                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">{title}</h1>
                    <div className="leading-relaxed mb-3">
                        <ul className='list-disc'>
                            {
                                points.map(point => <li>{point}</li>)
                            }
                        </ul>
                    </div>
                    <div className="flex items-center flex-wrap project-tag">
                        {
                            tags.map(tag => <span className=" rounded px-2 mr-2 mb-2">{tag}</span>)
                        }

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Project;