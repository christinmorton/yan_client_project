'use client';

import React, { useEffect, useRef } from 'react';
import { Loader } from '@googlemaps/js-api-loader';

const Map = ({ address }) => {
  const mapRef = useRef(null);

  useEffect(() => {
    const initializeMap = async () => {
      try {
        const loader = new Loader({
          apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
          version: 'weekly',
        });

        await loader.load();

        // Directly use google.maps.Geocoder here instead of useMemo outside of useEffect
        const geocoder = new google.maps.Geocoder();
        geocoder.geocode({ address }, (results, status) => {
          if (status === 'OK') {
            const map = new google.maps.Map(mapRef.current, {
              center: results[0].geometry.location,
              zoom: 10,
            });
            new google.maps.Marker({
              map,
              position: results[0].geometry.location,
            });
          } else {
            console.error(`Geocode was not successful for the following reason: ${status}`);
          }
        });
      } catch (error) {
        console.error('Failed to load the Google Maps API.', error);
      }
    };

    initializeMap();
  }, [address]);

  return <div style={{ height: '400px' }} ref={mapRef} />;
};

export default Map;
