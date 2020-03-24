import crypto from "crypto";
import connection from "database/connection";

async function create(request, response) {
  const { name, email, whatsapp, city, uf } = request.body;
  const id = crypto.randomBytes(8).toString("HEX");

  await connection("ongs").insert({
    id,
    name,
    email,
    whatsapp,
    city,
    uf
  });

  return response.json({ id });
}

async function index(request, response) {
  const ongs = await connection("ongs").select("*");
  return response.json(ongs);
}

export default { create, index };
