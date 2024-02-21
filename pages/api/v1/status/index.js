// essa pasta criou uma rota pública /api/v1/status

import database from "infra/database.js";

async function status(request, response) {
  const updatedAt = new Date().toISOString();

  response.status(200).json({
    updated_at: updatedAt,
  });
}

export default status;
