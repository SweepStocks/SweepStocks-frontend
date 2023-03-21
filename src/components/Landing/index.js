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
    <div style={{ display: 'flex',  flexDirection: 'column' }}>
      <div style={{ flexGrow: 1, border: '1px solid white', padding: '20px' }}>
         <h1 style={{fontSize: '3rem'}}>Guess who the champion will be!</h1>
      </div>

    
    
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
         <div>Current Prize amount = $100</div>
             <button onClick={toggleLeagueMenu} 
                     style={{
                            backgroundColor: '#4CAF50', /* Green */
                            border: 'none',
                            color: 'white',
                            padding: '15px 32px',
                            textAlign: 'center',
                            textDecoration: 'none',
                            display: 'inline-block',
                            fontSize: '16px',
                            borderRadius: '5px',
                            boxShadow: '2px 2px 2px rgba(0, 0, 0, 0.4)',
                            cursor: 'pointer',
                            transition: 'background-color 0.3s ease-out'
                            }}>
        Choose the league you want to participate
            </button>
    {isLeagueMenuOpen && (
            <>
            <div
            ref={leagueMenuRef}
            style={{
                position: 'fixed',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                backgroundColor: '#fff',
                color: '#000',
                border: '1px solid #ccc',
                borderRadius: '4px',
                padding: '10px',
                zIndex: '1',
                backdropFilter: 'blur(4px)',
                minWidth: '100px',
                maxWidth: '300px',
              }}
            >
              <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
                <li onClick={() => handleLeagueClick('Premier League')}>Premier League</li>
                <li onClick={() => handleLeagueClick('Bundesliga')}>Bundesliga</li>
                <li onClick={() => handleLeagueClick('LaLiga')}>LaLiga</li>
                <li onClick={() => handleLeagueClick('UEFA Champions League')}>UEFA Champions League</li>
                </ul>
            </div>
            <div
                style={{
                  position: 'fixed',
                  top: '0',
                  left: '0',
                  right: '0',
                  bottom: '0',
                  backgroundColor: 'rgba(0, 0, 0, 0.5)',
                  zIndex: '0',
                }}
              />
            </>
    )}
    </div>
    {teamNamesAndPrices.length > 0 && (
        <div style={{ display: 'flex', flexGrow: 1}}>
            {teamNamesAndPrices.map((team) => ( 
                <div key={team.id} style={{padding: '10px', margin: '10px', backgroundColor: '#000000'}}>
                    <h2>{team.name}</h2>
                    <p>{team.price}</p>
                </div>
            ))}
        
        </div>
    )}

   
  </div>
  </>
    );
};

export default Landing;