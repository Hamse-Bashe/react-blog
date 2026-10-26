import { useRouteError, Link } from 'react-router'

export const NotFound = () => {
  const errors = useRouteError();

    // console.log(errors)

  return (
    <div className='p-6 text-center'>
        <h1 className='text-2xl font-bold text-red-500'>404</h1>
        <p>{errors.statusText}</p>
        <p>{errors.error.message}</p>
        <Link to="/" className='text-sky-500'>Back to Home</Link>
    </div>
  )
}

