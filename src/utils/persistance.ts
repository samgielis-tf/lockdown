import { GameState } from "../model/GameState";

export function loadGameState(): GameState | null {
    const storedState = localStorage.getItem("state");

    if (!storedState) {
        return null;
    }

    return JSON.parse(storedState);
}

export function persistGameState(state: GameState): void {
    localStorage.setItem("state", JSON.stringify(state));
}