import { Stage } from "../model/Stage";

export function decryptStage(encryptedStage: Stage): Stage {
    return {
        startDate: encryptedStage.startDate,
        question: atob(encryptedStage.question),
        answer: atob(encryptedStage.answer),
        clue: atob(encryptedStage.clue)
    }
}