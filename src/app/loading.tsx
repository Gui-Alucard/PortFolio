export default function Loading({
  title,
  message,
}: {
  title: string
  message: string
}) {
  return (
    <main className="flex h-screen flex-col items-center justify-center text-center">
      <h2 className="font-orbitron text-3xl font-bold text-purple-logo">
        {title}
      </h2>
      <p className="font-alt text-lg text-purple-900 dark:text-purple-50">
        {message}
      </p>
    </main>
  )
}
