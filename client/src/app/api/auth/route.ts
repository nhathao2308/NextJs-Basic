export async function POST(req: Request) {
  const res = await req.json();
  const sessionToken = res.payload?.data?.token;

  if (!sessionToken) {
    return Response.json(
      { message: "Khong co SessionToken" },
      {
        status: 400,
      }
    );
  }
  return Response.json(res.payload, {
    status: 200,
    headers: {
      "Set-Cookie": `sessionToken=${sessionToken}; Path=/; HttpOnly`,
    },
  });
}
