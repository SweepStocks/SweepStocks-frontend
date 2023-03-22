import Image from 'next/image'
import React, {useState, useRef, useEffect} from 'react';
import axios from 'axios';

const Landing  = () => {

    const [isLeagueMenuOpen, setIsLeagueMenuOpen] = useState(false);
    const [selectedLeague, setSelectedLeague] = useState(null);
    const [teamNamesAndPrices, setTeamNamesAndPrices] = useState('');
    const [plStandings, setPlStandings] = useState([]);
    const [bsaStandings, setBsaStandings] = useState([]);
    const [fl1Standings, setFl1Standings] = useState([]);
    const [bl1Standings, setBl1Standings] = useState([]);
    const [saStandings, setSaStandings] = useState([]);
    const [pplStandings, setPplStandings] = useState([]);
    const [pdStandings, setPdStandings] = useState([]);
    const [currentLeagueStandings, setCurrentLeagueStandings] = useState([]);
    const leagueMenuRef = useRef(null);

    const toggleLeagueMenu = () => {
      setIsLeagueMenuOpen(!isLeagueMenuOpen);
    };

    console.log(selectedLeague);     

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

 const handleLeagueClick = async (league) => {
    setSelectedLeague(league);
    setIsLeagueMenuOpen(false);
  
    const leagueMapping = {
      'Premier League': 'pl',
      'Bundesliga': 'bl1',
      'Campeonato Brasileiro Série A': 'bsa',
      'Ligue 1': 'fl1',
      'Serie A': 'sa',
      'Primeira Liga': 'ppl',
      'Primera Division': 'pd',
    };
  
    const fetchStandings = async (leagueCode, setter) => {
      try {
        const response = await axios.get(`http://localhost:3001/api/standings/${leagueCode}`);
        setter(response.data.standings);
        console.log(`JSON for ${league} standings: `, response.data.standings);
  
        const totalTypeStandings = response.data.standings.filter(
          (standing) => standing.type === 'TOTAL'
        );
        setTeamNamesAndPrices(
          totalTypeStandings.map((team) => ({
            id: team.team.id,
            name: team.team.name,
            price: team.points,
          }))
        );
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    const leagueCode = leagueMapping[league];
    const setterMapping = {
      'pl': setPlStandings,
      'bsa': setBsaStandings,
      'fl1': setFl1Standings,
      'bl1': setBl1Standings,
      'sa': setSaStandings,
      'ppl': setPplStandings,
      'pd': setPdStandings,
    };
  
    const setter = setterMapping[leagueCode];
    await fetchStandings(leagueCode, setter);
  };

  useEffect(() => {
    const standingsMapping = {
      'Premier League': plStandings,
      'Bundesliga': bl1Standings,
      'Campeonato Brasileiro Série A': bsaStandings,
      'Ligue 1': fl1Standings,
      'Serie A': saStandings,
      'Primeira Liga': pplStandings,
      'Primera Division': pdStandings,
    };
  
    setCurrentLeagueStandings(standingsMapping[selectedLeague]);
  }, [selectedLeague, plStandings, bl1Standings, bsaStandings, fl1Standings, saStandings, pplStandings, pdStandings]);

  console.log('Selected League team names', currentLeagueStandings);


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
  className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  bg-white bg- text-black border border-gray-300 rounded p-4 z-10 backdrop-blur-md min-w-min max-w-xs shadow-lg"
>
  <ul className="list-none m-0 p-0">
  <li onClick={() => handleLeagueClick('Premier League')} className="py-2 px-4 cursor-pointer hover:bg-gray-100 transition-colors duration-200">
  Premier League
</li>
<li onClick={() => handleLeagueClick('Bundesliga')} className="py-2 px-4 cursor-pointer hover:bg-gray-100 transition-colors duration-200">
  Bundesliga
</li>
<li onClick={() => handleLeagueClick('Campeonato Brasileiro Série A')} className="py-2 px-4 cursor-pointer hover:bg-gray-100 transition-colors duration-200">
  Campeonato Brasileiro Série A
</li>
<li onClick={() => handleLeagueClick('Ligue 1')} className="py-2 px-4 cursor-pointer hover:bg-gray-100 transition-colors duration-200">
  Ligue 1
</li>
<li onClick={() => handleLeagueClick('Serie A')} className="py-2 px-4 cursor-pointer hover:bg-gray-100 transition-colors duration-200">
  Serie A
</li>
<li onClick={() => handleLeagueClick('Primeira Liga')} className="py-2 px-4 cursor-pointer hover:bg-gray-100 transition-colors duration-200">
  Primeira Liga
</li>
<li onClick={() => handleLeagueClick('Primera Division')} className="py-2 px-4 cursor-pointer hover:bg-gray-100 transition-colors duration-200">
  Primera Division
</li>
  </ul>
</div>
    <div className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 z-0" />
  </>
)}
</div>
{currentLeagueStandings && currentLeagueStandings.length > 0 && (
  <div className="flex flex-wrap justify-center">
    {currentLeagueStandings.map((standing) => (
      <div
        key={standing.team.id}
        className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-4"
      >
        <div className="bg-white text-black rounded-lg shadow-md p-6 flex flex-col items-center">
          <h2 className="text-2xl font-semibold mb-4">{standing.team.name}</h2>
          <p className="text-lg">{standing.points}</p>
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