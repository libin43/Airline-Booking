
export const PageNotFound = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
        <p className="text-lg mb-8">
          Oops! The page you are looking for might be in another castle.
        </p>
        <img
          className="mx-auto"
          src="https://www.shutterstock.com/image-vector/404-error-page-black-cat-600nw-2041106675.jpg"
          alt="Loading....."
        />
      </div>
    </div>
  )
}
