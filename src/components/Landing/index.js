import Image from 'next/image'
import React, {useState, useRef, useEffect} from 'react';

const Landing  = () => {

    const [isLeagueMenuOpen, setIsLeagueMenuOpen] = useState(false);
    const leagueMenuRef = useRef(null);

    const toggleLeagueMenu = () => {
      setIsLeagueMenuOpen(!isLeagueMenuOpen);
    };

    return(
        <>
    <div style={{ display: 'flex',  flexDirection: 'column' }}>
      <div style={{ flexGrow: 1, border: '1px solid white', padding: '20px' }}>
         <h1 style={{fontSize: '3rem'}}>Guess who the champion will be!</h1>
      </div>
    
    
    <div style={{ flexGrow: 1 }}>
    <button onClick={toggleLeagueMenu}>Choose the league you want to participate</button>
    {isLeagueMenuOpen && (
            <div
            style={{
                position: 'absolute',
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
              }}
            >
              <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
                <li>Option 1</li>
                <li>Option 2</li>
                <li>Option 3</li>
              </ul>
            </div>
    )}
    </div>
    <div style={{ flexGrow: 1 }}>Right Content</div>
  </div>
  </>
    );
};

export default Landing;