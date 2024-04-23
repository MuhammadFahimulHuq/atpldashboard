const User = [{
    id: 1,
    username: "kevinpark@123",
    email: "user@example.com",
    password: '$2a$12$7w44zjRmMHTdNdIkkFVqwedlmGJo/2tZXHP5XXqnmoW0qFe6SNEKK',
    fullName: "kevin park",
    profilePicture: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    registeredAt: new Date("2024-04-22T08:00:00Z"),
    status: 'Active',
    role: {
      name: "user",
      permissions: ["view_product","view_profile"]
    }
  },{
    id: 2,
    username: "admin@254",
    email: "admin@example.com",
    password:'$2a$12$7w44zjRmMHTdNdIkkFVqwedlmGJo/2tZXHP5XXqnmoW0qFe6SNEKK',
    fullName: "John Doe",
    age: 30,
    address: {
      city: "Anytown",
      state: "CA"
    },
    profilePicture: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    registeredAt: new Date("2024-04-22T08:00:00Z"),
    status: 'Active',
    role: {
      name: "admin",
      permissions: ["view_product","view_profile","edit_product","add_product","update_product","delete_product","view_userlist"]
    }

  }]

  export default {
    User
  }