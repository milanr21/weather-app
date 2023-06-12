import React from 'react';

const Invalid = () => {
  return (
    <div>
      <div className='weather'>
        <div className='search'>
          <input
            type='text'
            placeholder='Enter City Name'
            onChange={(e) => setName(e.target.value)}
            onKeyDown={handleKeyPress}
          />
          <button>
            {' '}
            <img src='search.jpg' onClick={handleClick} alt='' />
          </button>
        </div>
        <div className='error'>
          <p>{error}</p>
        </div>
        <div className='winfo'>
          <img src='clouds.png' alt='' />
          <h1>{Math.round(data.celcius)}°C</h1>
          <h2>{data.name}</h2>
          <div className='details'>
            <div className='col'>
              <img src='humi.png' alt='' />
              <div className='humidity'>
                <p>{Math.round(data.humidity)}%</p>
                <p>Humidity</p>
              </div>
            </div>
            <div className='col'>
              <img src={windImg} alt='' />
              <div className='wind'>
                <p>{data.speed}km/h</p>
                <p>Wind</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Invalid;
