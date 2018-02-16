SELECT DISTINCT time, time_id
FROM available_times
WHERE day = $1 and month = $2
ORDER BY time ASC;