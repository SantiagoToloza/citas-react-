 const Error = ({children}) => {
  return (
      <>
 
        <div className="bg-red-500 text-white uppercase font-bold p-3 mb-4 rounded-md text-center margin-auto">
          <p>{children} </p>
        </div>
      </>
  )
}

export default Error