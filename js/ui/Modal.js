// import { ENETUNREACH } from "constants";

let registerButton = document.querySelector('.menu-item_register');

//открывает модальное окно регистрации
registerButton.addEventListener('click', e => {
  e.preventDefault();
  let modalRegister = document.querySelector('#modal-register');
  modalRegister.style.display = 'block';
 
})

//обработчики на все закрывающие элементы
let closeButtons = Array.from(document.querySelectorAll('[data-dismiss]'));
for(let closeButton of closeButtons) {
  closeButton.addEventListener('click', e => {
    e.target.closest('.modal').style.display = '';
  })
}

//обработчик на кнопку "зарегистрироваться"
let formButtons = Array.from(document.querySelectorAll('.btn-primary'));
for(let formButton of formButtons) {
  if(formButton.textContent === 'Зарегистрироваться') {
  formButton.addEventListener('click', e => {
    e.preventDefault();       
    let registerForm = document.querySelector('#register-form');
    formData = new FormData(registerForm);
    entries = formData.entries();
    //как добавить все данные из formData в объект?
    for (let item of entries) {
      let key = item[0];
      let value = item[1];        
        
      }
    
    let dataToSubmit = new Object();
    dataToSubmit.url = registerForm.getAttribute('action');
    dataToSubmit.method = registerForm.getAttribute('method');
    //dataToSubmit.data = 
       
    let xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://bhj-diplom.letsdocode.ru/user/register.php');    
    xhr.send(dataToSubmit);    
    return false;
  })
  }  
}
/**
 * Класс Modal отвечает за
 * управление всплывающими окнами.
 * В первую очередь это открытие или
 * закрытие имеющихся окон
 * */
class Modal {
  /**
   * Устанавливает текущий элемент в свойство element
   * Регистрирует обработчики событий с помощью
   * AccountsWidget.registerEvents()
   * Если переданный элемент не существует,
   * необходимо выкинуть ошибку.
   * */
  constructor( element ) {

  }

  /**
   * При нажатии на элемент с data-dismiss="modal"
   * должен закрыть текущее окно
   * (с помощью метода Modal.onClose)
   * */
  registerEvents() {
    

  }

  /**
   * Срабатывает после нажатия на элементы, закрывающие окно.
   * Закрывает текущее окно (Modal.close())
   * */
  onClose( e ) {

  }
  /**
   * Удаляет обработчики событий
   * */
  unregisterEvents() {

  }
  /**
   * Открывает окно: устанавливает CSS-свойство display
   * со значением «block»
   * */
  open() {

  }
  /**
   * Закрывает окно: удаляет CSS-свойство display
   * */
  close(){

  }
}
