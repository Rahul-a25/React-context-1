
import { useContext, useState } from "react"
import "./App.css"
import {Pass} from"./App.js"

const Lower = ({change,Setchange,btnchange,Setbtnchange,content,Setcontent,colors,Setcolors}) => {
  const name=useContext(Pass) ;
  const [dynamic,Setdynamic]=useState(name)
  const themechange=()=>{
    if(change.color==='black'){
    Setchange({
        color:'white',
        backgroundColor:'black'
        
    })
    // ${name}
    Setbtnchange("light");
    Setcontent(`I have changed theme to ${btnchange} `);
    Setcolors(
    {
      color:'#32ff7e'
    }
    )
    name("dark")
    Setdynamic("light")
    }
    else{
        Setchange({
            color:"black",
            backgroundColor:"white"
        })
        Setbtnchange("Dark")
        Setcolors(
          {
            color:'black'
          }
          )
          Setdynamic("rahul")
    }
} 

  return (
    
    <>
    <p>{content}  </p>
    <div style={change} className='lower'>
      <p style={colors} >Geekster</p>
      <div className="change">
      <a href="#">Home</a>
      <a href="#">Contact</a>
      <a href="#">Service</a>
      <button onClick={themechange}>Toggle Theme to  {btnchange}</button>
      <p style={colors}  > Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis eius praesentium perferendis in aliquam aliquid, voluptatem, porro harum, aut corporis eveniet ratione! Ad beatae qui dolorum, ipsum optio inventore rerum voluptatibus velit corrupti maiores, harum asperiores, pariatur blanditiis maxime quisquam! Non ab accusantium est, quibusdam beatae voluptas quasi consequatur odit obcaecati! Corrupti itaque possimus odio ullam ipsam nisi optio fugiat voluptatem maxime ad, exercitationem tenetur reiciendis quisquam dolores beatae quasi doloremque. Repellat consequuntur a non, id provident aliquid veniam aut voluptas odio et harum nihil nemo sapiente alias omnis natus rem nam, ad modi accusantium placeat corporis nobis exercitationem! Pariatur, nesciunt. Consequatur aspernatur non, quia dolor aliquam eius dolores! A, quod hic? Cupiditate quaerat rerum dolore! Officia quia a dolor pariatur aliquam quod? Sapiente est fugiat maxime deserunt eos rerum sit, cumque voluptate delectus neque quos rem. Nobis ipsa natus in deserunt nisi enim, earum optio quae officia iste vel nihil eos voluptatum voluptate possimus at pariatur corrupti sunt et quam ut quidem! Nisi ab illo minima dolorum soluta quos sapiente sed debitis amet! Sunt officia harum quo hic esse maiores voluptatibus sed, aliquam exercitationem tenetur nemo deserunt quisquam, perspiciatis illo asperiores culpa qui repellat vitae porro sit dignissimos inventore.</p>
    </div>
    </div>
    </>
  )
}

export default Lower
