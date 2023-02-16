import React ,{useEffect, useState} from 'react'

function AccordianList() {

    const[AccordianValidator,setAccordianValidator] = useState(false)
    const [Text,setText] = useState()

    useEffect(()=>{
    
         fetch('http//:5000/user/getdata')
         .then(res =>{

               setText(res.data)
         })

    },[AccordianValidator])


  return (
    <div className='inner-accordian-con'>
    <h1 onClick={()=> setAccordianValidator(!AccordianValidator)} className='h1-text'> Accordion </h1>
    {Text}

    {
        AccordianValidator &&  
          <div>
        <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex doloribus dolor odit quia asperiores, expedita nostrum necessitatibus itaque reprehenderit molestias nulla harum. Possimus aspernatur natus corrupti. Deleniti ea nesciunt consequuntur.
        </p>
     </div>
    }


   </div>
  )
}

export default AccordianList