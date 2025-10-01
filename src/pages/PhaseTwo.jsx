import React from 'react'

const PhaseTwo = () => {
  const sections = [
    { 
  title: 'Community Medicine', 
  links: [
    { label: 'First Term', url: 'https://youtube.com' },
    { label: 'Second Term', url: 'https://wikipedia.org' },
  ] 
},
{ 
  title: 'Forensic Medicine', 
  links: [
    { label: 'First Term', url: 'https://khanacademy.org' },
    { label: 'Second Term', url: 'https://britannica.com' },
  ] 
}
  ];

  return (
    <div className="bg-[#f8ead4] border border-[#d3c8b8] p-6 mb-12 mt-32 mx-4 rounded-xl">
      <div className="max-w-7xl mx-auto">
        {sections.map((section, index) => (
          <div key={index} className="mb-8">
            <h2 className="text-2xl font-bold text-gray-700 mb-4">{section.title}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {section.links.map((link, idx) => (
                <a
                  key={idx}
                  href={link.url}
                  className="block text-center bg-emerald-500 text-white font-bold py-2 px-4 rounded shadow hover:bg-emerald-600 transition border-2 border-emerald-600"  
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


export default PhaseTwo