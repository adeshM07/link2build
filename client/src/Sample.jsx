import React from 'react';
import { Mail, Send, Truck, Wrench, Calendar, Facebook, Twitter, Linkedin } from 'lucide-react';

const Landing = () => {
    // Feature Card Data
    const features = [
        {
            icon: Wrench, // Using Wrench for Materials/Tools
            title: 'Materials',
            description: 'Source building supplies',
        },
        {
            icon: Send, // Using Send for Equipment/Heavy Machinery (often self-propelled)
            title: 'Equipment',
            description: 'Rent machinery easily',
        },
        {
            icon: Calendar,
            title: 'Easy Booking',
            description: 'Schedule services',
        },
        {
            icon: Truck,
            title: 'Delivery',
            description: 'Track your orders',
        },
    ];

    // Social Media Icons Data
    const socialIcons = [
        { icon: Facebook, link: '#' },
        { icon: Twitter, link: '#' },
        { icon: Linkedin, link: '#' },
    ];

    // Simple placeholder submit function
    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Thank you for subscribing! We will notify you when Link2Build launches.');
    };

    // Tailwind CSS classes for the industrial construction background pattern
    // Note: This uses a simple gradient and color block. For the exact crane/scaffolding
    // silhouette, you would typically use a background image. This provides a similar
    // geometric feel with pure CSS for simplicity.
    const heroBgStyle = {
        // Simple geometric background with the industrial yellow color
        background: 'linear-gradient(to bottom, #FFD133 70%, #FFC700 100%)',
        // Optional: for a geometric pattern, you could use a repeating linear gradient
        // backgroundImage: 'repeating-linear-gradient(45deg, rgba(0,0,0,0.05), rgba(0,0,0,0.05) 2px, transparent 2px, transparent 4px)',
        // A placeholder for the subtle construction image
        // The actual image uses a silhouette. In real production, this would be:
        // backgroundImage: "url('/path/to/construction-silhouette.svg')",
        // We'll use a simple inner shadow to give it depth
        boxShadow: 'inset 0px 5px 15px rgba(0, 0, 0, 0.2)',
    };

    return (
        <div className="min-h-screen bg-gray-500 flex items-start justify-center p-4 md:p-10">
            <div className="w-full max-w-5xl shadow-2xl rounded-lg overflow-hidden bg-white">

                {/* --- Hero Section --- */}
                <header className="p-8 md:p-12 text-black relative" style={heroBgStyle}>
                    {/* The geometric construction silhouette is visually simulated by the background color block.
                        For a true replication, a background image (SVG or PNG) would be necessary. */}
                    <div className="absolute inset-0 opacity-20 pointer-events-none">
                        {/* Placeholder for the subtle construction imagery (e.g., a simple SVG pattern) */}
                        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                            <defs>
                                <pattern id="scaffolding" width="30" height="30" patternUnits="userSpaceOnUse">
                                    <line x1="0" y1="0" x2="30" y2="30" stroke="black" strokeWidth="1" />
                                    <line x1="0" y1="30" x2="30" y2="0" stroke="black" strokeWidth="1" />
                                </pattern>
                            </defs>
                            {/* A faded, tasteful silhouette effect can be achieved here. Using a solid color for a cleaner look. */}
                        </svg>
                    </div>

                    <div className="relative z-10">
                        <h1 className="text-6xl md:text-8xl font-black mb-2 leading-none">
                            Link2Build
                        </h1>
                        <p className="text-xl md:text-2xl font-semibold mb-6">
                            Your Complete Construction Marketplace
                        </p>
                        <button className="bg-black text-yellow-300 font-bold py-3 px-8 text-lg rounded-full shadow-lg hover:bg-gray-800 transition duration-300 transform hover:scale-105">
                            Coming Soon
                        </button>
                    </div>
                </header>

                {/* --- Feature Cards Section --- */}
                <main className="bg-black text-white p-8 md:p-12">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 -mt-24 md:-mt-32 relative z-20">
                        {features.map((feature) => (
                            <div
                                key={feature.title}
                                className="bg-yellow-400 text-black p-4 md:p-6 rounded-lg shadow-xl flex flex-col items-center text-center transition duration-300 hover:shadow-2xl hover:scale-[1.02]"
                            >
                                <feature.icon className="w-10 h-10 md:w-12 md:h-12 mb-3" strokeWidth={2.5} />
                                <h3 className="text-xl md:text-2xl font-bold mb-1">{feature.title}</h3>
                                <p className="text-sm md:text-base text-gray-800 font-medium">
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </main>

                {/* --- Email Signup and Footer Section --- */}
                <footer className="bg-gray-800 text-white p-8 md:p-12 flex flex-col md:flex-row justify-between items-start md:items-center space-y-8 md:space-y-0">
                    
                    {/* Email Signup */}
                    <div className="w-full md:w-auto">
                        <h3 className="text-2xl font-bold mb-4">Be the First to Know</h3>
                        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3">
                            <input
                                type="email"
                                placeholder="Enter your email address"
                                required
                                className="p-3 rounded-lg text-black w-full sm:w-64 focus:ring-yellow-400 focus:border-yellow-400 border-gray-300"
                            />
                            <button
                                type="submit"
                                className="bg-yellow-400 text-black font-bold py-3 px-6 rounded-lg shadow-md hover:bg-yellow-500 transition duration-300"
                            >
                                Notify Me
                            </button>
                        </form>
                    </div>

                    {/* Support and Social Media */}
                    <div className="flex flex-col items-start md:items-end space-y-4">
                        <p className="text-sm">
                            Support: <a href="mailto:support@link2build.com" className="hover:text-yellow-400">support@link2build.com</a>
                        </p>
                        <div className="flex space-x-4">
                            {socialIcons.map((item, index) => (
                                <a
                                    key={index}
                                    href={item.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2 border border-gray-600 rounded-full hover:bg-yellow-400 hover:text-black transition duration-300"
                                >
                                    <item.icon className="w-5 h-5" />
                                </a>
                            ))}
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    );
};

export default Landing;
