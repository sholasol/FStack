import React from 'react'
import heroImg from '../../assets/fin.jpg'

const Hero = () => {
  return (
    <div className='container'>
      <div className="row hero">
        <div className="col-md-6">
          <div className="hero-container">
              <h1 className="mb-4">
                <span className="e-purple">E</span> - Learning <br/>
                Anywhere <br/> In the world
              </h1>
              <p className="mb-4">
                The best place to learn programming with 
              beginner friendly tutorials and examples
              </p>
            </div>
        </div>
         <div className="col-md-6">
          <img src={heroImg} alt="hero" className='w-100'/>
        </div>
      </div>
    </div>
  )
}

export default Hero