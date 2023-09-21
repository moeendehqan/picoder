import './style/style.css'
import { useState } from 'react';
function App() {

  const [image,setImage] = useState(null)
  const [Char,setChar] = useState(['@','#','!','$','%','^','&','*','-','_','+','=','~','<','>','O','0','X',';',':','?','"','I','A','V','T','W','M'])
  const [CharSelected, setCharSelected] = useState([])
  const [Size, setSize] = useState({w:'',h:''})


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
  const Apply = () =>{
    
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
        <input onChange={(e)=>setSize({...Size,w:e.target.value})} value={Size.w}/>
        <input onChange={(e)=>setSize({...Size,h:e.target.value})} value={Size.h}/>
      </div>
      <button >ثبت</button>
    </div>
  );
}

export default App;
