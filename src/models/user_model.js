
import { Schema, model } from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new Schema({
  name: { type: String, required: true },
  birthday_date: { type: Date, required: true },
  email: {
    type: String,
    unique: true,
    required: true,
    validate: {
      validator: (v) => /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(v),
      message: "Invalid email format",
    },
  },
  password: { type: String, required: true },
  permission_type: {
    type: String,
    enum: ["USER", "ADMIN"],
    default: "USER",
    required: true,
  },
  phones: { type: [String] },
  address: { type: String },
  house_number: { type: String },
});


// não precisa do next nas versões mais novas do mongoose
//é um middleware no Mongoose executa algo antes de alguma ação, nesse caso executa antes do save, e executa a criptografia da senha
userSchema.pre("save", async function () {
  // if (this.password !== this.confirmar_password) {} // Da pra deixar essa validação só no front

  // Monta o hash criptografado
  this.password = await bcrypt.hash(this.password, 10);
});

// Define um método para a classe
//no mongoose permite adicionar métodos personalizados, nesse caso, é estou criando e usando função senhaCorreta no userSchema
userSchema.methods.isValidPassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

const User = model("User", userSchema);

export default User;
