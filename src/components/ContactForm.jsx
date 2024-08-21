import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Name is required'),
      email: Yup.string().email('Invalid email address').required('Email is required'),
      subject: Yup.string().required('Subject is required'),
      message: Yup.string().required('Message is required'),
    }),
    onSubmit: (values, { resetForm }) => {
      setIsSubmitting(true);
      emailjs.send(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        values,
        {
          publicKey: `${process.env.REACT_APP_PUBLIC_KEY}`,
        }
      )
      .then((response) => {
        toast.success('Success, I\'ll try to respond ASAP, One Love ');
        resetForm();
      })
      .catch((err) => {
        toast.error('Failed to send email. Please try again or reach out on social media');
      })
      .finally(() => {
        setIsSubmitting(false);
      });
    },
  });

  return (
    <Box>
      <form onSubmit={formik.handleSubmit}>
        <label className="block text-[#C7C7C7] text-base weight font-medium mb-2 font-[Manrope]">
          Name
        </label>
        <TextField
          fullWidth
          size="medium"
          variant="outlined"
          name="name"
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
          InputProps={{
            style: {
              backgroundColor: "#1c1c1e",
              color: "#fff",
            },
          }}
          sx={{ marginBottom: "24px" }}
        />

        <label className="block text-[#C7C7C7] text-base weight font-medium mb-2 font-[Manrope]">
          Email
        </label>
        <TextField
          fullWidth
          size="medium"
          variant="outlined"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
          InputProps={{
            style: {
              backgroundColor: "#1c1c1e",
              color: "#fff",
            },
          }}
          sx={{ marginBottom: "24px" }}
        />

        <label className="block text-[#C7C7C7] text-base weight font-medium mb-2 font-[Manrope]">
          Subject
        </label>
        <TextField
        placeholder='Hi!'
          fullWidth
          size="medium"
          variant="outlined"
          name="subject"
          value={formik.values.subject}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.subject && Boolean(formik.errors.subject)}
          helperText={formik.touched.subject && formik.errors.subject}
          InputProps={{
            style: {
              backgroundColor: "#1c1c1e",
              color: "#fff",
            },
          }}
          sx={{ marginBottom: "24px" }}
        />

        <label className="block text-[#C7C7C7] text-base weight font-medium mb-2 font-[Manrope]">
          Message
        </label>
        <TextField
          fullWidth
          size="medium"
          variant="outlined"
          multiline
          rows={4}
          name="message"
          value={formik.values.message}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.message && Boolean(formik.errors.message)}
          helperText={formik.touched.message && formik.errors.message}
          InputProps={{
            style: {
              backgroundColor: "#1c1c1e",
              color: "#fff",
            },
          }}
          sx={{ marginBottom: "24px" }}
        />

        <Button
          variant="contained"
          type="submit"
          disabled={isSubmitting}
          sx={{
            borderRadius: 28,
            fontWeight: "700",
            paddingLeft: "32px",
            paddingRight: "32px",
            paddingTop: "8px",
            paddingBottom: "8px",
          }}
        >
          {isSubmitting ? 'Sending...' : 'Submit'}
        </Button>
      </form>
      <ToastContainer theme="dark"  />
    </Box>
  );
};

export default ContactForm;
