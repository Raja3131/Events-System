import { ManagerServices } from "../services/ManagerServices.js";

export const getAllManagers = async (req, res) => {
    try {
        const managers = await ManagerServices.getAllManager();
        res.status(200).json(managers);
    } catch (error) {
        res.status(500).send(error);
    }
}

export const createManager = async (req, res) => {
    try {
        const manager = await ManagerServices.createManager(req.body);
        res.status(200).json(manager);
    } catch (error) {
        res.status(500).send(error);
    }
}

export const getManagerById = async (req, res) => {
    try {
        const manager = await ManagerServices.getManagerById(req.params.id);
        res.status(200).json(manager);
    } catch (error) {
        res.status(500).send(error);
    }
}
export const updateManager = async (req, res) => {
    try {
        const manager = await ManagerServices.updateManager(req.params.id, req.body);
        res.status(200).json(manager);
    } catch (error) {
        res.status(500).send(error);
    }
}
export const deleteManager = async (req, res) => {
    try {
        const manager = await ManagerServices.deleteManager(req.params.id);
        res.status(200).json(manager);
    } catch (error) {
        res.status(500).send(error);
    }
}