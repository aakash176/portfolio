import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'
const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have?</h5>
      <h2>Skills</h2>
      <div className='container experience__container'>
        <div className="experience__frontend">
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icons'/>
              <div>
                <h4>PYTHON</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icons'/>
              <div>
                <h4>MACHINE LEARNING ALGORITHMS</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icons'/>
              <div>
                <h4>OBJECT DETECTION</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icons'/>
              <div>
                <h4>Tensorflow, Keras, scikit-learn</h4>
                <small className='text-light'>Basic</small>

              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icons'/>
              <div>
                <h4>Decision trees, SVM, random forest, neural networks</h4>
                <small className='text-light'>Basic</small>

              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icons'/>
              <div>
                <h4>Deep Learning (neural network)</h4>
                <small className='text-light'>Intermediate</small>

              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icons'/>
              <div>
                <h4>Ensemble techniques
</h4>
                <small className='text-light'>Intermediate</small>

              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icons'/>
              <div>
                <h4>Computer Vision (image recognition/transfer learning) </h4>
                <small className='text-light'>Intermediate</small>

              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icons'/>
              <div>
                <h4>JavaScript</h4>
                <small className='text-light'>Intermediate</small>

              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icons'/>
              <div>
                <h4>text preprocessing(NLTK/Gensim)</h4>
                <small className='text-light'>Basic</small>

              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icons'/>
              <div>
                <h4>Excellent communication
</h4>
                <small className='text-light'>Basic</small>

              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icons'/>
              <div>
                <h4>Git</h4>
                <small className='text-light'>Basic</small>

              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icons'/>
              <div>
                <h4>LSTM/GRU/Transformer/Bert</h4>
                <small className='text-light'>Basic</small>

              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icons'/>
              <div>
                <h4>Supervised learning
</h4>
                <small className='text-light'>Basic</small>

              </div>
            </article>
          </div>
        </div>

        {/* <div className="experience__backend">
          <div className="experience__content">
            
            
          </div>
        </div> */}
      </div>
    </section>
  )
}

export default Experience