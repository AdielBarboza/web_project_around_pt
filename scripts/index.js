
// Array obj inicial contendo os dados dos cartões a serem exibidos na galeria principal
const initialCards = [
  {
    name: 'Vale de Yosemite',
    link: 'https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg',
    
    name: 'Lago Louise',
    link: 'https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg',
    
    name: 'Montanhas Carecas',
    link: 'https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_bald-mountains.jpg',
    
     name: 'Latemar',
    link: 'https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_latemar.jpg',

    name: 'Parque Nacional Vanoise',
    link: 'https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_vanoise.jpg',

    name: 'Lago di Braies',
    link: 'https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lago.jpg',
  }
]

// Itera sobre o array inicial para criar e renderizar cada cartão na página
initialCards.forEach((card) => {

  // Insere o elemento criado no container da lista de cartões no DOM
  //document.querySelector('.cards__list').append(cardElement);
  // DEBUG: Log para verificar o carregamento dos itens no console durante o desenvolvimento
  console.log('Card added:', card.name);
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


