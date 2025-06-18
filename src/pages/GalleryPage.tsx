import React, { useState } from 'react';
import SectionTitle from '../components/common/SectionTitle';
import Gallery_Image_1 from '../components/images/Gallery_Image_1.jpeg'
import Gallery_Image_2 from '../components/images/Gallery_Image_2.jpeg'
import Gallery_Image_3 from '../components/images/Gallery_Image_3.jpeg'
import Gallery_Image_4 from '../components/images/Gallery_Image_4.jpeg'
import Gallery_Image_5 from '../components/images/Gallery_Image_5.jpeg'
import Gallery_Image_6 from '../components/images/Gallery_Image_6.jpeg'
import Gallery_Image_7 from '../components/images/Gallery_Image_7.jpeg'
import Gallery_Video_1 from '../components/images/Gallery_Video_1.mp4'

import video from '../components/images/video.mp4'
import { motion } from 'framer-motion';

// const images = [
//     {
//         src: Gallery_Image_1,
//         alt: 'Classroom 1',
//         category: 'Classrooms'
//     },
//     {
//         src: Gallery_Image_2,
//         alt: 'Annual Event',
//         category: 'Events'
//     },
//     {
//         src: image,
//         alt: 'Toppers Wall',
//         category: 'Achievements'
//     },
//     {
//         src: image,
//         alt: 'Interactive Session',
//         category: 'Classrooms'
//     }
// ];

const media = [
    { type: 'image', src: Gallery_Image_1, title: 'Our Centre' },
    { type: 'image', src: Gallery_Image_2, title: 'Intro Session' },
    { type: 'image', src: Gallery_Image_3, title: 'Focused Learning Session' },
    { type: 'image', src: Gallery_Image_5, title: 'Maths Lecture' },
    { type: 'image', src: Gallery_Image_4, title: 'Exterior View – Main Road' },
    { type: 'video', src: Gallery_Video_1, title: 'Teaching Session' },
    // { type: 'image', src: Gallery_Image_7, title: 'Toppers Wall' },
];

const GalleryPage: React.FC = () => {
    const [preview, setPreview] = useState(null);

    return (
        <div className="pt-24 pb-16 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <SectionTitle
                    title="Inside Our Centre"
                    subtitle="Explore our classrooms, sessions, and student life"
                    center
                />


                {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10">
                    {images.map((img, idx) => (
                        <div key={idx} className="overflow-hidden rounded-lg shadow-md group">
                            <img
                                src={img.src}
                                alt={img.alt}
                                className="w-full h-64 object-cover transform group-hover:scale-105 transition duration-300"
                            />
                            <div className="p-3 text-center bg-white">
                                <p className="text-sm font-medium text-gray-700">{img.alt}</p>
                                <p className="text-xs text-gray-500">{img.category}</p>
                            </div>
                        </div>
                    ))}
                </div> */}

                {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10">
                    {media.map((item, idx) => (
                        <div key={idx} className="rounded-lg overflow-hidden shadow-md bg-white">
                            {item.type === 'image' ? (
                                <img
                                    src={item.src}
                                    alt={item.title}
                                    className="w-full h-64 object-cover"
                                />
                            ) : (   
                                <video
                                    src={item.src}
                                    controls
                                    className="w-full h-64 object-cover"
                                />
                            )}
                            <div className="p-3 text-center">
                                <p className="font-medium text-gray-800">{item.title}</p>
                            </div>
                        </div>
                    ))}
                </div> */}

                {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10">
                    {media.map((item, idx) => (
                        <motion.div
                            key={idx}
                            className="rounded-lg overflow-hidden shadow-md bg-white"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: idx * 0.1 }}
                            viewport={{ once: true }}
                        >
                            {item.type === 'image' ? (
                                <img src={item.src} alt={item.title} className="w-full h-64 object-cover" />
                            ) : (
                                <video src={item.src} controls className="w-full h-64 object-cover" />
                            )}
                            <div className="p-3 text-center">
                                <p className="font-medium text-gray-800">{item.title}</p>
                            </div>
                        </motion.div>
                    ))}
                </div> */}

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10">
                    {media.map((item, idx) => (
                        <motion.div
                            key={idx}
                            className="group rounded-lg overflow-hidden shadow-md bg-white"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: idx * 0.1 }}
                            viewport={{ once: true }}
                        >
                            {item.type === 'image' ? (
                                <img
                                    src={item.src}
                                    alt={item.title}
                                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                                />
                            ) : (
                                <video
                                    src={item.src}
                                    controls
                                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                                />
                            )}
                            <div className="p-3 text-center">
                                <p className="font-medium text-gray-800">{item.title}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>



            </div>
        </div>
    );
};

export default GalleryPage;