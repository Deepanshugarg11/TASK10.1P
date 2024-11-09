import './App.css';
import CenteredBar from './Components/CenteredBar';

import Header from './Components/Header';
import FeaturedArticle from './Components/FeaturedAricle';
import FeaturedTutorial from './Components/FeaturedTutorial';

import Mail from './Components/mail';      
import About from './Components/about';




function App() {
  const imageUrls = [
    'https://images7.alphacoders.com/417/417071.jpg',
    'https://tse1.mm.bing.net/th?id=OIP.qeNwPlg8GISjg4L2RhlvagHaE8&pid=Api&P=0&h=180',
    'https://tse1.mm.bing.net/th?id=OIP.BCKv5N3FT5n4BoWp5tKnUQHaEo&pid=Api&P=0&h=180'
  ];
  const titles = ['image 1', 'image 2', 'image 3'];
  const descriptions = [
    'We have located paradise..',
    'You should never ignore a sunset..',
    'Inhale the dusk..'
  ];
  const authors = ['Victoria', 'Bell', 'GD47'];
  const ratings = [5, 4, 3.5];

  const imageUrl = [
    'https://tse3.mm.bing.net/th?id=OIP.Fg-L2kDQ3jYKZoN1-KZnOAHaEo&pid=Api&P=0&h=180',
    'https://tse2.mm.bing.net/th?id=OIP.fLe0n1N0tnIQI-HphXER5AHaE8&pid=Api&P=0&h=180',
    'https://wallpaper.dog/large/5453412.jpg'
  ];
  const title = ['image 4', 'image 5', 'image 6'];
  const description = [
    'Sunsets are troublesome because they have to finish..',
    'A fresh tomorrow promised.',
    'A view this beautiful doesnot require a filter.'
  ];
  const author = ['Sunny', 'Danger', 'White'];
  const rating = [3.5, 4.8, 3.0];

  return (
    <div className="App">

  <CenteredBar/>
  <Header/>
  <h1>  ARTICLE</h1>
  <FeaturedArticle
        imageUrls={imageUrls}
        titles={titles}
        descriptions={descriptions}
        authors={authors}
        ratings={ratings}
      />

<button >See all Articles</button>

  <h1>  TUTORIAL</h1>
 <FeaturedTutorial
        imageUrls={imageUrl}
        titles={title}
        descriptions={description}
        authors={author}
        ratings={rating}
      /> 
<button >See all Tutorials</button>
  <Mail/>
  <About/>
      

     
     
    </div>
  );
}

export default App;
