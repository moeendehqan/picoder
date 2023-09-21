import './style/style.css'
import { useState } from 'react';
function App() {

  const [image,setImage] = useState(null)
  const [Char,setChar] = useState(['@','#','!','$','%','^','&','*','-','_','+','=','~','<','>','O','0','X',';',':','?','"','I','A','V','T','W','M'])
  const [CharSelected, setCharSelected] = useState([])
  const [Size, setSize] = useState({w})


  const handleCharSelected = (character) => {
    const isItemInList = CharSelected.includes(character);
    if (isItemInList) {
      const updatedList = CharSelected.filter((listItem) => listItem !== character);
      setCharSelected(updatedList);
    } else {
      const updatedList = [...CharSelected, character];
      setCharSelected(updatedList);
    }
  }
  

  return (
    <div>
      <div className='img'>
        <input type="file" accept="image/*" onChange={(e) => setImage(e.target.files[0])} />
        {image && <img src={URL.createObjectURL(image)} alt='تصویر انتخابی' />}
      </div>
      <div className='chr'>
        {
          Char.map(i=>{
            return(
              <div onClick={()=>handleCharSelected(i)} className='ChrBox'>
                <p>{i}</p>
              </div>
            )
          })
        }
      </div>

      <div className='siz'>
        <input  />

      </div>
    </div>
  );
}

export default App;
