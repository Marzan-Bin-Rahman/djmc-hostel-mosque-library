import React from 'react';

const Dars = () => {
    const cards = [
        {
            date: '17-11-2024',
            lectures: 1,
            topic: 'Surah Baqarah 26th ayat',
            link: 'https://t.me/c/2272949904/8',
        },
        {
            date: '24-11-2024',
            lectures: 2,
            topic: 'Surah Al Kausar 1-2 ayat',
            link: 'https://t.me/c/2272949904/9',
        },
        {
            date: '08-12-2024',
            lectures: 3,
            topic: 'Surah Al Kausar 3rd ayat',
            link: 'https://t.me/c/2272949904/10',
        },
        {
            date: '22-12-2024',
            lectures: 4,
            topic: 'Surah Al Ikhlas 1st ayat',
            link: 'https://t.me/c/2272949904/11',
        },
        {
            date: '08-02-2025',
            lectures: 5,
            topic: 'Surah Al Ikhlas 2nd ayat',
            link: 'https://t.me/c/2272949904/12',
        },
        {
            date: '09-03-2025',
            lectures: 6,
            topic: 'Portion of Surah Yousuf',
            link: 'https://t.me/c/2272949904/13',
        },
        {
            date: '28-04-2025',
            lectures: 7,
            topic: 'Surah Al Ikhlas 3rd ayat',
            link: 'https://t.me/c/2272949904/14',
        },
        {
            date: '2023-10-01',
            lectures: 8,
            topic: 'Surah Al Ikhlas 4th ayat. It was not recorded',
            link: 'https://t.me/c/2272949904/19',
        },
        {
            date: '-2025',
            lectures: 9,
            topic: 'Surah An nasr 1st ayat',
            link: 'https://t.me/c/2272949904/16',
        },
        {
            date: '2023-10-01',
            lectures: 10,
            topic: 'Surah An nasr 2nd ayat',
            link: 'https://t.me/c/2272949904/17',
        },
        {
            date: '2023-10-01',
            lectures: 11,
            topic: 'Surah An nasr 3rd ayat',
            link: 'https://t.me/c/2272949904/18',
        },
        {
            date: '2023-10-01',
            lectures: 12,
            topic: 'Lecture regarding the purity of women folk',
            link: 'https://t.me/c/2272949904/21',
        },
        // Add more cards as needed
    ];

    return (
        <section className="border-2 border-[#d3c8b8] bg-[#f8ead4] rounded-xl mb-12 mt-32 mx-4 p-4">
            <h1 className="text-4xl md:text-7xl text-gray-700 font-extrabold text-center mb-2">Dars-E-Quran</h1>
            <p className='text-rose-700 text-center mb-5'>These links are only valid for the members of the telegram group</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {cards.map((card, index) => (
                    <div
                        key={index}
                        className="bg-[#fff7ea] border-2 border-[#fff7ea] rounded-lg p-4 shadow-md"
                    >
                        <h3 className="text-lg text-gray-700 font-bold mb-2">Lecture number: {card.lectures}</h3>
                        <p className="mb-1">Topic: {card.topic}</p>
                        <p className="mb-1">Date: {card.date}</p>
                        <a
                            href={card.link}
                            className="text-blue-500 underline"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Lecture link
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Dars;