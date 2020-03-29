interface Body {
  query: string;
}

export const server = {
  fetch: async <TData = any>(body: Body) => {
    console.log("Body", JSON.stringify(body));
    const res = await fetch("/api", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
    });
    return res.json() as Promise<{ data: TData }>;
  }
};
