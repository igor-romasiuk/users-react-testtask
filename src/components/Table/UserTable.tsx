import React, { useEffect, useState } from 'react';
import { Button, Table } from 'antd';
import './UserTable.module.css';

interface RawUser {
  key: string;
  name: string;
  status: {
    name: string;
    value: string;
  };
  department: {
    name: string;
    value: string;
  };
  country: {
    name: string;
    value: string;
  };
}

interface User {
  key: string;
  name: string;
  status: string;
  department: string;
  country: string;
}

const UserTable: React.FC = () => {
  const [data, setData] = useState<User[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const users: RawUser[] = await fetch('/data/users.json').then(res => res.json())

      const formattedUsers = users.map((user, index) => ({
        key: index.toString(),
        name: user.name,
        status: user.status.name,
        department: user.department.name,
        country: user.country.name,
      }));

      setData(formattedUsers);
    }

    fetchData()
  }, []);

  const handleDelete = (key: string) => {
    const updatedData = data.filter(user => user.key !== key);
    setData(updatedData);
  };

  const columns = [
    {
      title: 'Full Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Department',
      dataIndex: 'department',
      key: 'department',
    },
    {
      title: 'Country',
      dataIndex: 'country',
      key: 'country',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
    },
    {
      title: 'Action',
      key: 'action',
      render: (_: any, record: User) => (
 
        <Button icon={
          <img src="/img/deleteIcon.svg"/>
        } 
        style={{
          border: 'none'
        }}
        onClick={() => handleDelete(record.key)}
        />
      ),
    },
  ];

  return (
    <Table dataSource={data} columns={columns} pagination={{ pageSize: 5 }} />
  );
};

export default UserTable;
