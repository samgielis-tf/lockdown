interface StageMetrics {
    attempts: number;
    solutionTime?: Date;
}

export interface GameMetrics {
    stageMetrics: StageMetrics[]
}

export class GameMetricsCollector {

    private _metrics: GameMetrics;
    private _currentStage: number = 0;

    constructor(startStage: number) {
        this._metrics = loadMetrics();
        this._currentStage = startStage;
    }

    set currentStage(stageNumber: number) {
        this._currentStage = stageNumber;
    }

    logAttempt(): void {
        if (!this._metrics.stageMetrics[this._currentStage]) {
            this._metrics.stageMetrics[this._currentStage] = { attempts: 0 }
        }
        this._metrics.stageMetrics[this._currentStage] = { attempts: this._metrics.stageMetrics[this._currentStage].attempts + 1 };
        persistMetrics(this._metrics);
    }

    logSolution(): void {
        this.logAttempt();
        this._metrics.stageMetrics[this._currentStage].solutionTime = new Date();
        persistMetrics(this._metrics);
        this._currentStage += 1;
    }

    get metrics(): GameMetrics {
        return this._metrics;
    }
}

const METRIC_STORAGE_ITEM_NAME = "metrics";

function loadMetrics(): GameMetrics {
    const storedMetrics = localStorage.getItem(METRIC_STORAGE_ITEM_NAME);

    if (!storedMetrics) {
        return { stageMetrics: [] };
    }

    return JSON.parse(atob(storedMetrics));
}

function persistMetrics(metrics: GameMetrics): void {
    localStorage.setItem(METRIC_STORAGE_ITEM_NAME, btoa(JSON.stringify(metrics)));
}