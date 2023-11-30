import gql from 'graphql-tag';

export const getEmployee = gql`
  query {
    Employee {
      id,
      name,
      surname,
      title,
      gender,
      image,
      email,
      votes,
      address {
        street,
        city,
        country
      }
    }
  }
`