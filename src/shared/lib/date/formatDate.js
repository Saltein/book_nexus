export const formatDate = (isoString, withYear = false) => {
    const date = new Date(isoString);

    const day = String(date.getUTCDate()).padStart(2, '0');
    const month = String(date.getUTCMonth() + 1).padStart(2, '0'); // Месяцы с 0
    const year = date.getUTCFullYear();

    const hours = String(date.getUTCHours()).padStart(2, '0');
    const minutes = String(date.getUTCMinutes()).padStart(2, '0');

    return (withYear
        ? `${day}.${month}.${year} ${hours}:${minutes}`
        : `${day}.${month} ${hours}:${minutes}`
)
}