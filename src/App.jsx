import React, { useState, useRef  } from "react";

import "./App.css";
function App() {
  const audioRef = useRef(null); // Reference to the audio element
  const [phrase, setPhrase] = useState(""); // State to hold the selected phrase

  const playAudio = () => {
    if (audioRef.current) {
      audioRef.current.play(); // Start playing the audio
      const randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];
      setPhrase(randomPhrase);
    }
  };


  const phrases = [
    "Il faut croire en l'âme des cartes !!",
    "Un duel n'est perdu que quand tes points de vies sont à 0, pas avant !",
    "Aller Susu !!!! Je crois en toi !",
    "Même le pharaon à perdu des duels ! Le plus important est de se relever !",
    "Les amis c'est plus important que de bonnes cartes !",
    "Aucune carte dans le deck du grand père de Yugi n'est pathétique ! !"
  ];

  return (
    <div className="stage" >

    <div className="box" style={{ top: "10%" }}>
    <p className="phrase">Quelle heure est-il ?</p>
    </div>
    <div  className="box"  style={{ top: "10%", height: "20vh" }}>
          <button className="play-button" id="clock" onClick={playAudio}>
      ⏲️
      </button>
     {/* Audio element */}
     <audio ref={audioRef} src="/duel.mp3" />
    </div>

    <div className="box" style={{ top: "30%" }}>
      <p className="phrase">{phrase} </p>
      </div>
    </div>
  )
}

export default App;
