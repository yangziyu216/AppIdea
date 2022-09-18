import './App.css';
import Input from './Input';
import Display from './Display';
import { useEffect, useState } from 'react';

function App() {
  const [inputBin,setInputBin]=useState({
    value:'',
    binary:false
  });
  const [displayNum,setDisplayNum]=useState();
  useEffect(()=>{
    if(inputBin.value.length>0 && inputBin.binary){
      setDisplayNum(convertToDec(inputBin.value));
    }else if(inputBin.value.length===0){
      setDisplayNum('');
    }
  }
  ,[inputBin]);
  const regExpNotBin = /[^01]/;
  const convertToDec=(num)=>{
    let res=0;
    num.split('').reverse().map((item,index)=>{
      return item === '1'&& (res+=Math.pow(2,index));
    })
    return res;
  }
  const handleBinaryInput =(e)=>{
    const {value}=e.target;
    setInputBin({
      value,
      binary:!regExpNotBin.test(value)
    })
  }
  const Alert =()=>{
    if(inputBin.value.length>0){
      if(!inputBin.binary){
        return (
          <p style={{color:"red",fontWeight:"500"}}>Please enter a binary(0 or 1)</p>
        )
      }else if(inputBin.binary){
        return (<p>Here is your decimal</p>)
      }else{
        return '';
      }
    }
    return null;
  }
  return (
    <div>
      <p>Enter a{' '} 
        <a href="https://baike.baidu.com/item/%E4%BA%8C%E8%BF%9B%E5%88%B6?fromModule=lemma_search-box"           
        target="_blank"
        rel="noopener noreferrer">Binary</a>
        into a {' '}
        <a href='https://baike.baidu.com/item/%E5%8D%81%E8%BF%9B%E5%88%B6?fromModule=lemma_search-box'
        target="_blank"
        rel="noopener noreferrer">decimal</a>
      </p>
      <Alert/>
      <br/>
      <Input inputBin={inputBin}  handleBinaryInput={handleBinaryInput}></Input>
      <Display inputBin={inputBin} displayNum={displayNum}></Display>
    </div>
  );
}

export default App;
 