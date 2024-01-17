export default async function Simulator() {
  await new Promise((resolve) => setTimeout(resolve, 1000))

  return <div>simulator</div>
}
