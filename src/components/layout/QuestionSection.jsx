import React from "react";
import { useNavigate } from "react-router-dom";

const QuestionSection = () => {
    const navigate = useNavigate();

    const handleNavigation = (path) => {
        navigate(path);
    };

    return (
        <section className="w-full p-6 bg-[#f8ead4] my-12 mx-4 rounded-xl border-2 border-[#d3c8b8]">
            <div className="text-center">
                <h1 className="text-2xl md:text-4xl font-bold mb-6">
                    DjMC Hostel Mosque QB Section
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <button
                        onClick={() => handleNavigation("/phase-one")}
                        className="py-2 px-4 bg-emerald-500 border-2 border-emerald-600 cursor-pointer text-white rounded hover:bg-emerald-600 font-bold transition"
                    >
                        Phase One
                    </button>
                    <button
                        onClick={() => handleNavigation("/phase-two")}
                        className="py-2 px-4 bg-emerald-500 border-2 border-emerald-600 cursor-pointer text-white rounded hover:bg-emerald-600 font-bold transition"
                    >
                        Phase Two
                    </button>
                    <button
                        onClick={() => handleNavigation("/phase-three")}
                        className="py-2 px-4 bg-emerald-500 border-2 border-emerald-600 cursor-pointer text-white rounded hover:bg-emerald-600 font-bold transition"
                    >
                        Phase Three
                    </button>
                    <button
                        onClick={() => handleNavigation("/phase-four")}
                        className="py-2 px-4 bg-emerald-500 border-2 border-emerald-600 cursor-pointer text-white rounded hover:bg-emerald-600 font-bold transition"
                    >
                        Phase Four
                    </button>
                </div>
            </div>
        </section>
    );
};

export default QuestionSection;