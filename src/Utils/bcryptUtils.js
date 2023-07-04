import bcrypt from "bcrypt";

export const encryptPassword = async (password) => {
  try {
    const hashedPassword = await bcrypt.hash(password,8);
    return hashedPassword;
  } catch (error) {
    throw new Error("Error al encriptar la contraseña");
  }
};

export const comparePasswords = async (password, hashedPassword) => {
  try {
    const match = await bcrypt.compare(password, hashedPassword);
    return match;
  } catch (error) {
    throw new Error("Error al comparar las contraseñas");
  }
};