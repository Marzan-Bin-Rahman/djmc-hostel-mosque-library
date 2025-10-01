import React from 'react';

const HeroSection = () => {
    return (
        <div className="relative w-full h-screen bg-cover bg-black/70 bg-blend-overlay bg-center rounded-xl" style={{ backgroundImage: "url('src/assets/bg.jpg')" }}>
            <div className="absolute inset-0 flex items-center justify-center px-4">
                <h1 className="text-white text-4xl md:text-6xl font-bold text-center font-arabic">
                    اِقۡرَاۡ بِاسۡمِ رَبِّكَ الَّذِىۡ خَلَقَ​ۚ‏
<br />
<br />

Read, ˹O Prophet,˺ in the Name of your Lord Who created—

<br />
<span className="text-2xl md:text-4xl font-normal">
The Clot (96:1) 
</span>
                </h1>
                
            </div>
        </div>
    );
};

export default HeroSection;
