// components/GoogleMapComponent.tsx
import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '300px',
};

const center = {
  lat: 37.7749, // example: San Francisco
  lng: -122.4194,
};

const GoogleMapComponent: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto rounded-xl overflow-hidden p-5">
      <iframe
        className='w-full h-[450px] rounded-2xl'
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d58065.98201319191!2d90.894772!3d24.550381!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3756ea96b2b3cd63%3A0xbb4908d8fb9e22b9!2sHazi%20Golam%20Hossain%20Girl&#39;s%20High%20School!5e0!3m2!1sen!2sus!4v1755512553588!5m2!1sen!2sus"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default GoogleMapComponent;
