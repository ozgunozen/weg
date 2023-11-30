import gql from 'graphql-tag';

export const getEmployees = gql`
  query {
    Employees {
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