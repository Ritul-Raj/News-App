
import React, { useEffect, useRef, useState } from 'react'
import News from './News';
import './NewsApp.css';
import { Link } from 'react-router-dom';

function NewsApp() {

const [newlist,setnewlist]=useState([]);
const[query,setquery]=useState('fifa');


const api_url=`https://newsapi.org/v2/everything?q=${query}&from=2023-08-21&to=2028-08-03&sortBy=popularity&apiKey=bc2d065ecb01409fa460c222c16a10db`;
//  const api_url=`https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=bc2d065ecb01409fa460c222c16a10db`

const queryinputref=useRef(null);

  useEffect(()=>{ fetchdata(); },[query]) 

  async function fetchdata(){
      try{
            const response =await fetch(api_url);
            const jsondata=await response.json();
            setnewlist(jsondata.articles);
      }
      catch(e){
        alert("Kuch TO GadBad Haii 👀");
      }
  }
  function handlesubmit(event){
    event.preventDefault();
   const queryvalue=queryinputref.current.value;
   setquery(queryvalue);
  }

return (

  <div className='news_app'>
  <h1 className='headingh1'>News📰Daily</h1>
 
  <form style={{textAlign:'center'}} onSubmit={handlesubmit}>

<div style={{display:'flex'}}>
<input style={{position:'sticky',top: '0',fontFamily:'cursive'}} placeholder='e.g. Science' className='query_input' type='text' ref={queryinputref}/>
<input  className='btn_submit' onClick={handlesubmit} type='submit' value='🔍Search'></input>
</div>
  <div style={{fontSize:'1.5rem', color:'red', fontFamily:"sans-serif",fontWeight:'bolder' }}> <marquee behavior="scroll" direction="right">🆕 !! Now get ⭐Latest News⭐ daily On Our News📰Daily App !! 🆕</marquee></div>
<ul onSubmit={handlesubmit} >

  <li  style={{borderRight:'1px solid #bbb',backgroundColor:' #de1b1b'}}><a href='#'>Latest News :</a></li>

 
  <li style={{borderRight:'1px solid #bbb',backgroundColor:'rgb(15, 24, 163)'}} className='navbarnews'  ><Link to="/" className='a'>Home</Link></li>

  <li className='navbarnews '  ><Link to="/india" className='a'>India</Link></li>
  <li className='navbarnews'  ><Link to="/sports" className='a'>Sports</Link></li>
  <li className='navbarnews' ><Link to="/bollywood" className='a'>BollyWood</Link></li>
  <li className='navbarnews'  ><Link to="/politics" className='a'>Politics</Link></li>
  <li className='navbarnews' ><Link to="/bussiness" className='a'>Business</Link></li>
  <li className='navbarnews' ><Link to="/health" className='a'>Health & Fitness</Link></li>

</ul>

<br></br> 
  
  </form>

  <div style={{display:'grid',gridTemplateColumns:'repeat(2,48%)',justifyContent:'space-between',rowGap:'20px'}} >
  {newlist.map(newsdata=>{
      return< News key={newsdata.url} newsdata1={newsdata}></News> 
  
  } ) }</div>
   </div>);
}
  
export default NewsApp;







// import React, { useEffect, useRef, useState } from 'react'
// import News from './News';
// import './NewsApp.css';
// import { Link } from 'react-router-dom';
// // import {useDispatch, useSelector} from "react-redux"
// import { useSelector,useDispatch } from 'react-redux';
// import { fetchdata } from './redux/Newslice';
// // import { fetchdata } from '../../redux/Newslice';

// function NewsApp() { 

//   const[query,setquery]=useState('fifa');

//   const dispatch=useDispatch();

// useEffect(()=>{
//   dispatch(fetchdata());
// },[query])
 

//   const queryinputref=useRef(null);
//   const products=useSelector(state => state.Productreducer.products)
//   const status=useSelector(state => state.Productreducer.status)
  
//    if(status==='Loading'){
//     return (<h1>Loading.............</h1>)
//    }

//    if(status==='Failed'){
//     return (<h1>Uh Oh ! Someting Went Wrong</h1>)
//    } 

// // const[newlist,setnewlist]=useState([]);

// // const api_url=`https://newsapi.org/v2/everything?q=${query}&from=2023-08-15&to=2028-08-03&sortBy=popularity&apiKey=bc2d065ecb01409fa460c222c16a10db`;
// // const api_url=`https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=bc2d065ecb01409fa460c222c16a10db`

//   // useEffect(()=>{ fetchdata(); },[query]) 
//   // async function fetchdata(){
//   //     try{
//   //           const response =await fetch(api_url);
//   //           const jsondata=await response.json() ;
//   //           setnewlist(jsondata.articles);
//   //     }
//   //     catch(e){
//   //       alert("Kuch TO GadBad Haii 👀");
//   //     }
//   // }

//   function handlesubmit(event){
//     event.preventDefault();
//    const queryvalue=queryinputref.current.value;
//    setquery(queryvalue);
//   }

// return (

// <div className='news_app'>
// <h1 className='headingh1'>News📰Daily</h1>
 
// <form style={{textAlign:'center'}} onSubmit={handlesubmit}>

// <div style={{display:'flex'}}>
// <input style={{position:'sticky',top: '0',fontFamily:'cursive'}} placeholder='e.g. Science' className='query_input' type='text' ref={queryinputref}/>
// <input  className='btn_submit' onClick={handlesubmit} type='submit' value='🔍Search'></input>
// </div>

// <div style={{fontSize:'1.5rem', color:'red', fontFamily:"sans-serif",fontWeight:'bolder' }}> <marquee behavior="scroll" direction="right">🆕 !! Now get ⭐Latest News⭐ daily On Our News📰Daily App !! 🆕</marquee></div>
// <ul onSubmit={handlesubmit} >

// <li  style={{borderRight:'1px solid #bbb',backgroundColor:' #de1b1b'}}><a href='#'>Latest News :</a></li>

// <li style={{borderRight:'1px solid #bbb',backgroundColor:'rgb(15, 24, 163)'}} className='navbarnews'  ><Link to="/" className='a'>Home</Link></li>

//   <li className='navbarnews'><Link to="/india" className='a'>India</Link></li>
//   <li className='navbarnews' ><Link to="/sports" className='a'>Sports</Link></li>
//   <li className='navbarnews' ><Link to="/bollywood" className='a'>BollyWood</Link></li>
//   <li className='navbarnews' ><Link to="/politics" className='a'>Politics</Link></li>
//   <li className='navbarnews' ><Link to="/bussiness" className='a'>Business</Link></li>
//   <li className='navbarnews' ><Link to="/health" className='a'>Health & Fitness</Link></li>

// </ul>

// <br></br> 
  
// </form>

//   <div style={{display:'grid',gridTemplateColumns:'repeat(2,48%)',justifyContent:'space-between',rowGap:'20px'}} >
//   {products.map((newsdata)=>{
//       return<News key={newsdata.url} newsdata1={newsdata}></News> 
  
//   } ) }</div>
//    </div>);
// }
  
// export default NewsApp; 