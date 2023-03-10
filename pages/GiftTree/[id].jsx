import React, { useState,useEffect, useRef } from 'react'
import Link from 'next/link'
import axios from 'axios';
import { useContext } from 'react';
import { TeamC } from '../src/Context';
import styles from "./test.module.css";
import ProductList from '../src/component/productList';
import NavBar from '../src/component/NavBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { useRouter } from 'next/router';

const GiftTree = () => {
  
  const {userLogin,setUserLogin} = useContext(TeamC)
  const router = useRouter();
  if(userLogin === false){
    router?.push("/")
  }

  
  const [visible,setVisible] = useState(false);

  const [friendList, setFriendList] = useState();
  const searchInput = useRef(null)

    async function dataGet() {        
        axios.get('/api/friends',{params:{userLogin:router.query.id}})
        .then(
          res=>setFriendList(res.data))        
    }

    useEffect(() => {
        dataGet();        
    }, [])

  return (
    <div style={{display:"flex",flexDirection:"column",position:"relative"}}>
      <div style={{position:"fixed",top:"48%",left:"50%",transform:"translate(-50%,-50%)",zIndex:0,background:"rgba(255,255,255,0.6)",width:"550px",height:"90vh",borderRadius:"24px",boxShadow:"0 2px 2px"}}>
      <div style={{maxWidth:"600px",minWidth:"300px", height:"auto"}}>
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
          <ul style={{display:"flex",margin: "0 0 0 20px", padding:"2% 0", listStyle:"none"}}>
                {friendList?.map((obj,idx)=>{
                return <li onClick={()=>{

                }} key={idx} style={{width:80,margin:"2px 8px 0"}}><Link href={`/GiftTree/${obj.UserID}`}><figure><img style={{width:80,borderRadius:"50%",border:`5px solid rgba(${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)},0.8)`}}  src={`/img/Profile${(Math.floor(Math.random()*5)+1)}.jpg`}/><figcaption style={{textAlign:"center"}}><strong style={{fontSize:"1.2rem"}}>{obj.NickName}</strong></figcaption></figure></Link></li>
                })}
            </ul>
            
            {/* <button onClick={()=>{setUserLogin(false)}}>??????????????????(??????)</button> */}
            <div style={{margin: 0, position:"relative"}}>
              <form onSubmit={(e)=>{
                e.preventDefault()
                console.log(searchInput.current.value)
                axios.get('/api').then((res)=>{
                  let newValue = res.data.filter(obj => obj.NickName == searchInput.current.value)
                  console.log(newValue[0]?.NickName,'????????????')
                  alert(newValue[0]?.NickName + "?????? ?????????????????????.")
                })
                }} style={{margin: "0 20px 0 0", position:"absolute",right:0,top: "-30px",display:"flex",justifyContent:"center",alignItems:"center"}}>
                  <input ref={searchInput} style={{width:10}} placeholder='?????? ??????'/>
                  <button onClick={()=>{console.log(searchInput.current.style={transform:"scale:1"})}} style={{width:30,height:30, border: "none", backgroundColor: "transparent"}} type="submit"><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
              </form>
            </div>
          </div>
        <hr/>
        </div>
      <ProductList visible={visible} setVisible={setVisible} />  
      </div>
      
      <NavBar />  

    </div>
  )
}

export default GiftTree






