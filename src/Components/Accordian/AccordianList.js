import React, {
  useEffect,
  useState
} from 'react'

function AccordianList() {

  const [AccordianValidator, setAccordianValidator] = useState(false)
  const [Text, setText] = useState()

  useEffect(() => {

    fetch('http//:5000/user/getdata')
      .then(res => {

        setText(res.data)
      })

  }, [AccordianValidator])


  return ( <
    div className = 'inner-accordian-con' >
    <
    h1 onClick = {
      () => setAccordianValidator(!AccordianValidator)
    }
    className = 'h1-text' > What 's up? </h1> {
      Text
    }

    {
      AccordianValidator &&
        <div>
        <p> I'm a self-taught passionate FrontEnd developer from Nigeria, Graduated as a Computer Science student (Bsc.) from International University of Africa, Sudan.</p>
        </div>
    }


    </div>
  )
}

/**function AccordianList1() {

  const [AccordianValidator, setAccordianValidator] = useState(false)
  const [Text, setText] = useState()

  useEffect(() => {

    fetch('http//:5000/user/getdata')
      .then(res => {

        setText(res.data)
      })

  }, [AccordianValidator])


  return ( <
    div className = 'inner-accordian-con' >
    <
    h1 onClick = {
      () => setAccordianValidator(!AccordianValidator)
    }
    className = 'h1-text' > What 'kkks up? </h1> {
      Text
    }

    {
      AccordianValidator &&
        <div>
        <p> I'm a self-taught passionate FrontEnd developer from Nigeria, Graduated as a Computer Sciencghhyhe student (Bsc.) from International University of Africa, Sudan.</p>
        </div>
    }


    </div>
  )
}
**/
export default AccordianList 
