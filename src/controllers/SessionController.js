import connection from "../database/connection";

export default {
  async create(request, response) {
    const { id } = request.body;

    const ong = await connection("ongs")
      .where("id", id)
      .select("name")
      .first();

    if (!ong) {
      return response.status(400).json({ error: "id not found" });
    }

    return response.json(ong);
  }
};
