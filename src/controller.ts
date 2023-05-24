import {Task} from "./model";

export const getSeverity = (task: Task, now: number): Severity => {
    if (task.status.lastCompletedAt === undefined) {
        return '0'
    }
    const secondsSinceLastCompleted = now - task.status.lastCompletedAt
    if (secondsSinceLastCompleted < task.description.secondsToSeverityOne) {
        return '0'
    }
    if (secondsSinceLastCompleted < task.description.secondsToSeverityTwo) {
        return '1'
    }
    if (secondsSinceLastCompleted < task.description.secondsToSeverityThree) {
        return '2'
    }
    if (secondsSinceLastCompleted < task.description.secondsToSeverityFour) {
        return '3'
    }
    return '4'
}