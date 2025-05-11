export const formatStatus = (statusStr, mode = 'text') => {
    if (statusStr === 'pending') {
        return mode === 'text' ? 'На рассмотрении' : 0
    }
    else if (statusStr === 'completed') {
        return mode === 'text' ? 'Успешный обмен' : 1
    }
    else if (statusStr === 'rejected'){
        return mode === 'text' ? 'Отклонен' : 2
    }
    else {
        return mode === 'text' ? 'Принят' : 3
    }
}