import { React } from 'react';
import { useState,useEffect } from 'react';
import "./index.css";
const IconicCharactersList = [
    {
        name: "IRON MAN",
        image1: "https://i.pinimg.com/736x/92/01/34/9201345b1ab29fa19a4ec04d500d6449.jpg",
        image2: "https://i.postimg.cc/0NC55Gvg/Iron-Man-bg-remove.png",
        description: "Tony Stark is a genius inventor, billionaire industrialist, and philanthropist. After being kidnapped and gravely injured, he created a powerful suit of armor to escape and later refined it into the Iron Man suit. With his advanced AI assistant J.A.R.V.I.S., repulsor beams, flight systems, and countless gadgets, Iron Man becomes a one-man army. He is a founding member of the Avengers and known for his intellect, leadership, and sacrifice for the greater good.",
        color: ["	#D2042D", "gold"]
    },
    {
        name: "CAPTAIN AMERICA",
        image1: "https://i.pinimg.com/736x/3c/fc/9a/3cfc9afccf706b3966300a3ca96dc9ca.jpg",
        image2: "https://i.postimg.cc/Jzxs046s/cap.png",
        description: "Steve Rogers was a frail young man who volunteered for a top-secret Super Soldier program during World War II. The serum transformed him into Captain America—physically enhanced to the peak of human perfection. Wielding a nearly indestructible vibranium shield, he leads with bravery, tactical skill, and an unwavering moral compass. Frozen in ice and awakened decades later, he becomes the heart of the Avengers, always standing for justice and freedom.",
        color: ["#00BFFF", "#8B0000"]
    },
    {
        name: "BLACK PANTHER",
        image1: "https://i.pinimg.com/736x/a9/af/1e/a9af1e670938519f918fdd57acf8727c.jpg",
        image2: "https://i.postimg.cc/MpcSfLNw/Black-Panther-BG-remove.png",
        description: "T'Challa is the king of Wakanda, a technologically advanced and secretive African nation. After the death of his father, he assumed the mantle of the Black Panther, a role passed down through generations. Enhanced by the Heart-Shaped Herb, T'Challa gains superhuman strength, agility, and senses. His vibranium suit and access to advanced Wakandan tech make him a formidable warrior and a wise, compassionate leader. He's also an Avenger and a symbol of cultural pride and innovation.",
        color: ["purple", "black"]
    },
    {
        name: "SPIDER MAN",
        image1: "https://i.pinimg.com/736x/4e/5e/21/4e5e2187cc4f647e75bd88e4e9c74158.jpg",
        image2: "https://i.postimg.cc/DZyvSW-fS/spidey-bg-remover-20250515165612.png",
        description: "Peter Parker was an ordinary high school student until he was bitten by a radioactive spider. He developed superhuman strength, agility, reflexes, wall-crawling abilities, and a sixth sense called 'spidey-sense.' He designed web-shooters to swing through the city and battle villains. Balancing his dual life as a student and superhero, Spider-Man fights crime while holding onto his belief that 'with great power comes great responsibility.'",
        color: ["red", "blue"]
    },
    {
        name: "HULK",
        image1: "https://i.pinimg.com/736x/aa/81/a8/aa81a84dbccb379426d0f5ed75af2faa.jpg",
        image2: "https://i.postimg.cc/xdFqGpSY/hulk.png",
        description: "Dr. Bruce Banner is a brilliant scientist exposed to high levels of gamma radiation during an experiment gone wrong. As a result, he transforms into the Hulk whenever he is angry or stressed. The Hulk has nearly unlimited strength, endurance, and healing abilities. Though feared for his destructive power, Banner uses the Hulk to protect the innocent, often struggling with the inner conflict between his human and monstrous sides.",
        color: ["green", "purple"]
    },
    {
        name: "THOR",
        image1: "https://i.pinimg.com/736x/d3/b0/9e/d3b09e59c8ab5111e9ba486740e7acf4.jpg",
        image2: "https://i.postimg.cc/W1TDsJnR/thor.png",
        description: "Thor is the Norse God of Thunder and prince of Asgard, a realm of powerful beings. He wields the enchanted hammer Mjolnir, which grants him the power to summon lightning, fly, and battle with great force. Thor is incredibly strong, durable, and nearly immortal. Over time, he matures from a brash warrior to a wise hero and protector of both Asgard and Earth. As a member of the Avengers, he plays a key role in defending the universe from cosmic threats.",
        color: ["	#367588", "	#191970"]
    },
    // Add more characters as needed
];



const IconicCharacters = () => {
    const [selectedCharacter, setSelectedCharacter] = useState(null);

    const onClickCard = (character) => {
        setSelectedCharacter(character);
    };

    const closeModal = () => {
        setSelectedCharacter(null);
    };

    useEffect(() => {
        if (selectedCharacter) {
            document.body.style.overflow = 'hidden'; // Disable background scroll
        } else {
            document.body.style.overflow = 'auto'; // Re-enable scroll when modal closes
        }

        return () => {
            document.body.style.overflow = 'auto'; // Clean up on unmount
        };
    }, [selectedCharacter]);

    return (
        <div className="iconic-characters-c">
            {IconicCharactersList.map((character, index) => (
                <div
                    key={index}
                    className="character-card"
                    style={{
                        border: `5px solid ${character.color[0]}`,
                        boxShadow: `0 0 30px ${character.color[0]}`,
                    }}
                    onClick={() => onClickCard(character)}
                >
                    <img src={character.image1} alt={character.name} className="character-image" />
                </div>
            ))}

            {selectedCharacter && (
                <div className="hero-modal">
                    <div
                        className="hero-card"
                        style={{
                            backgroundImage: `linear-gradient(45deg, ${selectedCharacter.color[0]}, transparent, ${selectedCharacter.color[1]})`,
                        }}
                    >
                        <button className="close-btn" onClick={closeModal}>
                            &times;
                        </button>
                        <div className="hero-content">
                            <h1 className='hero-name'>{selectedCharacter.name}</h1>
                            <p className="hero-des">{selectedCharacter.description}</p>
                        </div>

                        <div className="hero-image">
                            <img src={selectedCharacter.image2} alt={selectedCharacter.name} style={{ maxWidth: '500px' }} />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default IconicCharacters;