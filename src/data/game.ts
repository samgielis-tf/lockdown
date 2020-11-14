import { Game } from "../model/Game";
import { decryptStage } from "../utils/decrypt";
import { encryptedStages } from "./stages";

export const game: Game = {
    stages: encryptedStages.map(stage => decryptStage(stage))
}