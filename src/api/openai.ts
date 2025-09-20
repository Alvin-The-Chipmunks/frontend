export async function getAiInsight(zipcode: string, criteria: string) {
    console.log("Getting ai insight for zipcode: ", zipcode);
  try {
    const res = await fetch(`${import.meta.env.VITE_BACKEND_API}/prompt`,{
        method: "POST",
        body: JSON.stringify({ zipcode, criteria }),
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
