import React from 'react';

import API from '../../../api';

const PersonList: React.FC = () => {
  type Person = {
    id: number;
    name: string;
  };

  const [persons, setPerson] = React.useState([]);

  React.useEffect(() => {
    API.get('users/').then((res) => {
      const response = res.data;
      setPerson(response);
    });
  }, []);

  return (
    <ul>
      {persons.map((person: Person) => (
        <li key={person.id}>{person.name}</li>
      ))}
    </ul>
  );
};

export default PersonList;
