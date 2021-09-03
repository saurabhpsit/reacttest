import logo from './logo.svg';
import './App.css';
 import Box from './box'
 import Queue from './Queue'
 import {useState} from 'react'


 function App() {
  const [boxArr,setboxArr]=useState([{position: 1, label: "B"}, {position: 2, label: "A"}, {position:3, label: "C"}, {position: 4, label: "D"}])
const [posQueue,setposQueue]=useState([])
const [pos1,setpos1]=useState()
const [pos2,setpos2]=useState()

const submit=(e)=>{
// console.log(pos1,pos2)
let pos=[]
pos.push(pos1)
pos.push(pos2)
setposQueue([...posQueue,pos1,pos2])
e.preventDefault()
}
const search=()=>{
  // posQueue.forEach(queue=>{
    
  // })

let temp=[...boxArr]
// console.log(posQueue.length,temp)
// let c=[1,2,3,4,45,5,6,7,87,345,634,53,453,45,345]
// for(let j=0;j<12;j++)
// console.log(c[j])


  for(let i=0;i<posQueue.length;i=i+2)
  {
    // let a=boxArr[i]
    // console.log(a)
    // let b=boxArr[i+1]
    // let c=a
    console.log(posQueue[0],posQueue[1])
    // console.log(temp[posQueue[i]-1],temp[posQueue[i+1]-1]),Number(posQueue[i])-1,temp[posQueue[i]-1]
    let a= temp[posQueue[i]-1]
    temp[posQueue[i]-1]=temp[posQueue[i+1]-1]
    temp[posQueue[i+1]-1]=a
    
    // console.log(temp)
  }
  setposQueue([])
  setboxArr(temp)
  // console.log(boxArr)

}
  return (
   <div>
     <Box boxArr={boxArr}/>
   
     <form>
       <input type="number" value={pos1} onChange={(e)=>setpos1(e.target.value)} />
       <input type="number" value={pos2} onChange={(e)=>setpos2(e.target.value)} />
       <button type="submit" onClick={submit}>Submit</button>
     </form>

     <Queue queue={posQueue}/>
     <button onClick={search}>Submit Queue</button>
   </div>
  );
}

export default App;
