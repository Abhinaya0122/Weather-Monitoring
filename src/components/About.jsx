import { motion } from 'framer-motion';
import '../css/About.css';

function About() {
    return (
        <div className='about'>
            <div className="about-container">
                {/* Two-column layout for heading and image */}
                <div className="about-top">
                    <motion.div
                        className="about-heading-container"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="about-heading" style={{ color: 'red' }}>Explore Our Weather Services</h2>
                        <p className="about-para" style={{ color: 'black' }}>
                            Welcome to our weather services application. With our app, you can access real-time weather information, disaster updates, and more.
                        </p>
                    </motion.div>

                    <motion.div
                        className="about-image-container"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <img src="/assets/cloudy.png" alt="Weather" className="about-image" heoght = "250px" width = "250px"/>
                    </motion.div>
                </div>

                {/* Services section below the heading and image */}
                <div className="about-services">
                    <motion.div
                        className="service-card"
                        whileHover={{ scale: 1.05 }}
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        <h3 style={{ color: 'red' }}>Get Weather by Location</h3>
                        <p style={{ color: 'black' }}>Enter a location to receive accurate and timely weather data specific to that area.</p>
                    </motion.div>

                    <motion.div
                        className="service-card"
                        whileHover={{ scale: 1.05 }}
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        <h3 style={{ color: 'red' }}>Disaster Updates</h3>
                        <p style={{ color: 'black' }}>Stay informed with real-time updates on natural disasters to ensure safety.</p>
                    </motion.div>

                    <motion.div
                        className="service-card"
                        whileHover={{ scale: 1.05 }}
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.9 }}
                    >
                        <h3 style={{ color: 'red' }}>Forecast and Alerts</h3>
                        <p style={{ color: 'black' }}>Receive daily forecasts and alerts for any extreme weather conditions.</p>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}

export default About;
