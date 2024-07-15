import { useState } from 'react';
import './App.css';

const cardImages = [
  { "src": "/img/helmet-1.png"},
  { "src": "/img/potion-1.png"},
  { "src": "/img/ring-1.png"},
  { "src": "/img/scroll-1.png"},
  { "src": "/img/shield-1.png"},
  { "src": "/img/sword-1.png"}
];

export default function App() {

  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);

  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
    .sort(() => Math.random() - 0.5)
    .map((card) => ({ ...card, id: Math.random() }));

    setCards(shuffledCards);
    setTurns(0);
  }

  console.log(cards, turns)

  return (
      <div className='app'>
          <h1 className='game-title'>Magic Match</h1>
          <button className='new-game' onClick={() => shuffleCards()}>New Game</button>
          <div className="card-grid">
            {cards.map((card) => (
              <div className='card' key={card.id}>
                <div>
                  <img className='card-front' src={card.src} />
                  <img className='card-back' src="/img/cover.png" />
                </div>
              </div>
            ))}
          </div>
      </div>
  )
};