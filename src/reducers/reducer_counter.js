export default function(state=null, action) {
  
    let counter = 1;
  
    switch(action.type) {
      default:
        return counter;
      
      case 'INCREMENT_COUNTER':
        console.log(action.payload)
        const newCounter = action.payload
        return newCounter

      case 'DECREMENT_COUNTER':
        console.log(action.payload)
        const deCount = action.payload
        return deCount
    }
}