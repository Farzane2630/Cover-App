import { Link } from "react-router-dom"
import { IoIosClose } from "react-icons/io";

function CancelBtn(link: string) {
  return (
    <Link to={link}>
      <button className='flex flex-row justify-center items-center rounded-xl'>
        <IoIosClose />
      </button>
    </Link>
  )
}

export default CancelBtn