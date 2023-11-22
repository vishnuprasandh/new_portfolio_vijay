import React from 'react'
import styled from 'styled-components'
import { useState, useRef} from 'react';
import { Snackbar } from '@mui/material';
import axios from 'axios';
// import dotenv from 'dotenv';
// dotenv.config();

const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
position: relative;
z-index: 1;
align-items: center;
@media (max-width: 960px) {
    padding: 0px;
}
`

const Wrapper = styled.div`
position: relative;
display: flex;
justify-content: space-between;
align-items: center;
flex-direction: column;
width: 100%;
max-width: 1350px;
padding: 0px 0px 80px 0px;
gap: 12px;
@media (max-width: 960px) {
    flex-direction: column;
}
`

const Title = styled.div`
font-size: 42px;
text-align: center;
font-weight: 600;
margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
      margin-top: 12px;
      font-size: 32px;
  }
`;
const errorStyle = {
  color: 'red',
};
const Desc = styled.div`
    font-size: 18px;
    text-align: center;
    max-width: 600px;
    color: ${({ theme }) => theme.text_secondary};
    @media (max-width: 768px) {
        margin-top: 12px;
        font-size: 16px;
    }
`;


const ContactForm = styled.form`
  width: 95%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.card};
  padding: 32px;
  border-radius: 16px;
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  margin-top: 28px;
  gap: 12px;
`

const ContactTitle = styled.div`
  font-size: 24px;
  margin-bottom: 6px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
`

const ContactInput = styled.input`
  flex: 1;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.text_secondary};
  outline: none;
  font-size: 18px;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 12px;
  padding: 12px 16px;
  &:focus {
    border: 1px solid ${({ theme }) => theme.primary};
  }
`

const ContactInputMessage = styled.textarea`
  flex: 1;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.text_secondary};
  outline: none;
  font-size: 18px;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 12px;
  padding: 12px 16px;
  &:focus {
    border: 1px solid ${({ theme }) => theme.primary};
  }
`

const ContactButton = styled.input`
  width: 100%;
  text-decoration: none;
  text-align: center;
  background: hsla(271, 100%, 50%, 1);
  background: linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
  background: -moz-linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
  background: -webkit-linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
  padding: 13px 16px;
  margin-top: 2px;
  border-radius: 12px;
  border: none;
  color: ${({ theme }) => theme.text_primary};
  font-size: 18px;
  font-weight: 600;
`

const Workshop = () => {
  const [formData, setFormData] = useState({
    Name: '',
    Email: '',
    Phonenumber: '',
    // Subject: '',
    Message: '',
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Manual validation logic
    const newErrors = {};
    if (!formData.Name) {
      newErrors.Name = 'Please enter a name';
    } else if (formData.Name.length < 3) {
      newErrors.Name = 'Name must be at least 10 characters';
    } else if (formData.Name.length > 15) {
      newErrors.Name = 'Length should be less than 15';
    }
    
    if (!formData.Email || !formData.Email.match(/^\S+@\S+\.\S+$/)) {
      newErrors.Email = 'Invalid email';
    }
    if (!formData.Phonenumber) {
      newErrors.Phonenumber = 'Please enter a phone number';
    } else if (!formData.Phonenumber.match(/^\d+$/)) {
      newErrors.Phonenumber = 'Phone number must contain only numbers';
    } else if (formData.Phonenumber.length !== 10) {
      newErrors.Phonenumber = 'Phone number must be exactly 10 digits long';
    }
    // if (formData.Subject.length > 30) {
    //   newErrors.Subject = 'Subject must be 30 characters or less';
    // }
    if (formData.Message.length > 50) {
      newErrors.Message = 'Message must be 50 characters or less';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      try {
        setLoading(true);
        const response = await axios.post('your_api_endpoint', formData);
        // Handle the response as needed
      } catch (error) {
        console.error('Error:', error);
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    
  <Container id="webinar">
    <Wrapper>
      <Title>Webinar</Title>
      <Desc>Join our Full Stack Development Webinar and become a proficient full-stack developer</Desc>
      <ContactForm onSubmit={handleSubmit}>
        <ContactTitle>This Enquiry might change your career 👍</ContactTitle>
        <ContactInput
          type="text"
          name="Name"
          placeholder="Your Name"
          value={formData.Name}
          onChange={handleChange}
        />
        <div style={errorStyle}>{errors.Name}</div>

        <ContactInput
          type="text"
          name="Email"
          placeholder="Your Email"
          value={formData.Email}
          onChange={handleChange}
        />
        <div style={errorStyle}>{errors.Email}</div>

        <ContactInput
          type="text"
          name="Phonenumber"
          placeholder="Phone No"
          value={formData.Phonenumber}
          onChange={handleChange}
        />
        <div style={errorStyle}>{errors.Phonenumber}</div>

        {/* <ContactInputMessage
          name="Subject"
          placeholder="Subject"
          rows={4}
          value={formData.Subject}
          onChange={handleChange}
        />
        <div style={errorStyle}>{errors.Subject}</div> */}

        <ContactInputMessage
          name="Message"
          placeholder="Your Message"
          rows={4}
          value={formData.Message}
          onChange={handleChange}
        />
        <div style={errorStyle}>{errors.Message}</div>

        <ContactButton
          disabled={isLoading}
          type="submit"
          value={isLoading ? 'Sending...' : 'Create'}
        />
      </ContactForm>
    </Wrapper>
  </Container>
);
};

export default Workshop;