export async function getSortedPostsData() {
  // Instead of the file system,
  // fetch post data from an external API endpoint
  const res = await fetch("https://staging.komunitasmea.com/api/service");
  const data = await res.json();
  return data.data;
}

export async function getServiceById(id) {
  const res = await fetch(`https://staging.komunitasmea.com/api/service/${id}`);
  const data = await res.json();
 return data.data;
}
