import { Request, Response } from 'express';
import { EmissionsChannelService } from '../service/service';

export async function recordEmission(req: Request, res: Response): Promise<void> {
    try {
        let file: Buffer;
        if (req.file) {
            file = req.file.buffer;
        }
        const record = await EmissionsChannelService.recordEmission({
            body: req.body,
            header: req.headers as Record<string, string | unknown>,
            query: req.query as Record<string, string>,
            file: file,
        });
        res.status(201).json(record);
    } catch (error) {
        res.status(error.status).json({
            msg: error.message,
        });
    }
}

export async function getEmissionsData(req: Request, res: Response): Promise<void> {
    try {
        const record = await EmissionsChannelService.getEmissionsData({
            body: req.body,
            header: req.headers as Record<string, string | unknown>,
            query: req.query as Record<string, string>,
            params: req.params,
        });
        res.status(200).json(record);
    } catch (error) {
        res.status(error.status).json({
            msg: error.message,
        });
    }
}

export async function getAllEmissionsData(req: Request, res: Response): Promise<void> {
    try {
        const record = await EmissionsChannelService.getAllEmissionsData({
            body: req.body,
            header: req.headers as Record<string, string | unknown>,
            query: req.query as Record<string, string>,
            params: req.params,
        });
        res.status(200).json(record);
    } catch (error) {
        res.status(error.status).json({
            msg: error.message,
        });
    }
}

export async function getAllEmissionsDataByDateRange(req: Request, res: Response): Promise<void> {
    try {
        const record = await EmissionsChannelService.getAllEmissionsDataByDateRange({
            body: req.body,
            header: req.headers as Record<string, string | unknown>,
            query: req.query as Record<string, string>,
            params: req.params,
        });
        res.status(200).json(record);
    } catch (error) {
        res.status(error.status).json({
            msg: error.message,
        });
    }
}

export async function recordAuditedEmissionsToken(req: Request, res: Response): Promise<void> {
    try {
        const record = await EmissionsChannelService.recordAuditedEmissionsToken({
            body: req.body,
            header: req.headers as Record<string, string | unknown>,
            query: req.query as Record<string, string>,
            params: req.params,
        });
        res.status(200).json(record);
    } catch (error) {
        res.status(error.status).json({
            msg: error.message,
        });
    }
}
