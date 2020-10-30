import BlogLayout from 'src/layouts/BlogLayout'
import { Form, Label, TextField, TextAreaField, Submit } from '@redwoodjs/forms'

const ContactPage = () => {
  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <BlogLayout>
      <Form onSubmit={onSubmit}>
        <Label name="name" />
        <TextField name="name" />

        <Label name="email" />
        <TextField name="email" />

        <Label name="message" />
        <TextAreaField name="message" />

        <Submit>Save</Submit>
      </Form>
    </BlogLayout>
  )
}

export default ContactPage