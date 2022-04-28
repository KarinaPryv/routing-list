import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cenzor',
  templateUrl: './cenzor.component.html',
  styleUrls: ['./cenzor.component.scss']
})
export class CenzorComponent implements OnInit {

  public badWordsArr: Array<string> = ['java'];
  public newWord!: string;
  public originalText!: string;
  public isWordInputInvalid = false;
  public isTextInputInvalid = false;

  constructor() { }

  ngOnInit(): void {
  }

  addWord() {
    let wordInput = document.querySelector('.word-input') as HTMLInputElement;
    let wordsList = document.querySelector('.bad-word') as HTMLInputElement;

    if (wordInput.value !== '' && !this.badWordsArr.includes(this.newWord)) {
      this.badWordsArr.push(this.newWord);
      wordsList.textContent = `${this.badWordsArr.toString()}`;
      wordInput.value = '';
      this.isWordInputInvalid = false;
      wordInput.placeholder = 'word here...';
    }
    else {
      this.isWordInputInvalid = true;
      wordInput.placeholder = 'Please write a word!';
    }
  }

  reset() {
    let wordsList = document.querySelector('.bad-word') as HTMLInputElement;
    wordsList.innerHTML = '';
    this.badWordsArr = [];
  }

  cenzor() {
    let textInput = document.querySelector('.text-input') as HTMLInputElement;

    if (textInput.value !== '') {
      let textArr: Array<string> = this.originalText.split(' ');
      let cenzorTextArr: Array<string> = [];
      let wordsArr = this.badWordsArr;

      textArr.forEach(function (word) {
        for (let i = 0; i < wordsArr.length; i++) {
          if (word !== wordsArr[i]) {
            word = word;
          }
          else {
            let symbolNum: number = word.length;
            word = ''
            for (let i = 0; i < symbolNum; i++) {
              word += '*';
            }
          }
        }
        cenzorTextArr.push(word);
      });

      this.originalText = cenzorTextArr.join(' ');
      this.isTextInputInvalid = false;
      textInput.placeholder = 'text here...';
    }
    else {
      this.isTextInputInvalid = true;
      textInput.placeholder = 'Please write a text!';
    }
  }


}
