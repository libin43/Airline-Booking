
export const ServerError = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">500 - Internal Server Error</h1>
        <p className="text-lg mb-8">
          Oops! Something went wrong on our end. Please try again later.
        </p>
        <img
          className="mx-auto"
          src="https://www.placekitten.com/300/300"
          alt="Cute Kitten"
        />
      </div>
    </div>
  )
}
