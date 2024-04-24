
import './App.css';
import { useRef, useState } from 'react';
function App() {
  const [inputText, setInputText] = useState();
  const [content, setContent] = useState([]);
  async function fetchedData() {
    const URL=`https://api.unsplash.com/search/photos?page=1&query=${inputText}&client_id=qQu6cTrG58GZm1N_6OBgFrFhjTRoGJXFzbDaOnKIexw`
    const response = await fetch(URL);
    const data = await response.json();
    const details = data.results;
    console.log(details);
    setContent(details);
   setInputText("")
  }
  
  // console.log(content);
  return (
    <div className="App">
      <div>
        <h2>Image Generation App</h2>
        <input type="text" placeholder="Enter Text..." value={inputText} onChange={(e) => {
          setInputText(e.target.value);
          
        }} />
        <button onClick={fetchedData} >Generate</button>
      </div>
      <div style={{margin:"20px",display:"flex",flexWrap:"wrap",gap:"4px"}}>
        {
          content.map((ele,index) => {
            return (
              <div key={index}>
                <img src={ele.urls.
small_s3
} style={{height:"400px",width:"400px"}} />

              </div>
             
           )
          })
        }
      </div>
      
    </div>
  );
}

export default App;
