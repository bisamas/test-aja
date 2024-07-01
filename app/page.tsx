export default async function Home() {

  const domain = process.env.VERCEL_URL || 'http://localhost:3000'

  const response = await fetch(`${domain}/api/getAllData`)

  const data = await response.json()

  return (
    <>
      <h1>{data[0].name}</h1>
    </>
  );
}
