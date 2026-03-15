export default function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Content-Type", "application/json");

  const admins = {
    "3EF5A4B8A0EE7BA8": "PASTA"
  };

  res.status(200).json(admins);
}
