import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent, {
  timelineOppositeContentClasses,
} from '@mui/lab/TimelineOppositeContent';
import './index.css';
const Acheivements=[
{
    year: "1970s",
    image: "https://i.pinimg.com/736x/2e/ad/f3/2eadf3ead23b3d799501f3934371130f.jpg",
    title: "Marvel Comics Gain Mainstream Popularity",
    description: "Marvel tackled real-world issues such as racism and drug abuse, earning critical praise and making superhero stories more mature and socially relevant.",
  },
  {
    year: "1980s",
    image: "https://i.pinimg.com/736x/10/99/db/1099dbbee794226b6063f23042f9b609.jpg",
    title: "Rise of Edgy Antiheroes",
    description: "Characters like Wolverine, The Punisher, and Venom rose in popularity, showcasing Marvel's ability to evolve with darker, more complex narratives.",
  },
  {
    year: "1992",
    image: "https://i.pinimg.com/736x/4c/e0/af/4ce0af3aaa630eb7b4c3db8e424026c7.jpg",
    title: "X-Men: The Animated Series Premieres",
    description: "X-Men: The Animated Series launched, becoming a massive success and introducing a new generation to Marvel's mutants and serialized superhero storytelling.",
  },
  {
    year: "1994",
    image: "https://i.pinimg.com/736x/91/62/21/91622179472da2c1e23b99492bb2cd7f.jpg",
    title: "Spider-Man: The Animated Series Launches",
    description: "Spider-Man: The Animated Series debuted, running for five seasons and becoming one of the most beloved superhero cartoons of its time.",
  },
  {
    year: "1998",
    image: "https://i.pinimg.com/736x/d7/70/40/d770408183627f8bd89c1a06a843b5a4.jpg",
    title: "Blade Hits Theaters",
    description: "Blade, starring Wesley Snipes, became Marvel’s first successful R-rated film, proving that superhero movies could be edgy, stylish, and profitable.",
  },
  {
    year: "2000",
    image: "https://i.pinimg.com/736x/0d/41/1f/0d411f7211ee9c89ac86078cd7c3183d.jpg",
    title: "X-Men Movie Revives Superhero Films",
    description: "The release of X-Men revitalized the superhero film genre, achieving critical and commercial success and laying the groundwork for future Marvel films.",
  },
  {
    year: "2002",
    image: "https://i.pinimg.com/736x/04/95/69/0495699504e6747ac6a4410c92c81103.jpg",
    title: "Spider-Man Breaks Box Office Records",
    description: "Directed by Sam Raimi, Spider-Man grossed over $800 million worldwide and set new standards for superhero cinema, proving Marvel’s potential on the big screen.",
  },
  {
    year: "2005–2007",
    image: "https://i.pinimg.com/736x/77/ae/f9/77aef95f8fe9b03702a14335fd43cbdd.jpg",
    title: "Blockbuster Success of Marvel Films",
    description: "X2, Spider-Man 2, X-Men: The Last Stand, and Spider-Man 3 all performed strongly at the box office, increasing anticipation for Marvel’s future cinematic endeavors.",
  },
  {
    year:"2012",
    image:"https://i.pinimg.com/736x/85/61/72/8561725676ac3fca46069c118e270164.jpg",
    title:"Highest Grossing Movie-The Avengers",
    description:"Grossed $1.519 billion worldwide, making it the highest-grossing film of 2012 and the third-highest of all time at its release. The Avengers marked a major milestone for Marvel Studios, uniting key superheroes in one film and setting new standards for ensemble blockbusters and cinematic universes.",
  },
   {
    year:"2015",
      image:"https://i.pinimg.com/736x/80/e7/32/80e732ce541ab85925c1da3f407f7467.jpg",
    title:"4th Highest Grossing Movie-Avengers: Age of Ultron",
    description:" Earned $1.403 billion worldwide, making it the fourth-highest-grossing film of 2015. Avengers: Age of Ultron continued the Marvel Cinematic Universe saga, featuring the return of iconic heroes and introducing new characters. Its global success reinforced Marvel's dominance in the superhero genre and blockbuster franchise filmmaking",
  },
   {
    year:"2016",
      image:"https://i.pinimg.com/736x/d4/50/ea/d450ea502d23f1816fe40efbc25166d7.jpg",
    title:"Highest Grossing Film of the year-Captain America: Civil War",
    description:"Accumulated $1.153 billion globally, making it the highest-grossing film of 2016. Captain America: Civil War explored ideological conflict among superheroes, introducing major new characters and deepening the Marvel Cinematic Universe. Its box office success highlighted the franchise’s growing popularity and the strong audience appeal of character-driven superhero narratives. ",
  },
   {
    year:"2018",
      image:"https://i.pinimg.com/736x/05/9d/60/059d6022a4250876a5590f9a5cff245e.jpg",
    title:"Nominated to the Oscars - Black Panther",
    description:"Became the first superhero film nominated for Best Picture at the Oscars, marking a historic moment in cinema. Black Panther won three Academy Awards: Best Original Score, Best Costume Design, and Best Production Design. Its cultural impact and critical acclaim elevated the superhero genre to new artistic heights. ",
  },
   {
    year:"2019-2020",
      image:"https://i.pinimg.com/736x/60/67/64/606764191716fe454d3ce8d87ce16d49.jpg",
    title:"Highest Grossing Movie of all time & Nominated to Oscars - Avengers: Endgame",
    description:"Achieved $2.798 billion globally, temporarily surpassing Avatar as the highest-grossing film of all time. Avengers: Endgame received a single Oscar nomination for Best Visual Effects, despite widespread acclaim. Its emotional depth, scale, and cultural impact marked a milestone in blockbuster filmmaking and concluded the Infinity Saga with record-breaking success. ",
  },
   {
    year:"2021",
      image:"https://i.pinimg.com/736x/ac/79/ca/ac79caa1ac972caf06fea8d911b47dd2.jpg",
    title:"Most watched Movie Trailer - Spider-man: No Way Home",
    description:"Garnered 355.5 million views globally within 24 hours of release, breaking the previous record held by Avengers: Endgame with 289 million views. Spider-Man: No Way Home’s trailer became the most-watched ever, driven by massive fan anticipation, multiverse teases, and the return of iconic characters from past Spider-Man franchises.",
  },
   {
    year:"2024",
      image:"https://i.pinimg.com/736x/fe/63/b6/fe63b671e6cff9762d0c132541acb270.jpg",
    title:"Biggest R-rated Movie - Deadpool & Wolverine",
    description:"SSet the record for the biggest R-rated opening with $205 million domestically, redefining the potential of adult superhero films. Deadpool & Wolverine combined sharp humor, intense action, and fan-favorite characters, generating massive hype and showcasing the demand for bold, unconventional storytelling within the superhero genre.",
  }, 
{
    year:"2008-2025",
      image:"https://i.pinimg.com/736x/c5/32/15/c53215b1378efe6c94dc3db021af4255.jpg",
    title:"Most Successfull Franchise with 33+ Movies in 16 years",
    description:"The Marvel Cinematic Universe (MCU) has achieved unprecedented success over 16 years, launching with Iron Man and expanding to over 33 interconnected films and 10+ TV series. It redefined franchise storytelling, setting new standards in cinematic world-building, box office performance, and long-form character development across multiple platforms.",
  }, 
]

export default function LeftAlignedTimeline() {
  return (
   <div className="achievements-c">
      <Timeline
        sx={{
          [`& .${timelineOppositeContentClasses.root}`]: {
            flex: 0.2,
            color: '#bb86fc',
            fontWeight: 'bold',
            fontSize: '18px',
          },
        }}
      >
        {Acheivements.map((achievement, index) => (
          <TimelineItem key={index}>
            <TimelineOppositeContent >
              {achievement.year}
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot
                sx={{
                  backgroundColor: '#e0aaff',
                  width: 16,
                  height: 16,
                  boxShadow: '0 0 0 4px rgba(255, 255, 255, 0.2)',
                }}
              />
              {index < Acheivements.length - 1 && (
                <TimelineConnector sx={{ backgroundColor: '#a64ac9', height: '40px' }} />
              )}
            </TimelineSeparator>
            <TimelineContent className="info-c">
              <h3 className="achievment-title">{achievement.title}</h3>
              <div className="achievment-des">
                <p style={{width:"400px"}}>{achievement.description}</p>
                <img src={achievement.image} className='image-a' alt="title"/>
              </div>
              
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </div>
  );
}
