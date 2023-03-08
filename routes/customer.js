import express from 'express'

export const customerRouter = express.Router();

customerRouter
    .get("/", (req, res) => {
        res.send("고객 정보 조회");
    })
    .post("/insert", (req, res) => {
        res.send("고객 정보 추가");
    })
    .put("/update", (req, res) => {
        res.send("고객 정보 수정");
    })
    .delete("/delete", (req, res) => {
        res.send("고객 정보 삭제");
    });