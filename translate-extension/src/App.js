/* global chrome */
import './App.css';
import React from 'react';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: props.data.text, lang: props.data.lang };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleLangChange = this.handleLangChange.bind(this);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            id="new-todo"
            value={this.state.text}
            onChange={this.handleTextChange}
          />
          <button>
            Translate
          </button>
          <label>
          Translation Language
          <select value={this.state.lang} onChange={this.handleLangChange}>
            <option value="en">English</option>
            <option value="ko">Korean</option>
            <option value="zh">Chinese (Simplified)</option>
          </select>
        </label>
          <h3>{this.state.translated}</h3>
        </form>
      </div>
    );
  }

  handleTextChange(e) {
    this.setState({ text: e.target.value });
    chrome.storage.local.set({text: e.target.value});
  }
  handleLangChange(e) {
    this.setState({ lang: e.target.value });
    chrome.storage.local.set({lang: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();

    var url = "https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=" + this.state.lang + "&dt=t&q=" + encodeURI(this.state.text);
    fetch(url)
        .then(response => response.json())
        .then(data => this.setState({ translated: data[0][0][0]}));
  }
}

// function App(lang) {

//   return (
//     <div className="App">
//       <TranslateMainContainer/>
//     </div>
//   );
// }



export default App;
