import React from 'react'
import NavBar from '../src/component/NavBar'

const MyPage = () => {
    return (
    <div style={{paddingTop:"10%"}}>
        <div style={{width:250,height:250}}><img style={{width:150,height:150,border:"2px solid skyblue",background:"yellowgreen"}} src="wefjiowejiowfej"/>
        유저얼굴</div>
        <ul style={{display:"flex",listStyle:"none",padding:"2%",border:"2px solid red"}}>
            <li style={{width:"35%",height:"40vh",border:"1px solid blue",background:"skyblue", margin:"2%"}}>내가 받은 선물</li>
            <li style={{width:"35%",height:"40vh",border:"1px solid blue",background:"skyblue", margin:"2%"}}>내가 보낸 선물</li>
        </ul>
        
        <NavBar />
    </div>
  )
}

export default MyPage