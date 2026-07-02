
// Array obj inicial contendo os dados dos cartões a serem exibidos na galeria principal
const initialCards = [
  {
    name: 'Vale de Yosemite',
    link: 'https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg',
  },
  {
    name: 'Lago Louise',
    link: 'https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg',
  },{

    name: 'Montanhas Carecas',
    link: 'https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_bald-mountains.jpg',
  },{
     name: 'Latemar',
    link: 'https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_latemar.jpg',
  },{
    name: 'Parque Nacional Vanoise',
    link: 'https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_vanoise.jpg',
  },{
    name: 'Lago di Braies',
    link: 'https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lago.jpg',
  }
]


initialCards.forEach((card) => {


  console.log('Card adicionado:', card);
}); 



//popup modal de edição do perfil
const editPopup = document.querySelector('#edit-popup');
const cardPopup = document.querySelector('#new-card-popup')
const formElement = document.getElementById('edit-profile-form')
const nameInput = document.querySelector('.popup__input_type_name')
const jobInput = document.querySelector('.popup__input_type_description')
const nomePadrao = document.querySelector('.profile__title')
const sobrePadrao = document.querySelector('.profile__description')

//botoes ddocument.quee abrir e fechar
const buttonEdit = document.querySelector('.profile__edit-button');
const buttonClose = document.querySelector('.popup__close');

//template dos cards
const cardTemplate = document.getElementById('card-template')
const cardsContainer = document.querySelector('.cards__list')




//popup add card
const buttonCardAdd = document.querySelector('.profile__add-button') //seleciona o botao do add button e coloca na const buttonCardAdd

buttonCardAdd.addEventListener('click',() => {
  openModal(cardPopup);
}); //adiciona o evento de click ao botao para quando clicar abrir o popup do openmodal 

const buttonCardClose = cardPopup.querySelector('.popup__close');

buttonCardClose.addEventListener('click', () => {
  closeModal(cardPopup);
}); //fecha o popup do CardADD

function fillProfileForm (){
nameInput.value = nomePadrao.textContent;
jobInput.value = sobrePadrao.textContent;
}

function openModal(popup) {
  popup.classList.add('popup_is-opened'); 
}

function handleOpenEditModal() {
  fillProfileForm(); // 1. preenche o formulário
  openModal(editPopup);       // 2. abre o pop-up
}

function closeModal(popup) {
  popup.classList.remove('popup_is-opened'); 
}

function handleProfileFormSubmit(evt) {

  evt.preventDefault();
}

buttonEdit.addEventListener('click', () => {
  handleOpenEditModal();
});

buttonClose.addEventListener('click', () => {
  closeModal(editPopup);
});

formElement.addEventListener('submit', (evt) => {
      
      handleProfileFormSubmit(evt);
      nomePadrao.textContent = nameInput.value
      sobrePadrao.textContent = jobInput.value
});

function getCardElement(name = "Lugar sem nome", link = "./images/placeholder.jpg") {
  const cardElement = cardTemplate.content.querySelector('.card').cloneNode(true);

  const cardTitle = cardElement.querySelector('.card__title');
  const cardImage = cardElement.querySelector('.card__image');

  cardTitle.textContent = name;
  cardImage.src = link;
  cardImage.alt = name;

  return cardElement;
}

function renderCard(name, link, container) {
  const cardElement = getCardElement(name, link);

  console.log(container);

  container.append(cardElement);
  
}

initialCards.forEach((item) => {
  renderCard(item.name, item.link, cardsContainer);
});
