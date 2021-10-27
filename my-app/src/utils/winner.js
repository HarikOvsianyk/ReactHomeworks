export const totalSeconds = (time) => {
    let [hour, minute, second] = time.split(':')
    return Number(hour) * 3600 + Number(minute) * 60 + Number(second)
}

export const defineWinner = (users) => {
    return users.map(user => {
        return {
            ...user,
            totalSeconds: totalSeconds(user.time)
        }
    }).sort((a, b) => a.totalSeconds > b.totalSeconds ? 1 : -1)[0]
}