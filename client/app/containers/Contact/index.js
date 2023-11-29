// /*
//  *
//  * Contact
//  *
//  */

// import React from 'react';

// import { connect } from 'react-redux';
// import { Row, Col } from 'reactstrap';

// import actions from '../../actions';

// import Input from '../../components/Common/Input';
// import Button from '../../components/Common/Button';

// class Contact extends React.PureComponent {
//   render() {
//     const { contactFormData, contactFormChange, contactUs, formErrors } =
//       this.props;

//     const handleSubmit = event => {
//       event.preventDefault();
//       contactUs();
//     };

//     return (
//       <div className='contact'>
//         <h3 className='text-uppercase'>Contact Information</h3>
//         <hr />
//         <form onSubmit={handleSubmit}>
//           <Row>
//             <Col xs='12' md='6'>
//               <Input
//                 type={'text'}
//                 error={formErrors['name']}
//                 label={'Name'}
//                 name={'name'}
//                 placeholder={'You Full Name'}
//                 value={contactFormData.name}
//                 onInputChange={(name, value) => {
//                   contactFormChange(name, value);
//                 }}
//               />
//             </Col>
//             <Col xs='12' md='6'>
//               <Input
//                 type={'text'}
//                 error={formErrors['email']}
//                 label={'Email'}
//                 name={'email'}
//                 placeholder={'Your Email Address'}
//                 value={contactFormData.email}
//                 onInputChange={(name, value) => {
//                   contactFormChange(name, value);
//                 }}
//               />
//             </Col>
//             <Col xs='12' md='12'>
//               <Input
//                 type={'textarea'}
//                 error={formErrors['message']}
//                 label={'Message'}
//                 name={'message'}
//                 placeholder={'Please Describe Your Message'}
//                 value={contactFormData.message}
//                 onInputChange={(name, value) => {
//                   contactFormChange(name, value);
//                 }}
//               />
//             </Col>
//           </Row>
//           <hr />
//           <div className='contact-actions'>
//             <Button type='submit' text='Submit' />
//           </div>
//         </form>
//       </div>
//     );
//   }
// }

// const mapStateToProps = state => {
//   return {
//     contactFormData: state.contact.contactFormData,
//     formErrors: state.contact.formErrors
//   };
// };

// export default connect(mapStateToProps, actions)(Contact);

import React from 'react';

const ContactUsPage = () => {
  return (
    <div className="contact-us-page">
      <h1>Contact Us</h1>

      {/* <div className="contact-info">
        <h2>SSX Exports</h2>
        <p>Company Name: SSX Exports</p>
        <p>Contact Number: +91 78301 12907</p>
        <p>Business Address: C-177, 1st Floor, Fateh Nagar, New Delhi, Delhi 110018</p>
        <p>Website: [Your Website URL]</p>
      </div> */}

      <div className="contact-info">
        <h2>SSX Technology</h2>
        <p>Company Name: SSX Technology</p>
        <p>Contact Number: +91 78301 12907</p>
        <p>Business Address: C-177, 1st Floor, Fateh Nagar, New Delhi, Delhi 110018</p>
        <p>Website: [Your Website URL]</p>
      </div>
    </div>
  );
};

export default ContactUsPage;

