import { useState } from 'preact/hooks'
import './Events.css'

const ImgObj=[
    {imgUrl:'https://source.unsplash.com/random/400x400',imgWidth:400,imgHeight:400},
    {imgUrl:'https://source.unsplash.com/random/401x401',imgWidth:401,imgHeight:401},
    {imgUrl:'https://source.unsplash.com/random/402x402',imgWidth:402,imgHeight:402},
]

const Events=() =>{
  const [ImgInfo, setImgInfo] = useState(ImgObj);
  const [num, setNum] = useState(0);
  const [txtName, setTxtName] = useState('');  
  const [name, setName] = useState("");

  const onMouseOverHandler =(e)=>{
    e.preventDefault();
    console.log('onMouseOver called');
  }

  const onDoubleClickHandler = (e) => {
    e.preventDefault();
    setNum(num + 2);
    console.log('onDoubleClickHandler called',num);
    alert('You have Clicked Twice!');
  }

  const onClickHandler = (e) => {
    e.preventDefault();
    setNum(num + 1);
    console.log('onClickHandler called',num);
  }

  const onFocusHandler = (e) => {
    e.preventDefault();
    let value=e.currentTarget.value;
    console.log('onFocusHandler called',value);
  }

  const onChangeHandler = (e) => {
    e.preventDefault();
    let value=e.currentTarget.value;
    setTxtName(value);
    console.log('onChangeHandler called',value);
  }
  
  const onBlurHandler = (e) => {
    e.preventDefault();
    let value=e.currentTarget.value;
    console.log('onBlurHandler called',value);
  }

  const onCopyHandler = (e) => {
    e.preventDefault();
    console.log('onCopyHandler called');
  }

  const onCutHandler = (e) => {
    e.preventDefault();
    console.log('onCutHandler called');
  }

  const onPasteHandler = (e) => {
    e.preventDefault();
    console.log('onPasteHandler called');
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`The name you entered was: ${name}`)
  }

  return (
    <>
    <hr />
    <h2>Hover Image to Zoom!</h2>
    {
      ImgInfo && ImgInfo.length && ImgInfo.map(i=>      
        <div className="img-wrapper">
            <img className="inner-img" src={i.imgUrl} width={i.imgWidth} height={i.imgHeight} 
                 onMouseOver={onMouseOverHandler} />
        </div>
        )
    }
    
    <hr />
    <h2>Start clicking to see some magic happen!</h2>
    <button onClick={onClickHandler} onDoubleClick={onDoubleClickHandler}>Click double</button>
    
    <hr />
    <h2>Start editing to see some magic happen!</h2>
    <input type="text" onChange={onChangeHandler} value={txtName}
           onFocus={onFocusHandler} onBlur={onBlurHandler} />

    <hr />
    <h2>Start cut, copy and paste any text to see some magic happen!</h2>
    <p onCopy={onCopyHandler} onCut={onCutHandler} onPaste={onPasteHandler}>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed feugiat ornare metus, ac malesuada ante vehicula a.
    Ut vitae porta nunc. Etiam id metus non leo tempus ultrices. Proin eget metus quam. Etiam sagittis ipsum sapien,
    in aliquam felis vehicula porttitor. Pellentesque libero velit, aliquam finibus mollis vel, venenatis id lorem.
    Nam quis turpis in turpis vulputate consequat at mattis nisi. Donec feugiat sem a turpis blandit dignissim vitae
    quis libero. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla maximus
    tempor felis sit amet commodo. Etiam efficitur ligula tortor, vel ultricies ligula congue non. Proin bibendum
    consequat quam eget suscipit. Phasellus fringilla consequat massa quis sodales. Nulla augue odio, vestibulum non
    aliquet sed, rutrum id justo.
    </p>

    <hr />
    <h2>Start entering text to see some magic happen!</h2>
    <form onSubmit={handleSubmit}>
      <label>Enter your name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <input type="submit" />
    </form>

    </>
  )
}

export default Events 