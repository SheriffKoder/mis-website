
// // show the closest not found or error page in case meal not found (in database)
// // put before trying to access the meal variable
// if (!meal) {
//     notFound(); // built-in function
//   }


const notfound = () => {
  return (
    <div className='h-[100vh] flex flex-col items-center justify-center'>
      not found page
    </div>
  )
}

export default notfound