export default function DeleteIcon({onclick,className,onclick2}) {
    return (
        <svg onClick={onclick ?? onclick2}  xmlns="http://www.w3.org/2000/svg" className={`w-5 h-5 text-red-700 cursor-pointer ${className ?? ' '}`} fill="none" viewBox="0 0 24 24"
            stroke="currentColor" cstrokewidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
    )
}
