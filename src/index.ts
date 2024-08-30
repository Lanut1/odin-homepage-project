import './style.css';
import aboutLadyImage from './images/lady.jpg';
import card1 from './images/card1.jpg';
import card2 from './images/card2.jpg';
import card3 from './images/card3.jpg';
import card4 from './images/card4.jpg';
import card5 from './images/card5.jpg';
import card6 from './images/card6.jpg';


const aboutImage = document.querySelector(".header-image") as HTMLImageElement;
aboutImage.src = aboutLadyImage;

const cardsImages = [card1, card2, card3, card4, card5, card6];
const projectCards = document.querySelectorAll(".project-card");
projectCards.forEach((card, index) => {
  if (index < cardsImages.length) {
    (card as HTMLElement).style.backgroundImage = `linear-gradient(to top, white, transparent), url(${cardsImages[index]})`;
  }
  const cardTitle = card.querySelector(".project-title") as HTMLElement;
  cardTitle.innerText = "Project name";

  const cardDescription = card.querySelector(".project-description") as HTMLElement;
  cardDescription.innerText = "Aenean auctor, nulla quis semper tempor, velit velit aliquam magna, ac volutpat dui elit vel lectus. Nam eget vestibulum justo."
})
