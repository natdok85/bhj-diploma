/**
 * Класс Sidebar отвечает за работу боковой колонки:
 * кнопки скрытия/показа колонки в мобильной версии сайта
 * и за кнопки меню
 * */
class Sidebar {
  /**
   * Запускает initAuthLinks и initToggleButton
   * */
  static init() {
    this.initAuthLinks();
    this.initToggleButton();
  }

  /**
   * Отвечает за скрытие/показа боковой колонки:
   * переключает два класса для body: sidebar-open и sidebar-collapse
   * при нажатии на кнопку .sidebar-toggle
   * */
  static initToggleButton() {
    let button = document.querySelector('.sidebar-toggle');
    button.addEventListener('click', () => {
      let sideBar = document.querySelector('.sidebar-mini');
      if(sideBar.classList.contains('sidebar-open')) {
        sideBar.classList.remove('sidebar-open');           
      
      } else {
        sideBar.classList.add('sidebar-open');
        sideBar.classList.add('sidebar-collapse');
      }
      ;
    })

  }

  /**
   * При нажатии на кнопку входа, показывает окно входа
   * (через найденное в App.getModal)
   * При нажатии на кнопку регастрации показывает окно регистрации
   * При нажатии на кнопку выхода вызывает User.logout и по успешному
   * выходу устанавливает App.setState( 'init' )
   * */
  static initAuthLinks() {
    const loginButton = document.querySelector('.menu-item_login');
    loginButton.addEventListener('click', () => {
      const loginModal = App.getModal('login');
      loginModal.open();
    });
    const registerButton = document.querySelector('.menu-item_register');
    registerButton.addEventListener('click', () => {
      const registerModal = App.getModal('register');
      registerModal.open();
    })

  }

}
