/**
 * Класс AsyncForm управляет всеми формами
 * приложения, которые не должны быть отправлены с
 * перезагрузкой страницы. Вместо этого данные
 * с таких форм собираются и передаются в метод onSubmit
 * для последующей обработки
 * */
class AsyncForm {
  /**
   * Если переданный элемент не существует,
   * необходимо выкинуть ошибку.
   * Сохраняет переданный элемент и регистрирует события
   * через registerEvents()
   * */
  constructor( element ) {
    this.element = element;        
    this.registerEvents();

  }

  /**
   * Необходимо запретить отправку формы. В момент отправки
   * вызывает метод submit()
   * */
  registerEvents() {

    this.element.addEventListener('submit', e => {
      e.preventDefault();            
      this.submit();
    })    
        
      }

  

  /**
   * Преобразует данные формы в объект вида
   * {
   *  'название поля формы 1': 'значение поля формы 1',
   *  'название поля формы 2': 'значение поля формы 2'
   * }
   * */
  getData() {    
    const formData = new FormData(this.element);
    let data = new Object();
    let submitData = new Object();
        
    for(let pair of formData.entries()) {      
      const key = pair[0];
      const value = pair[1];     
      data[`${key}`] = value;
     }

     submitData.url = this.element.action;
     submitData.method = this.element.method;
     submitData.data = data;


     console.log(JSON.stringify(submitData));     
     return JSON.stringify(submitData);    
      
    }    
      
    

  

  onSubmit( options ) {          

  }

  /**
   * Вызывает метод onSubmit и передаёт туда
   * данные, полученные из метода getData()
   * */
  submit() {
    this.onSubmit(this.getData());

  }
}


