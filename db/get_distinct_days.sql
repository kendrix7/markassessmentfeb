SELECT DISTINCT day
FROM available_times
WHERE month = $1
ORDER BY day ASC;