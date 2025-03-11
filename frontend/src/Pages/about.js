import { motion } from 'framer-motion';
import Navbar from './components/navbar';
import Footer from './components/footer';
import AboutImage from './Assets/abt.jpg';

const AboutUs = () => {
    return (
        <div className="flex flex-col min-h-screen bg-gradient-to-br from-purple-300 to-blue-300">
            <Navbar />
            <main className="flex-grow pt-32 pb-32">
                <div className="container mx-auto py-32 px-8 flex flex-col md:flex-row items-center">
                    <motion.div 
                        className="md:w-1/2"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                    >
                        <h1 className="text-4xl font-bold text-gray-800">
                            ABOUT US
                        </h1>
                        <p className="text-gray-600 mt-4 max-w-lg">
                            Investo is a cutting-edge investment platform that helps users predict the Return on Investment (ROI) of various companies. By analyzing previous sales data and market trends, we provide insightful financial forecasts, empowering investors to make informed decisions.
                        </p>
                        <div className="mt-6">
                            <button className="px-6 py-2 bg-blue-600 text-white rounded-full text-lg shadow-lg hover:bg-blue-700 transition">
                                Learn More
                            </button>
                        </div>
                    </motion.div>
                    <motion.div 
                        className="md:w-1/2 flex justify-center mt-16 md:mt-0 relative"
                        initial={{ opacity: 1 }}
                        animate={{ opacity: [1, 0, 1], x: [0, -50, 0] }}
                        transition={{ duration: 5, repeat: Infinity, repeatType: "mirror" }}
                    >
                        <div className="relative w-full max-w-2xl">
                            <img src={AboutImage} alt="About Investo" className="w-full h-auto rounded-lg shadow-lg" />
                        </div>
                    </motion.div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default AboutUs;