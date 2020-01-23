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
    console.log(this.element);
    this.registerEvents();

  }

  /**
   * Необходимо запретить отправку формы. В момент отправки
   * вызывает метод submit()
   * */
  registerEvents() {
    const forms = document.querySelectorAll('.form');
    
    forms.forEach(form => {      
      form.addEventListener('submit', e => {
        e.preventDefault(); 
        
    //     const formData = new FormData(form);
    
    // for(let pair of formData.entries()) {
    //     const key = pair[0];
    //     const value = pair[1];

    //     console.log( `${key}: ${value}`); 
    //  }
        //this.submit();
        this.getData();
      })
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
    
    for(let pair of formData.entries()) {
        const key = pair[0];
        const value = pair[1];

        console.log( `${key}: ${value}`); 
     }
    
      
    }    
      
    

  

  onSubmit( options ) {

  }

  /**
   * Вызывает метод onSubmit и передаёт туда
   * данные, полученные из метода getData()
   * */
  submit() {
    

  }
}


