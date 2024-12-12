import React from 'react';
import { MapPin, Clock, Phone } from 'lucide-react';

const Map = () => {
  return (
    <section id="location" className="py-16 bg-amber-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-amber-800">Our Location</h2>
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-amber-700">Gourmet Haven</h3>
              <div className="space-y-2">
                <p className="flex items-center text-gray-600">
                  <MapPin className="w-5 h-5 mr-2 text-amber-600" />
                  123 Gourmet Street, Foodie City, FC 12345
                </p>
                <p className="flex items-center text-gray-600">
                  <Clock className="w-5 h-5 mr-2 text-amber-600" />
                  Mon-Fri: 11am-10pm | Sat-Sun: 10am-11pm
                </p>
                <p className="flex items-center text-gray-600">
                  <Phone className="w-5 h-5 mr-2 text-amber-600" />
                  (555) 123-4567
                </p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-amber-700">Getting Here</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>2 blocks from Central Station</li>
                <li>Bus routes 10, 15, and 22 stop nearby</li>
                <li>Parking available on Delicious Avenue</li>
              </ul>
            </div>
          </div>
          <div className="relative w-full pb-[53%] rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1841217563117!2d-73.98823668459369!3d40.75899577932696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1623158641489!5m2!1sen!2sus"
              className="absolute top-0 left-0 w-full h-full"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              title="Gourmet Haven Location"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Map;

