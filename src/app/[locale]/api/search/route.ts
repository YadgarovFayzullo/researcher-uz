import { NextResponse } from "next/server";
import { MeiliSearch } from "meilisearch";

const client = new MeiliSearch({
  host: process.env.MEILI_HOST || "http://127.0.0.1:7700",
  apiKey: process.env.MEILI_MASTER_KEY || "myMasterKey",
});

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const query = searchParams.get("q") || "";

  if (!query) {
    return NextResponse.json({ error: "Query is required" }, { status: 400 });
  }

  const index = client.index("articles");
  const searchResults = await index.search(query);

  return NextResponse.json(searchResults);
}
