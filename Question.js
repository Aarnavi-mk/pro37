class Question{
    constructor(){
   this.title = createElement('h1');
    this.input1 = createInput("Name");
    this.input2 = createInput("enter the correct option");
    this.button = createButton('Play');
    this.question = createElement('h2');
    this.option1 = createElement('h4');
    this.option2 = createElement('h4');
    this.option3 = createElement('h4');
    this.option4 = createElement('h4');



    }
    hide(){
        this.input2.hide();
        this.button.hide();
        this.input1.hide();
        this.title.hide();
      }
      display(){
        this.title.html("MyQuiz Game")  ;
        this.tittle.position(350,0);

        this.question.html("Question :- What starts and ends with the latter 'E' but only has one letter ?")
        this.question.position(150,80);
        this.option1.html("1:Everyone");
        this.option1.position(150,100);
        this.option2.html("2:Envelope");
        this.option2.position(150,120);

        this.input1.position(150,230);
      }
}