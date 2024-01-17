export default async function Simulator() {
  let mounted = false

  await new Promise((resolve) => setTimeout(resolve, 1000)).then(
    () => (mounted = true),
  )

  return <>{mounted && <div>simulator</div>}</>
}
