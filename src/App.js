import './style/style.css'
import { useState } from 'react';
function App() {

  const [image,setImage] = useState(null)

  return (
    <div>
      <div className='img'>
        <input type='file' value={image} onChange={(e)=>setImage(e.target.files[0])}/>
        


      </div>

    </div>
  );
}

export default App;
