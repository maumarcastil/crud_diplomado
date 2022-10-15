import React from 'react'
import styles from './FormRegister.module.css'
import { Form, Input, Checkbox, Button } from 'antd'

const FormRegister = () => {
  const onFinish = (values: any) => {
    console.log('Success:', values)
  }

  return (
    <>
      <div className={styles.container}>
        <div className={styles.title}>
          <h1>Crud</h1>
        </div>
        <div>
          <Form
            layout="vertical"
            name="normal_login"
            className="login-form"
            initialValues={{ remember: true }}
            onFinish={onFinish}
          >
            <Form.Item
              name="name"
              label="Nombre"
              rules={[
                { required: true, message: 'Por favor ingresa tu nombre!' },
              ]}
            >
              <Input placeholder="Ingresa tu nombre" />
            </Form.Item>

            <Form.Item
              name="lastName"
              label="Apellidos"
              rules={[
                { required: true, message: 'Por favor ingresa tus apellidos!' },
              ]}
            >
              <Input type="text" placeholder="Ingresa tus apellidos" />
            </Form.Item>

            <Form.Item
              name="tel"
              label="Teléfono"
              rules={[
                {
                  required: true,
                  message: 'Por favor ingresa tu teléfono!',
                },
              ]}
            >
              <Input
                type="number"
                placeholder="Ingresa tu teléfono"
              />
            </Form.Item>

            <Form.Item
              name="age"
              label="Edad"
              rules={[
                { required: true, message: 'Por favor ingresa tu edad!' },
              ]}
            >
              <Input type="number" placeholder="Ingresa tu edad" />
            </Form.Item>

            <Form.Item
              name="email"
              label="Correo"
              rules={[
                {
                  required: true,
                  message: 'Por favor ingresa tu correo!',
                  type: 'email',
                },
              ]}
            >
              <Input type="text" placeholder="Ingresa tu correo" />
            </Form.Item>

            <Form.Item
              style={{
                margin: '1.5rem 0',
              }}
            >
              <Button type="primary" htmlType="submit" className={styles.btn}>
                Enviar datos
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </>
  )
}

export default FormRegister
