import React from 'react';

const AboutUs = () => {
  return (
    <div className="flex justify-center items-center min-h-full py-12 border-2 border-[#d3c8b8] bg-[#f8ead4] rounded-xl mb-12 mt-32 mx-4">
      <div className="w-4/5 p-5">
        <h2 className="text-center mb-5 text-4xl md:text-7xl font-extrabold ">About Us</h2>
        <p className="text-justify leading-relaxed text-xl">
          The Hostel Mosque Library of Dinajpur Medical College serves as a center for both worship and learning. Students gather here five times daily to perform their prayers in congregation, fostering a sense of unity and spiritual growth. Alongside the prayer space, the mosque hosts a library with over 250 books, offering resources for both religious and academic enrichment. Regular Quran learning courses are also arranged, giving students the opportunity to deepen their understanding of the Holy Quran while strengthening their connection to faith. This unique blend of devotion, knowledge, and community makes the Hostel Mosque Library a cherished place for students.
          <br />
          <br />
          Every <span className='font-extrabold'>Sunday after Maghrib prayer</span> Dars-E-Quran is conducted by Mawlana Rafiul Islam, a prominent scholar of Dinajpur. To get the previous Dars-E-Quran lecture you can head to the Dars section of this website.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;