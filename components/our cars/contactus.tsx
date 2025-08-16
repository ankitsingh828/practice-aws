import React from 'react';

const ContactUs: React.FC = () => {
  return (
    <section className="bg-gray-100 py-8">
      <div className="container mx-auto px-4 font-roboto">
        <h2 className="text-3xl font-semibold text-center mb-8" style={{ color: '#4BC5CF' }}>
          Contact Us
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4" style={{ color: '#F4373D' }}>
              Phone
            </h3>
            <p>(913) 756-3126</p>
            <p>(921) 557-1203</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4" style={{ color: '#F4373D' }}>
              Email
            </h3>
            <p>petopia@example.com</p>
            <p>petopia@email.com</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4" style={{ color: '#F4373D' }}>
              Address
            </h3>
            <p>17 Parkman Place, 2122, United States</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4" style={{ color: '#F4373D' }}>
              Open Hours
            </h3>
            <p>Monday to Friday: 7 am - 6 pm</p>
            <p>Saturday: 9 am - 4 pm</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;

