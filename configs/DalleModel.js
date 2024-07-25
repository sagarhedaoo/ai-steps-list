import OpenAI from "openai";

const openai = new OpenAI();

export async function Dalle({ prompt }) {
  const image = await openai.images.generate({
    prompt: { prompt },
  });

  console.log(image.data);
}
