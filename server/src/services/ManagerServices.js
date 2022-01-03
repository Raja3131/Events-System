import ManagerSchema from '../models/ManagerModel.js';

export const ManagerServices ={
    getAllManager: async () => {
        const managers = await ManagerSchema.find();
        return managers;
    },
    createManager: async (manager) => {
        const newManager = new ManagerSchema(manager);
        const savedManager = await newManager.save();
        return savedManager;

    },
    getManagerById: async (id) => {
        const manager = await ManagerSchema.findById(id);
        return manager;
    },
    updateManager: async (id, manager) => {
        const updatedManager = await ManagerSchema.findByIdAndUpdate(id, manager, { new: true });
        return updatedManager;
    },
    deleteManager: async (id) => {
        const deletedManager = await ManagerSchema.findByIdAndDelete(id);
        return deletedManager;
    }
}