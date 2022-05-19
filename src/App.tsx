import { urls } from './API/urls'
import {getEngines} from './API/index';
import Header from './components/Header';


const App: React.FC = () => {

    getEngines(urls.get.engines)
        .then(response => {
            console.log(response);
        })
        
  return (
    <Header />
  );
}

export default App;


// *** SUMMARY OF AI ENGINE *** //

// Curie

// Curie is extremely powerful, yet very fast. While Davinci is stronger when it comes to analyzing complicated text, Curie is quite capable for many nuanced tasks like sentiment classification and summarization. Curie is also quite good at answering questions and performing Q&A and as a general service chatbot.

// Good at: Language translation, complex classification, text sentiment, summarization
