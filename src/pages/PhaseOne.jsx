import React from 'react';

const PhaseOne = () => {
  const sections = [
    { 
  title: 'Anatomy', 
  links: [
    { label: 'Card 1', url: 'https://google.com' },
    { label: 'Card 2', url: 'https://facebook.com' },
    { label: 'First Term', url: 'https://youtube.com' },
    { label: 'Card 3', url: 'https://drive.google.com/file/d/1TXl6HEHVkZbY42a6Iqhd8AJS9j1Jqgog/view?usp=drivesdk' },
    { label: 'Card 4', url: 'https://drive.google.com/file/d/1OdMSAtYBUEJDCPF9_6KNet2kt4FMrFxt/view?usp=drivesdk' },
    { label: 'Second Term', url: 'https://drive.google.com/file/d/1GC4An2b5VvW7Z5qpzftjb01e5n9u4Z47/view?usp=drivesdk' },
    { label: 'Card 5', url: 'https://linkedin.com' },
    { label: 'Card 6', url: 'https://twitter.com' },
    { label: 'Third Term', url: 'https://bbc.com' }
  ] 
},
{ 
  title: 'Physiology', 
  links: [
    { label: 'Card 1', url: 'https://webmd.com' },
    { label: 'Card 2', url: 'https://mayoclinic.org' },
    { label: 'First Term', url: 'https://khanacademy.org' },
    { label: 'Card 3', url: 'https://drive.google.com/file/d/1cXvWvvD6Z6CWG_qnnRZI5OngaX2LQZQ7/view?usp=drivesdk' },
    { label: 'Card 4', url: 'https://drive.google.com/file/d/1kVvCVLvmZ1_W0VmX5bHuKkgs1Jdffifz/view?usp=drivesdk' },
    { label: 'Second Term', url: 'https://drive.google.com/file/d/1G6emDXIIrbJMHEkpd-xSaI-XrqyGocDQ/view?usp=drivesdk' },
    { label: 'Card 5', url: 'https://quora.com' },
    { label: 'Card 6', url: 'https://pinterest.com' },
    { label: 'Third Term', url: 'https://cnn.com' }
  ] 
},
{ 
  title: 'Biochemistry', 
  links: [
    { label: 'Card 1', url: 'https://pubmed.ncbi.nlm.nih.gov' },
    { label: 'Card 2', url: 'https://nature.com' },
    { label: 'First Term', url: 'https://researchgate.net' },
    { label: 'Card 3', url: 'https://drive.google.com/file/d/10XXVDWaJzBKucOQ2V5DpbTmpbZG-feD7/view?usp=drivesdk' },
    { label: 'Card 4', url: 'https://drive.google.com/file/d/1ic-7qBTlvMWs8y3702-b9-r-F3ZrLEJj/view?usp=drivesdk' },
    { label: 'Second Term', url: 'https://elsevier.com' },
    { label: 'Card 5', url: 'https://springer.com' },
    { label: 'Card 6', url: 'https://jamanetwork.com' },
    { label: 'Third Term', url: 'https://who.int' }
  ] 
}
  ];

  return (
    <div className="bg-[#f8ead4] border border-[#d3c8b8] p-6 mb-12 mt-32 mx-4 rounded-xl">
      <div className="max-w-7xl mx-auto">
        {sections.map((section, index) => (
          <div key={index} className="mb-8">
            <h2 className="text-2xl font-bold text-gray-700 mb-4">{section.title}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
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

export default PhaseOne;