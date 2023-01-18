export default function SKILL(props) {
    return (

        <div>
            <div class="mb-1 text-base font-medium bar_name">{props.name}</div>
            <div class="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
            <div class="bg-red-600 h-2.5 rounded-full dark:bg-red-500 "  style={{width:props.percentage , display:"inline-block" ,position:"relative",top:"-8px "}}></div>
            <div className="span"></div>
            </div>
            </div> 
        
    )
  }