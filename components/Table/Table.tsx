import React from 'react'
import { Table, Tag, Space } from 'antd'
import type { ColumnsType } from 'antd/es/table'
import styles from './Table.module.css'

interface DataType {
  key: string
  name: string
  age: number
  address: string
  tags: string[]
}

const TableList = ({ users }: any) => {


  const columns: ColumnsType<DataType> = [
    {
      title: 'Nombre',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Apellidos',
      dataIndex: 'lastName',
      key: 'name',
    },
    {
      title: 'Telefono',
      dataIndex: 'tel',
      key: 'age',
    },
    {
      title: 'Edad',
      dataIndex: 'age',
      key: 'address',
    },
    {
      title: 'Correo',
      dataIndex: 'email',
      key: 'address',
    },

    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <a>Delete</a>
        </Space>
      ),
    },
  ]

  return (
    <>
      <div className={styles.container}>
        <Table
          columns={columns}
          dataSource={users}
          style={{
            width: '100%',
          }}
          loading={users.length === 0}
        />
      </div>
    </>
  )
}

export default TableList
