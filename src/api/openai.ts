export async function getAiInsight(zipcode: string, criteria: string) {
    console.log("Getting ai insight for zipcode: ", zipcode);
  try {
    const res = await fetch(`${import.meta.env.VITE_BACKEND_API}/insights`,{
        method: "POST",
        body: JSON.stringify({ zipcode, category: criteria}),
        headers: {
            "accept": "application/json",
            "Content-Type": "application/json",
        },
    });
    return await res.json();
  } catch (error) {
    console.error(error);
    return null;
  }
}
