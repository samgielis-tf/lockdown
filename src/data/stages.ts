import { Stage } from "../model/Stage";

const Stage1 = {
    startDate: new Date("Nov 15, 2020 19:30:00"),
    question: "V2F0IGlzIGhldCB2ZXJzY2hpbCBpbiBJU0JOIG51bW1lciB0dXNzZW4gaGV0IGVlcnN0ZSBib2VrIGVuIGRlIGx1aXN0ZXJib2VrIHZlcnNpZSB2YW4gaGV0IGxhYXRzdGUgYm9layB2YW4gbWlqbiBmYXZvcmlldGUgc2NocmlqdmVyPw==",
    answer: "Nzc4NDUyODI2NA==",
    clue: "TG9jYXRpZQ=="
};

const Stage2 = {
    startDate: new Date("Nov 16, 2020 19:30:00"),
    question: "V2llIGlzIGRlIGtuYXBzdGU/",
    answer: "U2hhbm5hICYgTWFyaWU=",
    clue: "aXM="
};

const Stage3 = {
    startDate: new Date("Nov 17, 2020 19:30:00"),
    question: "V2F0IGlzIGRlIGxldWtzdGUgc3RhZD8=",
    answer: "TGV1dmVu",
    clue: "V2hpdGU="
};

const Stage4 = {
    startDate: new Date("Nov 18, 2020 19:30:00"),
    question: "V2F0IGlzIGhldCBiZXN0ZSBiaWVyPw==",
    answer: "U3RlbGxh",
    clue: "SG91c2U="
};

export const encryptedStages: Stage[] = [Stage1, Stage2, Stage3, Stage4];
