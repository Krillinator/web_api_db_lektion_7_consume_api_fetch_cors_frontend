import { User } from "./_types/user"

export default async function Home() {
  // TODO
  // Backend Application - RUNNING - DONE
  // Fetch API from Frontend (backend) - DONE
  // ORIGIN - DOMAINS? - DONE
  // CORS (origin) - DONE

  // By default - CORS is NOT implemented (security risk)
  // Fetch from Backend (Spring)
  const result = await fetch("http://localhost:8080/api/v1/user", {
    cache: "no-cache",
  })

  // result = statusCode == 200-299
  if (result.ok) {
    console.log("Server-side result:", result)
    const data: User[] = await result.json()
    console.log("Server-side data:", data)

    data.map((index) => {
      console.log(index.id)
    })
  }

  return (
    <div>
      <p>{}</p>
    </div>
  )
}
