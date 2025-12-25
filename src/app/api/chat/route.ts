import { HashbrownOpenAI } from "@hashbrownai/openai";

export async function POST(req: Request) {
  const stream = HashbrownOpenAI.stream.text({
    apiKey: process.env.OPENAI_API_KEY!,
    request: await req.json(),
  });

  return new Response(stream as unknown as ReadableStream, {
    headers: {
      "Content-Type": "application/octet-stream",
    },
  });
}
