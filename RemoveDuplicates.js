const removeDup = (head) => {
    let current = head.next
    let prev = head
    while(current.next !== null){
        if(prev.value === current.value){
            prev.next = current.next
            
        }
        current = current.next
        prev = prev.next
    }
}