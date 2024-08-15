import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
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
      // EmailJS configuration
      emailjs.send(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        values,
        'YOUR_USER_ID'
      )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        resetForm(); // Reset the form after successful submission
      })
      .catch((err) => {
        console.log('FAILED...', err);
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
          sx={{
            borderRadius: 28,
            fontWeight: "700",
            paddingLeft: "32px",
            paddingRight: "32px",
            paddingTop: "8px",
            paddingBottom: "8px",
          }}
        >
          Submit
        </Button>
      </form>
    </Box>
  );
};

export default ContactForm;
