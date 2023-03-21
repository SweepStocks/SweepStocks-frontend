import Image from 'next/image'
import React, {useState, useRef, useEffect} from 'react';

const Landing  = () => {

    const [isLeagueMenuOpen, setIsLeagueMenuOpen] = useState(false);
    const [selectedLeague, setSelectedLeague] = useState(null);
    const [teamNamesAndPrices, setTeamNamesAndPrices] = useState('');
    const leagueMenuRef = useRef(null);

    const toggleLeagueMenu = () => {
      setIsLeagueMenuOpen(!isLeagueMenuOpen);
    };

    console.log(selectedLeague);

    useEffect(() => {
    
    const updateTeamNamesAndPrices = () => {
        switch (selectedLeague) {
          case 'Premier League':
            setTeamNamesAndPrices([
              { id: 1, name: 'Manchester United', price: '$10.00' },
              { id: 2, name: 'Manchester City', price: '$12.00' },
              { id: 3, name: 'Liverpool', price: '$8.00' },
              { id: 4, name: 'Chelsea', price: '$9.00' },
              { id: 5, name: 'Tottenham', price: '$6.00' },
            ]);
            break;
          case 'Bundesliga':
            setTeamNamesAndPrices([
              { id: 1, name: 'Bayern Munich', price: '$10.00' },
              { id: 2, name: 'Borussia Dortmund', price: '$12.00' },
              { id: 3, name: 'RB Leipzig', price: '$8.00' },
              { id: 4, name: 'Borussia Mönchengladbach', price: '$9.00' },
              { id: 5, name: 'Eintracht Frankfurt', price: '$6.00' },
            ]);
            break;
          case 'LaLiga':
            setTeamNamesAndPrices([
              { id: 1, name: 'Real Madrid', price: '$10.00' },
              { id: 2, name: 'Barcelona', price: '$12.00' },
              { id: 3, name: 'Atletico Madrid', price: '$8.00' },
              { id: 4, name: 'Sevilla', price: '$9.00' },
              { id: 5, name: 'Valencia', price: '$6.00' },
            ]);
            break;
          case 'UEFA Champions League':
            setTeamNamesAndPrices([
              { id: 1, name: 'Bayern Munich', price: '$10.00' },
              { id: 2, name: 'Paris Saint-Germain', price: '$12.00' },
              { id: 3, name: 'Manchester City', price: '$8.00' },
              { id: 4, name: 'Real Madrid', price: '$9.00' },
              { id: 5, name: 'Liverpool', price: '$6.00' },
            ]);
            break;
          default:
            setTeamNamesAndPrices([]);
        }
      };
      if (selectedLeague !== null) {
        updateTeamNamesAndPrices();
      }
    }, [selectedLeague]);
      

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                leagueMenuRef.current && !leagueMenuRef.current.contains(event.target)
            ) {
                setIsLeagueMenuOpen(false);
        }
    };
    window.addEventListener('mousedown', handleClickOutside);

    return () => {
        window.removeEventListener('mousedown', handleClickOutside);
    };
 }, [leagueMenuRef]);

 const handleLeagueClick = (league) => {
    setSelectedLeague(league);
    setIsLeagueMenuOpen(false);
    
 };

 


    return(
        <>
   <div className="flex flex-col h-full">
  <div className="flex-grow flex items-center justify-center border border-white p-5 mb-8">
    <h1 className="text-6xl">Guess who the champion will be!</h1>
  </div>

    
    
        <div className="flex justify-between items-center">
         <div className='ml-64'>Current Prize amount = $100</div>
         <div className='mr-64'>
             <button onClick={toggleLeagueMenu} 
                      className="bg-green-500 text-white px-8 py-4 text-lg rounded shadow-md hover:bg-green-600 transition-colors duration-300 ease-out cursor-pointer">
        Choose the league you want to participate
            </button>
            </div>
            {isLeagueMenuOpen && (
  <>
   <div
  ref={leagueMenuRef}
  className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg- text-black border border-gray-300 rounded p-4 z-10 backdrop-blur-md min-w-min max-w-xs shadow-lg"
>
  <ul className="list-none m-0 p-0">
    <li onClick={() => handleLeagueClick("Premier League")} className="py-2 px-4 cursor-pointer hover:bg-gray-100 transition-colors duration-200">
      Premier League
    </li>
    <li onClick={() => handleLeagueClick("Bundesliga")} className="py-2 px-4 cursor-pointer hover:bg-gray-100 transition-colors duration-200">
      Bundesliga
    </li>
    <li onClick={() => handleLeagueClick("LaLiga")} className="py-2 px-4 cursor-pointer hover:bg-gray-100 transition-colors duration-200">
      LaLiga
    </li>
    <li onClick={() => handleLeagueClick("UEFA Champions League")} className="py-2 px-4 cursor-pointer hover:bg-gray-100 transition-colors duration-200">
      UEFA Champions League
    </li>
  </ul>
</div>
    <div className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 z-0" />
  </>
)}
</div>
{teamNamesAndPrices.length > 0 && (
  <div className="flex flex-wrap justify-center">
    {teamNamesAndPrices.map((team) => (
      <div
        key={team.id}
        className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-4"
      >
        <div className="bg-white text-black rounded-lg shadow-md p-6 flex flex-col items-center">
          <h2 className="text-2xl font-semibold mb-4">{team.name}</h2>
          <p className="text-lg">{team.price}</p>
        </div>
      </div>
    ))}
  </div>
    )}

   
  </div>
  </>
    );
};

export default Landing;