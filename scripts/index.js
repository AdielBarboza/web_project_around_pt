// Array obj inicial contendo os dados dos cartões a serem exibidos na galeria principal
const initialCards = [
  {
    name: 'Vale de Yosemite',
    link: 'https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg',
  },
  {
    name: 'Lago Louise',
    link: 'https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg',
  },
  {
    name: 'Montanhas Carecas',
    link: 'https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_bald-mountains.jpg',
  },
  {
    name: 'Latemar',
    link: 'https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_latemar.jpg',
  },
  {
    name: 'Parque Nacional Vanoise',
    link: 'https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_vanoise.jpg',
  },
  {
    name: 'Lago di Braies',
    link: 'https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lago.jpg',
  },
];



//popup modal de edição do perfil
const editPopup = document.querySelector('#edit-popup');
const cardPopup = document.querySelector('#new-card-popup');
const formElement = document.getElementById('edit-profile-form');
const nameInput = document.querySelector('.popup__input_type_name');
const jobInput = document.querySelector('.popup__input_type_description');
const nomePadrao = document.querySelector('.profile__title');
const sobrePadrao = document.querySelector('.profile__description');

//elementos do image popup
const imagePopup = document.getElementById('image-popup');
const imageLink = imagePopup.querySelector('.popup__image')
const closePopupImage = imagePopup.querySelector('.popup__close')
const ImageCaption =  imagePopup.querySelector('.popup__caption');

//popup adicao de card, title e image
const newTitle = document.querySelector('.popup__input_type_card-name');
const newImage = document.querySelector('.popup__input_type_url');

//botoes ddocument.quee abrir e fechar
const buttonEdit = document.querySelector('.profile__edit-button');
const buttonClose = document.querySelector('.popup__close');

//template dos cards
const cardTemplate = document.getElementById('card-template');
const cardsContainer = document.querySelector('.cards__list');
const formNewCards = document.getElementById('new-card-form');

//popup add card
const buttonCardAdd = document.querySelector('.profile__add-button'); //seleciona o botao do add button e coloca na const buttonCardAdd

buttonCardAdd.addEventListener('click', () => {
  openModal(cardPopup);
}); //adiciona o evento de click ao botao para quando clicar abrir o popup do openmodal

const buttonCardClose = cardPopup.querySelector('.popup__close');

buttonCardClose.addEventListener('click', () => {
  closeModal(cardPopup);
}); //fecha o popup do CardADD

function fillProfileForm() {
  nameInput.value = nomePadrao.textContent;
  jobInput.value = sobrePadrao.textContent;
}

function openModal(popup) {
  popup.classList.add('popup_is-opened');
}

function handleOpenEditModal() {
  fillProfileForm(); // 1. preenche o formulário
  openModal(editPopup); // 2. abre o pop-up
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

 closePopupImage.addEventListener('click', (evt)=>{
  closeModal(imagePopup);
 });

formElement.addEventListener('submit', (evt) => {
  handleProfileFormSubmit(evt);
  nomePadrao.textContent = nameInput.value;
  sobrePadrao.textContent = jobInput.value;
});

function handleCardDelete(evt) {
  const cardElement = evt.target.parentElement;
  cardElement.remove();
}

function getCardElement(
  name = 'Lugar sem nome',
  link = './images/placeholder.jpg',
) {
  const cardElement = cardTemplate.content
    .querySelector('.card')
    .cloneNode(true);

  const cardTitle = cardElement.querySelector('.card__title');
  const cardImage = cardElement.querySelector('.card__image');
  const cardButtom = cardElement.querySelector('.card__like-button');
  const cardDelete = cardElement.querySelector('.card__delete-button');

  cardTitle.textContent = name;
  cardImage.src = link;
  cardImage.alt = name;

  cardButtom.addEventListener('click', (evt) => {
    cardButtom.classList.toggle('card__like-button_is-active');
    
  });

  cardDelete.addEventListener('click', handleCardDelete);

  cardImage.addEventListener('click', (evt) =>{

     imagePopup.classList.add('popup_is-opened');
     imageLink.src = link; 
     imageLink.alt = name;
     ImageCaption.textContent = name;
  })

 
  return cardElement;
}
//clona template e adiciona na tela com append
function renderCard(name, link, container) {
  const cardElement = getCardElement(name, link);

  

  container.append(cardElement);
}

initialCards.forEach((item) => {
  renderCard(item.name, item.link, cardsContainer);
});

function handleCardFormSubmit() {
  renderCard(newTitle.value, newImage.value, cardsContainer);
}
formNewCards.addEventListener('submit', (evt) => {
  evt.preventDefault();
  handleCardFormSubmit();
});
