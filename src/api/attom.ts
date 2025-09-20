export async function getCommunityData(zipcode: string) {
    console.log("Getting community data for zipcode: ", zipcode);
  try {
    const res = await fetch(`${import.meta.env.VITE_BACKEND_API}/community-data`,{
        method: "POST",
        body: JSON.stringify({ zipcode }),
        headers: {
            "Content-Type": "application/json",
        },
    });
    return await res.json();
  } catch (error) {
    console.error(error);
    return null;
  }
}
