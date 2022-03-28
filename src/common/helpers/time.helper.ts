export abstract class TimeHelper {

    public static timeToSeconds(time: string): number {

        if (!time) return 0;

        const [hour, minutes, seconds] = time.split(':').map(Number);
        const timeInSeconds = (Number(hour) * 3600) + (Number(minutes) * 60) + Number(seconds);
        return timeInSeconds;
    }

    public static secondsToTime(seconds: number): string {

        if (!seconds) return '00:00:00';

        const hours = Math.floor(seconds / 3600);
        const minutes = Math.floor((seconds - (hours * 3600)) / 60);
        const secondsLeft = seconds - (hours * 3600) - (minutes * 60);

        return `${hours}:${minutes}:${secondsLeft}`;
    }
}