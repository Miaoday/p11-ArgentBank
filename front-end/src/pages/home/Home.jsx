import React from 'react';
import Feature from '../../components/feature/Feature';
import data from '../../data/feature_data.json';
import './home.css';

function Home () {
  return(
    <div>
      <main>
        <div className='hero'>
          <section className='hero-content'>
            <h2 className='sr-only'>Promoted Content</h2>
            <p className='subtitle'>No fees.</p>
            <p className='subtitle'>No minimum deposit.</p>
            <p className='subtitle'>High interest rates.</p>
            <p className='text'>Open a savings account with Argent Bank today!</p>
          </section>
        </div>
        <article>
          <section className='features'>
            <h2 className='sr-only'>Features</h2>        
              {data.map((data)=>(
                <Feature 
                key={data.id}
                image={require(`../../${data.image}`)}
                alt={data.alt}
                title={data.title}
                description={data.description}
                />
              ))
              }        
          </section>
        </article>
      </main>
    </div>
  );
}
export default Home;