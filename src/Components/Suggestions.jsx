const Suggestions = ({ suggestions,onSelect }) => {

 const handleClick=()=>{
  onSelect(resname.info.name);
 }

  return (<div className="absolute top-13 left-0 w-full bg-white border border-gray-300 rounded shadow-lg z-10 max-h-60 overflow-y-auto
  ">
{suggestions.length == 0 ?   (<h1 className="px-4 py-2 text-gray-500 italic">
  No results found. Hungry minds deserve better queries! 🍽️
</h1>):(
     suggestions.map((res) => (
          <div key={res.info.id}
           className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
            onClick={() => onSelect(res.info.name)}
          >{res.info.name}</div>
           

        ))
)}

  </div>
  )
};
export default Suggestions;


