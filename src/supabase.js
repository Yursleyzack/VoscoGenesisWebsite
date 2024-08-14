import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://zzoipkycyvddylpacrjt.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp6b2lwa3ljeXZkZHlscGFjcmp0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjM2NTYyNzUsImV4cCI6MjAzOTIzMjI3NX0.yTH-1RgwM-B6tat5RzdxJn90gWJm_YSuhaPAmiE1N0Q"
);

export const { downloads_data, error } = supabase.from("downloads").select("*");

export async function getDownloadCount(gameId) {
  const { data: download_count, error } = await supabase
    .from("downloads", { single: true })
    .select("count")
    .eq("id", gameId);

  if (error) {
    console.error("Error fetching data:", error);
    return null;
  } else {
    console.log("Game data:", download_count);
    return download_count[0].count;
  }
}

export async function incrementDownloads(row_id) {
  const { error } = await supabase.rpc("incrementcount", {
    x: 1,
    row_id: row_id,
  });
  if (error) {
    console.error("error incrementing count");
  }
}
