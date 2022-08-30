import React from 'react'
import  Carousel  from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/Slider.css"


function Slider({start}) {
  return (
    <div>
        <Carousel fade nextLabel={""} prevLabel={""} indicators={false}>
            {start.map((item)=>(
                <Carousel.Item className='items'>
                <img
                  className="d-block w-100"
                  src={item}
                  alt="First slide"
                />
              </Carousel.Item>
            ))}
        </Carousel>



    </div>
  )
}

export default Slider