const initialState1='white'

const updateColor=(state = initialState1,action)=>{


switch(action.type)
{
    case "RED": return 'red'

    case "GREEN": return 'green'

    case "YELLOW": return 'yellow'

    default :return state
}
}
export default updateColor