import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'any-question';
  pregunta: string= '';
  respuesta: string= '';
  img: any = null;
  isValid: boolean = false;

  async getRespuesta(){
    this.respuesta = 'Pensando...'
    const { answer, image } = await fetch('https://yesno.wtf/api').then( r => r.json() )
    console.log(answer);
    console.log(image);
    this.respuesta = answer === 'yes' ? 'Si!' : 'No!'
    this.img = image
    console.log(this.img);
  }

  onQuestion(event:any){
    
    this.isValid = false
    
    this.respuesta = event.target.value;

    console.log(this.respuesta);
    if( !this.respuesta.includes('?') ) return

    this.isValid = true
    // TODO: Realizar petición http
    this.getRespuesta()
  }


}
