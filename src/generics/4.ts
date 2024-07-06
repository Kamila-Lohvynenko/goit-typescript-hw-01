type User = {
  name: string;
  surname: string;
  email: string;
  password: string;
};

function createOrUpdateUser(
  initialValues: Partial<User>,
  user: User = {
    name: "",
    surname: "",
    email: "",
    password: "",
  }
): User {
  return { ...user, ...initialValues };
}

createOrUpdateUser({
  email: "user@mail.com",
  password: "password123",
});
