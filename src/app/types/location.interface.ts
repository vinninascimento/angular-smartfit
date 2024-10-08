
export interface Location{
fountain: any
    id: number,
    title: string,
    content: string,
    opened: boolean,
    mask: string,
    towel: string,
    locker_row: string,
    schedules: Schedule[]
}

interface Schedule {
    weekdays: string,
    hour: string
}
