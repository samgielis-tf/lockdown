import { Stage } from "../model/Stage";

const Stage1 = {
    startDate: new Date("Nov 15, 2020 19:30:00"),
    question: "V2F0IGlzIGhldCB2ZXJzY2hpbCBpbiBJU0JOIG51bW1lciB0dXNzZW4gaGV0IGVlcnN0ZSBib2VrIGVuIGRlIGx1aXN0ZXJib2VrIHZlcnNpZSB2YW4gaGV0IGxhYXRzdGUgYm9layB2YW4gbWlqbiBmYXZvcmlldGUgc2NocmlqdmVyPw==",
    answer: "Nzc4NDUyODI2NA==",
    clue: "V2hpdGU="
};

const Stage2 = {
    startDate: new Date("Nov 16, 2020 19:30:00"),
    question: "SWsgemF0IHZhbmRhYWcgaW4gZWVuIGtsZWluIHBhcmtqZSwgZW4gaWsgd291IG5hYXIgZGUgc3RlcnJlbiBnYWFuIGtpamtlbi4gSWsgbmFtIGRlIHNuZWxzdGUgd2VnIG5hYXIgbWlqbiB2ZXJ2b2Vyc21pZGRlbCwgZW4gc3Bvb3JkZSBlcm5hYXJ0b2UuIEhvZXZlZWwgbW9tZW50amVzIGR1dXJkZSBtaWpuIHJlaXMsIGFscyBqZSB3ZWV0IGRhdCBpayBvbSAxNy40OSBuYWFyIGRlIHN0ZXJyZW4ga2Vlaz8=",
    answer: "MzEuMzM=",
    clue: "aXM="
};

const Stage3 = {
    startDate: new Date("Nov 17, 2020 19:30:00"),
    question: "V2F0IGlzIGRlIGxldWtzdGUgc3RhZD8=",
    answer: "TGV1dmVu",
    clue: "TG9jYXRpZQ=="
};

const Stage4 = {
    startDate: new Date("Nov 18, 2020 19:30:00"),
    question: "V2F0IGlzIGhldCBiZXN0ZSBiaWVyPw==",
    answer: "U3RlbGxh",
    clue: "SG91c2U="
};

export const encryptedStages: Stage[] = [Stage1, Stage2, Stage3, Stage4];
